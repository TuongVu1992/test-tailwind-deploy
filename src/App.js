import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import ForgotPassWordPage from './ForgotPassWordPage';

function App() {
  return(
    <Router>
      <Routes>
        <Route path = "/test-tailwind-deploy" element = {<HomePage />}/>
        <Route path = "/ForgotPassWordPage" element = {<ForgotPassWordPage />}/> 
      </Routes>
    </Router>
  );
}

export default App;
