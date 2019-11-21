import React, {Component} from "react";
import "./Header.css";
import SearchBar from "./SearchBar/SearchBar";
import UserMenu from "./UserMenu/UserMenu";
import logo from './logo.png';

class Header extends Component{
    render() {
        return (
                <div className="App-header">
                    <img className="app-logo" src={logo} alt="logo"/>
                    <SearchBar/>
                    <UserMenu/>
                </div>
        );
    }
}
export default Header;

