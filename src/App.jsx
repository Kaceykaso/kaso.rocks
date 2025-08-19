import { Hero } from './components/Hero';
import { Gameboy } from './components/Gameboy';
import { MessageList } from './components/MessageList';
import { Footer } from './components/Footer';
import '/css/fonts.css';
import '/css/main.css';

const App = () => {

  return (
    <>
      <Hero />
      <section className="main">
        <Gameboy />
        <MessageList />
      </section>

      <Footer />
    </>
  );
};

export default App;
