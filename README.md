<div align="center">
  <br />
    <a href="https://knowledgebase-zgim.onrender.com/" target="_blank">
    KNOWLEDGE BASE
    </a>
  <br />

  <h3 align="center">Knowledge Base WebApp</h3>

   <div align="center">
     A webapp that showcase tips and tricks to the commonly used components & strategies to faster my development journey
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)

## <a name="introduction">🤖 Introduction</a>

This is a webapp that showcase tips and tricks to the commonly used components & strategies used during development. 

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Vite
- Tailwind CSS

## Screenshot 🖼️

Screenshot of the homepage or any significant feature of the blog.
<img src="https://github.com/tanmaymishra1551/knowledgeBase/blob/c3762802b0806e73c5f97c88fddafabf0aebdd96/Post.png">


<img src="https://github.com/tanmaymishra1551/knowledgeBase/blob/c3762802b0806e73c5f97c88fddafabf0aebdd96/Profile.png">


<img src="https://github.com/tanmaymishra1551/knowledgeBase/blob/c3762802b0806e73c5f97c88fddafabf0aebdd96/comments.png">

<img src="https://github.com/tanmaymishra1551/knowledgeBase/blob/c3762802b0806e73c5f97c88fddafabf0aebdd96/posts.png">

<img src="https://github.com/tanmaymishra1551/knowledgeBase/blob/c3762802b0806e73c5f97c88fddafabf0aebdd96/signin.png">

## <a name="features">🔋 Features</a>

👉 **User Interface (UI) and User Experience (UX):**: The web app should have a clean, intuitive, and responsive design to ensure a seamless experience across various devices and screen sizes. Good UX ensures that users can easily navigate and interact with the app.
Functionality and Performance:.

👉 **Functionality and Performance:**: The core features of the app should work as intended, providing the primary services or functions it is designed for. Performance optimization is crucial to ensure fast load times and smooth operation, even under high user loads.

👉 **Security and Privacy:**: Implement robust security measures to protect user data and prevent unauthorized access. This includes using HTTPS, data encryption, secure authentication, and regular security updates. Additionally, ensure that the app complies with relevant data privacy regulations.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/tanmaymishra1551/knowledgeBase.git
cd knowledgeBase
```

**Installation**

Install the project dependencies using npm:

```bash
cd backend
npm install
cd ../frontend
npm install
```

**Running the Project**

```bash
cd src
npm run dev
```
**Open another terminal**
```bash
cd backend
node index.js
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), require('tailwind-scrollbar')
  ],
};
```

</details>

<details>
<summary><code>constants.js</code></summary>

```javascript
export const DB_NAME = "DBname";
export const PASSWORD = "Database Password";
```
</details>

<details>
<summary><code>backend/.env</code></summary>
 
```javascript
PORT = 3000
CORS_ORIGIN = *
JWT_SECRET = 'Password'
```
</details>

<details>
<summary><code>frontend/.env</code></summary>
 
```javascript
#Should be created at same level as src folder is 
VITE_FIREBASE_API_KEY = "Insert your Firebase API Key"

# .env.development:
VITE_API_BASE_URL=http://localhost:3000
```
</details>

<details>
<summary><code>frontend/src/firebase.js</code></summary>
 
```javascript
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "knowlegebase-87f7f.firebaseapp.com",
  projectId: "knowlegebase-87f7f",
  storageBucket: "knowlegebase-87f7f.appspot.com",
  messagingSenderId: "941696865581",
  appId: "1:941696865581:web:0c267be54da57f20112fa4"
};

export const app = initializeApp(firebaseConfig);
```
</details>
