import React, { Fragment, Component } from 'react';
import CardItem from './CardItem';
import CardResult from './CardResult';
export default class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <div className="col s12 card_list unset_padding">
                    <table className="responsive-table centered">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                           <CardItem/>
                           <CardResult/>
                        </tbody>
                    </table>
                </div>
            </Fragment>
        )
    }
}