import React from 'react'
import { IoIosLogIn } from "react-icons/io";
import { Box, Typography, Button } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import {toast} from 'react-hot-toast'
import { useAuth } from '../context/AuthContext';

function Login() {
const auth = useAuth()
const HandleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 const Fromdata =  new FormData(e.currentTarget);
 const email = Fromdata.get("email") as string;
 const password = Fromdata.get("password") as string;
 try {
 
   await auth?.login(email, password);
   toast.success("Successfully login")
 } catch (error) {
   console.log(error);
   toast.error("Failed to login")
 }
}


  return (
    <Box width={"100%"} height={"100%"} display="flex" flex={1}>
   
    <Box
      display={"flex"}
      flex={{ xs: 1, md: 0.5 }}
      justifyContent={"center"}
      alignItems={"center"}
      padding={2}
      ml={55}
      mt={16}
    >
      <form
        onSubmit={HandleSubmit}
        style={{
          margin: "auto",
          padding: "30px",
          boxShadow: "10px 10px 20px #000",
          borderRadius: "10px",
          border: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            padding={2}
            fontWeight={600}
          >
            Login
          </Typography>
          <CustomizedInput type="email" name="email" label="Email" />
          <CustomizedInput type="password" name="password" label="Password" />
          <Button
            type="submit"
            sx={{
              px: 2,
              py: 1,
              mt: 2,
              width: "400px",
              borderRadius: 2,
              bgcolor: "#00fffc",
              ":hover": {
                bgcolor: "white",
                color: "black",
              },
            }}
            endIcon={<IoIosLogIn />}
          >
            Login
          </Button>
        </Box>
      </form>
    </Box>
  </Box>
  )
}

export default Login
