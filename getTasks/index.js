import json
import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('tasks')

def lambda_handler(event, context):
    try:
        print("FULL EVENT:", json.dumps(event))

        user_id = None

        # 1. Try query params (API Gateway GET)
        if 'queryStringParameters' in event and event['queryStringParameters']:
            user_id = event['queryStringParameters'].get('userId')

        # 2. Try body (fallback)
        if not user_id and 'body' in event:
            body = event['body']
            if isinstance(body, str):
                body = json.loads(body)
            user_id = body.get('userId')

        if not user_id:
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'userId is required'})
            }

        response = table.query(
            KeyConditionExpression=Key('userId').eq(user_id)
        )

        return {
            'statusCode': 200,
            'body': json.dumps({
                'tasks': response.get('Items', [])
            })
        }

    except Exception as e:
        print("ERROR:", str(e))
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }