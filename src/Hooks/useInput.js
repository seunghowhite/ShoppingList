import { useState } from 'react'




const useInput = (firstvalue) => {
  const [value, setValue] = useState(firstvalue)
  const Handler = (e) => {
    setValue(e.target.value)
  }
  return [value, Handler]
}

export default useInput