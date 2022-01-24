import React from "react";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from "@mui/material";
import { LineChart, Line, Tooltip } from 'recharts';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function CardDialog(props){
    const { onClose,open, coin } = props;
    let timeSeries=[];
    const handleClose = () => {
      onClose();
    };
    fetch(`https://api.coingecko.com/api/v3/coins/${coin.data.id}/market_chart?vs_currency=usd&days=7&interval=daily`)
      .then(res => res.json())
      .then(data => {
        data.prices.map((ele)=>{
          timeSeries.push({ p : ele[1]})
        })
        console.log(data,'ts')
    });
    console.log(timeSeries,'ts2')
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    function currencyFormat(num){
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
      <Dialog 
        onClose={handleClose} 
        open={open} 
        className='' 
        fullScreen={fullScreen}
        maxWidth={'md'}
    >
        <DialogTitle>
            <img src={coin.data.image} alt="logo" className="h2"/>
            <span>{coin.data.name} </span>
            <i>{coin.data.symbol.toUpperCase()}</i>
        </DialogTitle>
        <DialogContent>
            <div className="ph2">
                <LineChart width={500} height={300} data={timeSeries}>
                    <Line type="monotone" dataKey="p" stroke="#8884d8" />
                    <Tooltip />
                </LineChart>
            </div>
            <div className="flex justify-around">
                <div>
                    <div>Price:</div>
                    <div>{currencyFormat(coin.data.current_price)}</div>
                </div>
                <div>
                    <div>24hr %:</div>
                    <div 
                        style={
                            {color:coin.data.price_change_percentage_24h<0?"red":"green"}
                        }
                    >
                        {coin.data.price_change_percentage_24h.toFixed(1)}%
                    </div>
                </div>
                <div>
                    <div>Market Cap:</div>
                    <div>{currencyFormat(coin.data.market_cap)}</div>
                </div>
                <div>
                    <div>Volume:</div>
                    <div>{currencyFormat(coin.data.total_volume)}</div>
                </div>
            </div>
        </DialogContent>
      </Dialog>
    );
}