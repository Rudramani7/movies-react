import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ColorBox } from "./ColorBox";

export function ColorList() {
  const INITIAL_COLORS = ["crimson", "orange", "skyblue", "pink"];
  const [colors, setColors] = useState(INITIAL_COLORS);
  const [color, setColor] = useState("");
  const inputRef = useRef();

  const isValidColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== "";
  };

  const addColor = () => {
    const newColor = color.trim().toLowerCase();
    if (!newColor) return;

    if (!isValidColor(newColor)) {
      alert("Enter a valid CSS color!");
      return;
    }

    if (colors.includes(newColor)) {
      alert("Color already exists!");
      return;
    }

    setColors([...colors, newColor]);
    setColor("");
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <TextField
          ref={inputRef}
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter a color"
          variant="outlined"
          onKeyDown={(e) => e.key === "Enter" && addColor()}
        />
        <Button variant="contained" onClick={addColor}>
          Add color
        </Button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {colors.map((clr, index) => (
          <ColorBox
            key={index}
            color={clr}
            onRemove={() => setColors(colors.filter((c) => c !== clr))}
          />
        ))}
      </div>
    </div>
  );
}
