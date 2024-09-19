import Layout from "../components/layout";
import '../styles/home.css';
import { useState } from "react";
import ourp1 from '../images/ourp1.png';
import map from '../images/map.png';
import { useMediaQuery } from 'react-responsive';
import bgVideo from '../images/vecteezy2.mp4';

export default function Home() {

    const [hovered, setHovered] = useState(false);

    return (
        <Layout useBackground={false}>
            <div className="bg-white">
                <div className="h-100" style={{ marginTop: '-130px' }}>
                <section class="hero-section flex items-center" style={{ height: "830px" }}>
                    <div class="vimeo-bg">
                        <video autoPlay muted loop playsInline class="self-hosted-bg-video">
                            <source src={bgVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="position-absolute flex-column justify-content-around px-3 d-flex" style={{ height: '100%', width: '100%' }}>
                        <div className="" style={{ height: '' }}></div>
                        <div className="">
                            <h1 className="home_text text-center text-white felix_regular" style={{ fontSize: '45px' }}>Empowering a Sustainable Future</h1>
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            <a href="#wtpc">
                                <div className="border rounded-circle d-flex flex-row align-items-center justify-content-center bg-white" style={{ width: '70px', height: '70px', cursor: 'pointer' }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="black" className={`bi bi-arrow-down-short ${hovered && 'moveDown'}`} viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* <div class="rk-container offset-container">
                        <div class="title-wrap" data-aos="fade-up">
                            <h1 class="h5">Investing in better</h1>
                            <h2 class="h1">We invest globally in projects with sustainable objectives</h2>
                        </div>
                        <img src="https://carbonfirst.com/wp-content/themes/carbonfirst/assets/img/carbon-first-wordmark.svg" alt="Carbon First" class="hero-logo" data-aos="fade-up" />
                    </div>
                    <a href="#scroll-to-content">
                        <img src="https://carbonfirst.com/wp-content/themes/carbonfirst/assets/img/scroll-down.svg" alt="Scroll Down" class="scroll-down-btn" />
                    </a> */}
                </section>
                    {/* <div>
                        <div className="home_sect_with_bg text-white d-flex flex-column justify-content-between" style={{ height: "830px" }}>
                            <div className="flex-column justify-content-around px-3 d-flex" style={{ height: '100%' }}>
                                <div className="" style={{ height: '' }}></div>
                                <div className="">
                                    <h1 className="text-center felix_regular" style={{ fontSize: '45px' }}>Empowering a Sustainable Future</h1>
                                </div>
                                <div className="d-flex flex-row justify-content-center">
                                    <a href="#wtpc">
                                        <div className="border rounded-circle d-flex flex-row align-items-center justify-content-center bg-white" style={{ width: '70px', height: '70px', cursor: 'pointer' }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="black" className={`bi bi-arrow-down-short ${hovered && 'moveDown'}`} viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="px-0 px-md-4" id="wtpc">
                        <div style={{ backgroundColor: '#F1F1F1' }} className="py-5">
                            <div className="my-0 my-md-5">
                                <div className="p-0 p-md-5 d-flex flex-row justify-content-center">
                                    <div className="col-10 col-md-8">
                                        <h1 className="felix_regular text-center" style={{ color: '#101828', fontSize: '30px' }}>Welcome to Prime Carbon</h1>
                                        <p className="manrope_regular text-center my-5" style={{ color: '#475467' }}>Founded in 2024, We are a sustainability-focused company dedicated to preserving our planet through innovative environmental solutions. We specialize in carbon sequestration, afforestation, and reforestation initiatives, along with the development of clean energy solutions, including wind and solar power, carbon capture, and energy storage.</p>
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="">
                                                <div>
                                                    <span className="green_text akazan_bold" style={{ letterSpacing: '0.5vw' }}>01/ </span>
                                                    <b className="felix_regular ms-1" style={{ color: '#101828' }}> Carbon Sequestration</b>
                                                </div>
                                                <div>
                                                    <span className="green_text akazan_bold" style={{ letterSpacing: '0.5vw' }}>02/ </span>
                                                    <b className="felix_regular ms-1" style={{ color: '#101828' }}> Afforestation & Reforestation</b>
                                                </div>
                                                <div>
                                                    <span className="green_text akazan_bold" style={{ letterSpacing: '0.5vw' }}>03/ </span>
                                                    <b className="felix_regular ms-1" style={{ color: '#101828' }}> Corporate Social Responsibility (CSR)</b>
                                                </div>
                                                <div>
                                                    <span className="green_text akazan_bold" style={{ letterSpacing: '0.5vw' }}>04/ </span>
                                                    <b className="felix_regular ms-1" style={{ color: '#101828' }}> Funding and Collaboration</b>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <MissionVision />
                                <div className="my-0 my-md-5 p-3" style={{ backgroundColor: '#F1F1F1' }}>
                                    <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center py-5">
                                        <div className="col-12 col-md-3 text-center">
                                            <h1 className="felix_regular" style={{ color: '#1E3A5F' }}>+14,000,000</h1>
                                            <div className="manrope_regular" style={{ color: '#37424C99' }}>Tons of carbon emission reduced to date</div>
                                        </div>
                                        <div className=" my-5 my-md-0 text-center text-md-start">
                                            <div className="position-relative">
                                                <img src={ourp1} width='280px' height='150px' alt="windmill" />
                                                <div className="border border-white border-3 rounded-circle d-flex align-items-center justify-content-center curs position-absolute ourparr" style={{ height: "50px", width: '50px', backgroundColor: '#000000', top: '50px', right: '-15px' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3 text-center">
                                            <h1 className="felix_regular" style={{ color: '#1E3A5F' }}>+10,000</h1>
                                            <div className="manrope_regular" style={{ color: '#37424C99' }}>Projects embarked on</div>
                                        </div>

                                    </div>
                                    <div className="text-center py-5 col-12">
                                        <h1 className="felix_regular" style={{ color: '#101828' }}>Our Projects</h1>
                                        <div className="mt-5">
                                            <img src={map} alt="world map" className="map" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export function ExploreProjectButton(props) {
    const { def } = props;

    return (
        <div className={`rounded-pill border ${def ? 'border-black text-black border-2' : 'border-white text-white'} p-2 text-center curs manrope_semibold`} style={{ width: '300px', fontSize: '20px' }}>
            Explore Projects
        </div>
    )
}

export function MissionVision() {

    const [activeBox, setActiveBox] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div className="">
            <div className="col-12 d-flex flex-column flex-md-row justify-content-around py-5 text-white flex-wrap">
                <div className="col-11 mx-auto mx-md-0 col-lg-5 rounded-4 mission p-4 d-flex flex-column justify-content-end my-2 my-lg-0" onMouseEnter={() => setActiveBox(1)} onMouseLeave={() => setActiveBox(0)}>

                    <h1 className={`felix_regular ps-3 ${activeBox === 1 || isMobile ? 'd-none' : 'd-block'} `}>Mission</h1>

                    <div className={`blur rounded-4 p-md-3 p-2 ${activeBox === 1 || isMobile ? 'show-content' : 'd-none'} bdfilter`}>
                        <h1 className="bricolage_bold">Mission</h1>
                        <p className="manrope_semibold">Prime Carbon generates sustainable projects focused on reducing carbon footprints, primarily within the voluntary carbon market, with a strong commitment to CSR</p>
                    </div>

                </div>
                <div className="col-11 mx-auto mx-md-0 col-lg-5 rounded-4 vision p-4 d-flex flex-column justify-content-end my-2 my-lg-0" onMouseEnter={() => setActiveBox(2)} onMouseLeave={() => setActiveBox(0)}>

                    <h1 className={`felix_regular ps-3 ${activeBox === 2 || isMobile ? 'd-none' : 'd-block'} `}>Vision</h1>

                    <div className={`blur rounded-4 p-md-3 p-2 ${activeBox === 2 || isMobile ? 'show-content' : 'd-none'} bdfilter`}>
                        <h1 className="bricolage_bold">Vision</h1>
                        <p className="manrope_semibold">To be global leaders in sustainable invetsments, driving impactful change and inspiring commitment to environmental stewardship</p>
                    </div>

                </div>
            </div>
        </div>
    )
}