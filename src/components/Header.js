import React, { Fragment, Component } from 'react';
export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col s12 header unset_padding">

                    <div className="col s12 baner unset_padding">

                    </div>
                    <div className="col s12 menu unset_padding">
                    <nav>
                        <div className="nav-wrapper">
                            <a href="#!" className="brand-logo center">Unix</a>
                            <ul className="left hide-on-med-and-down">
                                <li><a href="#">GTX</a></li>
                                <li className="active z-depth-5" ><a href="#">GTX Titan</a></li>
                            </ul>
                        </div>
                    </nav>


                </div>
            </div>
        )
    }
}