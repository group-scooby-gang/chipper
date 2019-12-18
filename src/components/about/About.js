import React from "react";
import "./About.css"

class About extends React.Component {
    constructor(){
        super()
    }




    render(){
        return (
            <div className="aboutCard">
                <h1 id="aboutTitle">About the Chipper Gang</h1>
                <div className="layout">
                    <img src="https://i.imgur.com/y26JTIW.png" alt="Handsome Boi" href=""></img>
                    <h2>Josef Walls</h2>
                    <h4>Assistant to the HR Manager, Front and Back End Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu risus quis varius quam quisque id diam vel. Mattis molestie a iaculis at erat pellentesque adipiscing. Facilisis volutpat est velit egestas dui id ornare arcu odio.</p>
                </div>
                <div className="layout">
                    <img src="https://media.licdn.com/dms/image/C4E03AQGFwO7tD50S8Q/profile-displayphoto-shrink_800_800/0?e=1582156800&v=beta&t=4_tQsNQrhVPIfWFpcBkbuYj_aiPoabQsIDEnsFZJQvE"></img>
                    <h2>Jesse Badgley</h2>
                    <h4>Design Director, Stylin' and Profilin', Front-End Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu risus quis varius quam quisque id diam vel. Mattis molestie a iaculis at erat pellentesque adipiscing. Facilisis volutpat est velit egestas dui id ornare arcu odio.</p>
                
                </div>
                <div className="layout">
                    <img src="https://media.licdn.com/dms/image/C5603AQGs-0Ioo7geEg/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=m5QirBxLRLk91ykGcB6YqZyQZnHwNOf8JDTuHhMb7SQ"></img>
                    <h2>Nathan Visser</h2>
                    <h4>Front-End Developer, External Tech Dev</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu risus quis varius quam quisque id diam vel. Mattis molestie a iaculis at erat pellentesque adipiscing. Facilisis volutpat est velit egestas dui id ornare arcu odio.</p>
           
                </div>
                <div className="layout">
                    <img src="https://media.licdn.com/dms/image/C4E03AQH3vaXrXevKIA/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=O2eadpmtf6bDI9rGgPGj8hHzYSzs2qBeO6M7SFHgr5Q"></img>
                    <h2>Kyle Carter</h2>
                    <h4>Regional Project Manager, Font-End Developer, Lead talker</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu risus quis varius quam quisque id diam vel. Mattis molestie a iaculis at erat pellentesque adipiscing. Facilisis volutpat est velit egestas dui id ornare arcu odio.</p>
                </div>
                </div>
        )
    }
}   

export default About;