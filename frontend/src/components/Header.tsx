
import "../index.css";
import AppBar from "@mui/material/AppBar"
import Toolbar  from "@mui/material/Toolbar"
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";
function Header() {
  const auth = useAuth();
  return (
      <AppBar sx={{bgcolor:"transparent" , position:"static" , boxShadow:"none"}}>
        <Toolbar className="Toolbar">
          <img src="/logo.png" alt=""></img>
          <div>
            { auth?.isLoggedIn ? 
            (<> 
            <NavigationLink bg='transparent' to='/chat' text='Go to Chat' textColor='white' />
            <NavigationLink bg='transparent' to='/' text='logout' textColor='white' onClick={auth.logout} />
            </>) 
            :
            (<>
            <NavigationLink bg='transparent' to='/login' text='login' textColor='white' />
            <NavigationLink bg='transparent' to='/signup' text='signup' textColor='white'  />
            </>) }
          </div>
         
          </Toolbar>
      </AppBar>
   
   
  )
}

export default Header
