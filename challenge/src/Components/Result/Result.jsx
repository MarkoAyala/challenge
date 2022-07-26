import React, {useState} from "react";
// ====== Import utilities =============//
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
// ======= Import MUI COMPONENTS =========== //
import { Box, Typography } from "@mui/material";

function Result() {
    let [render , setRender] = useState([])
    const text = useSelector((state) => state.text);
  return (
    <Box
      width="100%"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ border: "1px solid black", height: "90vh" }}
    >
      <Box
        width="50%"
        display={"flex"}
        flexDirection={"column"}
        sx={{
          border: "1px solid green",
          height: "70vh",
          backgroundColor: "white",
        }}
      >
        <Typography variant="h5" gutterBottom component="h3" sx={{padding:4}}>
          Results:
        </Typography>
        <Box
        width="100%"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        sx={{height:"100%", border:"1px solid black"}}
        >
            <span style={{width:"60%", border:"2px solid black", borderRadius:"5px" , padding:"5px 10px 5px 10px"}}>jejox</span>
        </Box>
      </Box>
    </Box>
  );
}

export default Result;
