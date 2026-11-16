import smtplib
from unittest.mock import patch

from django.core import mail
from django.test import TestCase, override_settings
from rest_framework.test import APIClient

from .models import ContactMessage


@override_settings(
    EMAIL_BACKEND='django.core.mail.backends.locmem.EmailBackend',
    DEFAULT_FROM_EMAIL='portfolio@example.com',
    CONTACT_RECIPIENT_EMAIL='owner@example.com',
)
class ContactMessageEmailTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.payload = {
            'name': 'Test Visitor',
            'email': 'visitor@example.com',
            'message': 'Hello from the portfolio',
        }

    def test_contact_submission_sends_email_and_saves_message(self):
        response = self.client.post('/api/contact/', self.payload, format='json')

        self.assertEqual(response.status_code, 201)
        self.assertEqual(ContactMessage.objects.count(), 1)
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].to, ['owner@example.com'])
        self.assertEqual(mail.outbox[0].reply_to, ['visitor@example.com'])
        self.assertIn(self.payload['message'], mail.outbox[0].body)

    @patch('portfolio.views.EmailMessage.send', side_effect=smtplib.SMTPException('SMTP unavailable'))
    def test_smtp_failure_returns_error_and_preserves_contact_message(self, _send_email):
        response = self.client.post('/api/contact/', self.payload, format='json')

        self.assertEqual(response.status_code, 503)
        self.assertEqual(ContactMessage.objects.count(), 1)
