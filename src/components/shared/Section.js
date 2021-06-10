import React from 'react';

export class Section extends React.Component{
    render(){
        return(
            <section className={`v-100 ${this.props.image}`}>
                {this.props.children}
            </section>
        );
    }
}