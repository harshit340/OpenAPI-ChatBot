import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
// to use routing in react 
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";

// axios help us to make the connection between the frontend and backend
import axios from 'axios'
//This line sets the default base URL for Axios requests. When you set a base URL using axios.defaults.baseURL, you don't need to specify the full URL in subsequent requests.it will send the whole data to this baseURL
axios.defaults.baseURL = "http//localhost:5000/api/v1"
//This line sets the withCredentials property to true in Axios's defaults.When withCredentials is set to true, it indicates that the browser should include cookies and HTTP authentication information
axios.defaults.withCredentials = true;

import {Toaster} from 'react-hot-toast'


const theme = createTheme({
  typography: {
    fontFamily: "Roboto Slab,serif",
    allVariants: { color: "white" },
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Toaster position="top-center"/>
          <App />
        </ThemeProvider>
      </BrowserRouter>
  </AuthProvider>
  </React.StrictMode>
);
