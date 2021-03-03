import React, { Component } from 'react'

const HOC = (Components) => {
    class HOC extends Component {

        render() {
            return (
                <div>
                    okk
                    <Components myname={"reaz ahammed chowdhury"} props={this.props}/>

                </div>
            )
        }
    }

    return HOC;
}


export default HOC;