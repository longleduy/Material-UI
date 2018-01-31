import React, { Fragment, Component } from 'react';

export default class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <div className="col s4">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="http://noscomputerstucson.com/wp-content/uploads/2016/12/Nvidia20GTX20106020game20ready.jpg" />
                            <ul className="rating">
                                <li>
                                    <i className="small material-icons">grade</i>
                                </li>
                                <li>
                                    <i className="small material-icons">grade</i>
                                </li>
                                <li>
                                    <i className="small material-icons">grade</i>
                                </li>
                                <li>
                                    <i className="small material-icons">grade</i>
                                </li>
                                <li>
                                    <i className="small material-icons">grade</i>
                                </li>
                            </ul>
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text">GTX 1060<i className="material-icons right">more_vert</i></span>
                            <p><a href="#">Nvdia Company</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                        <a href="#" className="waves-effect waves-light card-price">
                            <label>49$</label>
                            <i className="small material-icons">add_circle_outline</i>
                        </a>
                    </div>
                </div>
                <div className="col s4">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="https://images10.newegg.com/BizIntell/item/14/137/14-137-033/k02_083016.jpg" />
                            <ul className="rating">
                                <li>
                                    <i className="small material-icons">grade</i>
                                </li>
                                <li>
                                    <i className="small material-icons">grade</i>
                                </li>
                                <li>
                                    <i className="small material-icons">grade</i>
                                </li>
                                <li>
                                    <i className="small material-icons">grade</i>
                                </li>
                                <li>
                                    <i className="small material-icons">grade</i>
                                </li>
                            </ul>
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text">GTX Titan<i className="material-icons right">more_vert</i></span>
                            <p><a href="#">Nvdia Company</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                        <a href="#" className="waves-effect waves-light card-price">
                            <label>49$</label>
                            <i className="small material-icons">add_circle_outline</i>
                        </a>
                    </div>
                </div>
                <div className="col s4">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="http://3.bp.blogspot.com/-qHRF5bXJDaU/Vqwzh8PiRKI/AAAAAAAAAUo/hGoVsT_anN8/s1600/gtx_980.jpg" />
                            <ul className="rating">
                                <li>
                                    <i className="small material-icons">grade</i>
                                </li>
                                <li>
                                    <i className="small material-icons">grade</i>
                                </li>
                                <li>
                                    <i className="small material-icons">grade</i>
                                </li>
                                <li>
                                    <i className="small material-icons">grade</i>
                                </li>
                            </ul>
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text">GTX 980<i className="material-icons right">more_vert</i></span>
                            <p><a href="#">Nvdia Company</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                        <a href="#" className="waves-effect waves-light card-price">
                            <label>49$</label>
                            <i className="small material-icons">add_circle_outline</i>
                        </a>
                    </div>
                </div>

            </Fragment>
        )
    }
}