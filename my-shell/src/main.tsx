// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import "./root-config";

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import type { LifeCycles } from 'single-spa'
import { registerApplication, start } from 'single-spa'
import App from './App.tsx'
import './index.css'

registerApplication({
  name: '@ewc/admin-app',
  app: async () => {
    console.log('Loading @ewc/admin-app...')
    const module = await System.import('@ewc/admin-app').catch((err) => {
      console.error('Error loading @ewc/admin-app:', err)
      return fetch('http://localhost:8081/admin-app.js')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`)
          }
          return System.import('@ewc/admin-app')
        })
        .catch(fetchErr => {
          console.error('Error fetching @ewc/admin-app:', fetchErr)
          throw fetchErr
        })
    })
    return module as unknown as Promise<LifeCycles>
  },
  activeWhen: location => location.pathname.startsWith('/admin-app'),
  customProps: {
    domElementGetter: () => document.getElementById("single-spa-application:@ewc/admin-app"),
  }
})

start({
  urlRerouteOnly: true,
})

window.addEventListener('single-spa:app-change', ((event: Event) => {
  console.log('App change event:', (event as CustomEvent).detail)
}) as EventListener)

window.addEventListener('single-spa:before-routing-event', ((event: Event) => {
  console.log('Before routing event:', (event as CustomEvent).detail)
}) as EventListener)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)