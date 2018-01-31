import React, { Fragment, Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className="page-footer">
            <div className="footer-copyright">
              <div className="container">
              © 2018 Copyright Text
              <a className="grey-text text-lighten-4 right" href="#!">Unix</a>
              </div>
            </div>
          </footer>
        )
    }
}