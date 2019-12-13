import React, {useEffect, useRef} from 'react'
import {TweenMax, Power3 } from "gsap"
// import {TweenMax, Power3, Elastic, Bounce} from "gsap"
import "./landing.css"

function Landing(props){

    let aboutItem = useRef(null);
    let ownerItem = useRef(null);
    let walkerItem = useRef(null);
    let sitterItem = useRef(null)



    useEffect(() => {
        TweenMax.staggerFrom([aboutItem, ownerItem, walkerItem, sitterItem], .8, {opacity: 1, x: 80, ease: Power3.easeOut}, 0.1)
    })

    

        return (
            <div className="mainLandingCard">
                <h1>Chipper</h1>
                {/* <img></img> */}
                <section>
                    <div className="about"     ref={el => {aboutItem = el}} >
                        <h3>What we do</h3>
                        <p>Chipper isn't the premier dog-walking app, and the leading dog-walking app amongst lazy people. We have well over 500,000 users, so sign up and be apart of the Chipper Gang!</p>
                    </div>
                    <div className="ownerIntroOpen"      ref={el => {ownerItem = el}} >
                        <h2>Owner</h2>
                        <p>Are you a lazy person? Here you can sign up you and your dog so a physcailly active specimen can retrieve your dog and show them what a real owner is like!</p>
                        <button>View</button>
                    </div>
                    <div className="walkerIntroOpen" ref={el => {walkerItem = el}} >
                        <h2>Walker</h2>
                        <p>Are you that specimen? Well, good news! Sign up here to earn money by walking a furry animal for 30 minutes while their owner eats cheetos and pays minecraft.</p>
                        <button>View</button>
                    </div>
                    <div className="sitterIntroOpen"ref={el => {sitterItem = el}} >
                        <h2>Sitter</h2>
                        <p>So you didnt like owner or walker huh? Well, if you thought it could get any better, your gonna be disappointed! Sign up here to become a dog sitter, and sit on dogs!</p>
                        <button>View</button>
                    </div>
                </section>
            </div>
        )
    }

export default Landing;