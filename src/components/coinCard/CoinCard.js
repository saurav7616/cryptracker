import React from "react";
import './CoinCard.css';
import { LineChart, Line} from 'recharts';
import CardDialog from "../cardDialog/CardDialog";

const CoinCard = (props) => {
    const timeSeries = [];
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
   
    const handleClose = () => {
      setOpen(false);
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${props.data.id}/market_chart?vs_currency=usd&days=7&interval=daily`)
      .then(res => res.json())
      .then(data => {
        data.prices.map((ele)=>{
          timeSeries.push({ p : ele[1]})
        })
      });

    function currencyFormat(num){
      return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return(
        <div>
            <section 
              className="bt b--dark-gray h3 bg-animate w-90 dib v-mid br3 mh5 mt1 bg-black white pa3 flex items-center"
              onClick={handleClickOpen}
            >
                <span className="pointer dib mr3">{props.id}.</span>
                <span
                  className="ma0 pa0 card_grid"
                >
                  <span className="pointer grow name_flex">
                    <span className="flex items-center pb1">
                      <img 
                        alt="logo" 
                        src={props.data.image}
                        className="br-100 dib"
                        style={{height:"1.5rem"}}
                      /> 
                      <span>{props.data.name}</span>
                    </span>
                    <span>{props.data.symbol.toUpperCase()}</span>
                  </span>
                  <span className="pointer grow">{currencyFormat(props.data.current_price)}</span>
                  <span 
                    className="pointer grow"
                    style={
                      {color:props.data.price_change_percentage_24h<0?"red":"green"}
                    }
                  >
                    {props.data.price_change_percentage_24h.toFixed(1)}%
                  </span>
                  <span className="pointer grow">{currencyFormat(props.data.market_cap)}</span>
                  <span className="pointer grow">{currencyFormat(props.data.total_volume)}</span>
                  <span className="pointer grow">
                    <LineChart width={50} height={50} data={timeSeries}>
                      <Line type="monotone" dataKey="p" stroke="#8884d8" />
                    </LineChart>
                  </span>
                </span>
                
            </section>
            <CardDialog
              open={open}
              onClose={handleClose}
              coin={props}
            />
        </div>
    );
}

export default CoinCard;