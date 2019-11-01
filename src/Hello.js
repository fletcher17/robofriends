import React from 'react';
import './Hello.css';

function Hello(props) {
	return (
	   <div>
	   <h1>Hello World</h1>
	   <p>{props.greeting}</p>
	   </div>
	);
}

export default Hello;