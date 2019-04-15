import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Title from './components/Title';
import BookShelfCategory from "./components/BookShelfCategory";
import SearchBar from "./components/SearchBar";
import {Route} from 'react-router-dom';


class BooksApp extends Component {
    state = {
      books : []
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({books})
        })
    }

    onShelfChange = (book, shelf) => {
        BooksAPI.update(book, shelf).then(
                this.setState((state) => ({
                    books: state.books.map(b => {
                        if (b.title === book.title) {
                            b.shelf = shelf;
                        }
						return b
                    })
                }))
            )
    }

    render() {
        const {books} = this.state;
        const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading')
        const wantToRead = books.filter((book) => book.shelf === 'wantToRead')
        const read = books.filter((book) => book.shelf === 'read')

        return (
            <div className="app">
                <Route path="/" exact render={() => (
                    <div>
                      <Title />
                      <BookShelfCategory
                      currentlyReading={currentlyReading}
                      wantToRead={wantToRead}
                      read={read}
                      onShelfChange={this.onShelfChange}
            		  />        
                    </div>
                )}/>
                <Route path="/search" render={({history}) => (
                    <SearchBar
                        onShelfChange={this.onShelfChange}
                        history={history}
                        books={currentlyReading.concat(wantToRead, read)}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp