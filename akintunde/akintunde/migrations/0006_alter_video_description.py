# Generated by Django 4.2.1 on 2023-08-19 20:07

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('akintunde', '0005_video_alter_about_biography'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='description',
            field=ckeditor.fields.RichTextField(),
        ),
    ]
