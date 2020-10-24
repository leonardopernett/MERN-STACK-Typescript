import React, { Suspense } from 'react';
import 'App.css';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import VideoContext from 'context/videoContext'

import Home from 'pages/home';
import AddVideo from 'pages/addVideo';
import Navbar from 'components/navbar' 

function App() {
  return (
    <Suspense fallback={null}>
        <VideoContext>
          <Router>
            <Navbar />
              <div className="container p-4">
                <Switch>
                  <Route exact path="/video" component={Home}  />
                  <Route path="/video/add" component={AddVideo}  />
                  <Route path="/video/edit/:id" component={AddVideo}  />
                </Switch>
              </div>
          </Router>
       </VideoContext>
    </Suspense>
   
  );
}
export default App;
