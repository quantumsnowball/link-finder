import { useState, useRef } from 'react'
import { Alert } from '../types'


function useAlert(initialValue: Alert, timeout = 10000) {
  const [alert, setAlert] = useState(initialValue)
  const [alertMessage, setAlertMessage] = useState('')

  // this ref holds the latest timerId
  const idRef = useRef(0)

  const alertSuccess = (message: string) => {
    // generate new id for every new timer
    const timerId = Math.random()
    // keep track of the latest timer id registered by Ref
    idRef.current = timerId
    // only allow setAlert to none if the timerId matches idRef
    setTimeout(() => {
      if (idRef.current === timerId) {
        setAlert('none')
      }
    }, timeout)
    // set the state of alert and message
    setAlert('success')
    setAlertMessage(message)
  }

  return { alert, alertSuccess, alertMessage }
}

export default useAlert
