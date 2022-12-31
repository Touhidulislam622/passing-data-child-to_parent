import React from 'react';

const Parent = (props) => {

  const data = "i am from child"
  props.onChildData(data);

  return (
    <div>
        <h1>Hello World </h1>
        <h3>{props.data}</h3>
    </div>
  )
}

export default Parent 