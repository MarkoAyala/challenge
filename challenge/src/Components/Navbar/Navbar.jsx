import React , {useState} from "react";
import {fetchText} from '../../app/Reducer/textSlice.js';
import { useDispatch } from 'react-redux';
// ========= IMPORT MUI COMPONENTS ============ //
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// ========= IMPORT UTILTIES ============ // 

export default function Navbar() {
  const dispatch = useDispatch();
  const [value,setValue] = useState('');
  
  const handleChange = (e)=>{
    setValue(e.target.value)
  }

  const handleClick = ()=>{
    dispatch(fetchText(value)).then((res)=>setValue(''))

  }

  return (
    <Box sx={{backgroundColor: "#ff0000"}}>
      <Box sx={{ backgroundColor: "#ff0000", display:"flex", justifyContent:"center" , height:"7vh", alignItems:"center"}}>
        <Box sx={{width:"40%", height:"5vh",display:"flex", justifyContent:"center", alignItems:"center"}}>
          <TextField  type="text" label="Texto" value={value} size="small" onChange={handleChange} autoComplete="off" sx={{flexGrow:1, '& .MuiInputBase-input':{color:"white"}}}/>
          <Button color="primary" onClick={handleClick} variant="contained" sx={{marginLeft:"20px"}} >Send</Button>
        </Box>
      </Box>
    </Box>
  );
}
