import React from "react";
import CardDialog from "../cardDialog/CardDialog";

const CoinCard = ()=>{
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
   
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <div>
            <section 
              className="bt b--dark-gray h3 bg-animate w-90 dib v-mid br3 mh5 mt1 flex justify-between bg-black hover-bb-b--yellow white pa3"
              onClick={handleClickOpen}
            >
                <span className="pointer">1.</span>
                <span className="pointer grow">logo Bitcoin BTC</span>
                <span className="pointer grow">$40000</span>
                <span className="pointer grow">-4.0%</span>
                <span className="pointer grow">$813,785,395,943</span>
                <span className="pointer grow">$45,129,183,512</span>
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