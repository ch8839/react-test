import React from 'react';

class Columns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['peach', 'pear']
        }
    }
    render() {
        return (
           
            <tr>
                {this.state.list.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <td>水果</td>
                            <td>{item}</td>


                        </React.Fragment>
                    )

                })}
            </tr>

        )
    }
}

class Columns2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['peach', 'pear']
        }
    }
    render() {
        return (
            //相当于vue的template，不渲染dom
            <React.Fragment>
                <td>apple</td>
                <td>banana</td>
            </React.Fragment>
        )
    }
}


class Fragments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <div>
                <table>
                    <tbody>
                        <Columns />
                        <Columns />
                    </tbody>
                </table>

                <table>
                    <tbody>
                        <tr>
                            <Columns2 />
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Fragments

