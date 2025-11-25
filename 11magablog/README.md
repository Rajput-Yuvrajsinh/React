📚 Blog Web App

A modern and responsive Blog Web Application built using React, Vite, and Appwrite.
Users can create, update, delete, and read blog posts with smooth UI and fast performance.

🚀 Features

✍️ Create Blog Posts

📝 Edit Existing Posts

❌ Delete Posts

📖 Read Individual Blogs

🔐 User Authentication (Signup/Login)

📦 Appwrite Backend Integration

⚡ Fast & Optimized with Vite

🎨 Responsive UI (Tailwind CSS / Custom CSS)

🛠️ Tech Stack
Frontend

React.js

Vite

React Router DOM

Tailwind CSS (or your styling choice)

Backend

Appwrite (Authentication + Database)

📂 Folder Structure
project/
│── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│── public/
│── package.json
│── README.md

⚙️ Installation & Setup
Clone the repository:
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

Install dependencies:
npm install

Start development server:
npm run dev

🔧 Appwrite Setup

Create a project on Appwrite

Set up:

Database

Collections

Storage bucket

Authentication

Put your Appwrite credentials inside:

src/conf/conf.js


Example:

const conf = {
  appwriteUrl: "YOUR_URL",
  appwriteProjectId: "YOUR_PROJECT_ID",
  appwriteDatabaseId: "YOUR_DB_ID",
  appwriteCollectionId: "YOUR_COLLECTION_ID",
  appwriteBucketId: "YOUR_BUCKET_ID",
};
export default conf;
