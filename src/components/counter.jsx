import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: this.props.value
    };


    handleIncrement = product => {
        this.setState({ count: this.state.value + 1 });
    };

    render() {
        console.log(this.props)
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondarhy btn-sm">Increment</button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
    }

export default Counter;
