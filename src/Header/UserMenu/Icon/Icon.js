import React,{Component} from "react";
import './Icon.css';


class Icon extends Component{
    render() {
        return(
            <div>
                    <img   onClick={this} className="user-icon"  src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" alt=""/>
            </div>
        );
    }
}
export default Icon;