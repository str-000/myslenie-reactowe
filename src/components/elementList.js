import React from 'react';
import '../index.css';
import table from "./table";

export default class ElementList extends React.Component {
    render() {
        return(
            <div>
                    {this.props.yearCard==='2021' && 
                        <div className="element-list-container"> 
                            {this.outRow(2021, 1)}{this.outRow(2021, 2)}{this.outRow(2021, 3)}
                            {this.outRow(2021, 4)}{this.outRow(2021, 5)}{this.outRow(2021, 6)}
                            {this.outRow(2021, 7)}{this.outRow(2021, 8)}{this.outRow(2021, 9)}
                            {this.outRow(2021, 10)}{this.outRow(2021, 11)}{this.outRow(2021, 12)}
                        </div>
                    }

                    {this.props.yearCard==='2022' && 
                        <div className="element-list-container">
                            {this.outRow(2022, 1)}{this.outRow(2022, 2)}{this.outRow(2022, 3)}
                            {this.outRow(2022, 4)}{this.outRow(2022, 5)}{this.outRow(2022, 6)}
                            {this.outRow(2022, 7)}{this.outRow(2022, 8)}{this.outRow(2022, 9)}
                            {this.outRow(2022, 10)}{this.outRow(2022, 11)}{this.outRow(2022, 12)}
                        </div>
                    } 
            </div>
      );
    }

    outRow(year, month) {
        return <div className="element-list-row" key={month}>
            {table.filter(book => {
                if (this.props.filterText === '') {
                    return book;
                } else if (book.book_name.toLowerCase().includes(this.props.filterText.toLowerCase())) {
                    return book;
                }
            }).map((book) => ((book.book_releaseYear === year && book.book_releaseMonth === month) &&
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
