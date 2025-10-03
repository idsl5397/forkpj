import './App.css'
import CardComponent, {type Card} from "./components/Card/Card.tsx";

function App() {


const data: Card = {
    id:1,
    title:"vite",
    description:"你好，我是 vite",
    image:"public/vite.svg",
    imageInfo:"這是vite logo"
}

  return (
    <>
     <CardComponent data={data}/>
    </>
  )
}

export default App
