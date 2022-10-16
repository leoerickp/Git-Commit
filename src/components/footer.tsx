import React, { Component } from "react";

class Footer extends Component {
    render(): React.ReactNode {
        return (
            <footer id="footer" className="bg-cyan-900 text-white py-5 text-center text-cyan-50 absolute w-full bottom-0">
                <p>
                    &copy; Leo Erick Pereyra Rodriguez - 2022
                </p>
            </footer>
        )
    }
}

export default Footer;