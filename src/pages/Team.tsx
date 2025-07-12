import React from "react";
import Binary3DBackground from "../components/ui/Binary3DBackground";
import { useTheme } from "../components/theme-provider";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

type TeamMemberCardProps = {
  name: string;
  image: string;
  accentColor: string;
  theme: string;
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  image,
  accentColor,
  theme,
}) => (
  <div
    className="relative flex flex-col items-center text-center p-3 rounded-xl shadow-xl border transition-transform hover:-translate-y-2 hover:shadow-2xl backdrop-blur-md"
    style={{
      minWidth: 170,
      minHeight: 170,
      background: theme === "light" ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.08)",
      borderColor: "rgba(255,255,255,0.2)",
    }}
  >
    <div className="relative mb-2 flex items-center justify-center">
      <Avatar className="w-20 h-20 shadow-lg border-4" style={{ borderColor: accentColor }}>
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      {/* Accent arc */}
      <svg
        className="absolute top-0 left-0"
        width="70"
        height="70"
        style={{ pointerEvents: "none" }}
      >
        <path
          d="M 6 35 A 29 29 0 1 1 64 35"
          fill="none"
          stroke={accentColor}
          strokeWidth="4"
        />
      </svg>
    </div>
    <h3 className="text-base font-bold mb-1" style={{ color: accentColor }}>
      {name}
    </h3>
  </div>
);

const teamMembers = [
  {
    name: "Mohamed Ali Garma",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Mohamed&backgroundColor=2432B0&hair=short03&hairColor=0e0e0e&skinColor=fed7b6&clothingColor=262626&eyes=variant12&mouth=variant26&glasses=variant01",
    accentColor: "#2432B0",
  },
  {
    name: "Jihed Saguer",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Jihed&backgroundColor=209FDF&hair=short02&hairColor=0e0e0e&skinColor=fed7b6&clothingColor=262626&eyes=variant09&mouth=variant15",
    accentColor: "#209FDF",
  },
  {
    name: "Nacef Smadhi",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Nacef&backgroundColor=20D16B&hair=short01&hairColor=0e0e0e&skinColor=fed7b6&clothingColor=262626&eyes=variant10&mouth=variant12",
    accentColor: "#20D16B",
  },
  {
    name: "Hamouda Jaafar",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Hamouda&backgroundColor=2432B0&hair=short04&hairColor=0e0e0e&skinColor=fed7b6&clothingColor=262626&eyes=variant08&mouth=variant15",
    accentColor: "#2432B0",
  },
];

export const Team: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center py-16 overflow-hidden"
      style={{
        background: theme === "light" ? "#f4f7fa" : "#0a0e23",
        transition: "background 0.3s",
      }}
    >
      {/* Animated binary background */}
      <Binary3DBackground />
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-12 z-10 drop-shadow-lg">
        Our Team
      </h1>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name + member.accentColor} {...member} theme={theme} />
        ))}
      </div>
    </div>
  );
};

