# Test Task - React Application

## Description

This is a small web application developed as part of a test task to demonstrate skills in working with React, TypeScript, Redux Toolkit, and Docker. The application allows users to view a list of posts and authenticate by entering a username.

### Key Features

- **Home Page**: Displays a list of posts fetched from the server.
- **Login Page**: Users can authenticate by entering their username. Upon successful login, they are redirected to the home page.
- **Redirection and Notifications**: In case of unsuccessful login, the user is notified with an alert.
- **Logout**: The "Log Out" button allows the user to log out, clearing the user data from the store.

## Technologies

- **React**: Latest version
- **TypeScript**
- **Redux Toolkit**: For managing global state
- **React Router Dom**: For routing
- **Module CSS**: For component styling
- **Docker**: For application containerization

## Installation and launch

### Local launch

1. Clone the repository:
   git clone https://github.com/Roman-mid/test-task-React-App.git

2. Go to the project directory:
   cd test-task

3. Install dependencies:
   npm install

4. Run the application:
   npm start

5. Open a browser and go to:
   http://localhost:3000.

### Launch in Docker

Make sure Docker is installed on your machine.

1. Build a Docker image:
   docker build -t my-react-app .

2. Run the container:
   docker run -p 80:80 my-react-app

3. Open a browser and go to:
   http://localhost.
