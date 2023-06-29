import React from 'react';

class Button  extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (         
               <button>
                   {this.props.children}
               </button>       
            
        )
    }
}

class SplitPane  extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        console.log('this.props.top', this.props.top)
        return (         
               <div>
                   <h2>top:</h2>
                   <div className="top">
                        {this.props.top}
                   </div>
                   ——————————————————————
                   <h2>bottom:</h2>
                   <div className="bottom">
                        {this.props.bottom}
                   </div>
               </div>    
            
        )
    }
}

class SplitPane2  extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        console.log('this.props.children', this.props.children)
        return (         
               <div>
                   <h2>top2:</h2>
                   <div className="top">
                        {this.props.children.top}
                   </div>
                   ——————————————————————
                   <h2>bottom2:</h2>
                   <div className="bottom">
                        {this.props.children.bottom}
                   </div>
               </div>    
            
        )
    }
}

class Slot  extends React.Component {
   
    render(){
        const TopPane = function(props) {
            return <p>title</p>
        } 
        const BottomPane = function(props) {
            return <p>thanks</p>
        } 
        let componentsInstance = React.memo(TopPane)
        console.log('componentsInstance', componentsInstance)
        return (   
            <div>      
               <Button>
                  点击
               </Button>   
               <SplitPane top={<TopPane />} bottom={<BottomPane />}>
                   {console.log('<TopPane />', <TopPane />)}
               </SplitPane>   
               <SplitPane2>
                   {
                       {
                           top: <TopPane />,
                           bottom: <BottomPane />
                       }
                   }
               </SplitPane2>   
            </div>
        )
    }
}
export default Slot

