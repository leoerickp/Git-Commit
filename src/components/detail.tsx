import React, { Component } from "react";
import moment from "moment";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

class Detail_comp extends Component {
    state = {};

    render(): React.ReactNode {
        const { commit } = this.props;
        if (!commit) {
            return (<Navigate to={'/'} />);
        }
        return (
            <div
                className="flex flex-col columns-3 bg-cyan-200 shadow-md rounded-md border border-cyan-300 border-solid">
                <div className="flex flex-row gap-2 card-header bg-cyan-400 rounded-t-md p-2 border-b border-cyan-900 border-solid ">
                    <img src={commit.commiter_avatar_url} className="h-full drop-shadow-xl rounded-lg" alt="avatar" />
                    <div className="flex flex-col justify-between">
                        <p><strong>Committer:</strong> <span>{commit.committer.name}</span></p>
                        <p><strong>Date:</strong> <span>{moment(commit.committer.date).utc().format('YYYY-MM-DD')}</span></p>
                        <p><strong>Email:</strong> <span>{commit.committer.email}</span></p>
                    </div>
                </div>
                <div className="flex flex-col px-16">
                    <strong>Message:</strong><span>{commit.message}</span>
                    <p className="text-right"><a href={commit.commiter_html_url} target="_blank" className="rows-2"><strong>Url:</strong> {commit.committer.name}</a></p>

                    <p><strong>Author:</strong> <span>{commit.author.name}</span></p>
                    <div className="flex justify-center items-center"><img src={commit.author_avatar_url} className="flex w-fit drop-shadow-xl rounded-lg" alt="avatar" /></div>
                    <p className="text-right"><strong>Url:</strong> <a href={commit.author_html_url} target="_blank" >{commit.author.name}</a></p>
                </div>

            </div >
        );
    }
}
function Detail() {
    const { state } = useLocation();
    let commit = null;
    if (state) {
        commit = state.commit;
    }
    return (<Detail_comp commit={commit} />);
}
export default Detail;