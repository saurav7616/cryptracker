import React,{ Component } from 'react';
import CardArr from '../components/cardArr/CardArr';
import Nav from '../components/nav/Nav';
import './App.css';


class App extends Component{
  constructor(){
		super()
		this.state = {
			data: [],
		}
	}
  isopen=false;
  componentDidMount(){
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => res.json())
      .then(data => this.setState({data : data}))
      .catch(err => console.log(err));
  }
  render(){
    const {data} = this.state;
    return(
      <div className="App ma0 pa0">
        <Nav/>
        {
          data.length>0?
            <CardArr rec={data}/>:
            <h1 className='tc mt5 pt5'>LOADING...</h1>
        }
      </div>
    );
  }
}

export default App;
