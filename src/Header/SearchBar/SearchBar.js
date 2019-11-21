import React,{Component} from 'react';
import './SearchBar.css'
import Button from 'react-bootstrap/Button';
class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <form action="submit">
                    <input className="search-input" type="search" placeholder="Search"/>
                    <Button className="search-button" type="submit" variant="dark">Search</Button>
                </form>
            </div>
        );
    }
}
export default SearchBar;