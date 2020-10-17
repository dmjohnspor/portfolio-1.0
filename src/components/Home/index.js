import React from 'react';
import './style.css';
import video from '../../assets/intro.mov'

const Home = ({ id }) => {
    return (
        < div className="column is-full" id={id}>
            <header className="v-header container2">
                <div className="fullscreen-video-wrap">
                    <video src={video} autoPlay={true} loop={true}></video>
                </div>
                <div className="header-content">
                    <h1>Welcome to my page!</h1>
                    <h3>Developer || Educator || Gamer || Collector</h3>
                    <h3>I also look good as a minifigure!</h3>
                </div>
            </header>
        </div >
    )
};

export default Home
