import { Hero } from '../components/Hero';
import { Gameboy } from '../components/Gameboy';
import { MessageList } from '../components/MessageList';
import { Footer } from '../components/Footer';

export default function Home() {
    return (
        <>
            <Hero />
                <section className="main">
                    <Gameboy />
                    <MessageList />
                </section>
            <Footer />
        </>
    )
}