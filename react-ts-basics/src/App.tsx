import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import { useState } from "react"
import List from "./components/List"

function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <div className="App">
      <Heading title={"hello"}/>
      <Section>Evo child</Section>
      <Counter setCount = {setCount}>The count is {count}</Counter>
      <List<string> items = {["coffe", "tacos", "code"]} render={(item:string) => <span>{item}</span>}/>
    </div>
  )
}

export default App
