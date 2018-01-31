import React, { Fragment, Component } from 'react';
import Product from './Product';
export default class Products extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <div className="col s12 list">
                    <label className="list_title">Products</label>
                </div>
                <Product/>
            </Fragment>
        )
    }
}