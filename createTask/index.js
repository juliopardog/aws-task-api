import json
import boto3
import uuid
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('tasks')

def lambda_handler(event, context):
    try:
        print("RAW EVENT:", event)

        # Handle body whether it's string or dict
        body = event.get('body', {})

        if isinstance(body, str):
            body = json.loads(body)

        print("PARSED BODY:", body)

        # Validate input
        if 'title' not in body:
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'Title is required'})
            }

        # Make sure userId ALWAYS exists
        user_id = body.get('userId') or 'test-user'

        task = {
            'userId': user_id,
            'taskId': str(uuid.uuid4()),
            'title': body['title'],
            'completed': False,
            'createdAt': datetime.utcnow().isoformat()
        }

        table.put_item(Item=task)

        return {
            'statusCode': 200,
            'body': json.dumps({
                'message': 'Task created successfully',
                'task': task
            })
        }

    except Exception as e:
        print("ERROR:", str(e))
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }
        