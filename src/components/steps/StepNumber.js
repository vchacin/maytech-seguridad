import React from 'react';

export class StepNumber extends React.Component{
    render() {
        return(
            <p className="stepNumber fjalla pr-2">
                {this.props.children}
            </p>
        );
    }
}