# Web Development Coding Test

This project includes both a backend server built with Django and a frontend application using NEXT.

## Table of Contents

- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#1-set-up-the-server)
  - [Frontend Setup](#2-set-up-the-frontend)
- [Notes](#notes)
- [Troubleshooting](#troubleshooting)

## Requirements

To get started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (for the frontend)
- [Python](https://www.python.org/) (for the backend)
- [Django](https://www.djangoproject.com/) (Python web framework)
- [Chart.js](https://www.chartjs.org/) or [Recharts](https://recharts.org/en-US) (for charting in the frontend)

## Setup Instructions

### 1. Set Up the Server

Follow these steps to set up the backend server:

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   python -m venv env
   source env/bin/activate
   pip install -r requirements.txt
   cd blockhouse_backend
   python manage.py migrate
   python manage.py runserver
   ```

### 2. Set Up the Frontend

2. **Navigate to the frontend director**
   ```bash
   cd ..
   cd ..
   cd frontend
   cd blockhousefrontend
   npm install
   npm run dev
   ```

## Notes

Ensure that Django is correctly configured to communicate with your frontend if they are running on different ports.
The requirements.txt file in the backend directory should list all the required Python packages for your Django application.
The npm run dev command assumes you have a dev script defined in your package.json for starting the frontend development server. Adjust as necessary if using a different command.

## Troubleshooting

Permission Denied Errors: If you encounter permission errors, ensure you have the necessary permissions for the directories and files you are working with.
Missing Dependencies: Double-check your requirements.txt and package.json for any missing dependencies.
Port Conflicts: Ensure that the ports used by Django and the frontend development server do not conflict with other services on your machine.
