from rest_framework import serializers
from registro.models import Registro
from drf_extra_fields.fields import Base64ImageField

class RegistroSerializer(serializers.ModelSerializer):
    
    firma = Base64ImageField(required=False)

    class Meta:
        model = Registro
        fields = ('id','nombre','cedula','empresa','fecha_ini','fecha_fin','motivo','firma')