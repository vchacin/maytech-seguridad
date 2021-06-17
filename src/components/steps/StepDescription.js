import React from 'react';


export class StepDescription extends React.Component{
    render() {
        return(
            <p className="stepDescription font-weight-bold py-3">
                {this.props.children}
            </p>
        );
    }
}