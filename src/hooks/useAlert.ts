import { useState, useCallback } from 'react';
import { Alert } from '../types'


function useAlert(initialValue: Alert, timeout = 10000) {
  const [alert, setAlert] = useState(initialValue)
  const [alertMessage, setAlertMessage] = useState('')

  const alertSuccess = (message: string) => {
    setAlert('success')
    setAlertMessage(message)
    setTimeout(() => { setAlert('none') }, timeout);
  }

  return { alert, alertSuccess, alertMessage }
}

export default useAlert
