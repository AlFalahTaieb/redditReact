import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Table from './Table.js'
import Button from './Button.js'
import Search from './Search.js'

const DEFAULT_QUERY = 'aww';
const PATH_BASE = "https://www.reddit.com/r/";
const TOP_SEARCH = '/top.json?limit=100';

// const isSearched = searchTerm => item =>
//   item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  // _isMounted = false;

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
    // this.needToSearchTopStories = this.needToSearchTopStories.bind(this);
    // this.setSearchTopStories = this.setSearchTopStories.bind(this);
  }

  needToSearchTopStories(searchTerm) {
    return !this.state.results[searchTerm];
  }
  // setSearchTopStories(response) {
  //   this.setState({ response });
  // }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }



  fetchSearchTopStories(searchTerm) {

    axios.get(`${PATH_BASE}${searchTerm}${TOP_SEARCH}`, { responseType: 'json' })
      .then(response => {
        const tab = (response.data.data.children)
        const results = tab.map(table => {
          return {
            url: table.data.url,
            author: table.data.author,
            score: table.data.score,
            title: table.data.title
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

  onDismiss(id) {
    const { searchKey, results } = this.state;
    const { hits } = results[searchKey];

    const isNotId = item => item.objectID !== id;
    const updatedHits = hits.filter(isNotId);
    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: updatedHits }
      }
    })
  }

  // fetchRed(event) {
  //   axios.get(`https://www.reddit.com/r/${searchTerm}/top.json?limit=100`, { responseType: 'json' }).then(response => {
  //     const tab = (response.data.data.children)
  //     console.log(tab)
  //     for (let i = 0; i < tab.length; i++) {
  //       console.log(tab[i].data.url)
  //     }
  //   });
  // }
 
  // setSearchTopStories(response) {
  //   const { hits } = response;
  //   const { searchKey, results } = this.state
  //   console.log(this.state)
  //   const oldHits = results && results[searchKey]
  //     ? results[searchKey].hits : [];


  //   const updatedHits = [
  //     ...oldHits,
  //     ...hits
  //   ];
  //   this.setState({
  //     results: {
  //       ...results,
  //       [searchKey]: { hits: updatedHits }
  //     }
  //   });
  // }


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
          : <Table
            list={list}
            onDismiss={this.onDismiss}
          />
        }
        {/* <div className='interactions'>
          <Button onClick={() => this.fetchSearchTopStories(searchTerm)}>
            More
        </Button>
        </div> */}

      </div>
    );
  }
}

export default App;
