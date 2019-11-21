import React,{Component} from "react";
import Icon from "./Icon/Icon";
import Item from './Menu/Item/Item';
import './UserMenu.css';

class UserMenu extends Component {
    render() {
        return(
         <div className='menu-container'>
             <Icon/>
             <Item/>
         </div>
        );
    }
}

export default UserMenu;