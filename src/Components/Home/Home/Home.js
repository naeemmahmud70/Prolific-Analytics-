import React from 'react';
import './Home.css'
import myImage from '../../../images/naeem.png'

const Home = () => {
    return (
        <section className="row bg-light p-5 height">
            <div className="col-md-4 text-center">
                <div>
                    <img className="rounded-circle" src={myImage} alt="" />
                </div>
                <div className="pt-2">
                    <h2>Md. Naeem Mahmud</h2>
                    <h5>Front End Developer(React)</h5>
                </div>
            </div>
            <div className="col-md-8">
                <h2 className="fw-bold">About Myself</h2>
                <p className="text-justify">
                    My name is <strong>Naeem Mahmud</strong> . I am a <strong>Junior MERN-stack Web Developer</strong> . I have 1 year of strong hands-on experience developing website using MERN. Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine.Amazing UI design, responsive websites, API integration, routing, user authentication, making API with Node.js, secured API with JWT token, smoother crud operation using MERN and developing full stack features using MERN Stack are the key features of the websites that I have created successfully. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements. <br /> 
                    My strength and interest include,am a hard-working, self-motivated, and a quick learner. I can adapt to new technologies easily. I’m an empathetic person who is skilled at relating to people and understanding their needs. My short time goal is to join a company where I can utilize my skills and ability and my long-time goal is to established myself in that position where any company doesn’t want to lose me at any const. That’s All thank you.
                </p>
            </div>
        </section>
    );
};

export default Home;