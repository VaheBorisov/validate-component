import React, { Component } from 'react';

export default class ValidateComponent extends Component {

    static validate = (component) => {
        const { componentId, children } = component.props;
        console.log(componentId);
        React.Children.forEach(children, child => {
            const childsChildren = React.Children.toArray(child.props.children)
            if (child.type.prototype.constructor !== component.__proto__.constructor && childsChildren.length !== 0) {
                childsChildren.forEach(child => {
                    ValidateComponent.validate(child)
                })
            }
            if (child.type.prototype.constructor === component.__proto__.constructor) {
                ValidateComponent.validate(child)
            }
        });
    };

    render() {
        const { componentId } = this.props;
        return (
            <>
                <h1 onClick={() => ValidateComponent.validate(this)} className="validateComponent">ValidateComponent {componentId}</h1>
                <div>{this.props.children}</div>
            </>
        )
    }
}