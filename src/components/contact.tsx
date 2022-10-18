import React, { Component } from "react";
import axios from 'axios';
import Global from "../Global";
import SimpleReactValidator from "simple-react-validator";
import swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


class Contact_comp extends Component {
    public emailRef = React.createRef();
    public msgRef = React.createRef();
    public validator = null;
    state = {
        message: {},
        status: null
    }
    constructor(

    ) {
        super();
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'This field is required',
                alpha: 'Do not accept numbers',
            }
        })
    }
    changeState = () => {
        this.setState({
            message: {
                email: this.emailRef.current.value,
                msg: this.msgRef.current.value,
            },
            status: "success",
        });
    }
    sendMessage = (e) => {
        e.preventDefault();
        this.changeState();

        axios.post(Global.url + 'sendmail', this.state.message)
            .then(res => {
                const { msg } = res.data;
                if (msg == 'success') {
                    swal.fire({
                        title: 'Your message was sent successfully!',
                        icon: 'success',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                    this.props.navigate('/');
                }
            })
            .catch(err => {

            });

    }

    render(): React.ReactNode {
        const message = this.state.message;
        return (
            <div className="flex relative justify-center items-center bg-cyan-200 shadow-lg border-2 p-2 border-cyan-300 rounded-md">
                <form className="w-3/6" onSubmit={this.sendMessage}>
                    <div className="flex flex-col gap-1 ">
                        <label htmlFor="email" className="block text-md font-medium text-cyan-900">Email</label>
                        <input type="text" name="email" className="bg-cyan-100 border-2 border-cyan-200 rounded-md shadow" defaultValue={message.email} onChange={this.changeState} ref={this.emailRef} required />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="content" className="block text-sm font-medium text-cyan-900">Message</label>
                        <textarea name="content" className="bg-cyan-100 border-2 border-cyan-200 rounded-md shadow" defaultValue={message.msg} onChange={this.changeState} ref={this.msgRef} required ></textarea>
                    </div>
                    <div className=""></div>
                    <input type="submit" value="Send" className="button-esp px-8 py-2 text-cyan-50 m-1" />
                </form >
            </div>
        );
    }
}

function Contact(props) {
    let navigate = useNavigate();
    return (<Contact_comp {...props} navigate={navigate} />);
}

export default Contact;