import React, { useState, useEffect, useRef, useCallback } from 'react';

const HookItem = ()=> {

    const [count, setCount] = useState(true)

    const handleChildren = () => {
        console.log('clicked ChildrenComponent');
    };

    // 在依赖参数不变的情况下，返回的回调函数是同一个引用地址
    const handleChildrenCallback = useCallback(() => {
        console.log('clicked ChildrenComponent');
    }, [])

    const handleParent = () => {
        console.log('clicked ParentComponent');
        setCount(count + 1)
    };

    console.log('ParentComponent rending')
    return (
        <div>
            <div onClick={handleParent}>ParentComponent </div>
            <ChildrenComponent handleChildren={handleChildren} />
            <CallbackChildrenComponent handleChildren={handleChildrenCallback} />
        </div>

    )
}

const ChildrenComponent = (props) => {
    const { handleChildren } = props;
    console.log('ChildrenComponent rending'); // 父组件重新render时会触发子组件渲染
    return <div onClick={handleChildren}>ChildrenComponent </div>;
}

//  React.memo相当于PureComponent
const CallbackChildrenComponent = React.memo((props) => {
    const { handleChildren } = props;
    console.log('CallbackChildrenComponent rending'); // 父组件重新render时不会触发子组件渲染
    return <div onClick={handleChildren}>ChildrenComponent </div>;
})

function useCallbackHook() {
    return (
        <div>
            <HookItem></HookItem>
        </div>
    )
}

export default useCallbackHook;
