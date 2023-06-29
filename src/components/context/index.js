// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。

import React from "react";
import './index.css'
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext('light');

class Context extends React.Component {
	render() {
		// 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
		// 无论多深，任何组件都能读取这个值。
		// 在这个例子中，我们将 “dark” 作为当前的值传递下去。
		return (
			<ThemeContext.Provider value="dark">
				<Toolbar />
			</ThemeContext.Provider>
		);
	}
}

class Toolbar extends React.Component {
	render() {
		return (
			<div>
				<ThemedButton />
			</div>
		)
	}
}

class ThemedButton extends React.Component {
	// 指定 contextType 读取当前的 theme context。
	// React 会往上找到最近的 theme Provider，然后使用它的值。
	// 在这个例子中，当前的 theme 值为 “dark”。
  	static contextType = ThemeContext;
	render() {
		console.log('>>contextType', ThemeContext)
		return <Button theme={this.context}>click</Button>;
	}
}

class Button  extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
		console.log('>>>this.props.theme', this.props.theme)
        return (         
               <button className={this.props.theme}>
                   {this.props.children}
               </button>       
            
        )
    }
}

export default Context