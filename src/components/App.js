import React from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';
const APIKEY = '4af14da77c0facb992d304766fcd1622';
class App extends React.Component {
	state = {
		error: false,
		date: '',
		sunrise: '',
		value: '',
		sunset: '',
		temp: '',
		wind: '',
		pressure: '',
		city: '',
		timezone: '',
		weather: ''
	};
	handleChange = (e) => {
		this.setState({
			value: e.target.value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();

		const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state
			.value}&APPID=${APIKEY}&units=metric`;

		fetch(API)
			.then((response) => {
				if (response.ok) {
					return response;
				}
				throw Error('Nie udało się');
			})
			.then((response) => response.json())
			.then((data) => {
				const time = new Date().toLocaleString();

				this.setState((prevState) => ({
					error: false,
					date: time,
					city: prevState.value,
					sunrise: data.sys.sunrise,
					sunset: data.sys.sunset,
					temp: data.main.temp,
					wind: data.wind.speed,
					pressure: data.main.pressure,
					timezone: data.timezone,
					value: '',
					weather: data.weather[0].main
				}));
			})
			.catch((err) => {
				this.setState((prevState) => ({
					error: true,
					city: prevState.value
				}));
			});
	};

	render() {
		return (
			<div className="wrapper">
				<div className="app">
					<Form submit={this.handleSubmit} change={this.handleChange} value={this.state.value} />
					<Result weather={this.state} error={this.state.error} />
				</div>
			</div>
		);
	}
}

export default App;
