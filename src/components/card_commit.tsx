import React, { Component } from "react";

class Card_Commit extends Component {
    render(): React.ReactNode {
        return (
            <div
                className="card flex flex-col columns-3 bg-cyan-100 shadow-md rounded-md border border-cyan-200 border-solid">
                <div className="card-header bg-cyan-400 rounded-t-md border-b border-cyan-900 border-solid">

                </div>
                <div className="h-full">

                </div>
                <div className="bottom-10 p-1">
                    <button className="button-esp px-8 py-2 text-cyan-50">Details</button>
                </div>
            </div>
        );
    }
}

export default Card_Commit;