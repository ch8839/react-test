import React, {Suspense } from 'react';
import List from '../list'

const LazyList = React.lazy(() => {
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(import('../list'))
        }, 1000)
    })
   
    
});

class MyErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // 更新 state 使下一次渲染能够显示降级后的 UI
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // 你同样可以将错误日志上报给服务器
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // 你可以自定义降级后的 UI 并渲染
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

class ReactLazy  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    render(){
        return (
            <div>
                <MyErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyList></LazyList>
                </Suspense>
                </MyErrorBoundary>
            </div>
            
        )
    }
}

export default ReactLazy

