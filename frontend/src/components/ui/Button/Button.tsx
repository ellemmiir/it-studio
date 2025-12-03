"use client";

import React from "react";

const AnimatedButton = () => {
  return (
    <>
      <button className="glow-button" type="button">
        hello, world!
      </button>

      <style jsx>{`
        .glow-button {
          width: 220px;
          height: 50px;
          border: none;
          outline: none;
          color: #fff;
          background: #111;
          cursor: pointer;
          position: relative;
          z-index: 0;
          border-radius: 10px;
          transition: all 0.3s ease;
          font-weight: bold;
        }

        .glow-button:active {
          color: #000;
          transform: scale(0.98);
        }

        .glow-button:hover {
          transform: scale(1.02);
        }

        .glow-button:before {
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

        .glow-button:hover:before {
          opacity: 1;
          filter: blur(10px);
        }

        .glow-button:after {
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

        .glow-button:hover:after {
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
    </>
  );
};

export default AnimatedButton;
