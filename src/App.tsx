import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Competition from './components/Competition'
import Journey from './components/Journey'
import About from './components/About'
import Categories from './components/Categories'
import Sport from './components/Sport'
import Advantage from './components/Advantage'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      <Hero />
      <Competition />
      <Journey />
      <About />
      <Categories />
      <Sport />
      <Advantage />
      <Footer />
    </div>
  );
}

export default App;