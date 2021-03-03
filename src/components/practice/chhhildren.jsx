import React, { Children, Component } from 'react'

export default class Cohildren extends Component {
    func=()=>{
        const {children} = this.props;
        console.log(children)
    }
    render() {
        

        return (
            <div>
                <button onClick={this.func}>click</button>
            </div>
        )
    }
}
