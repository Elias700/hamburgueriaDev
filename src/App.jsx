

import './App.css'
import Header from './components/Header'
import Burgers from './components/Burgers'
import Footer from './components/Footer'
import Logo from './components/img/logo.png'


function App() {
  
  return (
    <>
      <Header Logo={Logo}/>
      <Burgers />
      <Footer  />
    </>
  )
}

export default App
