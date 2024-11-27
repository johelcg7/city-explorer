import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Explorer from './Explorer';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Explorer />
      <Footer />
    </>
  )
}

export default App
