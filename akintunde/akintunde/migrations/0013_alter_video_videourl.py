# Generated by Django 4.2.1 on 2023-09-02 15:48

from django.db import migrations
import embed_video.fields


class Migration(migrations.Migration):

    dependencies = [
        ('akintunde', '0012_rename_url_video_videourl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='videourl',
            field=embed_video.fields.EmbedVideoField(),
        ),
    ]
