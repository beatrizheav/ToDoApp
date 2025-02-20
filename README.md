# ToDoApp

**ToDo** is an intuitive application designed to help users efficiently organize, manage, and track their daily tasks. The system provides an easy-to-use interface for managing tasks, allowing users to assign different statuses (`to do`, `in progress`, `done`), set due dates, assign priorities, and categorize tasks based on activity type.

To enhance personalization, users can create and manage custom categories, giving them more control over task organization. Additionally, users have the ability to create a profile, upload an avatar, and log in or log out for a tailored experience.

The application is built on a modern architecture, leveraging **MySQL** for real-time data management and user authentication, while **Express** handles backend operations and API requests, ensuring seamless communication between the front end and database.

### Main Features

- **Registration and User Login**: Users can register, log in, and log out.
- **Task management**:
  - Create tasks with name, description, date, priority, and category.
  - Modify existing tasks: Edit name, description, status, date, or priority.
  - Delete tasks.
  - View tasks according to the selected date using an date slider.
  - Organize tasks by their status (`to do`, `in progress`, `done`).
- **Category management**: Create, edit, and delete categories to better organize tasks.
- **Simple and intuitive interface**: Easy-to-use user interface to add, edit, and manage tasks without hassle.

### Technologies Used

- **Frontend**:

  - **React Native** for building cross-platform mobile applications.
  - **JavaScript** as the primary language for frontend logic.
  - **Expo** for simplifying development and rapid prototyping of mobile apps with React Native.
  - **Expo Router** for managing navigation more easily in Expo apps.
  - **Context** to manage global state, including user information.
  - **AsyncStorage** to keep the user logged in and store data persistently on the device.

- **Backend**:

  - **Express.js** to handle server routes and operations.
  - **Node.js** as the runtime environment.
  - **JavaScript** as the primary language for backend logic.

- **Database**:

  - **MySQL** to store and manage real-time task, category, and user data.
  - **MySQL Workbench** for designing, creating, and managing the database.

- **API Requests**:

  - **Axios** to handle HTTP requests to the API.

- **Testing**:

  - **Jest** for unit testing and test-driven development (TDD).

- **API Testing**:

  - **Postman** for testing and documenting API endpoints.

- **Code Quality and Formatting**:

  - **Prettier** as a linter and for automatic code formatting.
  - **StyleSheet** for styling React Native components.

- **Version Control and Project Management**:
  - **Git** for version control, tracking changes, and collaboration.
  - **GitHub Projects** for organizing tasks, tracking progress, and managing the development workflow.
  - **Slack** for real-time communication within the development team.

### Project Purpose

This project is designed to be a useful tool for anyone looking to improve their productivity and organization. By providing a simple and efficient platform to manage daily tasks, users can visualize their workload, prioritize the urgent, and stay on top of their responsibilities.

### Possible Future Enhancements

- **Filter**: To allow users to easily sort and manage tasks based on criteria such as priority, due date, or status.
- **Reminders**: Implement automatic reminders for pending tasks.
- **Notifications**: Add push notifications for important or overdue tasks.
- **Mobile optimized interface**: Extend functionality to be fully optimized for mobile devices.
- **Productivity analytics**: Integrate analytics on how the user is managing their tasks, providing efficiency and compliance statistics.

### Installation Instructions

Follow these steps to set up and run the project locally:

- 1.  Start by cloning the repositorys to your local machine. Use the following command:
      `git clone https://github.com/beatrizheav/ToDoApp.git`
      `git clone https://github.com/beatrizheav/ToDoApp_Backend.git`
- 2. Navigate to the project repositorys
     `cd ToDoApp`
     `cd ToDoApp_Backend`
- 3. To install the required dependencies for both the frontend and backend, run the following command in the respective directories.
     `npm install`
- 4. Set Up MySQL Database:
  - Install MySQL if you haven't already. You can download it from https://dev.mysql.com/downloads/
  - Create a new database for the project and configure the connection in the backend:
    - Open MySQL Workbench and connect to your MySQL server.
    - Run the following command to create the database:
      `CREATE DATABASE todoApp`;
- 5. Set Up Environment Variables:
     Create a .env file in the root directory of the backend and add the necessary environment variables for your database and server:
     `DB_HOST=localhost`
     `DB_USER=your-username`
     `DB_PASSWORD=your-password`
     `DB_NAME=todoApp`
     `PORT=5000`
- 6. Run the Backend Server:
     To starth the server run the following command on the backend repository.
     `npm start`
- 7. Run the frontend:

  - Make sure you have Expo installed globally on your machine. If not, install it via:
    `npm install -g expo-cli`
  - Then run this command in the frontend repository:
    `npx expo start`

- 8. Test the Application:
     Once the frontend and backend servers are running, you should be able to interact with the application by navigating to the appropriate endpoints and testing the functionalities such as user registration, task creation, and task management.

### Usage

Once the app is installed and running, you can start using it to manage your tasks. Here's a quick guide on how to interact with the main features:

**Sign Up / Log In**:
On the app's landing screen, you'll find options to either Log In or go the Sign Up Screen if you don'have an account.
For SignUp, you'll need to provide the following information: name, email, password and avatar.
For Log In, simply enter your registered email and password to access your account and start managing your tasks.

**Create a Task**:
After logging in, you will be taken to your main task dashboard.

Click on the '+' that is in the bottom of the screen to add a new task. You'll need to provide:

- **Task Name**: A brief title for the task.
- **Description**: A detailed explanation of the task.
- **Due Date**: Set the due date for the task.
- **Priority**: Choose the priority level (low, medium, high).
- **Category**: Assign a category or create a new one.

Once you provided all the data click the 'Save' button to add the task, the sheet would close and show your task in the main screen.

**View the deails of the task**:
By clicking on a task, a modal will appear displaying all the details of the task. You can close the modal by clicking the 'X' icon or edit the task by clicking the pencil icon.

**Edit or Delete a Task**:
On the task dashboard, you can see a list of all your tasks. To modify a task, swipe it to the left and click the pencil icon, or alternatively, click on the task to open the modal and then click the pencil icon. A sheet will open, allowing you to update the task's name, description, due date, priority, or category.

To delete a task, swipe it to the left and click the trash icon. A confirmation modal will appear; select 'Yes' to delete the task.

**Organize by Status**:
Tasks are organized by status: To Do, In Progress, and Done.
You can change the status of your tasks by pressing and holding a task, then dragging it to the section of the status you want to move it to.

**Manage categories**
You can view your categories by navigating to the Categories screen, which can be accessed by clicking the group icon to the left of the 'Add Task' button on the main screen.

On this screen, you’ll see a list of your categories, where you can add or delete them.

- To add a category, click the '+' button in the top-right corner. A sheet will open where you can enter the name of the category and add it.
- To edit a category, swipe it to the left and click the pencil icon that appears.
- To delete a category, swipe it to the left and click the trash icon that appears. A confirmation modal will open; press 'Yes' to delete the category

**Profile and Avatar**:
To view your profile information, navigate to the Profile screen by clicking the user icon in the top-right corner of the main screen.

On this screen, you will see the avatar you selected during registration, along with your email and password.

To log out, click the icon in the top-right corner of the screen. A confirmation modal will appear; click 'Yes' to log out, and the app will redirect you to the login screen.

### UI Design

https://www.figma.com/design/xDbEjN2lqm4EZBGdpXeWpJ/ToDo?node-id=0-1&p=f&t=DlgwD5Qe42RxgnfM-0

## Github project

https://github.com/users/beatrizheav/projects/3

## Backend repository

https://github.com/beatrizheav/ToDoApp_Backend

## Credits

This project is currently maintained and developed by Beatriz Avila (Sofware Engineer and Jr. Developer).
Feel free to contact me for any questions or suggestions!

| Contributor |
| :---------: |

|[<img src="https://avatars.githubusercontent.com/u/116601645?v=4" width=115><br><sub>Beatriz Ávila</sub>]
