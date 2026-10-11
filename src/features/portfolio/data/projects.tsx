import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "ai-resume-reviewer",
    title: "AI Resume Reviewer",
    link: "https://github.com/dhryv8/AI-Resume-Reviewer",
    skills: ["Python", "Streamlit", "Google Gemini API", "PyPDF2"],
    description:
      "A Streamlit app that reviews PDF or TXT resumes against a target job role. It extracts resume text with PyPDF2, uses Google Gemini to assess clarity, skills, and experience, and returns actionable recommendations. It validates empty or unsupported files, keeps API credentials in environment variables, and is deployed on Streamlit Community Cloud.",
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    link: "https://github.com/dhryv8/Gemini-Powered-Conversational-AI-Chatbot",
    skills: ["Python", "Streamlit", "Google Gemini API"],
    description:
      "A Streamlit chatbot powered by Google Gemini for real-time, context-aware conversations. It streams responses as they are generated, keeps chat history in session state, and offers adjustable temperature and max-token settings. API keys are stored in environment variables and Streamlit secrets, and the app is deployed on Streamlit Community Cloud.",
  },
]
