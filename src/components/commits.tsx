import React, { Component } from "react";
import axios from 'axios';
import Card_Commit_H from './card_commit_h';
import Global from "../Global";

class Commits extends Component {
    state = { commits: [] };
    componentDidMount(): void {
        axios.get(Global.url + 'git-commits/all')
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
                    < Card_Commit_H key={key} commit={commit} />
                );
            });
            return (
                <div className="flex flex-row flex-wrap px-5 md:px-10 mt-4 gap-y-7 justify-center md:justify-between flex-wrap">
                    {commitsList}
                </div>
            );
        }
        return (
            <div className="flex flex-col h-screen m-0">

            </div>
        )
    }
}

export default Commits;