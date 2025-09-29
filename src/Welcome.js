import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { keyframes } from "@mui/system";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px);}
  to { opacity: 1; transform: translateY(0);}
`;

const floatBubble = keyframes`
  0% { transform: translateY(0px); opacity: 0.7; }
  50% { transform: translateY(-20px); opacity: 1; }
  100% { transform: translateY(0px); opacity: 0.7; }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export function Welcome() {
  const [bubbles, setBubbles] = useState([]);
  const [particles, setParticles] = useState([]);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const tempBubbles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + "vw",
      size: 20 + Math.random() * 40 + "px",
      duration: 3 + Math.random() * 3 + "s",
    }));
    setBubbles(tempBubbles);

    const tempParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + "vw",
      top: Math.random() * 60 + "%",
      size: 2 + Math.random() * 6 + "px",
      duration: 4 + Math.random() * 4 + "s",
    }));
    setParticles(tempParticles);

    const tempSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + "vw",
      top: Math.random() * 100 + "%",
      size: 2 + Math.random() * 4 + "px",
      duration: 2 + Math.random() * 3 + "s",
    }));
    setSparkles(tempSparkles);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
        padding: "2rem",
        background: "linear-gradient(135deg, #6D5BBA, #8D58BF, #DE67E4, #FF61A6, #FFCC33)",
        backgroundSize: "400% 400%",
        animation: `${gradientShift} 15s ease infinite`,
        color: "white",
      }}
    >
      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <Box
          key={bubble.id}
          sx={{
            position: "absolute",
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.3)",
            animation: `${floatBubble} ${bubble.duration} ease-in-out infinite`,
          }}
        />
      ))}

      {/* Particles */}
      {particles.map((particle) => (
        <Box
          key={particle.id}
          sx={{
            position: "absolute",
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.5)",
            animation: `${floatBubble} ${particle.duration}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <Box
          key={sparkle.id}
          sx={{
            position: "absolute",
            left: sparkle.left,
            top: sparkle.top,
            width: sparkle.size,
            height: sparkle.size,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.9)",
            boxShadow: "0 0 8px 2px rgba(255,255,255,0.7)",
            animation: `${floatBubble} ${sparkle.duration}s ease-in-out infinite`,
          }}
        />
      ))}

      <Typography
        variant="h2"
        sx={{
          mb: 2,
          fontWeight: "bold",
          textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          animation: `${fadeIn} 1s ease forwards`,
          position: "relative",
          zIndex: 2,
        }}
      >
        Welcome to MY App!
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          maxWidth: "600px",
          lineHeight: 1.5,
          textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
          animation: `${fadeIn} 1.5s ease forwards`,
          position: "relative",
          zIndex: 2,
        }}
      >
        Explore amazing features, manage your movies, play games, and much more. Let’s get started!
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{
          fontWeight: "bold",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          animation: `${fadeIn} 2s ease forwards, ${bounce} 2s infinite`,
          position: "relative",
          zIndex: 2,
          transition: "0.3s all",
          "&:hover": {
            boxShadow: "0 0 20px 5px rgba(255, 255, 255, 0.7)",
            transform: "scale(1.05)",
          },
        }}
        onClick={() => (window.location.href = "/movies")}
      >
        Get Started
      </Button>
    </Box>
  );
}
