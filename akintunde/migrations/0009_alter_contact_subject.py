# Generated by Django 4.2.1 on 2023-08-22 05:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('akintunde', '0008_blog_created_blog_updated'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='subject',
            field=models.CharField(max_length=500),
        ),
    ]
