from rest_framework import generics
from .models import Project, Skill, ContactMessage
from .serializers import ProjectSerializer, SkillSerializer, ContactMessageSerializer

class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class SkillList(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class ContactMessageCreate(generics.CreateAPIView): 
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer    