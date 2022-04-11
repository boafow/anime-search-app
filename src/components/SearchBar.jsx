import React, { Component } from 'react'
import axios from 'axios'
import Results from './Results'

export class SearchBar extends Component {
    state = {
        query: '',
        results: [],
        image_src: '',
        airing: ''
    }

    getInfo = () => {
        axios.get(`https://api.jikan.moe/v3/search/anime?q=${this.state.query}`)
        .then(({ data }) => {
                this.setState({results: data.results})
                this.setState({image_src: data.image_url})
                this.setState({airing: data.airing})
            })
    }

    handleInputChnge = () => {
        this.setState({
            query: this.searchBar.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length > 3) {
                    this.getInfo()
                }
            } else if (!this.state.query) {
            }
        })
    }

    onSubmit = () => {
        //bring up page with all results
    }

    render() {
        return (
            <form /*onSubmit={this.onSubmit}*/>
               <input
               placeholder = 'Enter an anime or manga'
               ref = {input => this.searchBar = input}
               onChange={this.handleInputChnge}
               style = {searchStyle}
                />
                <Results results={this.state.results}/>
            </form>
        )
    }
}

// Proptypes
const searchStyle = {
    width: '100%'
}

export default SearchBar
