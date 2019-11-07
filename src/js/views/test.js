import React from 'react';
import {Consumer} from './../store/appContext';

export class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <>
                <Consumer>
                    {
                        ({store, actions}) => {
                            return (
                                <>
                                    <h1>Test Component {store.name}</h1>
                                    <button onClick={() => actions.saludar('jorge')}>Click me</button>
                                </>
                            )
                        }
                    }
                </Consumer>
            </>
        )
    }
}