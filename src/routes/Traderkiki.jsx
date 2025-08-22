import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../css/accordion.css";
import "../css/image_viewer.css"
import traderkiki_logo from "../assets/trader_kiki_logo.png";
import etsy_icon from "../assets/etsy_icon.png";
import geomatric_triangle_jazz from "../assets/geometric_triangle_jazz.png";
import geometric_square_jazz from "../assets/geometric_square_jazz.png";
import vaporwave_retro_floppy from "../assets/vaporwave_retro_floppy.png";
import vaporwave_glow_arcade_moon from "../assets/vaporwave_glow_arcade_moon.png";
import vaporwave_sunset_hoops from "../assets/vaporwave_sunset_hoops.jpg";
import nineties_memphis_floppy from "../assets/90s_memphis_floppy.jpg";
import arcade_carpet_glow from "../assets/arcade_carpet_glow.jpg";
import geometric_rectangle_deco from "../assets/geometric_rectangle_deco.jpg";
import glow_macintosh_stacked_hoops from "../assets/glow_macintosh_stacked_hoops.jpg";
import vaporwave_glow_palm_stacked_triangle from "../assets/vaporwave_glow_palm_stacked_triangle.jpg";
import retro_eyes from "../assets/retro_eyes.jpg";
import monstera_night_glow from "../assets/monstera_night_glow.jpg";

export default function Traderkiki() {
    return (
        <>
            <Header />
            <section className="left no-scroll">
                <img className="img__promo traderkiki" src={traderkiki_logo} alt="Trader Kiki on Etsy" />
            </section>

            <section className="longform right scroll">
                <div className="title__retro">
                    <h2>
                        <a href="https://www.etsy.com/shop/TraderKiki" title="Trader Kiki Etsy shop of 3D printed earrings" target="_blank" className="reset">Trader Kiki</a></h2>
                    <p>
                        <img className="img__icon" src={etsy_icon} />
                        Retro looks for cute nerds!
                    </p>
                </div>
                <div className="accordion">
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-1" id="cb1" />
                        <label for="cb1" className="accordion__title img__gallery">
                            <img 
                                className="img__thumb no-border" 
                                alt="Geometric Triangle Jazz earrings thumbnail" 
                                src={geomatric_triangle_jazz} 
                            />
                            <h3>Geometric Triangle Jazz Earrings</h3>
                        </label>
                        <div className="accordion__content">
                            <p>
                                <a href="https://www.etsy.com/listing/1806028699/geometric-triangle-jazz-earrings-retro" className="link-list" title="Geometric Triangle Jazz Earrings on Etsy" target="_blank">
                                    <img 
                                        className="link-list__thumb" 
                                        alt="Geometric Triangle Jazz earrings on Etsy" 
                                        src={geomatric_triangle_jazz} 
                                    />
                                    Check it out on Etsy
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-2" id="cb2" />
                        <label for="cb2" className="accordion__title img__gallery">
                            <img className="img__thumb no-border" alt="Geometric Square Jazz earrings thumbnail" src={geometric_square_jazz} />
                            <h3>Geometric Square Jazz Earrings</h3>
                        </label>
                        <div className="accordion__content">
                            <p>
                                <a href="https://www.etsy.com/listing/1806033813/geometric-square-jazz-earrings-retro-80s" className="link-list" title="Geometric Square Jazz Earrings on Etsy" target="_blank">
                                    <img 
                                        className="link-list__thumb" 
                                        alt="Geometric Square Jazz earrings on Etsy" 
                                        src={geometric_square_jazz} 
                                    />
                                    Check it out on Etsy
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-3" id="cb3"/>
                        <label for="cb3" className="accordion__title img__gallery">
                            <img className="img__thumb no-border" alt="Vaporwave Retro Floppy earrings thumbnail" src={vaporwave_retro_floppy} />
                            <h3>Vaporwave Retro Floppy Earrings</h3>
                        </label>
                        <div className="accordion__content">
                            <p>
                                <a href="https://www.etsy.com/listing/1809498763/vaporwave-retro-floppy-earrings" className="link-list" title="Vaporwave Retro Floppy Earrings on Etsy" target="_blank">
                                    <img 
                                        className="link-list__thumb" 
                                        alt="Vaporwave Retro Floppy earrings on Etsy" 
                                        src={vaporwave_retro_floppy} 
                                    />
                                    Check it out on Etsy
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-4" id="cb4" />
                        <label for="cb4" className="accordion__title img__gallery">
                            <img className="img__thumb no-border" alt="Vaporwave Glow Arcade Moon earrings thumbnail" src={vaporwave_glow_arcade_moon} />
                            <h3>Vaporwave Glow Arcade Moon Earrings</h3>
                        </label>
                        <div className="accordion__content">
                            <p>
                                <a href="https://www.etsy.com/listing/1799861012/vaporwave-glow-arcade-moon-earrings" className="link-list" title="Vaporwave Glow Arcade Moon Earrings on Etsy" target="_blank">
                                    <img 
                                        className="link-list__thumb" 
                                        alt="Vaporwave Glow Arcade Moon earrings on Etsy" 
                                        src={vaporwave_glow_arcade_moon} 
                                    />
                                    Check it out on Etsy
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-5" id="cb5" />
                        <label for="cb5" className="accordion__title img__gallery">
                            <img className="img__thumb no-border" alt="Vaporwave Sunset Hoop earrings thumbnail" src={vaporwave_sunset_hoops} />
                            <h3>Vaporwave Sunset Hoop Earrings</h3>
                        </label>
                        <div className="accordion__content">
                            <p>
                                <a href="https://www.etsy.com/listing/1804503633/vaporwave-sunset-hoop-earrings-retro" className="link-list" title="Vaporwave Sunset Hoop Earrings on Etsy" target="_blank">
                                    <img 
                                        className="link-list__thumb" 
                                        alt="Vaporwave Sunset Hoop earrings on Etsy" 
                                        src={vaporwave_sunset_hoops} 
                                    />
                                    Check it out on Etsy
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-6" id="cb6" />
                        <label for="cb6" className="accordion__title img__gallery">
                            <img className="img__thumb no-border" alt="90s Memphis earrings thumbnail" src={nineties_memphis_floppy} />
                            <h3>90s Memphis Floppy Earrings</h3>
                        </label>
                        <div className="accordion__content">
                            <p>
                                <a href="https://www.etsy.com/your/shops/me/listing-editor/edit/1891806580" className="link-list" title="90s Memphis Earrings on Etsy" target="_blank">
                                    <img 
                                        className="link-list__thumb" 
                                        alt="90s Memphis earrings on Etsy" 
                                        src={nineties_memphis_floppy} 
                                    />
                                    Check it out on Etsy
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-7" id="cb7" />
                        <label for="cb7" className="accordion__title img__gallery">
                            <img className="img__thumb no-border" alt="Arcade Carpet Glow earrings thumbnail" src={arcade_carpet_glow} />
                            <h3>Arcade Carpet Glow Earrings</h3>
                        </label>
                        <div className="accordion__content">
                            <p>
                                <a href="https://www.etsy.com/listing/1854313829/arcade-carpet-glow-earrings-90s" className="link-list" title="Arcade Carpet Glow Earrings on Etsy" target="_blank">
                                    <img 
                                        className="link-list__thumb" 
                                        alt="Arcade Carpet Glow earrings on Etsy" 
                                        src={arcade_carpet_glow} 
                                    />
                                    Check it out on Etsy
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-8" id="cb8" />
                        <label for="cb8" className="accordion__title img__gallery">
                            <img className="img__thumb no-border" alt="Geometric Rectangle Deco earrings thumbnail" src={geometric_rectangle_deco} />
                            <h3>Geometric Rectangle Deco Earrings</h3>
                        </label>
                        <div className="accordion__content">
                            <p>
                                <a href="https://www.etsy.com/listing/1809489177/geometric-rectangle-deco-jazz-earrings" className="link-list" title="Geometric Rectangle Deco Earrings on Etsy" target="_blank">
                                    <img 
                                        className="link-list__thumb" 
                                        alt="Geometric Rectangle Deco earrings on Etsy" 
                                        src={geometric_rectangle_deco} 
                                    />
                                    Check it out on Etsy
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-9" id="cb9" />
                        <label for="cb9" className="accordion__title img__gallery">
                            <img className="img__thumb no-border" alt="Glow Macintosh Stacked Mini Hoop earrings thumbnail" src={glow_macintosh_stacked_hoops} />
                            <h3>Glow Macintosh Stacked Mini Hoop Earrings</h3>
                        </label>
                        <div className="accordion__content">
                            <p>
                                <a href="https://www.etsy.com/listing/1903270423/flat-stacked-glow-macintosh-mini-hoops" className="link-list" title="Glow Macintosh Stacked Mini Hoop Earrings on Etsy" target="_blank">
                                    <img 
                                        className="link-list__thumb" 
                                        alt="Glow Macintosh Stacked Mini Hoop earrings on Etsy" 
                                        src={glow_macintosh_stacked_hoops} 
                                    />
                                    Check it out on Etsy
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-10" id="cb10" />
                        <label for="cb10" className="accordion__title img__gallery">
                            <img className="img__thumb no-border" alt="Vaporwave Glow Palm Stacked Triangle Mini Hoop earrings thumbnail" src={vaporwave_glow_palm_stacked_triangle} />
                            <h3>Vaporwave Glow Palm Stacked Triangle Mini Hoop Earrings</h3>
                        </label>
                        <div className="accordion__content">
                            <p>
                                <a href="https://www.etsy.com/listing/1857941506/vaporwave-glow-palm-stacked-triangle" className="link-list" title="Vaporwave Glow Palm Stacked Triangle Mini Hoop Earrings on Etsy" target="_blank">
                                    <img 
                                        className="link-list__thumb" 
                                        alt="Vaporwave Glow Palm Stacked Triangle Mini Hoop earrings on Etsy" 
                                        src={vaporwave_glow_palm_stacked_triangle} 
                                    />
                                    Check it out on Etsy
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-11" id="cb11" />
                        <label for="cb11" className="accordion__title img__gallery">
                            <img className="img__thumb no-border" alt="Retro Eyes Geometric earrings thumbnail" src={retro_eyes} />
                            <h3>Retro Eyes Geometric Earrings</h3>
                        </label>
                        <div className="accordion__content">
                            <p>
                                <a href="https://www.etsy.com/listing/1799841828/retro-eyes-geometric-earrings-80s" className="link-list" title="Retro Eyes Geometric Earrings on Etsy" target="_blank">
                                    <img 
                                        className="link-list__thumb" 
                                        alt="Retro Eyes Geometric earrings on Etsy" 
                                        src={retro_eyes} 
                                    />
                                    Check it out on Etsy
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="accordion__drawer">
                        <input type="checkbox" name="accordion-12" id="cb12" />
                        <label for="cb12" className="accordion__title img__gallery">
                            <img className="img__thumb no-border" alt="Monstera Night Glow earrings thumbnail" src={monstera_night_glow} />
                            <h3>Monstera Night Glow Earrings</h3>
                        </label>
                        <div className="accordion__content">
                            <p>
                                <a href="https://www.etsy.com/listing/1799881242/monstera-night-glow-window-earrings" className="link-list" title="Monstera Night Glow Earrings on Etsy" target="_blank">
                                    <img 
                                        className="link-list__thumb" 
                                        alt="Monstera Night Glow earrings on Etsy" 
                                        src={monstera_night_glow} 
                                    />
                                    Check it out on Etsy
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </>
    )
}