# 🚀 GitHub Profile Analyzer

Search any GitHub username and instantly get detailed insights — repositories, top languages, and developer activity in one clean dashboard.

---

## 🌐 Live Demo

👉 [github-profile-analyzer-rose.vercel.app](https://github-profile-analyzer-rose.vercel.app)

---

## 📸 Screenshots

![Home](screenshots/home.png)
![Profile](screenshots/profile.png)

---

## ✨ Features

- 🔍 Search any GitHub username instantly
- 📊 View profile stats and repository details
- 💻 Analyze top programming languages used
- ⚡ Real-time data fetched via GitHub API
- 🎨 Responsive and clean UI
- ❌ Graceful error handling for invalid usernames

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React.js, Vite, TailwindCSS ,Javascript|
| API | GitHub REST API |
| Deployment | Vercel |

---

## 📂 Project Structure

```
github-profile-analyzer/
├── backend/
│   ├── routes/
│   │   └── github.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProfileCard.jsx
│   │   │   └── RepoList.jsx
│   │   └── App.jsx
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/akshadawagadare/github-profile-analyzer.git
cd github-profile-analyzer
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
GITHUB_TOKEN=your_github_token_here
PORT=5000
```

Start the server:

```bash
node server.js
```

Backend runs on: `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

---

## 🔌 API Endpoints

### Get GitHub Profile
```
GET /api/github/:username
```

Response:
```json
{
  "name": "Akshada Wagadare",
  "public_repos": 20,
  "followers": 10,
  "following": 5
}
```

### Get Repositories
```
GET /api/github/:username/repos
```

Response:
```json
[
  {
    "name": "github-profile-analyzer",
    "language": "JavaScript",
    "stars": 5
  }
]
```

---

## 🧠 How It Works

1. User enters a GitHub username
2. Frontend sends request to Express backend
3. Backend fetches data from GitHub REST API
4. Profile stats and repositories are parsed
5. Top languages are calculated from repo data
6. Results are displayed in a clean dashboard

---

## 🚧 Future Improvements

- 📈 Contribution graph visualization
- 🌙 Dark mode support
- 💾 Save and compare multiple profiles
- 🔐 GitHub OAuth login
- 📤 Export profile stats as PDF

---

## ⚠️ Notes

- Start backend before frontend
- A GitHub token in `.env` increases API rate limit from 60 to 5000 requests/hour
- Never expose your GitHub token in frontend code

---

## 👩‍💻 Author

**Akshada Wagadare**
[GitHub](https://github.com/akshadawagadare) • [LinkedIn](https://www.linkedin.com/in/akshadawagadare/)

---

⭐ If this helped you, consider starring the repo!