import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Team from './pages/Team'
import About from './pages/About'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/about'>
        <Route index element={<About />} />
        </Route>
        <Route path='/service'>
        <Route index element={<Service />} />
        </Route>
        <Route path='/contact'>
        <Route index element={<Contact />} />
        </Route>
        <Route path='/team'>
        <Route index element={<Team />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
