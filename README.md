# GoBabyGo 👶🚀

**GoBabyGo** is an intelligent web application designed to simplify the overwhelming process of choosing baby gear. By combining a personalized quiz with the power of Google Gemini AI, GoBabyGo suggests perfectly matched bundles of strollers and car seats tailored to your specific budget, lifestyle, and daily needs.

## ✨ Features

- **Personalized Quiz:** Answer a few quick questions about your budget, where you live (city vs. suburbs), and your primary activities.
- **AI-Driven Recommendations:** Leverages **Google Gemini 2.5 Pro** to analyze compatibility and user reviews across the web.
- **Real-World Insights:** Uses **Google Search Grounding** to fetch live product ratings, review counts, and up-to-date pricing.
- **Smart Bundling:** Automatically pairs strollers and car seats that work together (or suggests complete travel systems).
- **Pros & Cons:** Get a transparent look at each product with AI-summarized strengths and weaknesses.
- **Responsive & Modern UI:** A clean, accessible interface built with React 19 and Tailwind CSS.

## 🛠️ Tech Stack

- **Frontend:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **AI Integration:** [@google/genai](https://www.npmjs.com/package/@google/genai) (Google Gemini API)
- **Fonts:** [Poppins](https://fonts.google.com/specimen/Poppins)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A [Google Gemini API Key](https://aistudio.google.com/app/apikey)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/gobabygo.git
   cd gobabygo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## 📂 Project Structure

```text
├── components/          # UI Components (Header, Quiz, Results, etc.)
│   └── icons/           # Custom SVG Icon components
├── services/            # API services (Gemini integration)
├── constants.ts         # Quiz questions and static data
├── types.ts             # TypeScript interfaces and types
├── App.tsx              # Main application logic and state
├── index.tsx            # Entry point
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🤖 How it Works

1. **The Quiz:** Users provide inputs on budget, lifestyle (City, Suburban, Outdoors), and car situation.
2. **The Prompt:** These answers are sent to Gemini 2.5 Pro with a specialized prompt.
3. **Search Grounding:** Gemini uses the `googleSearch` tool to find real products, verify their compatibility, and retrieve current ratings.
4. **The Result:** The AI returns a structured JSON response containing three distinct bundles, highlighting the "Best Match" for the user.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Made with ❤️ for new parents everywhere.*
