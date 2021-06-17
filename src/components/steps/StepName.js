import React from 'react';


export class StepName extends React.Component{
    render() {
        return(
            <p className="stepName fjalla">
                {this.props.children}
            </p>
        );
    }
}