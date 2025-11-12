# backend/portfolio/urls.py (ou urls.py principal)

from django.urls import path
from .views import ProjectList, SkillList, ContactMessageCreate

urlpatterns = [
    path('api/projects/', ProjectList.as_view(), name='project-list'),
    path('api/skills/', SkillList.as_view(), name='skill-list'),
    path('api/contact/', ContactMessageCreate.as_view(), name='contact-create'),
]