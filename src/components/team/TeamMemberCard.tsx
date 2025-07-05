
import React from "react";

interface TeamMemberCardProps {
  name: string;
  image: string;
  accentColor: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  image,
  accentColor,
}) => (
  <div className="relative flex flex-col items-center text-center p-4">
    <div className="relative">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover border-4"
        style={{ borderColor: accentColor }}
      />
      {/* Accent arc */}
      <svg
        className="absolute top-0 left-0"
        width="130"
        height="130"
        style={{ pointerEvents: "none" }}
      >
        <path
          d="M 10 65 A 55 55 0 1 1 120 65"
          fill="none"
          stroke={accentColor}
          strokeWidth="8"
        />
      </svg>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold" style={{ color: accentColor }}>
        {name}
      </h3>
     
    </div>
  </div>
);

export default TeamMemberCard;