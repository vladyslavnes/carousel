import React, { Component } from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default class MyComponent extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={require('./assets/1.jpg')} />
                    <p className="legend">Hill of fame</p>
                </div>
                <div>
                    <img src={require('./assets/2.jpg')} />
                    <p className="legend">Castle of XVIII century</p>
                </div>
                <div>
                    <img src={require('./assets/3.jpg')} />
                    <p className="legend">Somewhere on Khreschatyk</p>
                </div>
            </Carousel>
        );
    }
};