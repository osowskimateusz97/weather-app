import React from 'react';
import './Result.css';
const Result = (props) => {
	//destrukturyzacja
	const { error, date, sunrise, value, sunset, temp, wind, pressure, city, timezone, weather } = props.weather;
	let content = null;

	if (!error && city) {
		const sunriseTime = new Date((sunrise + timezone - 3600) * 1000).toLocaleTimeString();
		const sunsetTime = new Date((sunset + timezone - 3600) * 1000).toLocaleTimeString();
		content = (
			<React.Fragment>
				<h1 className="city">{city}</h1>
				<div className={'wrapperContent'}>
					<div className={'photoContainer'}>
						<div className={`${weather}`} />
					</div>
					<div className={'text'}>
						<p>
							Dane dla dnia i godziny: <span>{date}</span>
						</p>
						<p>
							Aktualna temperatura: <span>{temp}&#176;C</span>
						</p>
						<p>
							Wschód słońca: <span>{sunriseTime}</span>
						</p>
						<p>
							Zachód słońca: <span>{sunsetTime}</span>
						</p>
						<p>
							Aktualna siła wiatru: <span>{wind}m/s</span>
						</p>
						<p>
							Aktualne ciśnienie: <span>{pressure}hPa</span>
						</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
	return (
		<React.Fragment>
			<div className="result">{error ? `Nie mamy w bazie ${city}` : content}</div>
		</React.Fragment>
	);
};
export default Result;
