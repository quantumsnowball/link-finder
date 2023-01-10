import { FC, PropsWithChildren } from 'react'
import { PROGRAMS } from '../constants'


export type Request = {
  uuid: string
  title: string
} & chrome.webRequest.WebResponseHeadersDetails

export type Response = {
  uuid: string
  title: string
} & chrome.webRequest.WebResponseHeaderDetails

export type CustomFC = FC<PropsWithChildren>

export type ColorMode = 'light' | 'dark'
export type Program = typeof PROGRAMS[number]
export type AlertType = 'success' | 'error'
export type Alert = 'none' | AlertType

export interface AlertContent {
  title: string,
  message: string
}

export type AlertMaker = (m: AlertContent) => void

