import { useEffect, useState } from "react"


export function Greeting(props) {
  const [todos, setTodos] = useState([])
  
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (  
    <div>
      <h1>{currentTime.toLocaleTimeString()}</h1>
      <span>Hello, {props.name}</span>
    </div>
  )
}


