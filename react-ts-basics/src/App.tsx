import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import { useState } from "react"

function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <div className="App">
      <Heading title={"hello"}/>
      <Section>Evo child</Section>
      <Counter setCount = {setCount}>The count is {count}</Counter>
    </div>
  )
}

export default App
