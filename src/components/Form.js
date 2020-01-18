import React from 'react';

const Form = (props) => {
	return (
		<form onSubmit={props.submit}>
			<input onChange={props.change} placeholder="Wpisz miasto" value={props.value} type="text" />
			<button>Wyszukaj miasta</button>
		</form>
	);
};
export default Form;
