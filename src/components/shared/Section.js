import React from 'react';

export class Section extends React.Component{
    render(){
        return(
            <section className={`${this.props.image}`} id={`${this.props.id}`}>
                {this.props.children}
            </section>
        );
    }
}