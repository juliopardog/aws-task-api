# AWS Serverless Task API

This project is a serverless backend built using AWS Lambda, API Gateway, and DynamoDB. It allows users to create and retrieve tasks through REST API endpoints.

## Architecture

Client → API Gateway → Lambda → DynamoDB

## Technologies

- AWS Lambda
- API Gateway
- DynamoDB
- Node.js
- Git & GitHub

## Features

- Create tasks
- Retrieve tasks by user ID
- Fully serverless (no servers to manage)
- Scalable and cost-efficient

## Endpoints

### Create Task
POST /tasks

Example body:
{
  "userId": "123",
  "task": "Study AWS"
}

### Get Tasks
GET /tasks?userId=123

## Project Structure


aws-task-api/
├── createTask/
│ └── index.js
├── getTasks/
│ └── index.js
└── README.md


## What I Learned

- Building serverless APIs using AWS Lambda
- Connecting API Gateway to Lambda functions
- Using DynamoDB for NoSQL data storage
- Managing cloud resources efficiently
- Using Git and GitHub for version control

## Future Improvements

- Add authentication (AWS Cognito)
- Add input validation
- Add logging (CloudWatch)
- Infrastructure as Code (Terraform or CloudFormation)
