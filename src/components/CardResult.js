import React, { Fragment, Component } from 'react';

export default class CardResult extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <tr>
                    <td colSpan="3"></td>
                    <td>
                        <label>Total $</label>
                    </td>
                    <td>
                        <label>96$</label>
                    </td>
                    <td colSpan="3">
                        <span className="waves-effect waves-light btn_icon"><i class="material-icons">check</i></span>
                    </td>
                </tr>
            </Fragment>
        )
    }
}