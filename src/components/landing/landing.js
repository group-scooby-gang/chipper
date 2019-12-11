import React, {useRef} from 'react'
import {TweenMax, Power3} from "gsap"
import "./landing.css"

class landing extends React.Component {
    constructor(){
        super()


        this.state = {
            owner: "ownerIntroClosed",
            walker: "walkerIntroClosed",
            sitter: "sitterIntroClosed"
        }
    }
 
    handleOwner = () => {
        if(this.state.owner === "ownerIntroClosed"){
            this.setState({owner: "ownerIntroOpen"})
        } else {
            this.setState({owner: "ownerIntroClosed"})
        }
    }

    handleWalker = () => {
        if(this.state.walker === "walkerIntroClosed"){
            this.setState({walker: "walkerIntroOpen"})
        } else {
            this.setState({walker: "walkerIntroClosed"})
        }
    }

    handleSitter = () => {
        if(this.state.sitter === "sitterIntroClosed"){
            this.setState({sitter: "sitterIntroOpen"})
            
        } else {
            this.setState({sitter: "sitterIntroClosed"})
        }
    }

    render(){
        return (
            <div className="mainLandingCard">
                <h1>Chipper</h1>
                <img></img>
                <section>
                    <div className="about">
                        <h3>What we do</h3>
                        <p>Chipper isn't the premier dog-walking app, and the leading dog-walking app amongst lazy people. We have well over 500,000 users, so sign up and be apart of the Chipper Gang!</p>
                    </div>
                    <div className={this.state.owner}>
                        <h2>Owner</h2>
                        <p>Are you a lazy person? Here you can sign up you and your dog so a physcailly active specimen can retrieve your dog and show them what a real owner is like!</p>
                        <button onClick={this.handleOwner}>View</button>
                    </div>
                    <div className={this.state.walker}>
                        <h2>Walker</h2>
                        <p>Are you that specimen? Well, good news! Sign up here to earn money by walking a furry animal for 30 minutes while their owner eats cheetos and pays minecraft.</p>
                        <button onClick={this.handleWalker}>View</button>
                    </div>
                    <div className={this.state.sitter}>
                        <h2>Sitter</h2>
                        <p>So you didnt like owner or walker huh? Well, if you thought it could get any better, your gonna be disappointed! Sign up here to become a dog sitter, and sit on dogs!</p>
                        <button onClick={this.handleSitter}>View</button>
                    </div>
                </section>
            </div>
        )
    }
}



export default landing;