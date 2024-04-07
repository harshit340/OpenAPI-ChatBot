
import {Box, Avatar, Typography} from "@mui/material";
import { useAuth } from "../../context/AuthContext";

const ChatItem =({content,role,}: {content: string;role: "user" | "assistant";}) => {
    const auth = useAuth();
  return role === "assistant" ? (<Box
    sx={{
      display: "flex",
      p: 2,
      bgcolor: "#004d5612",
      gap: 2,
      borderRadius: 2,
      my: 1,
    }}
  >
    <Avatar sx={{ ml: "0" }}>
      <img src="openai.png" alt="openai" width={"30px"} />
    </Avatar>
    <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
    </Box>
     ) : ( <Box
        sx={{
          display: "flex",
          p: 2,
          bgcolor: "#004d56",
          gap: 2,
          borderRadius: 2,
        }}
      >
        <Avatar sx={{ ml: "0", bgcolor: "black", color: "white" }}>
          {auth?.user?.name[0]}
          {auth?.user?.name.split(" ")[1][0]}
        </Avatar>
       
        
         
              
      </Box>)
}

export default ChatItem

