# Full-Stack Recipe Application

This full-stack recipe application allows users to search for recipes based on a list of ingredients. Users can add ingredients to their list, and the application will fetch recipes from a backend server that match those ingredients.

## Table of Contents
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Backend](#backend)
- [Frontend](#frontend)
- [Contributing](#contributing)
- [License](#license)

## Technologies

### Backend
- **Node.js**: The server-side environment for running JavaScript.
- **Express.js**: A web application framework for Node.js to create RESTful APIs.
- **CORS (Cross-Origin Resource Sharing)**: A middleware for handling Cross-Origin requests.
- **Axios**: A promise-based HTTP client for making API requests.
- **Edamam Recipe API**: An external API for retrieving recipes based on ingredients.

### Frontend
- **HTML/CSS/JavaScript**: The basic building blocks of web pages.
- **Bootstrap**: A front-end framework for creating responsive web applications.
- **Fetch API**: Used to make asynchronous requests to the server.
- **LocalStorage**: Used to store and retrieve ingredients on the client side.
- **JSON**: For data exchange between the server and client.

## Getting Started

### Prerequisites

Before setting up and running the application, you need to have the following software installed on your system:

- [Node.js](https://nodejs.org/) (which includes npm)
- A code editor like [Visual Studio Code](https://code.visualstudio.com/) (recommended)

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/recipe-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd recipe-app
   ```

3. Install the dependencies for both the backend and frontend:

   ```bash
   cd backend
   npm install
   ```

   ```bash
   cd frontend
   npm install
   ```

## Usage

### Backend

The backend of the application is responsible for serving the API and handling recipe requests.

1. **Set Up Environment Variables**: In the `backend` directory, create a `.env` file to store sensitive information like API keys:

   ```
   PORT=3000
   EDAMAM_APP_ID=your_edamam_app_id
   EDAMAM_APP_KEY=your_edamam_app_key
   ```

2. **Run the Server**: Start the server using the following command:

   ```bash
   cd backend
   node server.js
   ```

   The server will run on `http://localhost:3000`.

### Frontend

The frontend is the user interface for your application. Users can add ingredients and search for recipes.

1. **Configure the API Endpoint**: In the `frontend` directory, open the `app.js` file, and make sure the `apiEndpoint` variable points to your backend server.

2. **Run the Frontend**: Start the frontend application using the following command:

   ```bash
   cd frontend
   npm start
   ```

   The application will be available at `http://localhost:1234`.

3. **Open in Your Browser**: Open your web browser and go to `http://localhost:1234` to use the application.

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy using your full-stack recipe application! If you encounter any issues or have suggestions for improvements, please feel free to contribute or contact us.

For questions or support, please contact [rory.tait.folster@gmail.com](mailto:rory.tait.folster@gmail.com).

**Happy cooking!**
