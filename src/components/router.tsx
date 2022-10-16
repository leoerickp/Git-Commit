import React, { Component } from "react";
import Card_Commit_List from "./card_commit_list";
import Slide_Wrapper from './slide_wrapper';


class Router extends Component {
    render(): React.ReactNode {
        return (
            <div className="flex justify-center items-center">
                <div className="clear-both float-none"></div>
                <div className="container md p-5 bg-cyan-50 text-tahiti pt-2 w-9/12 mb-16 h-full">
                    <Slide_Wrapper />
                    <Card_Commit_List />
                </div>
            </div >
        );
    }
}

export default Router;