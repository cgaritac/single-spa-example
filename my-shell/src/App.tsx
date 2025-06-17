// const App = () => {
//   return (
//     <div>
//       <header>
//         <h1>EWC Shell</h1>
//         <nav>
//           <a href="/ecard">Ecard</a> | <a href="/reportes">Reportes</a>
//         </nav>
//       </header>
//       <main id="microfrontend-container">
//       </main>
//     </div>
//   );
// };

// export default App;

import { navigateToUrl } from 'single-spa'
import './App.css'

function App() {
  const handleNavigation = (path: string) => {
    navigateToUrl(path)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shell Application</h1>
        <nav>
          <button onClick={() => handleNavigation('/')}>
            Home
          </button>
          <button onClick={() => handleNavigation('/admin-app')}>
            ECard App
          </button>
        </nav>
      </header>
      
      <main>
        <div id="single-spa-application:@ewc/admin-app"></div>
      </main>
    </div>
  )
}

export default App