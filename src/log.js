import React from 'react'

let logs = []

const mkConsole = act => val => setTimeout(console[act].bind(console, val))
const info = mkConsole('log')
const error = mkConsole('error')
const table = mkConsole('table')
export const clear = mkConsole('clear')

export const Logger = {
  info: (text) => logs.push({ type: 'info', text }),
  inspect: (obj) => logs.push({ type: 'inspect', obj }),
  error: (text) => logs.push({ type: 'error', text }),
  table: (rows) => logs.push({ type: 'table', rows }),
  // show all accumulated logs and clear
  show: () => {
    window.res = {}
    logs.forEach((log, i) => {
      switch(log.type) {
        case 'info':
          window.res[i] = log.text
          info(log.text)
          break
        case 'inspect':
          const inspectRes = log.obj.inspect ? log.obj.inspect() : log.obj
          window.res[i] = inspectRes
          info(inspectRes)
          break
        case 'error':
          window.res[i] = log.text
          error(log.text)
          break
        case 'table':
          window.res[i] = log.rows
          table(log.rows)
          break
      }
    })
    logs = []
  }
}

export const mkInspect = (name, val) => {
  const inspectedVal = val != null && val.inspect != null ? val.inspect() : val
  return () => `${name}(${inspectedVal})`
}
