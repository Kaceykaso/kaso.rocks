import {HashRouter as Router} from 'react-router-dom';
import { Hero } from './components/Hero';
import { Gameboy } from './components/Gameboy';
import { MessageList } from './components/MessageList';
import { Footer } from './components/Footer';

const App = () => {

  return (
    <Router>
      <Hero />
      <section className="main">
        <Gameboy />
        <MessageList />
      </section>
      <Footer />
    </Router>
  );
};

export default App;
