import React from 'react';
import './style.css';
import img_01 from '../../assets/projectImages/hw3_Password_Generator.jpg';
import img_02 from '../../assets/projectImages/hw4_Quiz_Game.jpg';
import img_03 from '../../assets/projectImages/hw5_Daily_Planner.jpg';
import img_04 from '../../assets/projectImages/hw6_Weather_App.jpg';
import img_05 from '../../assets/projectImages/pr1_Covid_Activities.jpg';
import img_06 from '../../assets/projectImages/pr2_Quiz_Generator.jpg';
import img_cli from '../../assets/projectImages/cli.jpg';


const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1 className="title is-1">Portfolio</h1>
            <div className="container">
                <div className="tile is-ancestor">

                    {/* HW03 - Password Generator */}
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">&#60;password/generator&#62;</p>
                            <figure className="image is-4by3">
                                <img src={img_01} />
                            </figure>
                            <br />
                            <div className="content has-text-centered">
                                A simple app that creates passwords according to your preferences.
                            </div>
                            <footer className="card-footer">
                                <a href="https://github.com/dmjohnspor/HW3_Password_Generator" target="_blank" className="card-footer-item has-text-danger">repo</a>
                                <a href="https://dmjohnspor.github.io/HW3_Password_Generator/" terget="_blank" className="card-footer-item has-text-danger">live</a>
                            </footer>
                        </article>
                    </div>

                    {/* HW4 Quiz Game */}
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">&#60;quiz/game&#62;</p>
                            <figure className="image is-4by3">
                                <img src={img_02} />
                            </figure>
                            <div className="content has-text-centered">
                                A fun quiz game. How well do you know the Greek gods? Play against the
                                clock and score a new highscore!
                            </div>
                            <footer className="card-footer">
                                <a href="https://github.com/dmjohnspor/HW4_Quiz_Game" target="_blank" className="card-footer-item has-text-danger">repo</a>
                                <a href="https://dmjohnspor.github.io/HW4_Quiz_Game/" terget="_blank" className="card-footer-item has-text-danger">live</a>
                            </footer>
                        </article>
                    </div>

                    {/* HH5 Daily Planner */}
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">&#60;day/planner&#62;</p>
                            <figure className="image is-4by3">
                                <img src={img_03} />
                            </figure>
                            <br />
                            <div className="content has-text-centered">
                                A simple app that creates passwords according to your preferences.
                            </div>
                            <footer className="card-footer">
                                <a href="https://github.com/dmjohnspor/HW5_Daily_Planner" target="_blank" className="card-footer-item has-text-danger">repo</a>
                                <a href="https://dmjohnspor.github.io/HW5_Daily_Planner/" terget="_blank" className="card-footer-item has-text-danger">live</a>
                            </footer>
                        </article>
                    </div>
                </div>
            </div >

            <div className="container">
                <div className="tile is-ancestor">

                    {/* HW6 Weather App */}
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">&#60;weather/app&#62;</p>
                            <figure className="image is-4by3">
                                <img src={img_04} />
                            </figure>
                            <br />
                            <div className="content has-text-centered">
                                Search for a city and check the weather with this nifty app.
                            </div>
                            <br />
                            <footer className="card-footer">
                                <a href="https://github.com/dmjohnspor/HW6_Weather_App" target="_blank" className="card-footer-item has-text-danger">repo</a>
                                <a href="https://dmjohnspor.github.io/HW6_Weather_App/" terget="_blank" className="card-footer-item has-text-danger">live</a>
                            </footer>
                        </article>
                    </div>

                    {/* Pr1 Covid Activities */}
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">&#60;covid/activities&#62;</p>
                            <figure className="image is-4by3">
                                <img src={img_05} />
                            </figure>
                            <div className="content has-text-centered">
                                Group project for fun activities during the covid-19 pandemic.<br />
                                Search for a good read or a tasty recipe to battle your quarantine boredom.
                            </div>
                            <footer className="card-footer">
                                <a href="https://github.com/jbenj-upenn/CovidActivities" target="_blank" className="card-footer-item has-text-danger">repo</a>
                                <a href="https://jbenj-upenn.github.io/CovidActivities/" terget="_blank" className="card-footer-item has-text-danger">live</a>
                            </footer>
                        </article>
                    </div>

                    {/* Pr2 Quiz Generator */}
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">&#60;quiz/generator&#62;</p>
                            <figure className="image is-4by3">
                                <img src={img_06} />
                            </figure>
                            <br />
                            <div className="content has-text-centered">
                                Group project that allows you to create, test, edit or delete your own
                                quizzes (demo version).
                            </div>
                            <footer className="card-footer">
                                <a href="https://github.com/dolinay1/project-2-quiz-generator" target="_blank" className="card-footer-item has-text-danger">repo</a>
                                <a href="https://project-2-quiz-generator.herokuapp.com/" terget="_blank" className="card-footer-item has-text-danger">live</a>
                            </footer>
                        </article>
                    </div>
                </div>
            </div >

            <div className="container">
                <div className="tile is-ancestor">

                    {/* Readme Generator CLI */}
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">&#60;readme/generator&#62;</p>
                            <figure className="image is-4by3">
                                <img src={img_cli} />
                            </figure>
                            <br />
                            <div className="content has-text-centered">
                                Create a beautiful readme file for your repos according to your
                                preferences.
                            </div>
                            <br />
                            <footer className="card-footer">
                                <a href="https://github.com/dmjohnspor/HW9_Readme_Generator_CLI" target="_blank" className="card-footer-item has-text-danger">repo</a>
                                <a href="#" target="_blank" className="card-footer-item has-text-danger">video demo</a>
                            </footer>
                        </article>
                    </div>

                    {/* Team Tracker CLI */}
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">&#60;team tracker/cli&#62;</p>
                            <figure className="image is-4by3">
                                <img src={img_cli} />
                            </figure>
                            <br />
                            <div className="content has-text-centered">
                                Build a web page for your software developer dream team!
                            </div>
                            <br />
                            <footer className="card-footer">
                                <a href="https://github.com/dmjohnspor/HW10_Team_Tracker_CLI" target="_blank" className="card-footer-item has-text-danger">repo</a>
                                <a href="#" target="_blank" className="card-footer-item has-text-danger">video demo</a>
                            </footer>
                        </article>
                    </div>

                    {/* Employee Tracker CLI */}
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">&#60;employee tracker/cli&#62;</p>
                            <figure className="image is-4by3">
                                <img src={img_cli} />
                            </figure>
                            <br />
                            <div className="content has-text-centered">
                                Keep track of your company's employees, departments and salaries with this
                                useful app.
                            </div>
                            <br />
                            <footer className="card-footer">
                                <a href="https://github.com/dmjohnspor/HW12_Employee_Tracker_CLI" target="_blank" className="card-footer-item has-text-danger">repo</a>
                                <a href="#" target="_blank" className="card-footer-item has-text-danger">video demo</a>
                            </footer>
                        </article>
                    </div>
                </div>
            </div >
        </div>
    )
};

export default Portfolio
