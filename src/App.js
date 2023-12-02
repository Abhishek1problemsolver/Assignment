import logo from './logo.svg';
import './App.css';
import Header from './Header/header.jsx';
import Features from './Features/Features.jsx';
import More from './More/more.jsx'
import Faq from './Faq/Faq.jsx'
import Price from './price/price.jsx'
import Testi from './Testimonials/Testimonials.jsx'
import Out from './out/out.jsx'
import Footer from './Footer/footer.jsx'
function App() {
  return (
    <div className="App">
      <Header/>
      <Features/>
      <More/>
      <Faq/>
      <Price/>
      <Testi/>
      <Out/>
      <Footer/>
    </div>
  );
}

export default App;
