// create your App component here
import React, {useEffect} from "react";
import { data } from "../mocks/data";
import { useState } from "react";

function App() {
    const [randomImage, setRandomImage] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(()=>{

        fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then((data)=>{
            setRandomImage(data.message)
            setIsLoaded(true)
        })
    },[])

    if (!isLoaded) return <h3>Loading...</h3>;

    return <img src={randomImage} alt="A Random Dog"></img>
}

export default App;