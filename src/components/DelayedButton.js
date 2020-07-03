// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {

    clickHandler = (e) => {
        e.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay);
    }

    render() {
        return <button onClick={this.clickHandler}>Delay</button>
    }
}

export default DelayedButton