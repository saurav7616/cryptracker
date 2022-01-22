import React from "react";
import CardDialog from "../cardDialog/CardDialog";

const CoinCard = (data) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
   
    const handleClose = () => {
      setOpen(false);
    };
    console.log(data.data)
    return(
        <div>
            <section 
              className="bt b--dark-gray h3 bg-animate w-90 dib v-mid br3 mh5 mt1 flex justify-between items-center bg-black hover-bb-b--yellow white pa3"
              onClick={handleClickOpen}
            >
                <span className="pointer">{data.data.market_cap_rank}.</span>
                <span className="pointer grow">
                  <img 
                    alt="logo" 
                    src={data.data.image} 
                    className="br-100 dib"
                    style={{height:"1.5rem"}}
                  /> 
                  {data.data.name} 
                  {data.data.symbol.toUpperCase()}
                </span>
                <span className="pointer grow">${data.data.current_price}</span>
                <span className="pointer grow">{data.data.price_change_percentage_24h}%</span>
                <span className="pointer grow">${data.data.market_cap}</span>
                <span className="pointer grow">${data.data.total_volume}</span>
                <span className="pointer grow">graph</span>
            </section>
            <CardDialog
              open={open}
              onClose={handleClose}
            />
        </div>
    );
}

export default CoinCard;