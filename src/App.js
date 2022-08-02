import React, { useState, useEffect } from 'react'
import Counter from './Counter';

function App() {

  const [flag, setFlag] = useState(true);

  return (
    <div>
      {flag && <Counter></Counter>}
      <button onClick={() => setFlag(!flag)}>Hide/Show</button>
    </div>
  )
}

export default App