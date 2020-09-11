from django.shortcuts import render
#from django.shortcuts import render_to_response
from registro.models import Registro
from rest_framework import generics
from registro.serializers import RegistroSerializer
# Create your views here.

class RegistroList(generics.ListCreateAPIView):
    serializer_class = RegistroSerializer
    queryset = Registro.objects.filter(fecha_fin__isnull=True)


class RegistroDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RegistroSerializer
    queryset = Registro.objects.all()

def principal(request):
  registros = Registro.objects.all()
  return render("principal.html", { 'registros':registros })