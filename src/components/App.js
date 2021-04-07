import React, { Component } from "react";
import './App.css';
import ValidateComponent from "./validate-component";
import SomeComponent from "./some-component";

export  default class App extends Component {

    render() {


        return (
            <ValidateComponent componentId="1">
                <SomeComponent>
                    <ValidateComponent componentId="2"/>
                </SomeComponent>
                <SomeComponent>
                    <ValidateComponent componentId="3">
                        <ValidateComponent componentId="4"/>
                    </ValidateComponent>
                </SomeComponent>
                <ValidateComponent componentId="5"/>
            </ValidateComponent>
        );

    }
}
