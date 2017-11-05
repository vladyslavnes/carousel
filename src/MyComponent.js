import React, { Component } from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default class MyComponent extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img style={{width: '45%'}} src={require('./assets/1.jpg')} alt="Hill of fame" />
                    <p className="legend">Hill of fame</p>
                </div>
                <div>
                    <img style={{width: '45%'}} src={require('./assets/2.jpg')} alt="Castle of XVIII century" />
                    <p className="legend">Castle of XVIII century</p>
                </div>
                <div>
                    <img style={{width: '45%'}} src={require('./assets/3.jpg')} alt="Somewhere on Khreschatyk" />
                    <p className="legend">Somewhere on Khreschatyk</p>
                </div>
            </Carousel>
        );
    }
};
