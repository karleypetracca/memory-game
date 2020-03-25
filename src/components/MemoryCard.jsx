import React, { Component } from "react";
import './MemoryCard.css';

class MemoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
    }

    clickHandler() {
        this.setState({ isFlipped: !this.state.isFlipped });
    }

    render() {
        let memoryCardInnerClass = this.state.isFlipped ? "memoryCardInner flipped" : "memoryCardInner";
        
        return (
            <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardFront">
                        ∆
                    </div>
                    <div className="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="Memory game card"/> 
                    </div>
                </div>
            </div>
        )
    }
}

export default MemoryCard;