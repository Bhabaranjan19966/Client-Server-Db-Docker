/*eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { Route, Switch} from 'react-router-dom';
import App from '../App';
import ListUrlComponent from '../components/ListUrlComponent';
import AddGitURL from '../components/AddGitURL';
import HomePageComponent from '../components/HomePageComponent';
import { HashRouter } from 'react-router-dom'

function AppRouter () {
   return ( <HashRouter>
    <div>
        <Route  path='/' component={App} exact={true} />
        <Switch>
            <Route  path='/home'  component={HomePageComponent}  />
            <Route  path='/listUrl'  component={ListUrlComponent} />
            <Route  path='/newApp'  component={AddGitURL} />
        </Switch>
    </div>
    </HashRouter>)
}
export default AppRouter;