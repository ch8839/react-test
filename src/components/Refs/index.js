import React from 'react'


class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 1
        }
    }
    render() {
        return <div ref={this.props.forwardedRef}>id: {this.state.id}</div>;
    }
}

class Refs extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
        this.myComponentRef = React.createRef()
        this.FancyButtonRef = React.createRef()
        this.myComponent2Ref = React.createRef()
    }

    handleClick() {
        let target = this.myRef.current
        let myComponentRef = this.myComponentRef.current
        console.log('>>>target', target)
        console.log('>>>myComponentRef', myComponentRef)
        console.log('>>>FancyButtonRef', this.FancyButtonRef.current)
        console.log('>>>myComponent2Ref', this.myComponent2Ref.current)
        target.focus()
        let nextId = myComponentRef.state.id
        myComponentRef.setState({
            id: ++nextId
        })

    }



    render() {
        // Class组件使用forwardRef传递ref
        const wrapper = function (InnerComponent) {
            return React.forwardRef((props, ref) => {
                return (
                    <InnerComponent forwardedRef={ref} {...props} />
                )
            })
        }

        const MyComponent2 = wrapper(MyComponent)
        console.log('MyComponent2', MyComponent2)

        // 函数组件使用forwardRef传递ref
        const FancyButton = React.forwardRef((props, ref) => (
            <button ref={ref} className="FancyButton">
                {props.children}
            </button>
        ));

        return (
            <div>
                <MyComponent ref={this.myComponentRef}></MyComponent>
                <input ref={this.myRef} />
                <button onClick={this.handleClick.bind(this)}>click</button>
                <FancyButton ref={this.FancyButtonRef}>Click me!</FancyButton>
                <MyComponent2 ref={this.myComponent2Ref}></MyComponent2>
            </div>
        )
    }
}


export default Refs