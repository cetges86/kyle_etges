import React from 'react';
import "./main.css";
import Calendar from "react-calendar";


const MainPage = () => {
    return (
        <div className="grid-wrapper">
          <div className="center">Events Calendar</div>
          <div className="center">Latest News</div>
          <div className="calendar">
              <Calendar />
              </div>
        </div>
    )
}


export default MainPage;