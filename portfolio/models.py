from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='projectsImg/') # URL d'une image hébergée (ex. Unsplash)
    link = models.URLField(blank=True)
    technologies = models.CharField(max_length=200)  # Ex. "React, Tailwind"

class Skill(models.Model):
    name = models.CharField(max_length=50)
    level = models.IntegerField()  # 1-10 pour un pourcentage

# Ajoutez d'autres modèles comme ContactMessage pour un formulaire
class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Message from {self.name} <{self.email}>'
    class Meta:
        ordering = ['-created_at']