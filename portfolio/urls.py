from django.urls import path # type: ignore
from .views import ProjectList, SkillList, ContactMessageCreate

urlpatterns = [
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('skills/', SkillList.as_view(), name='skill-list'),
    path('contact/', ContactMessageCreate.as_view(), name='contact-create'),
]