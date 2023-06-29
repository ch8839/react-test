import React from 'react';

class Clock  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.state.posts = ''
        this.state.comments = ''
    }

    // 在组件已经被渲染到 DOM 中后运行
    componentDidMount() {
        this.timerID = setInterval(()=> {
            this.tick()
        })
        this.fetchPosts().then(response => {
            this.setState({
              posts: this.state.comments
            });
            console.log('>>>this.state.posts', this.state.posts)
          });
      
        this.fetchComments().then(response => {
            // console.log('posts', this.state.posts)
            console.log('>>>this.state.comments', this.state.comments)
            this.setState((state, props) =>{
                console.log('>>>this.state.comments2', this.state.comments)
                return {
                    comments: response.comments
                }
            });
            console.log('>>>this.state.comments3', this.state.comments)
          });
    }

    //  DOM 中 Clock 组件被删除的时候
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    fetchPosts() {
        return new Promise(resolve =>{
            setTimeout(() =>{
                resolve({
                    posts: 'hh'
                })
            }, 1000)
        })
    }
    fetchComments() {
        return new Promise(resolve =>{
            setTimeout(() =>{
                resolve({
                    comments: 'nb'
                })
            }, 1000)
        })
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }
  
    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }

}

export default Clock;
