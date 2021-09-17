import logging
import boto3
import botocore
from botocore.exceptions import ClientError
import os

def public_file_upload(file_name, bucket="week-20-group-project"):
    """Upload a file to an S3 bucket and return file url
    :param file_name: File to upload
    :param bucket: Bucket to upload to
    :return: url of new file
    """
    object_name = os.path.basename(file_name)

    # Upload the file
    s3_client = boto3.client('s3')
    try:
        s3_client.upload_file(
            file_name,
            bucket,
            object_name,
            ExtraArgs={'ACL': 'public-read'}
            )

        # get public url of newly created obj
        config = botocore.client.Config(signature_version=botocore.UNSIGNED)

        object_url = boto3.client('s3', config=config).generate_presigned_url('get_object', ExpiresIn=0, Params={'Bucket': bucket, 'Key': object_name})

        return object_url
    except ClientError as e:
        logging.error(e)
        return False