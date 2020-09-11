from django.db import models

# Create your models here.
class Registro(models.Model):
    #estado comentarios#
    nombre = models.CharField(max_length=200)
    cedula = models.CharField(max_length=100)
    empresa = models.CharField(max_length=400)
    fecha_ini = models.DateTimeField(auto_now_add=True)
    fecha_fin = models.DateTimeField(auto_now_add=False, blank=True, null=True)
    motivo = models.CharField(max_length=800)
    firma = models.ImageField(upload_to='firmas/', blank=True, null=True)

    def __str__(self):
        return self.nombre