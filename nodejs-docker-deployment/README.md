# Node.js Docker Deploy to AWS

A Simple DevOps project to practice containerization, remote deployment, and CI/CD with GitHub Actions.

## Project goal

This project was built to practice:

- Creating a simple Node.js service
- Protecting a route with Basic Auth
- Dockerizing the application
- Deploying the container to a remote AWS EC2 server
- Using GitHub Actions and GitHub Secrets for automated deployment

## Features

- `/` route returns `Hello, world!`
- `/secret` route is protected with Basic Auth
- Secret message is loaded from environment variables
- Docker image can run locally and remotely
- Deployment is automated with GitHub Actions

## Tech stack

- Node.js
- Express
- Docker
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
4. The image is pushed and it runs the container

## GitHub Secrets used

- `EC2_HOST`
- `EC2_SSH_KEY`
- `SECRET_MESSAGE`
- `APP_USERNAME`
- `APP_PASSWORD`

## Learning notes

This project helped practice a real DevOps workflow by combining application development, Docker, cloud infrastructure, and automated deployment in one repository.
