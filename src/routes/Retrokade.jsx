import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../css/accordion.css";
import "../css/image_viewer.css"
import retrokade from "../assets/retrokade.png";
import a1up from "../assets/a1up.png";
import retropie from "../assets/retropie.png";
import cabinet1 from "../assets/retrokade/cabinet1.jpg";
import cabinet1_thumb from "../assets/retrokade/cabinet1_thumb.jpg";
import cabinet2 from "../assets/retrokade/cabinet2.jpg";
import cabinet2_thumb from "../assets/retrokade/cabinet2_thumb.jpg";
import cabinet3 from "../assets/retrokade/cabinet3.jpg";
import cabinet3_thumb from "../assets/retrokade/cabinet3_thumb.jpg";
import cabinet4 from "../assets/retrokade/cabinet4.jpg";
import cabinet4_thumb from "../assets/retrokade/cabinet4_thumb.jpg";
import cabinet5 from "../assets/retrokade/cabinet5.jpg";
import cabinet5_thumb from "../assets/retrokade/cabinet5_thumb.jpg";
import cabinet6 from "../assets/retrokade/cabinet6.jpg";
import cabinet6_thumb from "../assets/retrokade/cabinet6_thumb.jpg";
import cabinet7 from "../assets/retrokade/cabinet7.jpg";
import cabinet7_thumb from "../assets/retrokade/cabinet7_thumb.jpg";
import cabinet8 from "../assets/retrokade/cabinet8.jpg";
import cabinet8_thumb from "../assets/retrokade/cabinet8_thumb.jpg";
import cabinet9 from "../assets/retrokade/cabinet9.jpg";
import cabinet9_thumb from "../assets/retrokade/cabinet9_thumb.jpg";
import cabinet10 from "../assets/retrokade/cabinet10.jpg";
import cabinet10_thumb from "../assets/retrokade/cabinet10_thumb.jpg";

export default function Retrokade() {
    const [modalImg, setModalImg] = useState(null);
    
    const handleImageClick = (imgSrc, imgAlt) => {
        setModalImg({ src: imgSrc, alt: imgAlt });
    };

    const handleClose = () => setModalImg(null);

    return (
        <>
            <Header />
            <section className="left no-scroll">
                <img className="img__promo retrokade" src={retrokade} alt="Retrokade arcade cabinet" />
            </section>
            
            <section className="longform right scroll">
                <div className="title__retro">
                    <h2>The Retrokade</h2>
                    <p>
                        <img className="img__icon" src={a1up} />
                        Arcade1up + RetroPie
                        <img className="img__icon" src={retropie} />
                    </p>
                </div>
                <div className="accordion">
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-1" id="cb1" />
                        <label for="cb1" className="accordion__title">
                            <h3>The Cabinet</h3>
                        </label>
                        <div className="accordion__content">
                            <div className="img__gallery">
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(cabinet1, "Retrokade cabinet image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={cabinet1_thumb} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(cabinet2, "Retrokade cabinet image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={cabinet2_thumb} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(cabinet3, "Retrokade cabinet image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={cabinet3_thumb} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(cabinet4, "Retrokade cabinet image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={cabinet4_thumb} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(cabinet5, "Retrokade cabinet image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={cabinet5_thumb} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(cabinet6, "Retrokade cabinet image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={cabinet6_thumb} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(cabinet7, "Retrokade cabinet image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={cabinet7_thumb} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(cabinet8, "Retrokade cabinet image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={cabinet8_thumb} />
                                    </button>
                                </div>
                                <div className="img__gallery__image">
                                    <button 
                                        className="img__gallery__thumb"
                                        onClick={() => handleImageClick(cabinet9, "Retrokade cabinet image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={cabinet9_thumb} />
                                    </button>
                                </div>
                            </div>
                            <p>
                                <ul>
                                    <li>
                                        This used to be an <b><a href="https://arcade1up.com/">Arcade1Up</a> <a href="https://www.walmart.com/ip/Arcade1Up-Rampage-Arcade-Machine-4ft/114274755">Rampage cabinet</a></b>! The Arcade1Up hacking community is pretty large at this point, with tons of resources and 
                                        replacement parts to modify any A1Up cabinet. As my first go at this, I went with the typical <i>replace with a Raspberry Pi running RetroPie</i> build.
                                    </li>
                                    <li>
                                        <b>Light-up Marquee:</b> I designed a custom marquee graphic, and sent it to <a href="https://thearcadegamefactory.com/product/deluxe-light-box-for-arcade1up-legacy-cabinets/">TheArcadeGameFactory.com</a> to have it made into a new illuminated marquee, which was a drop-in replacement 
                                    for the standard marquee. I've also bought <a href="https://thearcadegamefactory.com/product/light-box-for-gen-3-arcade1up-cabinets/">light-up marquees</a> for other cabinets to replace the stock wood ones.</li>
                                    <li><b>Control Panel:</b> I ordered a new control panel through <a href="https://www.etsy.com/shop/GrafixArcade">GrafixArcade</a> on Etsy, but they don't appear to do custom button layouts and T-modling anymore. 
                                        <a href="https://arcademodup.com/product/arcade1up-control-deck/">ArcadeModUp</a> is another vendor that will do custom layouts, T-molding, graphics, and more for a decent price.
                                    </li>
                                    <li>
                                        <b>Speaker Panel:</b> I bought a replacement J panel with speaker vents from <a href="https://www.etsy.com/listing/1231842856/arcade1up-j-speaker-panel">TulsaArcades</a> 
                                        on Etsy. These are the easiest to replace, just slide into place once the control panel has been removed. I also ended up drilling a hole in the middle to install a double <a href="https://www.amazon.com/dp/B01MY1WDIU/?coliid=IXK8SK07MJI1U&colid=314GVZZQYKWTL&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it">USB port surface mount</a>.</li>
                                    <li>
                                        <b>Custom Graphics:</b> I designed my own graphics using these <a href="https://drive.google.com/drive/folders/1mZ9rsH5g3Xs0-hkZPSLGc0QtsCeplmvI?usp=drive_link">Arcade1Up Photoshop templates</a>, and sent them to ArcadeGraphix.com to be printed out. Unfortunately, they no longer exist; but there are plenty of other vendors who 
                                        do the same things - <a href="https://www.escapepodonline.com/products/arcade1up-use-your-custom-art-upload-your-files-below?variant=31236520706121&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=Cj0KCQjwjY64BhCaARIsAIfc7YZcVW44kgorUHQKXIUMUlfcrLKmK_N0Ep5JnnIG3jH-x5MXe0NBJqsaAtKsEALw_wcB">escapepodonline.com</a>, 
                                        <a href="https://gameongrafix.com/product/customer-designed-arcade1up-kit/">gameongrafix.com</a>, and <a href="https://www.arcadegraphic.net/product-page/custom-design-full-arcade1up-cabinet">arcadegraphic.net</a>.
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
                                        onClick={() => handleImageClick(cabinet10, "Retrokade cabinet internals image")}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img className="img__thumb" src={cabinet10_thumb} />
                                    </button>
                                </div>
                            </div>
                            <p>
                                <ul>
                                    <li>
                                        Surprise – it&apos;s a <b><a href="https://www.raspberrypi.com/products/raspberry-pi-4-model-b/">Raspberry Pi 4</a></b>! It&apos;s running <a href="https://retropie.org.uk/docs/">RetroPie</a>, so of course! Currently, it&apos;s running a modified version of the Carbon theme, with 
                                        a bunch of custom icons I designed for all the categories I organized (this playlists of games) - Hacked, Kids Stuff, Mario Bros, Beat&apos;em Ups, 
                                        Cards & Casino, Racing, and a list of the original Mame games that were on this cabinet – Rampage, Gauntlet, Joust, and Defender.
                                    </li>
                                    <li>
                                        <b>Monitor Adapter:</b> By default, Arcade1Up cabinets have their computer logic board and the monitor control/logic board combined as one PCB, which makes it difficult to use the monitor with anything else. In order to use the monitor as a basic HDMI display, and plug in any other computer,
                                        you need an adapter logic board. Arcade1Up also uses several different monitor sizes and resolutions, depending on the cabinet; so first, make sure you know the size and resolution of your cabinet&apos;s monitor. The Rampage cabinet was a first gen cabinet, and that used a 17&quot; 1280x1024 
                                        monitor, and so I needed <a href="https://www.amazon.com/dp/B06X9NJ2NR/?coliid=I3ENKOBWF7HUK&colid=314GVZZQYKWTL&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it">this adapter specificially</a>.
                                    </li>
                                    <li>
                                        <b>Speakers:</b> I wanted to upgrade the speakers, since the ones included were very cheap, small speakers. I ended up getting these <a href="https://www.amazon.com/dp/B00009QOTA/?coliid=I2F8VXE6JYP8LW&colid=314GVZZQYKWTL&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it">3 1/2 inch 2-way Pioneer car speakers</a>, and attaching them 
                                        directly to the speaker panel board. These of course needed some <a href="https://www.amazon.com/dp/B006LW0W5Y/?coliid=I2KUAV30SM4I1Z&colid=314GVZZQYKWTL&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it">copper speaker wire</a>, and an amp (see next).

                                    </li>
                                    <li>
                                        <b>Audio Amplifier:</b> After trying a couple of small audio amplifiers, I went with this <a href="https://www.amazon.com/dp/B0071HZ5EQ/?coliid=I2K6QRH8XNS9IE&colid=314GVZZQYKWTL&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it">Pyle Home Mini Audio Amplifier</a>. It sounds fantastic, and uses a 3.5mm audio jack out for the Raspberry Pi. 
                                        This amp did not come with an AC power supply, so I found <a href="https://www.amazon.com/dp/B0863Q5B4B/?coliid=I1G3R5N9OG9D04&colid=314GVZZQYKWTL&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it">this power adapter</a> that works great. 
                                    </li>
                                    <li>
                                        <b>Joystick & Buttons: </b> I bought a basic <a href="https://www.amazon.com/dp/B01N09SO20/?coliid=IOQA4DR08MQXE&colid=314GVZZQYKWTL&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it">2-player set of 8-way joysticks and LED illuminated buttons</a> from Amazon, 
                                        which all wire into USB and can be configured like a basic video game controller. These are super easy to install, only the joysticks even need to be screwed in - just make sure the buttons are the correct diameter – 
                                        28mm is standard, but there are also buttons in 30mm. I also replaced the joystick ball tops with these beautiful <a href="https://arcadeshock.com/collections/balltops/products/ex-gear-bi-color-battop?variant=39346166497365">bat tops from ArcadeShock.com</a>.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-3" id="cb3" />
                        <label for="cb3" className="accordion__title">
                            <h3>Parts List</h3>
                        </label>
                        <div className="accordion__content">
                            <p>
                                <ul>
                                    <li>All the parts and accessories I bought off Amazon can be <a target="_blank" title="Parts list for the Retrokade" href="https://www.amazon.com/hz/wishlist/ls/314GVZZQYKWTL?ref_=wl_share">found here</a>.</li>
                                    <li>Everything else: 
                                        <ul>
                                            <li><a href="https://www.raspberrypi.com/products/raspberry-pi-4-model-b/">Raspberry Pi 4</a></li>
                                            <li>Light-up Marquee: <a href="https://thearcadegamefactory.com/product/deluxe-light-box-for-arcade1up-legacy-cabinets/">thearcadegamefactory.com</a></li>
                                            <li>Custom Control Panel: <a href="https://arcademodup.com/product/arcade1up-control-deck/">ArcadeModUp</a></li>
                                            <li>Replacement J (speaker) Panel: <a href="https://www.etsy.com/listing/1231842856/arcade1up-j-speaker-panel">TulsaArcades</a> </li>
                                            <li>Custom Vinyl Graphics: <a href="https://www.escapepodonline.com/products/arcade1up-use-your-custom-art-upload-your-files-below?variant=31236520706121&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=Cj0KCQjwjY64BhCaARIsAIfc7YZcVW44kgorUHQKXIUMUlfcrLKmK_N0Ep5JnnIG3jH-x5MXe0NBJqsaAtKsEALw_wcB">escapepodonline.com</a>, 
                                                <a href="https://gameongrafix.com/product/customer-designed-arcade1up-kit/">gameongrafix.com</a>, or <a href="https://www.arcadegraphic.net/product-page/custom-design-full-arcade1up-cabinet">arcadegraphic.net</a>.</li>
                                            <li>Additional Ball/Bat Tops: <a href="https://arcadeshock.com/collections/balltops">ArcadeShock.com</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Modal for image viewing */}
            {modalImg && (
                <div className="img-modal" onClick={handleClose} style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
                }}>
                    <img
                        src={modalImg.src}
                        alt={modalImg.alt}
                        style={{ maxWidth: '80vw', maxHeight: '80vh' }}
                    />
                    <button 
                        className="img__gallery__close"
                        onClick={handleClose}
                        style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '2rem' }}
                    >x</button>
                </div>
            )}
            <Footer />
        </>
    )
}