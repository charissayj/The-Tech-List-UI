import React, { Component } from 'react';
import './App.css';
import Figures from './components/Figures.js';

class App extends Component {
    state = {
        figures: []
    };

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + 'list')
            .then(res => res.json())
            .then((data) => {
                this.setState({ figures: data.peopleArray })
            })
            .catch(console.log)
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>The Tech List - Influential Figures in Tech</h1>
                </header>
                <Figures className="figure-list" figures={this.state.figures} />
            </div>
        );
    }

}

export default App;
