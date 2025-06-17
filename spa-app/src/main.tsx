declare global {
  interface Window {
    singleSpaNavigate?: boolean;
  }
}

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import App from './App.tsx';
import './index.css';
import { createRoot } from 'react-dom/client';


const lifecycles = singleSpaReact({
  React,
  ReactDOMClient: { createRoot },
  rootComponent: App,
  errorBoundary(err, info) {
    console.error('Error en @ewc/admin-app:', err, info)
    return <div>Error en admin-app</div>
  },
  renderType: 'createRoot'
})

export const { bootstrap, mount, unmount } = lifecycles

console.log('Lifecycles exported:', { bootstrap, mount, unmount })
console.log('Bootstrap type:', typeof bootstrap)
console.log('Mount type:', typeof mount)
console.log('Unmount type:', typeof unmount)

if (!window.singleSpaNavigate) {
  const rootElement = document.getElementById('root')
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  }
}