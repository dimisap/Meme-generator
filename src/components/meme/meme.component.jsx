import React from "react";
import "./meme.styles.css"
//import memesData from "../../memesData";

function Meme(){



    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg" 
        }
    )

    const [allMemes, setallMemeImages] = React.useState({})


    function handleClick(){

        const memesArray = allMemes.data.memes
        const num = Math.floor(Math.random() * memesArray.length + 1)
        const url = memesArray[num].url

        setMeme(prevState => ({
            ...prevState,
            randomImage: url

        }))


    }

    React.useEffect(()=>{

        fetch("https://api.imgflip.com/get_memes")
            .then(res=> res.json())
            .then(data => setallMemeImages(data))
    },[])

    function handleChange(event){

        const {name,value} = event.target

        setMeme(prevState => ( {
            ...prevState,
            [name]:value
        }))

        
    }

    return(
        <div >
            <div>
            <div className="meme--inputs">
                <input 
                    type="text" 
                    name="topText" 
                    placeholder="Top text" 
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="bottomText" 
                    placeholder="Bottom text" 
                    value={meme.bottomText}
                    onChange={handleChange}
                />

           
            </div>
            <button type="submit" className="meme--submit-button" onClick={handleClick}>Get a new meme image 🖼</button>
            </div>
            <div className="meme" >
            <h2 className="meme--text top">{meme.topText}</h2>
            <img src={meme.randomImage} alt="" className="memeImg"/>
            <h2 className="meme--text bot">{meme.bottomText}</h2>
            </div>
        </div>

        
    )

}

export default Meme;