import React from 'react';
import './style.css';
import avatar_w_hands from '../../assets/avatar_w_hands.png'

const Divider = () => {
    return (
        <div className="divider">
            <img src={avatar_w_hands} alt="lego avatar" className="avatar_w_hands" />
        </div>
    )
}

export default Divider