import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Work from './components/work/Work'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'
import './app.css'


function App() {
  return (
   <div className='app'>
    <Topbar/>
    <div className="section">
      <Intro/>
      <Portfolio/>
      <Work/>
      <Testimonial/>
      <Contact/>
    </div>
   </div>
  );
}

export default App;
