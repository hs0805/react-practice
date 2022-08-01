import React, { Component } from 'react';

export default class Image extends Component {
    
    render() {
        if(this.props.source === "NoImage") {
            throw new Error("Image not found");
        }
        
        return (
            <img src= {this.props.source} alt ="MyPic" height="500px" width="500px" />
        )
    }
}