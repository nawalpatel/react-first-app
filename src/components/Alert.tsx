import React from 'react';
import { ReactNode } from 'react';
interface Props{
    children:ReactNode,
    onClick:()=>void
}

function Alert({children,onClick}:Props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show">
    {children}
    <button onClick={onClick}>
      <span aria-hidden="true">&times;</span>
    </button>
  </div>

  )
}

export default Alert

//ES7+ React/Redux/React-Native snippets extention to shortcut "rafce" to create componet