// eslint-disable-next-line 
import React, { Suspense } from 'react'
import logo from './logo.svg';
import './App.css';
import * as componentsList from './components/index.js'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

console.log('>>>componentsList', componentsList)
function App() {
	return (
		<Router>
			<h2>React test</h2>
			<div>
				<ul>
				{
				Object.keys(componentsList).map(name => {
					return (
						<li key={name}>
							<Link to={`/${name}`}>{name}</Link>
						</li>
					)
				})			
				}
				</ul>
				{/* <Route path="/">
						<div className="App">
						<header className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
							<p>
							Edit <code>src/App.js</code> and save to reload.
							</p>
							<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
							>
							Learn React
							</a>
						</header>
						</div>
					</Route> */}
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
					{
						Object.keys(componentsList).map(name => {
							const DemoItem = React.lazy(() => import(`./components/${name}/index`));
							// const DemoItem = require(`./components/${name}/demo`).default
							return (
								<Route path={`/${name}`} key={name}>
									<DemoItem></DemoItem>
								</Route>
							)
						})
					}		
					</Switch>
				</Suspense>
			</div>
		</Router>
	);
}

export default App;
