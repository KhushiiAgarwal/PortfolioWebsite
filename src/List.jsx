import React from 'react';

export default function App() {
return (
	<div className="App">
	<h1 style={{ color: 'green' }}>GeeksforGeeks</h1>
	<h3>Ordered-Lists in React</h3>
	
		<div style={{ display: 'inline', float: 'left' }}>
		<h5 style={{ color: 'red' }}>No Bullet</h5>
		<ol style={{ listStyle: 'none' }}>
			<li>Apple</li>
			<li>Orange</li>
			<li>Guava</li>
		</ol>
		<h5 style={{ color: 'red' }}>List-Decimal</h5>
		<ol style={{ listStyleType: 'decimal' }}>
			<li>Banana</li>
			<li>Pineapple</li>
			<li>Cherry</li>
		</ol>
		<h5 style={{ color: 'red' }}>List-Lower-Alpha</h5>
		<ol style={{ listStyleType: 'lower-alpha' }}>
			<li>Strawberry</li>
			<li>Grapes</li>
			<li>Melon</li>
		</ol>
		<h5 style={{ color: 'red' }}>List-Lower-Latin</h5>
		<ol style={{ listStyleType: 'lower-latin' }}>
			<li>Water-melon</li>
			<li>Litchi</li>
			<li>Kiwi</li>
		</ol>
		</div>
		<div style={{ display: 'inline', marginRight: '50px' }}>
		<h5 style={{ color: 'red' }}>List-Lower-Roman</h5>
		<ol type="lower-roman" style={{ listStyleType: 'lower-roman' }}>
			<li>Dragon-Fruit</li>
			<li>Mango</li>
			<li>Apricots</li>
		</ol>
		<h5 style={{ color: 'red' }}>List-Upper-Alpha</h5>
		<ol style={{ listStyleType: 'upper-alpha' }}>
			<li>Avocadoes</li>
			<li>Lemon</li>
			<li>Pear</li>

		</ol>
		<h5 style={{ color: 'red' }}>List-Upper-Latin</h5>
		<ol style={{ listStyleType: 'upper-latin' }}>
			<li>Mandarins</li>
			<li>Dates</li>
			<li>Raspberry</li>
		</ol>
		<h5 style={{ color: 'red' }}>List-Upper-Roman</h5>
		<ol style={{ listStyleType: 'upper-roman' }}>
			<li>Gooseberry</li>
			<li>Bore</li>
			<li>Peaches</li>
		</ol>
		</div>
	
	</div>
);
}
