import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Gameboy } from "../components/Gameboy";
import { Footer } from "../components/Footer";
import kaso_speaks from "../assets/kaso.speaks.gif";


export default function About() {
    return (
        <>
            <Header />
            <div class="container">
                <section class="left no-scroll">
                    <Gameboy />
                    <div class="cartridge">
                        <div class="frame">
                            <img src={kaso_speaks} alt="Kacey Lewis speaking at conferences, tech talks, etc" />
                        </div>
                    </div>
                </section>
                <section class="longform right scroll">
                    <div class="slim">
                        <h2><i>&#128588;</i> Hey, I'm Kacey (She/Her) <i>&#127881;</i></h2>
                        <p>I'm an engineering leader who constantly has one foot in design and one foot in code</p>
                        <ul class="quicklinks">
                            <li><a href="https://linkedin.com/in/kaceylewis" title="Kacey Lewis on LinkedIn" target="_blank">LinkedIn</a></li>
                            <li><a href="https://github.com/Kaceykaso" title="Kacey Lewis on Github" target="_blank">Github</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Too Much Screen Time</h3>
                        <p>
                            For the last 20+ years, my home has been in front of a screen - whether it&apos;s my monitor typing code, a different monitor playing video games, 
                            or my tablet drawing new designs - I consume a great deal of screen time. I became addicted to customizing whatever I had with my own designs and 
                            details early on, through making my own textures and patterns for The Sims in Photoshop. When a friend suggested I learn <strong>Macromedia Flash</strong>, it was all 
                            downhill - I not only taught myself how to make animations and websites with the then "cutting edge software", I dropped out of my animation program at 
                            The Art Institute of CA - Orange County, in order to go all in as a web designer.
                        </p><p>
                            After having established a decent fulltime gig as a freelance web designer for a few of years - I even worked as the <strong>webmaster for Autograph Collector Magazine</strong> - 
                            the Apple iPhone came out, and marked the eventual downfall of Flash. I went from convincing clients their website needed Flash animations and movies, to recommending 
                            JavaScript for all interactivity - as mobile was clearly the future, and that necessitated dropping Flash entirely. I worked hard to teach myself the <a title="LAMP: Linux, Apache, MySQL, PHP">LAMP</a> 
                            stack and built all new projects in that, before getting a real office gig.
                        </p>
                        <h3>Tech Industry Leader</h3>
                        <p>
                            I got my big break working for <a href="https://www.linkedin.com/" title="Linkedin.com" target="_blank">LinkedIn</a> before I had even finished my 
                            <a href="https://music-cms.ucsd.edu/ugrad/icam-major.html" title="Interdisplinary Computing and the Arts Major at UCSD" target="_blank">ICAM</a> 
                            program at <a href="https://ucsd.edu/" title="University of California in San Diego" target="_blank">UC San Diego</a>, and moved up to San Francisco. As a new UI Engineer, 
                            I quickly got offers to speak at conferences, write for <a href="https://en.wikipedia.org/wiki/Net_(magazine)" title="Former .Net Magazine, previously Web Designer Magazine" target="_blank">.Net Magazine</a>, 
                            and became a mentor within <a href="https://www.linkedin.com/showcase/linkedin-wit/" title="LinkedIn Women in Tech" target="_blank">LinkedIn&apos;s WIT group</a> and 
                            <a href="https://www.joinwest.org/" title="WEST Mentoring" target="_blank">WEST Mentoring</a>. This 
                            love for teaching out and helping others avoid common pitfalls of being a woman in tech led me to engineering management. As the <strong>Engineering Manager</strong> for 
                            the Horizontal UI Engineering team, my love of design and visual arts finally came full circle with my love of engineering. 
                            I built a team of web and 
                            native mobile engineers that were <strong>"Happy Warriors"</strong> (thanks <a href="https://tomdale.net/about-me/" title="Who is Tom Dale?" target="_blank">Tom Dale</a>) 
                            passionately <strong>defending the frontend</strong> - establishing <strong>best practices, building 
                            accessible UI components, and ensuring a consistent look and feel across all products</strong> and apps at LinkedIn.
                        </p><p>
                            When I became the <strong>Senior Engineering Manager</strong> of the Web Platform team, I led the strategy for all <strong>JavaScript frameworks</strong> and associated tooling, 
                            such as TypeScript migration tooling, internationalization and localization translation libraries, Ember Data and GraphQL libraries, and the companies custom SSR framework.
                        </p>
                        <div class="band">
                            <h4>Fun Fact</h4>
                            <p>My senior project at UCSD was <a href="https://www.youtube.com/playlist?list=PLWnhVchApyJveY8cioEd4EkjYBgywtLct" title="Bob RossBot video playlist on YouTube" target="_blank">RossBot</a> 
                                - an <a href="https://edu.irobot.com/shop/coding-robots/create?variant=269697" title="iRobot Create robot" target="_blank">iRobot Create</a> with a <a href="https://www.raspberrypi.org/" title="Raspberry Pi website" target="_blank">Raspberry Pi</a> 
                                serving a chat client and taking instructions on what to "draw". 
                                It was on  display for two days at the Visual Arts Dept gallery, where users could "chat" with Bob, and their requests were parsed and matched with 
                                a script I had prewritten for the bot to execute - including <a href="https://youtu.be/RaNtYLwhB8o?si=jVcEH23Hct3vuSCB" title="Bob RossBot singing Imperial March on YouTube" target="_blank">singing the Imperial March from Star Wars</a>. 
                                I won the ICAM Innovation Award for this in 2014.
                            </p>
                        </div>
                        <p>
                            Despite not having much time to code as a manager, I found ways to inject creativity and design into my job. I designed company shirts for Pycon and SRE Con, 
                            and made stickers for every team, project, and event I managed. I even designed and gifted a blanket and beanie for four teams after we "survived 2020".
                        </p>
                        <p>
                            Today, I defend the frontend at <a href="https://www.vanta.com/" target="_blank" title="Vanta - Trust Management Platform">Vanta</a>, leading the <strong>Design Systems</strong> and <strong>Frontend Platform</strong> teams.
                        </p>
                        <h3>Restless Hands</h3>
                        <p>
                            The web has always been a wild west, and web development continues to be, especially on the frontend. JavaScript frameworks and libraries continue to churn 
                            and evolve every year, with a new batch of hotness taking the industry by storm just as you have mastered the last batch. My love of Flash transitioned into 
                            love of <strong>PHP</strong>, then into a love of <strong>Bootstrap and jQuery</strong>, then <strong>EmberJS</strong>, and then a love of <strong>React and TypeScript</strong>; 
                            but what this all really shows is my love for 
                            tinkering and playing around with new tech. I have always loved playing with <strong>Arduino's and Raspberry Pi's</strong>, making Roombas' do my bidding, or giving an arcade 
                            cabinet new life. Always learning and playing with the new hot thing, and finding new ways to improve on old habits, as well as customizing the look and feel, 
                            is what <strong>drives me everyday</strong>.
                        </p>
                        <h3>Chit Chat</h3>
                        <p>
                            I like talking to folks, and if after all this chatter you care to chat some more, hit me up!<br />
                            Feel free to <a href="https://linkedin.com/in/kaceylewis">message me on LinkedIn</a> or email me at <a href="mailto:mackovision+website@gmail.com" title="Email me?" target="_blank">mackovision@gmail.com</a>.
                        </p>
                        <h3>What Am I Using?</h3>
                        <p>
                            If you are curious what this website, or myself, is using - <Link to="/uses" title="What is Kacey using?">check it out</Link>!
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}