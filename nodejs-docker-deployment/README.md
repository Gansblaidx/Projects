# Node.js Docker Deploy to AWS

A Simple DevOps project to practice containerization, remote deployment, and CI/CD with GitHub Actions.

## Project goal

This project was built to practice:

- Creating a simple Node.js service
- Protecting a route with Basic Auth
- Dockerizing the application
- Deploying the container to a remote AWS EC2 server
- Using GitHub Actions and GitHub Secrets for automated deployment
- Automating scheduled MongoDB backups from the EC2 instance to Amazon S3

## Features

- `/` route returns `Hello, world!`
- `/secret` route is protected with Basic Auth
- Secret message is loaded from environment variables
- Docker image can run locally and remotely
- Deployment is automated with GitHub Actions
- MongoDB backups are created on the EC2 instance and uploaded to S3

## Tech stack

- Node.js
- Express
- Docker
- MongoDB
- Amazon S3
- AWS EC2
- AWS CLI
- GitHub Actions
- GitHub Secrets

## Environment variables

Create a `.env` file locally with:

```env
SECRET_MESSAGE=your-secret-message
USERNAME=your-username
PASSWORD=your-password
```

> The `.env` file is used locally and should not be committed to the repository.

## Run locally

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm start
```

## Run with Docker

Build the image:

```bash
docker build -t nodejs-service .
```

Run the container:

```bash
docker run -d -p 3000:3000 --env-file .env --name nodejs-service nodejs-service
```

## Deployment flow

1. Push code to the `main` branch
2. GitHub Actions builds the Docker image
3. GitHub Actions connects to the EC2 instance through SSH
4. The container runs on the EC2 server
5. MongoDB backup jobs run on a schedule and upload archives to S3

## MongoDB backup setup

The EC2 instance also runs MongoDB for this project. A backup workflow creates a compressed MongoDB archive and uploads it to an S3 bucket on a schedule.

Useful backup pieces:

- MongoDB user created for backups
- `mongodump` used to create the archive
- AWS CLI used to send the file to S3
- Backup file verified in the S3 bucket after upload

## GitHub Secrets used

- `EC2_HOST`
- `EC2_SSH_KEY`
- `SECRET_MESSAGE`
- `APP_USERNAME`
- `APP_PASSWORD`
- `S3_BUCKET`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`

## Learning notes

This project helped practice a real DevOps workflow by combining application development, Docker, cloud infrastructure, scheduled backups, and automated deployment in one repository.
