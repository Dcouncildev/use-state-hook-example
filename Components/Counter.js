import React, { useState } from "react"
const Counter = () => {const [count,setcount]= usestate(10)
return

(<div>   
<p>{count}</p>
<button onClick={()=> setcount(count+1)}>count+</button>
        </div>
)

}

        export default Counter