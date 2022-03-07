import React from 'react';
import '../index.css';
import table from "./table";

export default class ElementList extends React.Component {
    render() {
        return(
            <div>
                    {this.props.yearCard==='2021' && 
                        <div className="element-list-container">
                            {table.map((book)=>(
                            <div className="element" key={book.book_name} style={{display: + (book.book_releaseYear === 2022 && 'none')}}>
                                <div className="element-img"><img src={book.book_releaseYear === 2021 ? book.book_photography : undefined} alt="img"/></div>
                                <div className="element-title">{book.book_releaseYear === 2021 && book.book_name}</div>
                            </div>
                            ))} 
                        </div>
                    }

                    {this.props.yearCard==='2022' && 
                        <div className="element-list-container">
                            {table.map((book)=>(
                            <div className="element" key={book.book_name} style={{display: + (book.book_name === ' ' && 'none')}}>
                                <div className="element-img"><img src={book.book_releaseYear === 2022 ? book.book_photography: undefined} alt="img"/></div>
                                <div className="element-title">{book.book_releaseYear === 2022 && book.book_name}</div>
                            </div>
                            ))} 
                        </div>
                    } 
            </div>
      );
    }
}