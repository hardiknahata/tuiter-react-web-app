import './App.css';
import Labs from './labs';
import HelloWorld from './labs/a6/hello-world';
import Tuiter from './tuiter';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faComment, faRetweet, faHeart, faShare, faLink,faHome, faBell, faHashtag, faEnvelope, faBookmark, faList, faUser  } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faRetweet, faHeart, faShare, faComment, faLink, faHome, faBell, faHashtag, faEnvelope, faBookmark, faList, faUser)

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
        <Route index element={<Labs/>}/>
        <Route path="/hello" element={<HelloWorld/>}/>
        <Route path="/tuiter/*" element={<Tuiter/>}/>                  
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;