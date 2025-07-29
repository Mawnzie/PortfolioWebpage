import logo from './logo.svg';
import Home from './Pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router basename="/PortfolioWebpage">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
  );
}
 
export default App;


{/*
function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/education" element={<Education />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/skills" element={<Skills />}/>
       
      </Routes>
    </Router>
  );
}
 
export default App;
*/}
