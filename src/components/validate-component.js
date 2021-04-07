import React, { Component } from 'react';

export default class ValidateComponent extends Component {

    static validate = (component) => {
        const { componentId, children } = component.props
        console.log(componentId)
        React.Children.forEach(children, (child) => {
            if (child.type.prototype.constructor === component.__proto__.constructor) {
                ValidateComponent.validate(child)
            }
        })
    }

    render() {
        const { componentId } = this.props;
        return (
            <>
                <h1 onClick={() => ValidateComponent.validate(this)}>{componentId}</h1>
                <div>{this.props.children}</div>
            </>
        )
    }
}