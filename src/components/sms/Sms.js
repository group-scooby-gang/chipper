import React from 'react';
import { connect } from 'react-redux';
import { sendSms, handleChange } from '../../redux/twillioReducer';
const Sms = (props) => {
	const { name, message, number, userNumber } = props;

	// const handleSubmit = () => props.sendSms(name, message, number, userNumber);

	const handleChange = (e) => {
		console.log(name, message, number, userNumber);
		props.handleChange({ [e.target.name]: e.target.value });
	};

	return (
		<div>
			<form>
				<h1>{name}</h1>
				<h1>{message}</h1>
				<h1>{number}</h1>
				<h1>{userNumber}</h1>
				<input
					name='name'
					onChange={handleChange}
					type='text'
					placeholder='name'
				/>
				<input
					name='message'
					onChange={handleChange}
					type='text'
					placeholder='message'
				/>
				<input
					name='number'
					onChange={handleChange}
					type='text'
					placeholder='number'
				/>
				<input
					name='userNumber'
					onChange={handleChange}
					type='text'
					placeholder='userNumber'
				/>
				<button
					onClick={() => sendSms(number, name, userNumber, message)}
					type='submit'>
					Send SMS
				</button>
			</form>
		</div>
	);
};
function mapStateToProps(reduxState) {
	return {
		name: reduxState.TR.name,
		message: reduxState.TR.message,
		number: reduxState.TR.number,
		userNumber: reduxState.TR.userNumber
	};
}
export default connect(mapStateToProps, { handleChange, sendSms })(Sms);
// export default connect(mapStateToProps, { sendSms, handleChange }(Sms));
// const Sms = () => {
// 	// const sendText = () =>  axios.post('/sendText')
// 	const sendMessage = (number, name) => {
// 		const userNumber = '5742347485';
// 		const message = 'YOU BETTER NOT MESS WITH MY DOG';
// 		axios
// 			.post('http://localhost:6942/sms', { number, name, userNumber, message })
// 			.then((res) => {
// 				if (res.data.success === true) {
// 					alert(`Message was successfully sent to ${name}.`);
// 				} else {
// 					alert('Sorry. Message was not sent successfully. Please try again.');
// 				}
// 			});
// 	};
// 	return (
// 		<div>
// 			<h1>SMS</h1>
// 			<button onClick={() => sendMessage('+13213008963', 'Bob Dylan')}>
// 				Send Text
// 			</button>
// 		</div>
// 	);
// };

// export default Sms;
