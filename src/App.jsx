import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Traderkiki from './routes/Traderkiki';
import Macpack from './routes/Macpack';
import Retrokade from './routes/Retrokade';
import Uses from './routes/Uses';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/traderkiki" element={<Traderkiki />} />
        <Route path="/projects/macpack" element={<Macpack />} />
        <Route path="/projects/retrokade" element={<Retrokade />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="*" element={<h2>Opps! Not sure what you were looking for....</h2>} />
      </Routes>
      
    </Router>
  );
};

export default App;
