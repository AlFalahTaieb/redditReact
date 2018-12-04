import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Table1 from './Table.js'
import Search from './Search.js'
const DEFAULT_QUERY = 'aww'
const PATH_BASE = "https://www.reddit.com/r/"
const TOP_SEARCH = '/top.json?limit=100'
const NEW_SEARCH = '/new.json?limit=100'
const ALLTIMETOP_SEARCH = '/top/.json?limit=100?sort=top&t=all'  


class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      results: null,
      searchTerm: DEFAULT_QUERY,
      searchKey: '',
      error: null
    }
    this.onSearchChange = this.onSearchChange.bind(this)
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.imgurLink = this.imgurLink.bind(this);

  }

  needToSearchTopStories(searchTerm) {
    return !this.state.results[searchTerm];
  }

   imgurLink(str){
    let rectif = '.jpg'
    if (!/(\.).*\1/.test(str) == true){
    return str=str+rectif
    }
    }


  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }



  fetchSearchTopStories(searchTerm) {
    const red = 'https://www.reddit.com'
    axios.get(`${PATH_BASE}${searchTerm}${TOP_SEARCH}`, { responseType: 'json' })
      .then(response => {
        const tab = (response.data.data.children)
        const results = tab.map(table => {
          // url=this.imgurLink(table.data.url)
          return {
            url: table.data.url,
            author: table.data.author,
            score: table.data.score,
            title: table.data.title,
            permalink:red+table.data.permalink
          }
        })
        return this.setState({
          results: { results }

        })
      })
  }

  componentDidMount() {
    this._isMounted = true
    const { searchTerm } = this.state
    this.setState({ searchKey: searchTerm })
    this.fetchSearchTopStories(searchTerm)

  }



  onSearchSubmit(event) {

    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm })
    if (this.needToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm);
    }
    event.preventDefault();

  }

    componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const {
      searchTerm,
      results,
      searchKey,
      error,
    } = this.state;

    const list = (
      (results && results.results))
      || []
    if (!results) { return null; }
    return (
      <div className="page">
        <div className="interactions">

          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
      </Search>

        </div>
        {error
          ? <div className='interactions'>
            <p>Something wen wrong.</p>
          </div>
          : <Table1
            list={list}
          />
        }
      </div>
    );
  }
}

export default App;
