import React from 'react';

const Parent = (props) => {

  const data2 = "i am from child components"
  props.onChildData(data2);

  return (
    <div>
        <h1>Hello World </h1>
        <h3>{props.data}</h3>
    </div>
  )
}




// const data = "i am from parents data printed by child components ";
  
// const  handleChildData = (onChildData) => {
//   console.log("app :"  + onChildData);
// };


export default Parent 