import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { alertActions } from '../redux/slices/alertSlice'
import { RootState } from '../redux/store'
import { Alert, AlertType, AlertContent } from '../types'


function useAlert(timeout = 10000) {
  const dispatch = useDispatch()
  const [alert, setAlert] = [
    useSelector((s: RootState) => s.alert.alert),
    (a: Alert) => dispatch(alertActions.setAlert(a))
  ]
  const [alertContent, setAlertContent] = [
    useSelector((s: RootState) => s.alert.alertContent),
    (ac: AlertContent) => dispatch(alertActions.setAlertContent(ac))
  ]

  // this ref holds the latest timerId
  const idRef = useRef(0)

  const makeAlert = (alertType: AlertType) =>
    ({ title, message }: AlertContent) => {
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
      setAlert(alertType)
      setAlertContent({ title, message })
    }

  const alertSuccess = makeAlert('success')
  const alertError = makeAlert('error')

  return { alert, alertSuccess, alertError, alertContent }
}

export default useAlert
