from rest_framework import serializers
from .models import DumpPost

class DumpPostSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = DumpPost
        fields = ["id", "user", "description", "location_text", "photo", "status", "created_at"]

    def get_user(self, obj):
        return obj.user.username if obj.user else "Anonymous"
