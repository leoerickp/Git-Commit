import React, { Component } from "react";
import Card_Commit from './card_commit';
class Card_Commit_List extends Component {
    render(): React.ReactNode {
        return (
            <div className="flex flex-row flex-wrap px-5 md:px-10 mt-4 gap-y-7 justify-center md:justify-between flex-wrap">
                <Card_Commit />
                <Card_Commit />
                <Card_Commit />
            </div>
        );
    }
}

export default Card_Commit_List;