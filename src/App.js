import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import ForgotPassWordPage from './ForgotPassWordPage';
import StockPage from './StockPage';

const App=()=> {
  return(
    <Router>
      <Routes>
        <Route path = "/test-tailwind-deploy" element = {<HomePage />}/>
        <Route path = "/ForgotPassWordPage" element = {<ForgotPassWordPage />}/> 
        <Route path = "/StockPage/:encryptedUserId" element = {<StockPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
