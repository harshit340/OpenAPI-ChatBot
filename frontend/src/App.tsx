import Header from "./components/Header"

// genrally when we click on link it reload the whole page by react-router-dom it will not reload the whole page
import {Routes , Route} from "react-router-dom";

import Home from "./pages/Home"
import Chat from "./pages/Chat"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Notfound from "./pages/Notfound"


function App() {
  return (
    <>
      
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
     {/*  we will connect the login page to a url path of Login */}
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route> 
      <Route path="/chat" element={<Chat/>}></Route>
      <Route path="*" element={<Notfound/>}></Route>
     </Routes>
    </>
  )
}

export default App;
