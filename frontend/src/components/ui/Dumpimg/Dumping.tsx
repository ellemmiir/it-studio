import React from "react";

interface DumpingLabelProps {
  activeUntil: string | Date;
  className?: string;
}

const DumpingLabel: React.FC<DumpingLabelProps> = ({
  activeUntil,
  className,
}) => {
  const formatDate = (date: string | Date) => {
    // Ваша функция форматирования даты
    const d = new Date(date);
    return d.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className={`relative ${className}`}>
      <span className="glow-label inline-block rounded-lg px-4 py-2 text-sm font-bold text-white">
        Демпинг до {formatDate(activeUntil)}
      </span>

      <style jsx>{`
        .glow-label {
          position: relative;
          z-index: 0;
          border: none;
          outline: none;
          background: #111;
          cursor: default;
          transition: all 0.3s ease;
        }

        .glow-label:before {
          content: "";
          background: linear-gradient(
            45deg,
            #ff0000,
            #ff7300,
            #fffb00,
            #48ff00,
            #00ffd5,
            #002bff,
            #7a00ff,
            #ff00c8,
            #ff0000
          );
          position: absolute;
          top: -2px;
          left: -2px;
          background-size: 400%;
          z-index: -1;
          filter: blur(8px);
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          animation: glowing 15s ease-in-out infinite;
          opacity: 0.8;
          border-radius: 10px;
          transition:
            opacity 0.5s ease,
            filter 0.5s ease;
        }

        .glow-label:hover:before {
          opacity: 1;
          filter: blur(10px);
        }

        .glow-label:after {
          z-index: -1;
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #111;
          left: 0;
          top: 0;
          border-radius: 10px;
          transition: background 0.3s ease;
        }

        .glow-label:hover:after {
          background: #222;
        }

        @keyframes glowing {
          0% {
            background-position: 0% 50%;
            filter: blur(8px);
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 200% 50%;
            filter: blur(10px);
          }
          75% {
            background-position: 300% 50%;
          }
          100% {
            background-position: 0% 50%;
            filter: blur(8px);
          }
        }
      `}</style>
    </div>
  );
};

export default DumpingLabel;
