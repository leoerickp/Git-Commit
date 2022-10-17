import React, { Component } from "react";
import moment from "moment";
import { useNavigate } from 'react-router-dom';


class Card_Commit_H_comp extends Component {
    goDetail = () => {
        const { commit } = this.props;
        this.props.navigate('/detail', { state: { commit } });
    }
    render(): React.ReactNode {

        return (
            <div
                className="flex flex-col gap-1 bg-cyan-200  shadow-none hover:shadow-lg rounded-md border border-cyan-300 border-solid w-full ">
                <div className="flex flex-row gap-1 bg-cyan-400 rounded-t-md p-2 border-b border-cyan-900 border-solid w-full">
                    <img src={this.props.commit.commiter_avatar_url} className="avatar" alt="avatar" />
                    <div>
                        <strong>Committer:</strong> <span>{this.props.commit.committer.name} | </span>
                        <strong>Date:</strong><span>{moment(this.props.commit.committer.date).utc().format('YYYY-MM-DD')} | </span>
                        <strong>Email:</strong> <span>{this.props.commit.committer.email} </span>
                        <strong>| Url:</strong><a href={this.props.commit.commiter_html_url} target="_blank" className="rows-1">{this.props.commit.committer.name}</a>
                        <p><strong>Message:</strong> {this.props.commit.message}</p>
                    </div>
                </div>
                <div className="p-2">
                    <p>
                        <strong>Author:</strong> <span>{this.props.commit.author.name} | </span>
                        <strong>Url:</strong> <a href={this.props.commit.author_html_url} target="_blank" >{this.props.commit.author.name}</a>
                    </p>
                </div>

            </div >
        );
    }
}
function Card_Commit_H(props) {
    let navigate = useNavigate();
    return (<Card_Commit_H_comp {...props} navigate={navigate} />);
}


export default Card_Commit_H;