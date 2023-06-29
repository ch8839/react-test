import React from 'react';


class UseJsx extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }


    render() {

        // 属性展开
        const Greeting = function (props) {
            return <div>name: {props.name} , age: {props.age}, children: {props.children}</div>
        }
        const info = { name: 'Tom', age: 16 }

        // jsx 语法糖
        const Com1 = function (props) {
            return React.createElement('div', { style: { color: 'red' } }, 'hhh')
        }

        const Com2Jsx = () => {
            return (
                <div>
                    <p className='title'>title</p>
                    <Greeting className="greeting-container" phone="123" {...info} >
                        <MyComponents.DatePicker color="blue" />
                    </Greeting>
                </div>
            )
        }

        const Com2NotJsx = () => {
            const h = React.createElement
            return h("div", {
                children: [" ", /*#__PURE__*/h("div", {
                    children: [/*#__PURE__*/h("p", {
                        className: "title",
                        children: "title"
                    }), /*#__PURE__*/h(Greeting, {
                        className: "greeting-container",
                        phone: "123",
                        ...info,
                        children: h(MyComponents.DatePicker, {
                            color: "blue"
                        })
                    })]
                })]
            })
        }

        //点语法
        const MyComponents = {
            DatePicker: function DatePicker(props) {
                return <div>Imagine a {props.color} datepicker here.</div>
            }
        }

        return (
            <div >
                <Com1></Com1>
                <MyComponents.DatePicker color="blue" />
                <h2>useJsx</h2>
                <Com2Jsx></Com2Jsx>

                <h2>not useJsx</h2>
                <Com2NotJsx></Com2NotJsx>

            </div>

        )
    }
}

export default UseJsx

