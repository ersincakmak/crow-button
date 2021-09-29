import React from 'react'

import { ExampleComponent, Button } from 'crow-button'
import 'crow-button/dist/index.css'

const App = () => {
  return (
    <>
      <Button type='primary'>My Button</Button>
      <Button type='text'>My Button</Button>
      <Button type='dashed'>My Button</Button>
      <Button type='link'>My Button</Button>
      <Button>My Button</Button>
    </>
  )
}

export default App
