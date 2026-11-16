# from django.views.generic import TemplateView
import logging
import smtplib

from django.conf import settings
from django.core.mail import BadHeaderError, EmailMessage
from rest_framework import generics
from rest_framework.exceptions import APIException
from .models import Project, Skill, ContactMessage
from .serializers import ProjectSerializer, SkillSerializer, ContactMessageSerializer

logger = logging.getLogger(__name__)


class ContactEmailUnavailable(APIException):
    status_code = 503
    default_detail = 'Le message a été enregistré, mais son e-mail n’a pas pu être envoyé.'
    default_code = 'contact_email_unavailable'


class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class SkillList(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class ContactMessageCreate(generics.CreateAPIView): 
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer    

    def perform_create(self, serializer):
        contact = serializer.save()
        email = EmailMessage(
            subject='Nouveau message depuis le portfolio',
            body=(
                f"Nom : {contact.name}\n"
                f"Email : {contact.email}\n\n"
                f"Message :\n{contact.message}"
            ),
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[settings.CONTACT_RECIPIENT_EMAIL],
            reply_to=[contact.email],
        )

        try:
            sent_count = email.send(fail_silently=False)
        except (BadHeaderError, OSError, smtplib.SMTPException) as error:
            logger.exception('Échec de l’envoi du message de contact par e-mail')
            raise ContactEmailUnavailable() from error

        if sent_count != 1:
            logger.error('Le message de contact n’a été envoyé à aucun destinataire.')
            raise ContactEmailUnavailable()


# class IndexView(TemplateView):
#     template_name = 'index.html'

# # Ajoute dans static/index.html le contenu de dist/index.html    