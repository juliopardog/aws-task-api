# AWS Task API

A serverless backend API built using AWS Lambda, API Gateway, and DynamoDB.

This project demonstrates how to design, deploy, and manage a scalable cloud-native application without provisioning or maintaining servers. It focuses on building a task management API using serverless principles such as stateless compute, managed services, and automatic scaling.

---

## Architecture

```mermaid
flowchart TD
    subgraph AWS Cloud
        B[API Gateway]
        C[AWS Lambda - createTask & getTasks]
        D[DynamoDB]
    end

    A[Client] -->|HTTP Request| B
    B -->|Invoke Function| C
    C -->|PutItem / Query| D
Architecture Overview

The system follows a serverless architecture where each service has a defined role:

Client
Sends HTTP requests to interact with the API.

Amazon API Gateway
Acts as the entry point and routes incoming requests to Lambda.

AWS Lambda
Handles business logic through two functions:

createTask → creates a new task

getTasks → retrieves tasks by userId

Amazon DynamoDB
Stores task data in a scalable NoSQL database.

Request Flow

The client sends an HTTP request to API Gateway

API Gateway routes the request to the correct Lambda function

Lambda processes the request

Lambda reads or writes data in DynamoDB

The response is returned through API Gateway

Features

Create tasks

Retrieve tasks by userId

Serverless architecture (no servers to manage)

Scalable and cost-efficient design

API Endpoints
GET /tasks?userId=test-user

Retrieve all tasks for a specific user

Example request:
GET /tasks?userId=test-user

Example response:

{
  "tasks": [
    {
      "taskId": "123",
      "title": "My first task",
      "completed": false,
      "createdAt": "2026-03-18T01:16:24.724434",
      "userId": "test-user"
    }
  ]
}
POST /tasks

Create a new task

Example request body:

{
  "userId": "test-user",
  "title": "New Task"
}

Example response:

{
  "message": "Task created successfully"
}
Testing

You can test the API using:

Browser (for GET requests)

Postman (recommended for POST requests)

Curl (via terminal)

Example:

curl "https://your-api-url/tasks?userId=test-user"
Tech Stack

Node.js (AWS Lambda runtime)

AWS Lambda

Amazon API Gateway

Amazon DynamoDB

Project Structure
aws-task-api/
├── createTask/
│   └── index.js
├── getTasks/
│   └── index.js
├── README.md
Key Concepts Demonstrated

Serverless architecture design

Event-driven compute with AWS Lambda

API routing with API Gateway

NoSQL data modeling with DynamoDB

Stateless application patterns

Cost-efficient cloud design

What I Learned

How to design and deploy serverless APIs using AWS

Integrating API Gateway with Lambda functions

Structuring Lambda functions for specific responsibilities

Designing DynamoDB tables for scalable access patterns

Handling HTTP requests and responses in a cloud environment

Future Improvements

Add authentication (JWT or Amazon Cognito)

Input validation

Improved error handling

Logging and monitoring (CloudWatch)

Infrastructure as Code (Terraform or CloudFormation)

Frontend integration (React or simple UI)

Author

Julio Pardo
Cloud Computing Student | AWS Certified
