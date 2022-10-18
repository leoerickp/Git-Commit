import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Commits from "./commits";
import Contact from "./contact";
import Home from "./home";
import Surprise from "./surprise";
import Detail from './detail';
import Error from "./error404";


class Router extends Component {
    render(): React.ReactNode {
        return (
            <div className="flex justify-center items-center">
                <div className="clear-both float-none"></div>
                <div className="container md p-5 bg-cyan-100 text-tahiti pt-2 w-9/12 mb-16">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/commits" element={<Commits />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/surprise" element={<Surprise />} />
                        <Route path="/detail" element={<Detail />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </div>
            </div >
        );
    }
}

export default Router;