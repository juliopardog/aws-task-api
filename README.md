# AWS Task API

A simple serverless backend API built using AWS Lambda, API Gateway, and DynamoDB.

This project demonstrates how to design and deploy a scalable cloud-native application without managing servers.

---

## Architecture Diagram

```mermaid
flowchart TD
    A[Client] -->|HTTP Request| B[API Gateway]
    B -->|Invoke Lambda| C[AWS Lambda (createTask / getTasks)]
    C -->|Read/Write| D[DynamoDB]

---

## Testing

You can test the API using:

* Browser (for GET requests)
* Postman (recommended for POST requests)
* Curl (via terminal)

Example:

```bash
curl "https://your-api-url/tasks?userId=test-user"
```

---

## Tech Stack

* Node.js (AWS Lambda runtime)
* AWS Lambda
* Amazon API Gateway
* Amazon DynamoDB

---

## Project Structure

```
aws-task-api/
├── createTask/
│   └── index.js
├── getTasks/
│   └── index.js
└── README.md
```

---

## What I Learned

* How to build and deploy serverless APIs using AWS
* Connecting API Gateway with Lambda functions
* Designing DynamoDB tables for scalable data storage
* Handling HTTP requests and responses in a cloud environment

---

## Future Improvements

* Add authentication (JWT / Cognito)
* Input validation
* Error handling improvements
* Frontend integration (React or simple UI)
* Infrastructure as Code (Terraform or CloudFormation)

---

## Author

Julio Pardo
Cloud Computing Student | AWS Certified
