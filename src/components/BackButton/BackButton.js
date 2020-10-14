import React, {Component} from 'react';
import { withRouter } from 'react-router';
import ArrowButton from "../ArrowButton";

class BackButton extends Component {
    render() {
        return (
            <ArrowButton title="Back"
                 className="arrow-button--back"
                 onClick={() => this.props.history.go(-1)}
            />

        )
    }
}

export default withRouter(BackButton)