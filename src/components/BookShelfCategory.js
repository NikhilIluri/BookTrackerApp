import React from 'react';
import BookShelf from './BookShelf.js';
import {Link} from 'react-router-dom';

const bookShelfCategory = (props) => {
  return(
  		<div className="list-books">
                <div className="list-books-content">
                    <div>
                        <BookShelf title='Currently Reading' books={props.currentlyReading}
                                   onShelfChange={props.onShelfChange}/>
                        <BookShelf title='Want to Read' books={props.wantToRead}
                                   onShelfChange={props.onShelfChange}/>
                        <BookShelf title='Read' books={props.read}
                                   onShelfChange={props.onShelfChange}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
  		)
}

export default bookShelfCategory