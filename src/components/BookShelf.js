import React from 'react';
import Book from "./Book.js";

const bookShelf = (props) => {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.title}</h2>
                <div className="bookshelf-books">
					<p className="shelf-length">
					{props.books.length > 0 ? `${props.books.length} book(s) in this shelf`: "Currently no books in this shelf" }
					</p>
                    <ol className="books-grid">
                        {
                            props.books.map((book) => {
                                return <li key={book.id}>
                                    <Book book={book} onShelfChange={props.onShelfChange}/>
                                </li>
                            })
                        }
                    </ol>
                </div>
            </div>
        )
}

export default bookShelf