import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"


function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Cards title="Card 1" description="Card 1 desc"/>
        <Cards title="Card 2" description="Card 2 desc"/>
        <Cards title="Card 3" description="Card 3 desc"/>
        <Cards title="Card 4" description="Card 4 desc"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
