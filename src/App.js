import './App.css';
import Header from './components/header'
import Main from './components/Main'
import Footer from './components/footer'
import data from './data.json'
import React from 'react';
import SelectedBeast from './components/selectedbeast';

// converted from function component to class component by callinf func 'render' and putting it in a class that extends component
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: true,
      // SelectedBeast=null 
    };
  }

handleSelectBeast = beastIndex => {
  this.setState({ 
    SelectedBeast: data[beastIndex],
  showModal: true,
 });
}

handleClose = () => {
  this.setState({ showModal: false });
};
render() {
  return (
    <div className="App">
      <Header />
      <Main beasts={data}
      handleSelectBeast={this.handleSelectBeast} />
      <SelectedBeast 
      beast={this.state.SelectedBeast}
        show={this.state.showModal}
        handleClose={this.handleClose}
        />
      <Footer />
    </div>
  );
}
}

export default App;
