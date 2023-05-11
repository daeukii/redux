import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../modules/counter';

export default function ExCounterBox() {
  const counter = useSelector((state)=>(state.counter))
  const dispatch = useDispatch();
  return (
    <div>
        <p>CounterBox에서 한 내용 복습</p>
        <p>useSelector를 이용하여 값 가져오기</p>
        <h3>{counter}</h3>
        <button onClick={()=>{dispatch(increase())}}>+1</button>
        <button onClick={()=>{dispatch(decrease())}}>-1</button>
        <p>useDispatch를 이용하여 값 수정하기</p>
    </div>
  )
}
