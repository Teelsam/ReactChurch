import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Bio from './components/Bio'


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Bio />
    </div>
  );
}

export default App;
