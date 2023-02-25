import './App.css';
import Calorie_calulator from './section/calorie_calculator/Calorie_calculator';
import Header from './section/header/Header';
import Footer from './section/footer/Footer';
import Navbar from './section/navbar/Navbar';
import Quotes from './section/qoutes/Quotes';
function App() {
  return (
    <div className="">
      <Navbar/>
      <Header/>
    <Quotes/>
      <Calorie_calulator />
      <Footer/>
    </div>
  );
}

export default App;