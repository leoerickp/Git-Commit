import React, { Component } from "react";
import Card_Commit_List from "./card_commit_list";
import Slide_Wrapper from './slide_wrapper';

class Home extends Component {
    render(): React.ReactNode {
        return (
            <>
                <Slide_Wrapper />
                <Card_Commit_List />
            </>
        );
    }
}

export default Home;