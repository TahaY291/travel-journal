import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data.jsx'
import './App.css'

function App() {
  let array = data.map((card)=> {
    return <Card {...card} />
  })
  return (
    <>
    <Navbar />
    {array}
    </>
  )
}

export default App
