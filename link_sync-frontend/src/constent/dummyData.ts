import { Eye, Link2, MousePointerClick, TrendingUp } from "lucide-react";

export const CHANNELS = [
    { name: "Instagram", color: "#F2A93B", x: 10, y: 90 },
    { name: "Snapchat", color: "#E8704F", x: 130, y: 30 },
    { name: "LinkedIn", color: "#1B6E6B", x: 254, y: 6 },
    { name: "GitHub", color: "#6F6FD1", x: 378, y: 30 },
    { name: "WhatsApp", color: "#8FAF3B", x: 498, y: 90 },
    { name: "Portfolio", color: "#3FA9C9", x: 254, y: 150 },
];

export const PLATFORMS = [
  "Instagram",
  "Facebook",
  "WhatsApp",
  "Snapchat",
  "LinkedIn",
  "GitHub",
  "Portfolio",
  "X",
  "YouTube",
  "TikTok",
  "Discord",
  "Email",
];

 export const steps = [
    {
      n: "01",
      title: "Add your links",
      body: "Paste in every profile — Instagram, GitHub, LinkedIn, your portfolio, WhatsApp, Snapchat, anywhere else you live online.",
    },
    {
      n: "02",
      title: "Arrange your page",
      body: "Reorder, relabel, and pick a look. Your page should read like you, not like a template.",
    },
    {
      n: "03",
      title: "Share one link",
      body: "Drop it in a bio, a resume, a business card, a QR code. People tap once and find everything.",
    },
  ];


  export const stats = [
  {
    title: "Total Links",
    value: "12",
    change: "+2",
    icon: Link2,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Total Views",
    value: "1,254",
    change: "+18%",
    icon: Eye,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Total Clicks",
    value: "642",
    change: "+12%",
    icon: MousePointerClick,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Conversion",
    value: "51.2%",
    change: "+8%",
    icon: TrendingUp,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
];