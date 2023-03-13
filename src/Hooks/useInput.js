import { useState } from 'react'




const useInput = () => {
  const [value, setValue] = useState('')
  const Handler = (e) => {
    setValue(e.target.value)
  }
  return [value, Handler]
}

export default useInput