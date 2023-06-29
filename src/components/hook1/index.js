import { useState, useEffect, useRef, useLayoutEffect, useReducer } from 'react';


import UseCallbackHook from './useCallbackHook.js'
/*
Hook 是什么？ Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。例如，useState 是允许你在 React 函数组件中添加 state 的 Hook


*/



function Hook1() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);

  // useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数
  const copy_count = useRef(9);

  // 相当于 componentDidMount 和 componentDidUpdate: 完成对 DOM 的更改后运行你的“副作用”函数
  // 每次渲染后调用的副作用函数 —— 包括第一次渲染的时候
  // 好处：可以把组件内相关的副作用组织在一起（例如创建订阅及取消订阅），而不要把它们拆分到不同的生命周期函数里
  useEffect(() => {
    console.log('>>>count', count)
    copy_count.current = count
    console.log('>>>copy_count.current', copy_count.current)
    return () => {
      console.log('>>>count2', count) // 组件销毁时执行的逻辑，比前一个count少1
    }
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>He clicked {copy_count.current} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function Hook2() {
  const [age, setAge] = useState(1)
  const [ageMsg, setAgeMsg] = useState('')
  const [canWalk, setCanWalk] = useState(false)
  useEffect(() => {
    let msg = `I'm ${age} years old`
    console.log('>>>msg', msg)
    if (age > 3) {
      setCanWalk(true)
    }
    setAgeMsg(msg)
  }, [age])

  useLayoutEffect(() => {

    console.log('>>>useLayoutEffect')

  }, [])

  return (
    <div>
      <button onClick={() => setAge(age + 1)}>
        Click age
      </button>
      <p>{ageMsg}</p>
      {canWalk && <input value={ageMsg}></input>}
    </div>
  );
}

function Hook3() {
  const initialState = { count: 0 }
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1 }
      default:
        throw new Error('')
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h2>useReducer</h2>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}

function Hook4() {

  // const isInit = useRef(true)

  // useEffect(() => {
  //   if(!isInit.current){
  //     console.log('>>>update')
  //   }
  //   return () =>{
  //     isInit.current = false
  //   }
  // })

  const [isInit, setIsInit ] = useState(true)

  useEffect(() => {
    if(!isInit){
      console.log('>>>update')
    }
    return () =>{
      setIsInit(false)
    }
  })

  const [age, setAge] = useState(1)

  return (
    <div>
      <h2>useRef</h2>
      <button onClick={() => setAge(age + 1)}>
        Click age
      </button>
      <p>{age}</p>
    </div>
  );
}

function Hook() {
  let HookList = [Hook1, Hook2, Hook3, Hook4]
  let HookItem = HookList[3]
  return (
    <div>
    <HookItem></HookItem>
    <UseCallbackHook></UseCallbackHook>
    </div>
  )
}

export default Hook;
