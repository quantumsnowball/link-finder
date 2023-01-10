import { FC, PropsWithChildren } from 'react'
import { PROGRAMS } from '../constants'


export interface Request {
  uuid: string
  title: string
  url: string
  method: string
  requestId: number
  timeStamp: number
}

export interface Response {
  requestId: number
  statusCode: number
}

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

