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
                className="card flex flex-col columns-3 bg-cyan-200 shadow-md rounded-md border border-cyan-300 border-solid">
                <div className="flex flex-row gap-2 card-header bg-cyan-400 rounded-t-md p-2 border-b border-cyan-900 border-solid">
                    <img src={this.props.commit.commiter_avatar_url} className="avatar" alt="avatar" />
                    <div>
                        <p><strong>Committer:</strong> <span>{this.props.commit.committer.name}</span></p>
                        <p><strong>Date:</strong> <span>{moment(this.props.commit.committer.date).utc().format('YYYY-MM-DD')}</span></p>
                    </div>
                </div>
                <div className="flex flex-col h-full p-2">
                    <strong>Message:</strong>
                    <p className="rows-1">{this.props.commit.message}</p>
                    <p className="text-right"><a href={this.props.commit.commiter_html_url} target="_blank" className="rows-1">Url de {this.props.commit.committer.name}</a></p>

                    <p><strong>Author:</strong> <span>{this.props.commit.author.name}</span></p>
                    <p><strong>Url:</strong> <a href={this.props.commit.author_html_url} target="_blank" >{this.props.commit.author.name}</a></p>
                </div>
                <div className="bottom-10 p-1 text-center">
                    <button className="button-esp px-8 py-2 text-cyan-50" onClick={this.goDetail}>Details</button>
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