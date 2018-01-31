import React, { Fragment, Component } from 'react';

export default class CardItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>
                    <img className="z-depth-3" src="http://noscomputerstucson.com/wp-content/uploads/2016/12/Nvidia20GTX20106020game20ready.jpg" />
                </td>
                <td>GTX 1060</td>
                <td>49$</td>
                <td>
                    <div className="amount">
                        <i className="material-icons waves-effect waves-light">arrow_drop_up</i>
                        <label>2</label>
                        <i className="material-icons waves-effect waves-light">arrow_drop_down</i>
                    </div>
                </td>
                <td>98$</td>
                <td>
                    <span className="waves-effect waves-light btn_icon"><i className="material-icons">delete</i></span>
                </td>
            </tr>
        )
    }
}