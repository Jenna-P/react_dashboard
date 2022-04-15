import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
       <div className="wrapper">
         <div className="search">
           <input type="text" placeholder="Search" />
           <SearchOutlinedIcon className="icon" />
         </div>
         <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({ type: "TOGGLE" })} />
            
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
            
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img src="https://cdn4.vectorstock.com/i/thumb-large/38/88/happy-girl-avatar-funny-child-profile-picture-vector-41133888.jpg" 
                 alt="profileImg"
                 className="avatar" />
          </div>
         </div>
       </div>
      
    </div>
  )
}

export default Navbar
