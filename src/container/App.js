import React,{ Component } from 'react';
import CoinCard from '../components/coinCard/CoinCard';
import Nav from '../components/nav/Nav';
import './App.css';


class App extends Component{
  isopen=false;
  async componentDidMount(){
    await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      .then(res =>{
        console.log(res.json())
      })
      .then(data => {
        console.log(data,'data')
      })
      .catch(err =>{
        console.log(err)
      });
  }
  render(){
    return (
      <div className="App ma0 pa0">
        <Nav/>
        <CoinCard/>
      </div>
    );
  }
}

export default App;
