from django.conf.urls import url
from registro.views import RegistroList, RegistroDetail

urlpatterns = [
    url(r'^registro/$', RegistroList.as_view()),
    url(r'^registro/(?P<pk>[0-9]+)/$', RegistroDetail.as_view()),
]
