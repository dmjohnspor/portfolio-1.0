import React, { useState } from 'react';
import photo from '../../assets/profile-pic.jpg';
import Modal from '../../components/Modal';

const AboutMe = ({ id }) => {
    const [show, setShow] = useState(false);
    const handleClassName = show ? "modal is-active" : "modal"

    const showModal = event => {
        event.preventDefault();
        setShow(true);
    }

    const hideModal = event => {
        event.preventDefault();
        setShow(false);
    }

    return (
        <>
            <Modal onClick={hideModal} show={show} handleClassName={handleClassName} />

            <section className="section" id={id}>
                <h1 className="title is-1">Welcome!</h1>
                <div className="container">
                    <div className="columns">
                        {/* About me picture */}
                        <div className="column is-one-third">
                            <figure className="image is 4by5">
                                <img src={photo} />
                            </figure>
                        </div>

                        {/* About me text */}
                        <div className="column">
                            <div className="box bioText">
                                Hi and welcome my page!
                        <br />
                                <br />
                        My name is Ioannis but people call me Giannis (it's Greek for John).
                        <br />
                                <br />
                        After working for several years as a teacher, I recently discovered my love for sofware engineering
                        and decided to change my career and pursue my dream.
                        <br />
                                <br />
                        So I signed up for a coding bootcamp with the University of Pennsylvania and begun my journey as a
                        full stack web developer.
                        <br />
                                <br />
                        It was one of the toughest things that I did in my life but after a lot of determination and effort
                        I made it!
                        <br />
                                <br />
                        So it is with great pride that I present to you some of my work (individual and collaborative) as
                        I'm honing my craft as a web developer.
                        <br />
                                <br />
                        I hope you enjoy!
                    </div>
                            <button
                                className="button is-inverted is-danger"
                                onClick={showModal}>
                                View full resume in PDF
                                </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default AboutMe
