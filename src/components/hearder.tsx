import React, { Component } from "react";
import logo from "../assets/img/Octocat.png";

class Header extends Component {
    render(): React.ReactNode {
        return (
            <header id=" header"
                className="flex flex-row flex-wrap text-center justify-center md:justify-between md:items-center w-full h-20 bg-cyan-500 text-cyan-50 drop-shadow-md menu px-52">

                <div className="columns-2 p-0 logo-name">
                    <a href="#">
                        <img src={logo} alt="logo" className="logo" />
                        <span className="text-cyan-100 drop-shadow-md font-bold">HitHub Commits</span>
                    </a>
                </div>
                <div className="flex flex-row p-0 ">
                    <ul className="flex flex-row h-full w-96 px-2 justify-between">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Commits</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Surprise</a>
                        </li>
                    </ul>
                </div>

            </header>
        );
    };
}

export default Header;