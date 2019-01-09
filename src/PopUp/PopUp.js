import React from 'react';
import Popup from 'reactjs-popup';
import BurgerIcon from '../PopUp/BurgerIcon';
import Menu from '../PopUp/Menu';


const contentStyle = {
    background: "rgba(255,255,255,0)",
    width: "80%",
    border: "none"
};
  
const PopUp = () => (
    <Popup
        modal
        overlayStyle={{ background: "rgba(255,255,255,0.98" }}
        contentStyle={contentStyle}
        closeOnDocumentClick={false}
        trigger={open => <BurgerIcon open={open} />}
    >
        {close => <Menu close={close} />}
    </Popup>
  );

export default PopUp;