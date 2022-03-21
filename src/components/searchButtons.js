import React from 'react';
import '../index.css';

import ElementList from './elementList';

export default class SearchButtons extends React.Component {

    render() {
        return(
            <div className="container">
                <div className="search-buttons-container">
                    <button className="search-button search-button-2021">2021</button>
                    <button className="search-button search-button-2022">2022</button>

                    <input className="search-box-input" type="text" placeholder="Search..."/>
                </div>

                <ElementList/>
            </div>
      );
    }
}