import './App.css';
import Header from './components/header'
import Main from './components/Main'
import Footer from './components/footer'
import data from './data.json'


function App() {
  return (
    <div className="App">
      <Header/>
      <Main beast={data}/>
      <Footer />
    </div>
  );
  }

export default App;
