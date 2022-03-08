import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import './App.css';

import { Home, Signup } from './pages'

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route  path="/" element = {<Home />} />
          <Route  path="/Signup" element = {<Signup />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
