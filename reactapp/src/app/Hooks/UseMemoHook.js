import React, {useState, useMemo} from 'react';

//concerned with perfornmance optimization
//will only recompute only when value gets changed
function UseMemoHook() {
    
    const [counterone, setCounterOne] = useState(100);
    const [countertwo, setCounterTwo] = useState(200);

    const incrementOne = ()=>{
        setCounterOne(counterone+1)
    }

    const incrementTwo = ()=>{
        setCounterTwo(countertwo + 2)
    }

    //we are caching counter one so that when countertwo re renders it doesn't asks isEven to rerender and compute
    const isEven =useMemo(()=>{
        let i = 1;
        while (i < 2000000000) i++;
        return counterone%2===0;
    },[counterone])

    return(
        <div>
            
            <button onClick={incrementOne}>  {counterone}        </button>
            {/* <span> {isEven()? 'Even' : 'Odd' }</span> */}
            {/* iseven is not a function anymore, its a value */}
            <span> {isEven? 'Even' : 'Odd' }</span>
            <button onClick={incrementTwo}> {countertwo}      </button>
            
        </div>
    )
}

export default UseMemoHook;