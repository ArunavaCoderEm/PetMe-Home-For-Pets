import React from 'react'

export default function Alert(props) {
  return (
    <div className="p-4 mb-4 text-sm  rounded-lg bg-gray-50 sha text-blue-400 text-center" role="alert">
    <span className="font-bold">{props.title}</span> {props.desc}
    </div>
  )
}
