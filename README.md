
# Banner Control Dashboard

This is a simple Banner Control Dashboard built with a React frontend and a Node.js backend. The application allows users to control the display of a banner on a webpage, including its description, timer, link, and visibility status.

## Features

- **Banner Display Control**: Toggle the visibility of the banner.
- **Banner Description**: Update the text displayed on the banner.
- **Banner Timer**: Set a countdown timer for how long the banner should be visible.
- **Banner Link**: Add a clickable link to the banner.
- **Dashboard**: An internal dashboard to control the banner settings.

## Project Structure

- `client/`: Contains the React frontend code.
- `server/`: Contains the Node.js backend code.
- `db/`: Contains the MySQL database setup script.

## Prerequisites

Before running this application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [MySQL](https://www.mysql.com/) (v5.7 or higher)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/banner-control-dashboard.git
cd banner-control-dashboard
```

### 2. Setup the MySQL Database

1. Open your MySQL client (e.g., MySQL Workbench).
2. Create a new database named `banner_db`.
3. Run the following SQL script to create the `banner` table:

```sql
CREATE DATABASE banner_db;

USE banner_db;

CREATE TABLE banner (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT,
    timer INT,
    link VARCHAR(255),
    is_visible TINYINT(1)
);
```

4. Insert initial data:

```sql
INSERT INTO banner (description, timer, link, is_visible) VALUES ('Welcome to our website!', 15, 'https://example.com', 1);
```

### 3. Setup the Backend

1. Navigate to the `server` directory:

```bash
cd server
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the `server` directory and configure your database connection:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=banner_db
```

4. Start the backend server:

```bash
npm start
```

The backend server should now be running on `http://localhost:5000`.

### 4. Setup the Frontend

1. Navigate to the `client` directory:

```bash
cd ../client
```

2. Install the dependencies:

```bash
npm install
```

3. Start the React development server:

```bash
npm start
```

The React app should now be running on `http://localhost:3000`.

## API Endpoints

### GET `/api/banner`

- **Description**: Fetch the current banner details.
- **Response**: JSON object with the banner details.

### POST `/api/banner`

- **Description**: Update the banner details.
- **Request Body**: JSON object containing `description`, `timer`, `link`, and `is_visible`.
- **Response**: JSON object with a success message.

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. The main page displays the banner controlled by the backend.
3. To control the banner, navigate to the dashboard by clicking on the `Dashboard` link in the navbar.
4. Use the dashboard to update the banner's description, timer, link, and visibility status.
5. Click "Update Banner" to save your changes.

## Troubleshooting

- **MySQL Connection Error**: Ensure your MySQL server is running and the credentials in `.env` are correct.
- **React App Not Loading**: Make sure the backend is running and accessible via `http://localhost:5000`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Contact

For any questions or feedback, please contact [guptaadi2722@gmail.com].
