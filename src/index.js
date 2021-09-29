import React from 'react'

export const Button = ({ type, children }) => {
  switch (type) {
    case 'primary':
      return (
        <button
          style={{
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            outline: 'none',
            padding: '1em',
            cursor: 'pointer'
          }}
        >
          🦅
          {children}
        </button>
      )

    case 'dashed':
      return (
        <button
          style={{
            border: '1px dashed black',
            outline: 'none',
            padding: '1em',
            backgroundColor: 'transparent',
            cursor: 'pointer'
          }}
        >
          🦅
          {children}
        </button>
      )

    case 'text':
      return (
        <button
          style={{
            border: 'none',
            outline: 'none',
            padding: '1em',
            backgroundColor: 'transparent',
            cursor: 'pointer'
          }}
        >
          🦅 {children}
        </button>
      )

    case 'link':
      return (
        <button
          style={{
            border: 'none',
            outline: 'none',
            textDecoration: 'underline',
            padding: '1em',
            backgroundColor: 'transparent',
            cursor: 'pointer'
          }}
        >
          🦅
          {children}
        </button>
      )

    default:
      return (
        <button
          style={{
            border: 'none',
            outline: 'none',
            border: '1px solid black',
            padding: '1em',
            backgroundColor: 'transparent',
            cursor: 'pointer'
          }}
        >
          🦅
          {children}
        </button>
      )
  }
}
