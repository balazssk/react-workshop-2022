import './App.css';
import Amount from './components/Amount';
import React from 'react';


class App extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			eur: 0,
			exchangeRate: Math.random() * 10000
		};
		
	}

	handleChange = (event) => {
		this.setState((state, props) => ({
			eur: event.target.value
		}));
	}
  
	render() {
		return (
			<div className="App">
				<Amount
					id="euros"
					className={this.state.eur < 0 ? "red" : ""}
					handleChange={this.handleChange}
					name="Euros"
					value={this.state.eur} />
				<Amount
					id="btc"
					name="$BTC"
					readOnly={true}
					value={this.state.eur * this.state.exchangeRate} />
			</div>
		);
	}

}

export default App;
