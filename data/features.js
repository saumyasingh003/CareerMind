import {
  FileText,
  PenBox,
  BrainCircuit,
  LineChart,
} from "lucide-react";

export const features = [
  {
    icon: <FileText className="w-10 h-10 mb-4 text-primary" />,
    title: "AI Resume Maker",
    description:
      "Create ATS-friendly resumes instantly with AI-powered formatting, content suggestions, and professional templates.",
  },

  {
    icon: <PenBox className="w-10 h-10 mb-4 text-primary" />,
    title: "AI Cover Letter",
    description:
      "Generate personalized cover letters tailored to your skills, experience, and target job roles in seconds.",
  },

  {
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
    title: "AI Quiz & Interview Prep",
    description:
      "Practice smart quizzes and interview questions with instant AI feedback to improve confidence and performance.",
  },

  {
    icon: <LineChart className="w-10 h-10 mb-4 text-primary" />,
    title: "Career Insights",
    description:
      "Explore salary trends, in-demand skills, industry growth, and personalized career recommendations powered by AI.",
  },
];