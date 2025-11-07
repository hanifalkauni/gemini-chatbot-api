# Gemini AI Chatbot

This is a simple web-based chatbot application powered by the Google Gemini API. It provides a clean and simple user interface to interact with the Gemini AI.

## Features

*   **Chat Interface:** A user-friendly chat interface to send and receive messages from the Gemini AI.
*   **Markdown Rendering:** The chatbot can render markdown in its responses, allowing for formatted text, code blocks, and more.
*   **Simple UI:** The user interface is clean, simple, and easy to use.

## Tech Stack

*   **Backend:**
    *   [Node.js](https://nodejs.org/)
    *   [Express.js](https://expressjs.com/)
    *   [@google/genai](https://www.npmjs.com/package/@google/genai)
*   **Frontend:**
    *   HTML
    *   CSS
    *   JavaScript

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hanifalkauni/gemini-chatbot-api.git
    cd gemini-chatbot-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file:**
    Create a `.env` file in the root directory of the project and add your Gemini API key:
    ```
    GEMINI_API_KEY=your_gemini_api_key
    ```

4.  **Start the server:**
    ```bash
    node index.js
    ```
    The application will be running at `http://localhost:3000`.

## Usage

1.  Open your web browser and navigate to `http://localhost:3000`.
2.  Type your message in the input box at the bottom of the page.
3.  Press Enter or click the "Send" button to send your message.
4.  The chatbot's response will be displayed in the chatbox.

## File Structure

```
gemini-chatbot-api/
├── .env
├── .env.example
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
├── README.md
└── public/
    ├── index.html
    ├── script.js
    └── style.css
```

*   `index.js`: The main server file that handles API requests and communicates with the Gemini API.
*   `public/`: The directory for all the frontend files.
    *   `index.html`: The main HTML file for the chat interface.
    *   `style.css`: The CSS file for styling the chat interface.
    *   `script.js`: The JavaScript file for handling user input and communication with the backend.
*   `.env`: The file to store your environment variables (e.g., Gemini API key).
*   `package.json`: The file that contains the project's metadata and dependencies.
