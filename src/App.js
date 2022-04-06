import './App.css';
import './front-end.css';
import { Dashboard } from './Components/dashboard';
import { LandingPage } from './Components/frontpage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { WelcomeScreen } from './Components/welcome-screen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomeScreen/>} />
        <Route path='admin' element={<Dashboard/>} />
        <Route path='public'  element={<LandingPage userExists={false}/>} />
        <Route path='/public/messages'  element={<LandingPage userExists={true}/>} />
      </Routes>
    </Router>
  )
}
export default App;
