import React from 'react'
let data = ["hudaifa","bryan","shaq"]
function index() {
    const name = "hudaifa"
  return (
    <>
    <div style={{border:"solid",textAlign:"center"}}> yoyoyo</div>
    {data.map((student)=>{
        return(
            <div style={{border:"solid red",textAlign:"center",margin:"1em"}}>{student}</div> 
        )
    })}
    <p> wolcome {name} </p>
    <img src="https://wallpapers.com/images/featured/super-cool-pictures-h943jt67w6kqn4e6.jpg" alt="" />

    </>
  )
}

export default index
