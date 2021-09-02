import './App.css';
import Header from './components/header'
import Main from './components/Main'
import Footer from './components/footer'
import data from './data.json'
import React from 'react';

class App extends React.Component {
render() {
  return (
    <div className="App">
      <Header />
      <Main beasts={data} />
      <SelectedBeast />
      <Footer />
    </div>
  );
}
}

export default App;
