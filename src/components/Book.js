import React, {Component} from 'react';

class Book extends Component {
    onBookShelfChange = (e) => {
        this.props.onShelfChange(this.props.book, e.target.value);
    };

    render() {
        const {book} = this.props
        const noImage = '../img/noCover.png'
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : noImage})`
                    }}/>
                    <div className="book-shelf-changer">
                        <select onChange={this.onBookShelfChange} defaultValue={book.shelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
				<div className="book-authors">{book.pageCount} pages</div>
            </div>);
    }
}

export default Book