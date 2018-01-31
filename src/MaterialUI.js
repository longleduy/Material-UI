import React, { Fragment, Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Message from './components/Message';
import Card from './components/Card';
export default class MaterialUI extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <div className="row">
                    <Header />
                    <div className="container">
                        <Products />
                        <Message />
                        <Card />
                    </div>
                    <Footer />
                </div>
            </Fragment>
        )
    }
}
