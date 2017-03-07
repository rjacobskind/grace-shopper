import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

export default class ShoppingCart extends Component {

    render(){
        return (
        <div>
            <div id="header">
                <div id="item">
                    <h2>Item</h2>
                </div>
                <div id="quantity">
                    <h2>Quantity</h2>
                </div>
                <div id="price">
                    <h2>Price</h2>
                </div>
            </div>

            <div id="body">
                <div id="row"> 
                    <div> </div>
                    <div> </div>
                    <div> </div>
                </div>
            </div>

        </div>
        )
    }



}