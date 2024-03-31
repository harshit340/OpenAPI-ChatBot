
import "../index.css";
import AppBar from "@mui/material/AppBar"
import Toolbar  from "@mui/material/Toolbar"
function Header() {
  return (
    <div>
     
      <AppBar sx={{bgcolor:"transparent" , position:"static" , boxShadow:"none"}}>
        <Toolbar className="Toolbar">
          <img src="public/logo.png" alt=""></img>
         
          </Toolbar>
      </AppBar>
   
    </div>
  )
}

export default Header
