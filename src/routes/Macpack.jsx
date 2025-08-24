import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../css/accordion.css";
import "../css/image_viewer.css"
import macpack_promo from "../assets/macpack_promo.png";
import macpack_promo_screensaver from "../assets/macpack_promo_screensaver.gif";
import macpack_promo_desktop from "../assets/macpack_promo_desktop.png";
import apple_logo from "../assets/apple_logo.png";
import retropie_logo from "../assets/retropie.png";
import macpack_thumb1 from "../assets/macpack/macpack_thumb1.jpg";
import macpack_thumb2 from "../assets/macpack/macpack_thumb2.jpg";
import macpack_thumb3 from "../assets/macpack/macpack_thumb3.jpg";
import macpack_thumb4 from "../assets/macpack/macpack_thumb4.jpg";
import macpack_thumb5 from "../assets/macpack/macpack_thumb5.jpg";
import macpack_thumb51 from "../assets/macpack/macpack_thumb5-1.jpg";
import macpack_thumb6 from "../assets/macpack/macpack_thumb6.jpg";
import macpack_thumb7 from "../assets/macpack/macpack_thumb7.jpg";
import macpack_thumb8 from "../assets/macpack/macpack_thumb8.jpg";
import macpack_thumb9 from "../assets/macpack/macpack_thumb9.jpg";
import macpack_thumb10 from "../assets/macpack/macpack_thumb10.jpg";
import macpack_thumb11 from "../assets/macpack/macpack_thumb11.jpg";
import macpack_thumb12 from "../assets/macpack/macpack_thumb12.jpg";
import macpack_thumb13 from "../assets/macpack/macpack_thumb13.jpg";
import macpack_thumb14 from "../assets/macpack/macpack_thumb14.jpg";
import macpack_thumb15 from "../assets/macpack/macpack_thumb15.jpg";
import macpack_thumb16 from "../assets/macpack/macpack_thumb16.jpg";
import macpack_thumb17 from "../assets/macpack/macpack_thumb17.jpg";
import macpack_thumb18 from "../assets/macpack/macpack_thumb18.jpg";
import macpack_thumb19 from "../assets/macpack/macpack_thumb19.jpg";
import macpack_thumb20 from "../assets/macpack/macpack_thumb20.jpg";
import macpack_thumb21 from "../assets/macpack/macpack_thumb21.jpg";
import macpack_thumb22 from "../assets/macpack/macpack_thumb22.jpg";
import macpack_thumb23 from "../assets/macpack/macpack_thumb23.jpg";
import macpack_thumb24 from "../assets/macpack/macpack_thumb24.jpg";
import macpack_thumb25 from "../assets/macpack/macpack_thumb25.jpg";
import macpack_thumb26 from "../assets/macpack/macpack_thumb26.jpg";
import macpack_thumb261 from "../assets/macpack/macpack_thumb26-1.jpg";
import macpack_thumb27 from "../assets/macpack/macpack_thumb27.jpg";
import macpack_thumb28 from "../assets/macpack/macpack_thumb28.jpg";
import macpack_thumb29 from "../assets/macpack/macpack_thumb29.jpg";
import macpack_thumb291 from "../assets/macpack/macpack_thumb29-1.jpg";
import macpack_thumb30 from "../assets/macpack/macpack_thumb30.jpg";
import macpack_thumb301 from "../assets/macpack/macpack_thumb30-1.jpg";
import macpack_thumb302 from "../assets/macpack/macpack_thumb30-2.jpg";
import macpack_thumb303 from "../assets/macpack/macpack_thumb30-3.jpg";
import macpack_thumb31 from "../assets/macpack/macpack_thumb31.jpg";
import macpack_thumb32 from "../assets/macpack/macpack_thumb32.jpg";
import macpack_thumb33 from "../assets/macpack/macpack_thumb33.jpg";
import macpack_thumb34 from "../assets/macpack/macpack_thumb34.jpg";
import macpack_thumb35 from "../assets/macpack/macpack_thumb35.jpg";
import macpack_thumb36 from "../assets/macpack/macpack_thumb36.jpg";
import macpack_thumb37 from "../assets/macpack/macpack_thumb37.jpg";
import macpack_thumb38 from "../assets/macpack/macpack_thumb38.jpg";
import macpack_thumb39 from "../assets/macpack/macpack_thumb39.jpg";
import macpack_thumb40 from "../assets/macpack/macpack_thumb40.jpg";
import macpack_thumb41 from "../assets/macpack/macpack_thumb41.jpg";
import macpack_thumb42 from "../assets/macpack/macpack_thumb42.jpg";
import macpack_thumb43 from "../assets/macpack/macpack_thumb43.jpg";
import macpack_thumb44 from "../assets/macpack/macpack_thumb44.jpg";
import macpack1 from "../assets/macpack/macpack1.jpg";
import macpack2 from "../assets/macpack/macpack2.jpg";
import macpack3 from "../assets/macpack/macpack3.jpg";
import macpack4 from "../assets/macpack/macpack4.jpg";
import macpack5 from "../assets/macpack/macpack5.jpg";
import macpack51 from "../assets/macpack/macpack5-1.jpg";
import macpack6 from "../assets/macpack/macpack6.jpg";
import macpack7 from "../assets/macpack/macpack7.jpg";
import macpack8 from "../assets/macpack/macpack8.jpg";
import macpack9 from "../assets/macpack/macpack9.jpg";
import macpack10 from "../assets/macpack/macpack10.jpg";
import macpack11 from "../assets/macpack/macpack11.jpg";
import macpack12 from "../assets/macpack/macpack12.jpg";
import macpack13 from "../assets/macpack/macpack13.jpg";
import macpack14 from "../assets/macpack/macpack14.jpg";
import macpack15 from "../assets/macpack/macpack15.jpg";
import macpack16 from "../assets/macpack/macpack16.jpg";
import macpack17 from "../assets/macpack/macpack17.jpg";
import macpack18 from "../assets/macpack/macpack18.jpg";
import macpack19 from "../assets/macpack/macpack19.jpg";
import macpack20 from "../assets/macpack/macpack20.jpg";
import macpack21 from "../assets/macpack/macpack21.jpg";
import macpack22 from "../assets/macpack/macpack22.jpg";
import macpack23 from "../assets/macpack/macpack23.jpg";
import macpack24 from "../assets/macpack/macpack24.jpg";
import macpack25 from "../assets/macpack/macpack25.jpg";
import macpack26 from "../assets/macpack/macpack26.jpg";
import macpack261 from "../assets/macpack/macpack26-1.jpg";
import macpack27 from "../assets/macpack/macpack27.mp4";
import macpack28 from "../assets/macpack/macpack28.jpg";
import macpack29 from "../assets/macpack/macpack29.jpg";
import macpack291 from "../assets/macpack/macpack29-1.jpg";
import macpack30 from "../assets/macpack/macpack30.jpg";
import macpack301 from "../assets/macpack/macpack30-1.jpg";
import macpack302 from "../assets/macpack/macpack30-2.jpg";
import macpack303 from "../assets/macpack/macpack30-3.jpg";
import macpack31 from "../assets/macpack/macpack31.jpg";
import macpack32 from "../assets/macpack/macpack32.jpg";
import macpack33 from "../assets/macpack/macpack33.jpg";
import macpack34 from "../assets/macpack/macpack34.jpg";
import macpack35 from "../assets/macpack/macpack35.jpg";
import macpack36 from "../assets/macpack/macpack36.jpg";
import macpack37 from "../assets/macpack/macpack37.jpg";
import macpack38 from "../assets/macpack/macpack38.jpg";
import macpack39 from "../assets/macpack/macpack39.jpg";
import macpack40 from "../assets/macpack/macpack40.jpg";
import macpack41 from "../assets/macpack/macpack41.jpg";
import macpack42 from "../assets/macpack/macpack42.jpg";
import macpack43 from "../assets/macpack/macpack43.jpg";
import macpack44 from "../assets/macpack/macpack44.jpg";

export default function Macpack() {
    const [modalImg, setModalImg] = useState(null);
    
    const handleImageClick = (imgSrc, imgAlt) => {
        const isVideo = imgSrc.includes('.mp4') || imgSrc.includes('.webm') || imgSrc.includes('.mov');
        setModalImg({ src: imgSrc, alt: imgAlt, isVideo });
    };

    const handleClose = () => setModalImg(null);

    return (
        <>
            <Header />
            <section className="left no-scroll machack">
                <img className="img__promo main" src={macpack_promo} alt="MacPack image, showing original Macintosh SE case painted light blue, yellow, pink, and purple; with backpack straps and an old clear telephone attached." />
                <img id="macpack_promo_screensaver" className="img__promo hide" src={macpack_promo_screensaver} alt="Macpack screensaver image" />
                <img id="macpack_promo_desktop" className="img__promo alt" src={macpack_promo_desktop} alt="Macpack desktop screen image"  />
            </section>
            
            <section className="longform right scroll">
                <div className="title__retro">
                    <h2>The MacPack</h2>
                    <p>
                        <img className="img__icon" src={apple_logo} />
                        Macintosh SE + RetroPie + Awesome
                        <img className="img__icon" src={retropie_logo} />
                    </p>
                </div>
                <div className="accordion">
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-1" id="cb1" />
                        <label for="cb1" className="accordion__title">
                            <h3>The Case</h3>
                        </label>
                        <div className="accordion__content">
                            <div className="img__gallery">
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack1, "Macpack case image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb1} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack2, "Macpack case image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb2} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack3, "Macpack case image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb3} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack4, "Macpack case image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb4} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack5, "Macpack case image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb5} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack51, "Macpack case image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb51} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack6, "Macpack case image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb6} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack7, "Macpack case image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb7} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack8, "Macpack case image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb8} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack9, "Macpack case image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb9} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack10, "Macpack case image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb10} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack11, "Macpack case image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb11} />
                                    </button>
                                </div>
                            </div>
                            <p>
                                <ul>
                                    <li><b>Macintosh SE:</b> This started out as an original Macintosh SE case, shell only - no internals at all. I&apos;ve actually had this for years, with a 
                                similar set of components inside, but if you don&apos;t - maybe try <a href="√https://www.ebay.com/sch/i.html?_from=R40&_trksid=p4432023.m570.l1313&_nkw=macintosh+se&_sacat=0">eBay</a>?</li>
                                    <li><b>LCD bracket:</b> There&apos;s a lot of <a href="https://www.printables.com/model/876743-macintosh-aio-9-inch-lcd-bracket-rev-4">STL files floating around</a> to print your own LCD bracket to replace the CRT in any Macintosh 128k/512k/Plus/Classic/SE, but at the time of building this, I didn&apos;t have
                                a 3D printer, so I bought one already printed off <a href="https://www.etsy.com/listing/1377485134/macintosh-9-inch-crt-to-lcd-bracket">Etsy</a>. After fitting it into the case&apos;s faceplate, I used <a href="https://www.acehardware.com/departments/automotive-rv-and-marine/auto-tools-and-maintenance/auto-body-repair/89699">Bondo Spot Putty</a> to fill in the gaps before painting.</li>
                                    <li><b>USB Ports:</b> I wanted to make use of all the holes in the back of the case, so I got some flush panel mount USB ports, that would be connected to the pi inside the case, and would allow me to optional plug in USB cables as needed from the outside of the case. 
                                        I went with one <a href="https://www.amazon.com/dp/B09FL99YL6">2-port USB-A panel mount connector</a>, and two <a href="https://www.amazon.com/dp/B0BQHHJB4S">USB-C flush panel mount cables</a> which fit perfectly in the holes in the bottom of the case. Ok, I did had to Dremel the holes a tiny bit wider to fit. One is used as a dedicated power adapter.
                                        <br />I also picked up some <a href="https://www.acehardware.com/departments/lighting-and-electrical/boxes-fittings-and-conduit/bushings/3471026">5/8&quot; bushings</a> to plug the other two holes and make that bottom back panel look nice and clean.
                                    </li>
                                    <li><b>Power Switch:</b> I wanted a big fat rocker switch on the back to turn the whole thing on and off, so I bought <a href="https://www.amazon.com/dp/B0C1N8Y86Z?th=1">one (or 5) off Amazon</a>. I think soldered some long wires to only 2 of the 4 pins on the rocker switch and connected them to the Pi&apos;s GPIO pins (pins 5 and 6 specifically), and used the script from 
                                        <a href="https://howchoo.com/pi/how-to-add-a-power-button-to-your-raspberry-pi/?utm_source=youtube&utm_medium=referral&utm_campaign=power-button-video&utm_content=description">HowChoo&apos;s Raspberry Pi power button tutorial</a>.
                                        Since the rocker switch was slightly too small to snuggly fit in the hole in th back of the case, I had to improvise with a piece of plastic. I cut a square plastic collar for the rocker switch, painted it to match the case, and gorilla glued it to the rocker switch.</li>
                                    <li><b>Straps:</b> I just cut off the straps from a neon multicolor Jansport backpack, but any backpack straps will do here. I sewed the tops of both straps together in a "V", sewed those to an additional bit of strap, then poked the long M4 case screws through those to attach everything to 
                                        the case under the top handle. The bottom of the straps I poked through the bottom vents on each side (I did have to Dremel out one slit on each side), and then sewed a button on each strap inside, to ensure the strap wouldn't come out.</li>
                                    <li><b>Phone?!</b> Yes, though it's not connected to the computer....yet! I ran out of time before Def Con, but this is my next project - adapting the phone to be a mic and speaker that plugs into the computer via 3.5mm headphone jack. 
                                        This was all inspired by the <a href="https://www.techeblog.com/intermatrix-macphone-1984-macintosh-computer/">Intermatrix MacPhone</a>, a real 3rd party Macintosh accessory from 1984, which I found out from <a href="https://www.youtube.com/watch?v=sCLvocTX2Ug">LGR&apos;s video</a> on it. 
                                        I had to have it, but since there was <a href="https://www.ebay.com/itm/185984173346">only one on eBay for $300</a>, I quickly decided I did NOT need this phone, and would go with a different one. So I bought this clear phone off eBay for $20, which goes much better with the vaporwave aesethic I&apos;m going for.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-2" id="cb2" />
                        <label for="cb2" className="accordion__title">
                            <h3>The Guts</h3>
                        </label>
                        <div className="accordion__content">
                            <div className="img__gallery">
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack12, "Macpack guts image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb12} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack13, "Macpack guts image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb13} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack14, "Macpack guts image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb14} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack15, "Macpack guts image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb15} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack16, "Macpack guts image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb16} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack17, "Macpack guts image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb17} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack18, "Macpack guts image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb18} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack19, "Macpack guts image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb19} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack20, "Macpack guts image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb20} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack21, "Macpack guts image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb21} />
                                    </button>
                                </div>
                            </div>
                            <p>
                                <ul>
                                    <li><b>Computer:</b> <a href="https://www.centralcomputer.com/raspberry-pi-4-model-b-8gb-ram-board.html">Raspberry Pi 4, 8GB ram</a>. Obviously its running on a Pi. I started out with a Pi 5 (latest at the time), but there still isn&apos;t a lot of 3rd party support for the 5;
                                        I ran into issues with USB drives not mounting, audio not playing, screensaver not working - all of which just worked on the Pi 4 without issue.<br />
                                        I also got a <a href="https://www.amazon.com/dp/B07VD568FB">Geekworm Armor Case</a> for the pi, which acts as a giant heat sink, instead of a fan.
                                    </li>
                                    <li><b>LCD Monitor:</b> I used a <a href="https://www.adafruit.com/product/1287?gad_source=1&gclid=CjwKCAjw74e1BhBnEiwAbqOAjN6eeZg2bmpPsiOtPJELilZ6QdNnkxeFC703h2TPuDGR1BuAFTyaXRoChREQAvD_BwE">10inch LCD from Adafruit</a>, and replaced the default AC power adapter with a <a href="https://www.amazon.com/dp/B074R7FDCR">USB-to-barrel converter</a> so that it could be run off the battery.</li>
                                    <li><b>Battery:</b> The battery I chose was the <a href="https://www.amazon.com/dp/B0BYP2F3SG">Anker Power Bank</a> - arguably overpowered for this, but I wanted a battery with <strong>pass-through charging</strong> - so that I would only have 1 USB-C cable coming out the 
                                        back. This could run all the components off power AND charge the battery at the same time when plugged in. This power bank also has a handy app, that connects over bluetooth, so I can see exactly what the battery is doing, its temperature, and power draw without having to open the case and pull it out.</li>
                                    <li><b>Speakers:</b> I already had a cheap pair of desktop USB speakers off Amazon (no longer available, but <a href="https://www.amazon.com/MANHATTAN-2600-Speaker-System-161435/dp/B005LW42MY/ref=sr_1_7_sspa">something like these</a>), that used USB for power and headphone jack for audio, with a volume dial. I tore off the plastic housing for the 
                                        speakers, screwed them to a plexiglass plate that I screwed to the inside of the Mac&apos;s faceplate, and positioned the volume dial where the Mac&apos;s original screen brightness dial used to be.</li>
                                    <li><b>Case Fan:</b> After testing and seeing how hot the battery got, I decided to get a <a href="https://www.amazon.com/dp/B00G059G86?ref=ppx_yo2ov_dt_b_fed_asin_title">fan for inside the case</a>, which also runs off USB. This helped bring the battery temp down to around 80˚F (as opposed to 95˚F).</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-3" id="cb3" />
                        <label for="cb3" className="accordion__title">
                            <h3>The Software</h3>
                        </label>
                        <div className="accordion__content">
                            <div className="img__gallery">
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack22, "Macpack software image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb22} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack23, "Macpack software image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb23} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack24, "Macpack software image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb24} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack25, "Macpack software image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb25} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack261, "Macpack software image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb261} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack26, "Macpack software image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb26} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack33, "Macpack paint image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb33} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack27, "Macpack software image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb27} />
                                    </button>
                                </div>

                            </div>
                            <p>
                                <ul>
                                    <li><b>SD Card Imaging:</b> Raspberry Pi has their own <a href="https://www.raspberrypi.com/software/">imager software</a> that makes putting any OS image on an SD card a breeze, and includes 3rd party OS&apos;s - like RetroPie!!</li>
                                    <li><b>Operating System:</b> This baby is running <a href="https://retropie.org.uk/docs/">RetroPie</a>, an OS for RPI&apos;s that is made for retro gaming, with tons of emulators out of the box!</li>
                                    <li><b>Theme:</b> I designed a custom Emulationstation theme myself for this, to look like System 6, then I made ANOTHER theme to make it more vaporwave - <a href="https://github.com/Kaceykaso/es-theme-macbench-vaporwave">download the theme here</a>! 
                                        Making my own Emulationstation theme was fairly easy, thanks to their <a href="https://retropie.org.uk/docs/Creating-Your-Own-EmulationStation-Theme/">great documentation</a>, and the <a href="https://retropie.org.uk/forum/topic/5552/release-amiga-workbench-emulationstation-theme">Amiga Workbench theme</a> 
                                        for the inspiration (hence where then name &apos;macbench&apos; comes from).</li>
                                    <li><b>Screensaver:</b> I wanted to implement an After Dark screensaver for the whole system (emulationstation specifically allows for <a href="https://retropie.org.uk/forum/topic/12733/animated-screensavers/2">image, slideshow, or video screensavers</a>), and 
                                        stumbled across a Flying Toasters MP4 file that was perfect! <a href="src/assets/flying_toasters.mp4.zip" title="Flying toasters MP4 file">Download it here</a>!</li>
                                    <li><b>Honorable Mention - Macintosh emulator:</b> Despite RetroPie doing a lot of the work for you, some emulators take some configuring. I used the <a href="https://www.gryphel.com/c/minivmac/">Mini vMac</a> emulator (<a href="https://retropie.org.uk/docs/Macintosh/">as opposed to Basiliskll</a>),
                                        but needed to recompile it for my specific screen size and needs (arm build did not immediately work). I also wanted 2 different versions: default Mini vMac Macintosh Plus (black & white), along with a Macintosh Classic II (color) side by side.
                                        Learning how to <a href="https://www.gryphel.com/c/minivmac/build.html">compile</a> the Mini vMac (on the RPI no less) was it&apos;s own adventure and side-quest, but I tackled that mini boss and chugged on.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-4" id="cb4" />
                        <label for="cb4" className="accordion__title">
                            <h3>The Paint</h3>
                        </label>
                        <div className="accordion__content">
                            <div className="img__gallery">
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack28, "Macpack paint image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb28} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack29, "Macpack paint image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb29} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack30, "Macpack paint image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb30} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack301, "Macpack paint image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb301} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack302, "Macpack paint image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb302} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack303, "Macpack paint image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb303} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack31, "Macpack paint image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb31} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack291, "Macpack paint image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb291} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack32, "Macpack paint image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={macpack_thumb32} />
                                    </button>
                                </div>
                            </div>
                            <p>
                                <ul>
                                    <li><b>Prep:</b> Scuff up the entire piece with a <a href="https://www.acehardware.com/departments/home-and-decor/cleaning-and-disinfectants/scouring-pads-and-sponges/17443">Scotch Brite Scour Pad</a> (not sandpaper), just enough to take the shine off. 
                                        Then wipe down with a wet paper towel, because there will be green dust all over it, and let dry.</li>
                                    <li><b>Adhesion Promoter:</b> This is critical for spray painting plastic. I used <a href="https://www.oreillyauto.com/detail/c/dupli-color/dupli-color-11-ounce-adhesion-promoter/dpl0/cp199?q=adhesion+promoter&pos=0">Dupli-Color Adhesion Promoter Spray</a> (Amazon or any auto parts store) and followed the instructions on the 
                                        can for times between coats and primer.</li>
                                    <li><b>Primer:</b> I used <a href="https://www.acehardware.com/departments/paint-and-supplies/spray-paint/general-purpose/1395524">Rustoleum White Primer</a>, and again followed the instructions on the can for coat reapplication and dry times. Since I used Krylon for color, I&apos;ve been told you want stay within the same brand for everything, 
                                        and I should have used a Krylon primer. My local store didn&apos;t have this, so I went with Rustoleum; but after seeing how easily it&apos;s gotten 
                                        nics and chipped, I&apos;m inclined to believe this and the finishing enamel might have been the issue.<br />
                                        I choose white primer specifically since I was using a light yellow color, and wanted to ensure it would be as bright as possible.</li>
                                    <li><b>Color:</b> I used Krylon for all my spray paint colors, as I&apos;ve heard its the best for bright colors; and I certainly can&apos;t argue with the results. Specifically for this project, I used:<br />
                                        <a href="https://www.acehardware.com/departments/paint-and-supplies/spray-paint/general-purpose/1915214">Hot Pink</a>, 
                                        <a href="https://www.amazon.com/gp/product/B07NNSTSQV/ref=ppx_yo_dt_b_search_asin_title">Lagoon Blue</a>, 
                                        <a href="https://www.amazon.com/Krylon-K05505007-COLORmaxx-Spray-Aerosol/dp/B07LFWTW62/ref=sr_1_2?crid=2M5NCXF7W1PHC&dib=eyJ2IjoiMSJ9.scGwXHj1r7BVt_oBKM2lKmx-G6FuKlN7k_LkmAJsYON82SSQR3tu1Ef3xznbTkrtb80X8vsr0wyRe816J7YhbxnABjPgfjKWgXaTzRknwNUaxqOa-5xcg_wI_p3tecxAoQZABiQUXhktutPv1SQIJ0nnzt7OgDc9eXFk2IA0McvC8h--MXbOEJ0hucbgNgXafg2fF1bVqLf20zXPkpL_GPAOQJ2i8030BVdSrXeRlCV2VyvxoMjJApR-svUilqphuKQVtUkiGfFD6Vz1D1b_l5oCOfHF3dEjWnolZ9MHxqQ.R_drOETeQRypac_YCgLwCJv4G5paOodXCc8X_gqMggI&dib_tag=se&keywords=Krylon%C2%AE%2BCOLORmaxx%E2%84%A2%2BPaint%2BPrimer&qid=1721944504&refinements=p_89%3AKrylon&rnid=2528832011&s=hi&sprefix=krylon%2B%2Bcolormaxx%2B%2Bpaint%2Bprimer%2Ctools%2C206&sr=1-2&th=1">Sun Yellow</a>, and 
                                        <a href="https://www.amazon.com/gp/product/B07LFYB18Z/ref=ppx_yo_dt_b_search_asin_title">Rich Plum</a>.</li>
                                    <li><b>Finish:</b> I used two finishing sprays: first, <a href="https://www.acehardware.com/departments/paint-and-supplies/spray-paint/general-purpose/1010875">Krylon Matte Finish</a>, then <a href="https://www.acehardware.com/departments/paint-and-supplies/spray-paint/hobby-spray-paint/1566736?store=00634&gad_source=1&gclid=CjwKCAjw1920BhA3EiwAJT3lSarPdrCcJ26OL7Hz2ogdx8T1uI0b9A-CEavTAqnaErHdof5wq1B5LxoCKeIQAvD_BwE&gclsrc=aw.ds">Rustoleum Matte Clear Enamel</a>. 
                                        The paint left the project shiner than I liked, and the Krylon matte spray really made it look like a real, retro product! I had <a href="https://youtu.be/g-lkORBKk2o?si=3_rI69_qkaQJqXVW">watched reviews of a few different matte sprays</a>, and Krylon&apos;s was far and away the best looking.
                                        Since I knew this would get knocked around being worn as a backpack, I also wanted to do a more protective layer on top after everything was done. 
                                        As I mentioned above though, I think using Rustoleum and not Krylon here might have been 
                                        a mistake, since it still got chipped pretty easily being worn at Def Con. Krylon does not make a clear enamel, but I might experiment with some other clear finishing sprays.
                                        Again, follow the instructions on each can for specific application and dry times - each layer is different.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-5" id="cb5" />
                        <label for="cb5" className="accordion__title">
                            <h3>Parts List</h3>
                        </label>
                        <div className="accordion__content">
                            <p>
                                <ul>
                                    <li>Full parts list, including spray paint and screws used, with links can be <a target="_blank" title="Parts list with links for Mac Pack" href="https://docs.google.com/document/d/e/2PACX-1vQbmOzJhV906nrSaERAWhIEy09pEcMpq-PQ0Or_NYkA5cDnOtbsBQMzjltWutoAk257NVx9ulgP62kz/pub">found here</a>.</li>
                                    <li>Oh and that clear phone on the side? I have no idea what make or model it is, as I found it on eBay. If you have more info on it, let me know!</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-6" id="cb6" />
                        <label for="cb6" className="accordion__title">
                            <h3>MacPack Adventures</h3>
                        </label>
                        <div className="accordion__content">
                            <div className="img__gallery">
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack34, "Macpack adventures image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" alt="Image thumbnail" src={macpack_thumb34} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack35, "Macpack adventures image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" alt="Image thumbnail" src={macpack_thumb35} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack36, "Macpack adventures image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" alt="Image thumbnail" src={macpack_thumb36} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack37, "Macpack adventures image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" alt="Image thumbnail" src={macpack_thumb37} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack38, "Macpack adventures image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" alt="Image thumbnail" src={macpack_thumb38} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack39, "Macpack adventures image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" alt="Image thumbnail" src={macpack_thumb39} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack40, "Macpack adventures image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" alt="Image thumbnail" src={macpack_thumb40} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack41, "Macpack adventures image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" alt="Image thumbnail" src={macpack_thumb41} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack42, "Macpack adventures image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" alt="Image thumbnail" src={macpack_thumb42} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack43, "Macpack adventures image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" alt="Image thumbnail" src={macpack_thumb43} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(macpack44, "Macpack adventures image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" alt="Image thumbnail" src={macpack_thumb44} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Modal for image viewing */}
            {modalImg && (
                <div className="img-modal" onClick={handleClose} style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
                }}>
                    {modalImg.isVideo ? (
                        <video
                            src={modalImg.src}
                            controls
                            autoPlay
                            style={{ maxWidth: '80vw', maxHeight: '80vh' }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking video controls
                        />
                    ) : (
                        <img
                            src={modalImg.src}
                            alt={modalImg.alt}
                            style={{ maxWidth: '80vw', maxHeight: '80vh' }}
                        />
                    )}
                    <button 
                        className="img__gallery__close"
                        onClick={handleClose}
                        style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '2rem', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
                    >×</button>
                </div>
            )}
            <Footer />
        </>
    )
}