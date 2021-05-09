import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

// deploy key
// ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDdKK0FgNDjIKyhjNYTzUBOoLu/pZOkMDi0dxZHynaOo2qOiQEHKGVJQTDG+DR9h6vxa3eFCl7RoaoDJFwkHS0qN2HtOeSd4sWsu81AF2+EXzQiupfgFKI55wBNmXgtt9oHTpKK0U5jofQbuBIQ24IDVmNyqgU8yu8xRot4VaCqyk9Pm56uXGo0Oc5aHVYmHAdSvSfqKuMbmnmyAI9E0qS2B5lAS3ltZ05yCZTwOXhrwFcMNZCtMSqtIwSkZifHi+4tl2syb1bgRmjdwOp2nNdcJMZdngV12WjK7p88PvlB9rbpKZ/bZbwH8GRcdb7x+UC8okKKUvw4FB/JZ4KHgip3w1qBWwM9jVuSCwDE7NYOKYjqiS2UFWLP8AsvPZCj5lEih61ohNpb3PM8HsekDo9o3O2zXUQE/rTgt2PXbzUMD2BDZ9yUjCj94oz8c3k8PDFqzSC8cZEiBRC1eIBmUEE8WjNkRh9nfmomUg+xq/+WMzVjDkeePQ+IF29F4OEK7yjA2krEf5y5dlfUuRM2HNlVErERi0+PZvAJ7jjSfTAP4C0pUv/Pzp4zEO65w5+S1pp7+6n49JEUJ2B3965rPCUruEMjQKd8WA5On8CcevIqIuCsiqouJtq1ID/i30jtYInWgX+KjzA72xGsnVlJjkt3EWmSTR6DCi9JwO6r8HcfCw==

// api id
// 3dc6aeb1-bfd1-4fa2-b157-f6495efce954

// sitename
// sleepwellnetlify



const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
