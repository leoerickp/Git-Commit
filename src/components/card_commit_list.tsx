import React, { Component } from "react";
import axios from 'axios';
import Card_Commit from './card_commit';
import Global from "../Global";

class Card_Commit_List extends Component {

    state = { commits: [] };
    componentDidMount(): void {
        axios.get(Global.url + 'git-commits/last')
            .then((res) => {
                //console.log(Global.url, res.data);
                this.setState({
                    commits: res.data
                });
            })
            .catch((err) => {

            });
    }
    render(): React.ReactNode {
        if (this.state.commits) {
            const commitsList = this.state.commits.map((commit, key) => {
                return (
                    < Card_Commit key={key} commit={commit} />
                );
            });
            return (
                <div className="flex flex-row flex-wrap px-5 md:px-10 mt-4 gap-y-7 justify-center md:justify-between flex-wrap">
                    {commitsList}
                </div>
            );
        }
    }
}

export default Card_Commit_List;