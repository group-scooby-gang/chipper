import React, { useEffect, useRef } from 'react';
import { TweenMax, Power3, Elastic, Bounce } from 'gsap';
import './landing.css';

function Landing(props) {
	let aboutItem = useRef(null);
	let ownerItem = useRef(null);
	let walkerItem = useRef(null);
	let sitterItem = useRef(null);

	useEffect(() => {
		TweenMax.staggerFrom(
			[aboutItem, ownerItem, walkerItem, sitterItem],
			0.8,
			{ opacity: 1, x: 80, ease: Power3.easeOut },
			0.1
		);
	});

	return (
		<div className='main_landing_card'>
			<div className='chpper_pic_container'>
				<h1 className='chipper'>Chipper</h1>
				<img
					class='login_chipper_dog'
					src='https://png2.cleanpng.com/sh/b434d0f27e02dc60d84a17de16e7bce9/L0KzQYm3UcA4N5tsfZG8Zki0cofoVsQ5PZNoTKM8YkHnSbW6gBE6amNqStUBYT24cYa5U8Q2PJQ9S6UBOD68QYq4WMcxQWI6Sac8M0a6SImBUsUxPmEziNDw/3f81b6a6485bc413b1d9d3ca9b2e2c6a-5a523454c83368.919187091515336788825060.png'
					alt='happy dog'
				/>
			</div>

			<div
				className='about'
				ref={(el) => {
					aboutItem = el;
				}}>
				<h2>What we do</h2>
				<p>
					Chipper isn't the premier dog-walking app, and the leading dog-walking
					app amongst lazy people. We have well over 500,000 users, so sign up
					and be apart of the Chipper Gang!
				</p>
			</div>
			<div
				className='ownerIntroOpen'
				ref={(el) => {
					ownerItem = el;
				}}>
				<h3>Owner</h3>
				<p>
					Are you a lazy person? Here you can sign up you and your dog so a
					physcailly active specimen can retrieve your dog and show them what a
					real owner is like!
				</p>
				<button>View</button>
			</div>
			<div
				className='walkerIntroOpen'
				ref={(el) => {
					walkerItem = el;
				}}>
				<h3>Walker</h3>
				<p>
					Are you that specimen? Well, good news! Sign up here to earn money by
					walking a furry animal for 30 minutes while their owner eats cheetos
					and pays minecraft.
				</p>
				<button>View</button>
			</div>
			<div
				className='sitterIntroOpen'
				ref={(el) => {
					sitterItem = el;
				}}>
				<h3>Sitter</h3>
				<p>
					So you didnt like owner or walker huh? Well, if you thought it could
					get any better, your gonna be disappointed! Sign up here to become a
					dog sitter, and sit on dogs!
				</p>
				<button>View</button>
			</div>
		</div>
	);
}

export default Landing;
