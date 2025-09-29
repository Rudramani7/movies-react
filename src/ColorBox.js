import React from "react";

export function ColorBox({ color, onRemove }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "100px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "transform 0.2s, opacity 0.3s",
      }}
      onClick={onRemove}
      title="Click to remove"
    >
      {color}
    </div>
  );
}
