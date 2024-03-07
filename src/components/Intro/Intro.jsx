import { useState } from "react"
import { Greeting } from ".."
import './styles.css'

export function Intro(props) {
  const [nameInput, setNameInput] = useState("")
  const [isIntroInputShown, setIsIntroInputShown] = useState(true)

  function handleChange(e) {
    setNameInput(e.target.value)
  }

  function handleEnter(e) {
    if (e.key === 'Enter') {
      setIsIntroInputShown(false)
    }
  }

  return (
    <main id="intro-container">
      {isIntroInputShown ? (
        <>
          <h2 id="question1">Hello, what's your name?</h2>
          <input id="name-input" type="text" onKeyDown={handleEnter} onChange={handleChange}/>
        </>
      ) : (
        <Greeting name={nameInput}/>
      )}
    </main>
  )
}




