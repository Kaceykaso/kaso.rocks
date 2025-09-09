import { useEffect, useState, useRef } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Accordion, AccordionItem } from "../components/Accordion";
import { ImageGallery } from "../components/ImageGallery";
import "../css/accordion.css";
import "../css/image_viewer.css"
import { icons } from "../js/icons";
import { promo, caseImages, gutsImages, softwareImages, paintImages, adventureImages } from "../js/mackpack_images";


export default function Macpack() {
    const [modalImg, setModalImg] = useState(null);
    const [showScreensaver, setShowScreensaver] = useState(false);
    const screenRef = useRef(null);
    const desktopRef = useRef(null);

    const handleImageClick = (imgSrc, imgAlt) => {
        const isVideo = imgSrc.includes('.mp4') || imgSrc.includes('.webm') || imgSrc.includes('.mov');
        setModalImg({ src: imgSrc, alt: imgAlt, isVideo });
    };

    const handleClose = () => setModalImg(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowScreensaver(true);
            console.log("Surprise! It's flying toasters!");
        }, 15000);
        // cleanup
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header />
            <section className="left no-scroll machack">
                <img 
                    className="img__promo main" 
                    src={promo.macpack} 
                    alt="MacPack image, showing original Macintosh SE case painted light blue, yellow, pink, and purple; with backpack straps and an old clear telephone attached." 
                />
                <img 
                    ref={screenRef}
                    id="macpack_promo_screensaver" 
                    className={`img__promo ${showScreensaver ? '' : 'hide'}`} 
                    src={promo.macpack_screensaver} 
                    alt="Macpack screensaver image" 
                />
                <img 
                    ref={desktopRef}
                    id="macpack_promo_desktop" 
                    className={`img__promo ${showScreensaver ? 'hide' : ''}`} 
                    src={promo.macpack_desktop} 
                    alt="Macpack desktop screen image"  
                />
            </section>
            
            <section className="longform right scroll">
                <div className="title__retro">
                    <h2>The MacPack</h2>
                    <p>
                        <img className="img__icon" src={icons.apple_logo} />
                        Macintosh SE + RetroPie + Awesome
                        <img className="img__icon" src={icons.retropie_logo} />
                    </p>
                </div>

                <Accordion>
                    <AccordionItem id={"1"} title="The Case">
                        <ImageGallery images={caseImages} onImageClick={handleImageClick} />
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
                    </AccordionItem>
                    <AccordionItem id={"2"} title="The Guts">
                        <ImageGallery images={gutsImages} onImageClick={handleImageClick} />
                        <p>
                            <ul>
                                <li><b>Computer:</b> <a href="https://www.centralcomputer.com/raspberry-pi-4-model-b-8gb-ram-board.html">Raspberry Pi 4, 8GB ram</a>. Obviously its running on a Pi. I started out with a Pi 5 (latest at the time), but there still isn&apos;t a lot of 3rd party support for the 5;
                                    I ran into issues with USB drives not mounting, audio not playing, screensaver not working - all of which just worked on the Pi 4 without issue.<br />
                                    I also got a <a href="https://www.amazon.com/dp/B07VD568FB">Geekworm Armor Case</a> for the pi, which acts as a giant heat sink, instead of a fan.
                                </li>
                                <li><b>LCD Monitor:</b> I used a <a href="https://www.adafruit.com/product/1287?gad_source=1&gclid=CjwKCAjw74e1BhBnEiwAbqOAjN6eeZg2bmpPsiOtPJELilZ6QdNnkxeFC703h2TPuDGR1BuAFTyaXRoChREQAvD_BwE">10inch LCD from Adafruit</a>, and replaced the default AC power adapter with a <a href="https://www.amazon.com/dp/B074R7FDCR">USB-to-barrel converter</a> so that it could be run off the battery.</li>
                                <li><b>Battery:</b> The battery I chose was the <a href="https://www.amazon.com/dp/B0BYP2F3SG">Anker Power Bank</a> - arguably overpowered for this, but I wanted a battery with <strong>pass-through charging</strong> - so that I would only have 1 USB-C cable coming out the back. This could run all the components off power AND charge the battery at the same time when plugged in. This power bank also has a handy app, that connects over bluetooth, so I can see exactly what the battery is doing, its temperature, and power draw without having to open the case and pull it out.</li>
                                <li><b>Speakers:</b> I already had a cheap pair of desktop USB speakers off Amazon (no longer available, but <a href="https://www.amazon.com/MANHATTAN-2600-Speaker-System-161435/dp/B005LW42MY/ref=sr_1_7_sspa">something like these</a>), that used USB for power and headphone jack for audio, with a volume dial. I tore off the plastic housing for the speakers, screwed them to a plexiglass plate that I screwed to the inside of the Mac&apos;s faceplate, and positioned the volume dial where the Mac&apos;s original screen brightness dial used to be.</li>
                                <li><b>Case Fan:</b> After testing and seeing how hot the battery got, I decided to get a <a href="https://www.amazon.com/dp/B00G059G86?ref=ppx_yo2ov_dt_b_fed_asin_title">fan for inside the case</a>, which also runs off USB. This helped bring the battery temp down to around 80˚F (as opposed to 95˚F).</li>
                            </ul>
                        </p>
                    </AccordionItem>
                    <AccordionItem id={"3"} title="The Software">
                        <ImageGallery images={softwareImages} onImageClick={handleImageClick} />
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
                    </AccordionItem>
                    <AccordionItem id={"4"} title="The Paint">
                        <ImageGallery images={paintImages} onImageClick={handleImageClick} />
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
                    </AccordionItem>
                    <AccordionItem id={"5"} title="Parts List">
                        <p>
                            <ul>
                                <li>Full parts list, including spray paint and screws used, with links can be <a target="_blank" title="Parts list with links for Mac Pack" href="https://docs.google.com/document/d/e/2PACX-1vQbmOzJhV906nrSaERAWhIEy09pEcMpq-PQ0Or_NYkA5cDnOtbsBQMzjltWutoAk257NVx9ulgP62kz/pub">found here</a>.</li>
                                <li>Oh and that clear phone on the side? I have no idea what make or model it is, as I found it on eBay. If you have more info on it, let me know!</li>
                            </ul>
                        </p>
                    </AccordionItem>
                    <AccordionItem id={"6"} title="Macpack Adventures">
                        <ImageGallery images={adventureImages} onImageClick={handleImageClick} />
                    </AccordionItem>
                </Accordion>
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