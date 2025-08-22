import { Link } from "react-router-dom"
import { Header } from "../components/Header"
import { Gameboy } from "../components/Gameboy"
import { Footer } from "../components/Footer"

export default function Uses() {
    return (
        <>
            <Header />
            <div class="container">
                <section class="left no-scroll">
                    <Gameboy />
                </section>

                <section class="longform right scroll">
                    <div>
                        <h3>What does this site use?</h3>
                        <ul class="keyvalue">
                            <li><h4><a href="https://nostalgic-css.github.io/NES.css/" target="_blank" title="NES CSS">NES CSS</a></h4>
                                <p>The footprint has decreased, as I've replaced more of it with my own CSS, but there is still a non-zero amount of NES CSS in use, including all the icons. Shout out to the awesome work by <a href="https://github.com/BcRikko" target="_blank" title="B.C.Rikko on Github">B.C.Rikko</a>, checkout the <a href="https://github.com/nostalgic-css/NES.css" target="_blank" title="NES.CSS by BcRikko on Github">repo on Github</a>.</p>
                            </li>
                            <li><h4><a href="https://pajasevi.github.io/CSSnowflakes/" target="_blank" title="CSS Snowflakes">CSS Snowflakes</a></h4>
                                <p>That's right, those tacos in the Gameboy easter egg are actually snowflakes, and the work of <a href="https://github.com/pajasevi" target="_blank" title="Pakasevi on Github">Pakasevi</a>. Check out <a href="https://github.com/pajasevi/CSSnowflakes" target="_blank" title="CSS Snowflakes by Pakasevi on Gtihub">CSS Snokesflakes on Github</a>.</p>
                            </li>
                            <li><h4>Google Fonts: <a href="https://fonts.google.com/specimen/Bungee+Spice" target="_blank" title="Bungee Spice Google Font page">Bungee Spice</a> & <a href="https://fonts.google.com/specimen/Bungee+Shade?query=Bungee+shade" target="_blank" title="Google Fonts Bungee Shade page">Bungee Shade</a></h4>
                                <p>Google Fonts are really nice looking, and super easy to integrate and manage as a web font. Highly recommend.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>What does Kacey use?</h3>
                        <ul class="keyvalue">
                            <li><h4>["computer":"Apple Macbook Air M2"]</h4>
                                <p>I have always had a <a href="https://www.apple.com/macbook-pro/" target="_blank" title="Apple Macbook Pro page">Macbook Pro</a> by my side, even back when they were called <a href="https://en.wikipedia.org/wiki/PowerBook" target="_blank" title="Wiki page for Apple Powerbook, they no longer exist">Powerbooks</a>. I currently have a <a href="https://www.apple.com/shop/buy-mac/macbook-air/13-inch-m2" target="_blank" title="Apple Macbook Air 13 inch M2 chip page">13" M2 Macbook Air</a>, which I admit is a departure, but honestly feels like a Macbook Pro at this point. Its snappy, powerful (runs Baulder's Gate III), and small and lightweight. It's the most portable workhorse out there today.</p>
                            </li>
                            <li><h4>["monitor":"Dell 34 Curved USB-C Hub Monitor"]</h4>
                                <p>For the last few years, I have been using Dell monitors, and always try to have a 27" or a couple of 24" monitors. Last year I upgraded to a <a href="https://www.dell.com/en-us/shop/dell-34-curved-usb-c-hub-monitor-p3424we/apd/210-bgzq/monitors-monitor-accessories" target="_blank" title="Dell 34 Curved USB-C Hub monitor page">Dell 34 Curved USB-C Hub</a> monitor (basically an ultrawide) and have been really happy with it. It feels more ergonomic and requires less head turning than two separate monitors, runs power and peripherials through one USB-C cable, and obviously is pretty nice for gaming.</p>
                            </li>
                            <li><h4>["keyboard":["8BitDo Retro", "Ducky One3 RGB TKL"]]</h4>
                                <p>I currently have two keyboards; I usually have a few, but I regularly (everyday) use these two: <a href="https://shop.8bitdo.com/products/8bitdo-retro-mechanical-keyboard" target="_blank" title="8bitDo Retro Keyboard page">8BitDo Retro Keyboard</a> and <a href="https://www.duckychannel.com.tw/en/One3-RGB-TKL-PureWhite" target="_blank" title="Ducky One RGB ten-keyless keyboard in white page">Ducky One RGB TKL keyboard</a>. I'm a big fan of ten-keyless keyboards, and both of these are that.</p>
                                <ul>
                                    <li>The <a href="https://shop.8bitdo.com/products/8bitdo-retro-mechanical-keyboard" target="_blank" title="8BitDo Retro Keyboard page">8BitDo Retro</a> looks fantastic - I'm a big NES fan - and it feels great typing. It's one of the few mechanical keyboards I can type on almost as fast a a low-profile chiclet keyboard (<a href="https://www.apple.com/shop/product/MK2A3LL/A/magic-keyboard-us-english" target="_blank" title="Apple Magic Keyboard page">Apple's magic wireless keyboard</a> used to be my go-to).</li>
                                    <li>The <a href="https://www.duckychannel.com.tw/en/Ducky-One-RGB-TKL" target="_blank" title="Ducky One RGB ten-keyless keyboard page">Ducky One RGB TKL</a> has awesome RGB lighting, which I appreciate more at night, and typically is what I switch to when I'm gaming in the evenings. I also really like the customizable keycaps and key switches, so I was able to really dial every preference when I ordered this keyboard.</li>
                                </ul>
                            </li>
                            <li><h4>["camera":"Logitech C920x HD Webcam"]</h4>
                                <p>I use a <a href="https://www.amazon.com/Logitech-C920x-Pro-HD-Webcam/dp/B085TFF7M1/ref=sr_1_1?crid=14SRQ75RPQ2HX&keywords=logitech%2B1080p%2Bhd%2B920&qid=1706653626&sprefix=logitech%2B1080p%2Bhd%2B92%2Caps%2C263&sr=8-1&th=1" target="_blank" title="Amazon link for Logitech C920 HD webcam">Logitech C920x HD Webcam</a>, which at this point seems like the standard for basic video meetings like Zoom. I believe this is my third version of this same camera, for well over a decade.</p>
                            </li>
                            <li><h4>["microphone":"Blue Yeti USB Microphone"]</h4>
                                <p>For microphone, I've been using a <a href="https://www.amazon.com/Logitech-Microphone-Streaming-Exclusive-Streamlabs/dp/B09TW2RPHG/ref=sr_1_1_sspa?hvadid=557205052211&hvdev=c&hvlocphy=9032160&hvnetw=g&hvqmt=e&hvrand=1603690613140573055&hvtargid=kwd-14664349409&hydadcr=18911_13353560&keywords=blue%2Byeti%2Bmicrophone&qid=1706653783&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1" target="_blank" title="Amazon link for Blue Yeti USB mic">Blue Yeti USB mic</a> for over a decade; well before we all started working from home and taking meetings, I used this mic in podcasting. I'm a big fan of Blue microphones, and was sad when Logitech bought them and killed off the Blue name; but using a dedicated mic still beats a headset with a mic.</p>
                            </li>
                            <li><h4>["headphones":"Apple Airpods 3rd Gen"]</h4>
                                <p>For headphones, I've been using <a href="https://www.apple.com/airpods-3rd-generation/" target="_blank" title="Apple Airpods 3rd Gen page">Apple Airpods</a> for the last 4 years (now on the 3rd Gen), and <a href="https://www.apple.com/shop/product/MNHF2AM/A/earpods-35mm-headphone-plug" target="_blank" title="Older Apple wired in-ear headphones, now called earpods, page">wired Apple headphones</a> before that. Yea, I prefer in-ear headphones, and ideally WITHOUT the plungers that seal them in your ear. I realize I'm a weirdo who has always found the basic Apple wired in-ear headphones to be the most comfortable, and since I'm not jogging around, just sitting at my desk most of the time, I find the Airpods to be fantastic.</p>
                            </li>
                            <li><h4>["desk":"Jarvis Standing Desk"]</h4>
                                <p>My desk for the last 8 years has been a <a href="https://store.hermanmiller.com/standing-desks/jarvis-laminate-standing-desk/2548841.html?lang=en_US" target="_blank" title="Jarvis standing desks page">Jarvis standing desk</a>. I used to really like these, but in the last couple of years, my desk has started to have issues with periodically NOT raising or responding at all. Support is quicky to help if you submit a ticket, but having to do that once a year feels bad. So honestly, I'm on the fence in terms of recommending, and I haven't looked into who might be better in motorized standing desks today.</p>
                            </li>
                            <li><h4>["chair":"Herman Miller Embody Chair"]</h4>
                                <p>My chair is a <a href="https://store.hermanmiller.com/home-office-chairs/embody-chair/100147358.html?lang=en_US&sku=100147358" target="_blank" title="Herman Miller Embody chair page">Herman Miller Embody chair</a>, which is very pricey - all Herman Miller chairs are. But, much like a mattress, you spend a LOT of time sitting in your desk chair; you certainly shouldn't skimp or cheap-out here. Whether or not it makes sense to go up to a Herman Miller, that's up to you; but I can highly recommend both the <a href="https://store.hermanmiller.com/office-chairs-aeron/aeron-chair/2195348.html?lang=en_US&sku=100077411" target="_blank" title="Herman Miller Aeron chair page">Aeron</a> and <a href="https://store.hermanmiller.com/home-office-chairs/embody-chair/100147358.html?lang=en_US&sku=100147358" target="_blank" title="Embody chair page">Embody</a> chairs.</p>
                            </li>
                            
                        </ul>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}