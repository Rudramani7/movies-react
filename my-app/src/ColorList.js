import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { ColorBox } from './ColorBox';

export function ColorList() {
  const [color, setColor] = useState("");
  const styles = { backgroundColor: color, color: "black" };
  const INITIAL_COLORS = ["crimson", "orange", "skyblue", "pink"];
  const [colors, setColors] = useState(INITIAL_COLORS);
  return (
    <div>
      <TextField
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        // label="Enter a color"
        placeholder="Enter a color"
        variant="outlined" />
        <Button onClick={() => setColors([...colors, color])} variant="contained">Add color</Button>
      {colors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
        
      ))}
    </div>
  );
}