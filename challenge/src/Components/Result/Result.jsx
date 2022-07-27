import React, {useState} from "react";
// ====== Import utilities =============//
import { useSelector} from 'react-redux';
import { useEffect } from "react";
// ======= Import MUI COMPONENTS =========== //
import { Box, Typography } from "@mui/material";

function Result() {
    let [render , setRender] = useState([])
    const text = useSelector((state) => state.text);
    useEffect(()=> {
        if(text.text !== '' && render.length<4){
            setRender(render=[...render,text.text])
        }
    },[text]);
  return (
    <Box
      width="100%"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{  height: "90vh" }}
    >
      <Box
        width="50%"
        display={"flex"}
        flexDirection={"column"}
        sx={{
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
        sx={{height:"100%"}}
        >
            {
                render.map((e,i)=>{
                    let current = i + 1 
                    if(Array.isArray(e)){
                        return (
                            <Box key={i} sx={{width:"60%", border:"2px solid green", borderRadius:"5px" , padding:"5px 10px 5px 10px", margin:"10px 0px 10px 0px", display:"flex"}}>
                                <span>{current+"-"}</span>
                                <span style={{margin:"0px 0px 0px 10px"}}>{e + " palindrome!"}</span>
                            </Box>
                        )
                    }
                    return(
                        <Box key={i} sx={{width:"60%", border:"2px solid black", borderRadius:"5px" , padding:"5px 10px 5px 10px", margin:"10px 0px 10px 0px", display:"flex"}}>
                        <span>{current+"-"}</span>
                        <span style={{margin:"0px 0px 0px 10px"}}>{e}</span>
                    </Box>
                    )
                })
            }
            {
                render.length===4?(
                    <span style={{color:"red"}}>Maxima capacidad alcanzada</span>
                ):null
            }
        </Box>
      </Box>
    </Box>
  );
}

export default Result;
