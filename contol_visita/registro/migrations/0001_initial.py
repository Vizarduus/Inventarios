# Generated by Django 2.1 on 2020-08-30 21:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Registro',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
                ('cedula', models.CharField(max_length=100)),
                ('empresa', models.CharField(max_length=400)),
                ('fecha_ini', models.DateTimeField(auto_now_add=True)),
                ('fecha_fin', models.DateTimeField()),
                ('motivo', models.CharField(max_length=800)),
            ],
        ),
    ]
