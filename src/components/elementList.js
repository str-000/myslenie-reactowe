import React from 'react';
import '../index.css';
import table from "./table";

export default class ElementList extends React.Component {
    render() {
        return(
            <div>
                    <div className="element-list-container"> 
                        {this.outRow()}
                    </div>
            </div>
      );
    }

    outRow() {
        return <div className="element-list-row">
            {table.map((book) => (out(book)))}
        </div>;
    }
}

function out(book) {
    return <div className="element" key={book.book_name}>
        <div className="element-img"><img src={book.book_photography} alt="img" /></div>
        <div className="element-title">{book.book_name}</div>
    </div>;
}
