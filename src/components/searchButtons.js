import React from 'react';
import '../index.css';

import ElementList from './elementList';

export default class SearchButtons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {yearCard: '2021',value: '',}
    }
   
    toggleMe=(value)=>{
        this.setState({
            yearCard: value,
        })

        console.log(value);
    }

    inputChangedHandler=(event)=>{
        this.setState({
           value: event.target.value
        })

        console.log(this.state.value);
    }

    render() {
        return(
            <div className="container">
                <div className="search-buttons-container">
                    <button onClick={()=>this.toggleMe('2021')} className="search-button search-button-2021">2021</button>
                    <button onClick={()=>this.toggleMe('2022')} className="search-button search-button-2022">2022</button>

                    <input className="search-box-input" type="text" placeholder="Search..." onChange={this.inputChangedHandler} />
                </div>

                <ElementList yearCard={this.state.yearCard} filterText={this.state.value}/>
            </div>
      );
    }
}