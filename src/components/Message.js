import React, { Fragment, Component } from 'react';

export default class Message extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <div className="col s12 message" style={{display:'none'}}>
                    <label className="message_title .text-shadow-1">Done !</label>
                </div>
            </Fragment>
        )
    }
}