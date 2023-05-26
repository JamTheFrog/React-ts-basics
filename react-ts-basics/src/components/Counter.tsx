import { ReactNode } from "react"

type Counter = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}

const Counter = ({children, setCount}: Counter) => {
  return (
    <>
        <div>{children}</div>
        <button onClick={() => {setCount(prev => prev+1)}}>+</button>
        <button onClick={() => {setCount(prev => prev-1)}}>-</button>
    </>

  )
}

export default Counter