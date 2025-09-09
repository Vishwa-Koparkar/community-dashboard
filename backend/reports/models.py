from django.db import models
from django.contrib.auth.models import User

class DumpPost(models.Model):
    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("verified", "Verified"),
        ("resolved", "Resolved"),
    ]

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    description = models.TextField()
    location_text = models.CharField(max_length=255)
    photo = models.ImageField(upload_to="dump_posts/", null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="pending")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        user = self.user.username if self.user else "Anonymous"
        return f"{user} - {self.description[:30]}"
