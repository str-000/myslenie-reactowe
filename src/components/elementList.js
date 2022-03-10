import React from 'react';
import '../index.css';
import table from "./table";

export default class ElementList extends React.Component {
    render() {
        return(
            <div>
                    {this.props.yearCard==='2021' &&
                        <div className="element-list-container">
                            {table.map((book) => (book.book_releaseMonth === 1 && this.outRow(2021)))}
                        </div>
                    }

                    {this.props.yearCard==='2022' && 
                        <div className="element-list-container">
                            {table.map((book) => (book.book_releaseMonth === 1 && this.outRow(2020)))}
                        </div>
                    } 
            </div>
      );
    }

    outRow(year) {
        return <div className="element-list-row">
            {table.filter(book => {
                if (this.props.filterText === '') {
                    return book;
                } else if (book.book_name.toLowerCase().includes(this.props.filterText.toLowerCase())) {
                    return book;
                }
            }).map((book) => (book.book_releaseYear === year &&
                out(book)
            ))}
        </div>;
    }
}

function out(book) {
    return <div className="element" key={book.book_name}>
        <div className="element-img"><img src={book.book_photography} alt="img" /></div>
        <div className="element-title">{book.book_name}</div>
    </div>;
}
