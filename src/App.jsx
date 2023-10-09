import { useEffect, useState } from "react"
import "./App.css"

function App() {

  const [name, setName] = useState([])
  const [quote, setQuote] = useState([])

  useEffect(() => {
   const URL = "https://api.quotable.io/random"
    fetch(URL)
      .then(res=>res.json())
      .then(results => {
        setName(JSON.stringify(results.author,null,2))
        setQuote(JSON.stringify(results.content, null, 2))
        console.log(results)
      })
  },[])

  function handleClick() {
    const URL = "https://api.quotable.io/random"
    fetch(URL)
      .then(res=>res.json())
      .then(results => {
        setName(JSON.stringify(results.author,null,2))
        setQuote(JSON.stringify(results.content, null, 2))
        console.log(results)
      })
  }
  return (
    <div id="quote-box">
     <p id="text">{quote}</p>
     <div id="author">{name}</div>
     <button 
     onClick={handleClick} 
     id="new-quote">New Quote</button>
     <div>
     <a 
     id="tweet-quote" 
     href={`https://twitter.com/intent/tweet?text=${quote}%20${name}`}
     data-text={quote}
     target="_blank" 
     rel="noreferrer">
      {/* <img  alt="twitter icon" /> */}
      <p>Share this on twitter</p>
     </a>
    
     </div>
    </div>
  )
}

export default App












