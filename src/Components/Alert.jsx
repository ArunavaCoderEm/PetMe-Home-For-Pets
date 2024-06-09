import React from 'react'

export default function Alert(props) {
  return (
    <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-600 dark:text-red-400 text-center" role="alert">
    <span class="font-medium">{props.title}</span> {props.desc}
    </div>
  )
}
