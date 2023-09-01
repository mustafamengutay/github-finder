import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Footer from './components/layout/Footer';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import User from './pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          {/* General container for all elements */}
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            {/* We put routes inside the main element because this area will be changed
        by routes */}
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                {/* Home root is shown as default, beacuse of /. Others are not. */}
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                {/* /* is used for any other routes, if they go there, NotFound is returned */}
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
