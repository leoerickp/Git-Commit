import React, { Component } from "react";
import surprise_logo from '../assets/img/05.png';
class Surprise extends Component {
    render(): React.ReactNode {
        return (
            <div className="flex flex-col justify-center items-center bg-cyan-200 shadow-lg border-2 pt-2 border-cyan-300 rounded-md">
                <img src={surprise_logo} className="w-4/6" />
                <div className="bg-cyan-900 opacity-70 px-10 text-xl text-white text-center w-1/2 sticky bottom-0 rounded-t-md">
                    Thanks!!! ... see you soon
                </div>
            </div>
        )
    }
}

export default Surprise;