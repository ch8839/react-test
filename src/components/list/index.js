import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: ['apple', 'banbana']
        }
    }
    render() {
        const fruits = this.state.fruits
        const animals = this.props.animals || []
        const len = 30
        return (
            <div>
                {
                    fruits.map(item => {
                        return (
                            <p key={item}>-{item}</p>
                        )
                    })
                }
                {
                    animals.map(item => {
                        return (
                            <p key={item}>+{item}</p>
                        )
                    })
                }
                <ul>
                    {Array(len).fill(0).map((_, i) => <li>{i}</li>)}
                </ul>
            </div>

        )
    }
}

export default List

