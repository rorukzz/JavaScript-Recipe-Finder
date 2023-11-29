# Frontend Recipe Application

This recipe application allows users to search for recipes based on a list of ingredients. Users can add ingredients to their list, and the application will fetch recipes from the Edamam Recipe API that match those ingredients.

## Table of Contents
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Technologies

### Frontend
- HTML/CSS/JavaScript: The basic building blocks of web pages.
- Bootstrap: A front-end framework for creating responsive web applications.
- Fetch API: Used to make asynchronous requests to the server.
- LocalStorage: Used to store and retrieve ingredients on the client side.
- JSON: For data exchange between the server and client.

## Getting Started

### Prerequisites
Before setting up and running the application, you need to have the following software installed on your system:

- Node.js (which includes npm)
- A code editor like Visual Studio Code (recommended)

### Installation
1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/recipe-app.git


2. Navigate to the project directory:

   ```bash
   cd recipe-app
   ```

3. Install the dependencies for the frontend:

   ```bash
   cd frontend
   npm install
   ```

## Usage

### Configuration
In the frontend directory, open the `app.js` file, and make sure the `apiEndpoint` variable points to the Edamam Recipe API.

### Running the Application
1. Start the frontend application using the following command:

   ```bash
   cd frontend
   npm start
   ```

2. The application will be available at [http://localhost:1234](http://localhost:1234).

3. Open your web browser and go to [http://localhost:1234](http://localhost:1234) to use the application.

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Enjoy using your recipe application! If you encounter any issues or have suggestions for improvements, please feel free to contribute or contact us.

For questions or support, please contact rory.tait.folster@gmail.com.

Happy cooking!


