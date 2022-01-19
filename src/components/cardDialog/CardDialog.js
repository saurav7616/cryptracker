import React from "react";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from "@mui/material";
import { LineChart, Line, Tooltip } from 'recharts';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function CardDialog(props){
    const { onClose,open } = props;
  
    const handleClose = () => {
      onClose();
    };
    const price=400000;
    const data = [
        {
            name: 'Page A', 
            uv: 400, 
            pv: 2400, 
            amt: 2400
        },
        {
            name: 'Page B', 
            uv: 300, 
            pv: 2400, 
            amt: 2400
        },
        {
            name: 'Page C', 
            uv: 400, 
            pv: 2400, 
            amt: 2400
        },
        {
            name: 'Page D', 
            uv: 100, 
            pv: 2400, 
            amt: 2400
        },
    ];
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    return (
      <Dialog 
        onClose={handleClose} 
        open={open} 
        className='' 
        fullScreen={fullScreen}
        maxWidth={'md'}
    >
        <DialogTitle>
            <img src="" alt="logo"/>
            <span>Bitcoin </span>
            <i>BTC</i>
        </DialogTitle>
        <DialogContent>
            <div className="ph2">
                <LineChart width={500} height={300} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Tooltip />
                </LineChart>
            </div>
            <div className="flex justify-around">
                <div>
                    <div>Price:</div>
                    <div>${price}</div>
                </div>
                <div>
                    <div>24hr %:</div>
                    <div>-4.0%</div>
                </div>
                <div>
                    <div>Market Cap:</div>
                    <div>$813,785,395,943</div>
                </div>
                <div>
                    <div>Volume:</div>
                    <div>$45,129,183,512</div>
                </div>
            </div>
        </DialogContent>
      </Dialog>
    );
}