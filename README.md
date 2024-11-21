# React Counter User Data App

This repository contains a simple React application that fetches and displays user data from a public API. The app allows users to navigate through different user records using a counter. 

### Features

- Increment and decrement counter buttons, with a range between **1** and **10**.
- Fetches user data dynamically from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).
- Displays user details including:
  - Name
  - Email
  - Phone
  - Website
- Modular CSS (`styles.module.css`) for organized and reusable styles.

---

### Technologies Used

- **React**: Component-based library for building user interfaces.
- **TypeScript**: For static type-checking and improved developer experience.
- **CSS Modules**: For scoped and modular styling.
- **JSONPlaceholder API**: A free online REST API used for testing.

---

### Getting Started

Follow the instructions below to run this app locally.

#### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

#### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/soovuh/react_counter_app.git
   ```
2. Navigate into the project directory:
   ```bash
   cd react_counter_app
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

---

### Running the App

Start the development server:
```bash
npm run dev
# or
yarn run dev
```

The app will be available at `http://localhost:5173` in your browser.

---

### Usage

1. Use the `+` button to increment the counter.
2. Use the `-` button to decrement the counter.
3. View user information fetched dynamically as the counter changes.
4. The counter is restricted to a range of **1–10**.

---
