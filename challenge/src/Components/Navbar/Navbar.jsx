import * as React from "react";
// ========= IMPORT MUI COMPONENTS ============ //
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

export default function Navbar() {

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: 'white',
        },
        '& .MuiFilledInput-input':{
            color:'white'
        }
      });

  return (
    <Box sx={{backgroundColor: "#ff0000"}}>
      <Box sx={{ backgroundColor: "#ff0000", display:"flex", justifyContent:"center" , height:"7vh", alignItems:"center"}}>
        <Box sx={{width:"40%", height:"5vh",display:"flex", justifyContent:"center"}}>
          <CssTextField id="filled-basic" label="Text" variant="filled" size="small" autoComplete="off" sx={{flexGrow:1}}/>
          <Button color="primary" variant="contained" sx={{marginLeft:"20px"}} >Send</Button>
        </Box>
      </Box>
    </Box>
  );
}
