 export function ColorBox({color}){
    const styles={
      height:"50px",
      width:"210px",
      background:color,
      margin:"10px 0px"
  
    };
    return <div style={styles}></div>;
  }

//   function ColorBox({color}){
//     const styles={
//       height:"75px",
//       width:"150px",
//       background:color,
//       margin:"10px 0px"
  
//     };
//     return <div style={styles}></div>;
//   }
//   export default ColorBox;