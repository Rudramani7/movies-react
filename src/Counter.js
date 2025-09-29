import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from "react";

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  useEffect(()=>{
    console.log("Like is changed: ",like);
  },[]);

  return (
    <div class="counter-container">
      <IconButton className="likes-dislikes" onClick={() => setLike(like + 1)} color="primary" aria-label="upload picture">
        <Badge badgeContent={like} color="primary">👍</Badge>
      </IconButton>
      <IconButton className="likes-dislikes" onClick={() => setDisLike(disLike + 1)} color="primary" aria-label="upload picture">
        <Badge badgeContent={disLike} color="error">👎</Badge>
      </IconButton>
    </div>
  );
}
