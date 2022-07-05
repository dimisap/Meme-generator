import React from "react";
import "./header.styles.css"

function Header(){

    return(
        <div className="header">

            <img src="./media/troll.png" alt="" className="header--troll"/>
            <h3 className="header--h3">Meme Generator</h3>

            <h4  className="header--h4">React Course - Project 3</h4>
        </div>
    )


}

export default Header