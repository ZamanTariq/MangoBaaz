import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import CenterLayout from './components/CenterLayout';

function App() {
  return (
    <div className="App">
    <Header/> 
    <CenterLayout/>   
    <Footer/>
    </div>
  );
}

export default App;
