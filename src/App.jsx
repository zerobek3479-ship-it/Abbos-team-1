import "./App.css"


import Banner from "./components/banner/Banner"
import Header from "./components/header/Header"
import Bluethes from "./components/bluethes/Bluethes"
import Cartes from "./components/cartes/Cartes"
import Drump from "./components/drump/Drump"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Listen from "./components/listen/Listen"
const App = () => {
  return (
    <div>
      <Banner/>
      <Header/>
      <Bluethes/>
      <Cartes/>
      <Drump/>
      <Footer/>
      <Hero/>
      <Listen/>
    </div>
  )
}

export default App
