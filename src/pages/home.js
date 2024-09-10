import Layout from "../components/layout";
import '../styles/home.css';
// import person1 from '../images/person1.png';
// import person2 from '../images/person2.png';
// import person3 from '../images/person3.png';
// import wtpc1 from '../images/wtpc1.png';
// import wtpc2 from '../images/wtpc2.png';
import { useState } from "react";
import ourp1 from '../images/ourp1.png';
import map from '../images/map.png';


export default function Home() {

    // const [activeInterest, setActiveInterest] = useState(0);
    const [hovered, setHovered] = useState(false);

    return (
        <Layout useBackground={false}>
            <div className="bg-white">
                <div className="h-100" style={{ marginTop: '-130px' }}>
                    <div>
                        <div className="home_sect_with_bg text-white d-flex flex-column justify-content-between" style={{ height: "830px" }}>
                            <div className="flex-column justify-content-around px-3 d-none d-lg-flex" style={{ height: '100%' }}>
                                <div className="" style={{ height: '' }}></div>
                                <div className="">
                                    <h1 className="text-center felix_regular big_text">Empowering a Sustainable Future</h1>
                                </div>
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="border rounded-circle d-flex flex-row align-items-center justify-content-center bg-white" style={{ width: '70px', height: '70px', cursor: 'pointer' }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="black" className={`bi bi-arrow-down-short ${hovered && 'moveDown'}`} viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="d-flex d-lg-none flex-column justify-content-between h-100 p-3">
                                <div></div>
                                <div className="d-flex flex-column align-items-center">
                                    <h1 className="text-center bricolage_bold big_text mb-5">Empowering a Sustainable Future</h1>
                                    <div className="col-12 d-flex flex-row identities my-5">
                                        <div className="d-flex flex-column border border-2 border-white py-2 px-2 rounded-3 h-100 me-1 justify-content-center pictures">
                                            <img src={person1} width='40px' height='40px' alt="portrait" />
                                            <img src={person2} width='40px' height='40px' alt="portrait" />
                                            <img src={person3} width='40px' height='40px' alt="portrait" />
                                        </div>
                                        <div className="border border-2 border-white rounded-3 py-2 px-2 h-100 manrope_semibold">
                                            <p style={{ fontSize: '12px' }}>
                                                Our legacy will be a testament to our unwavering commitment to environmental stewardship and community development, ensuring that we make a lasting and positive impact on the world. We want them to look back and say, "They have made a difference."
                                            </p>
                                            <h4 className="bricolage_bold">- Alade Williams, CEO</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto mb-1">
                                    <ExploreProjectButton def={false} />
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="px-4">
                        <div style={{ backgroundColor: '#F1F1F1' }} className="py-5">
                            <div className="my-5">
                                <div className="p-5 d-flex flex-row justify-content-center">
                                    <div className="col-8">
                                        <h1 className="felix_regular big_text text-center" style={{ color: '#101828' }}>Welcome to Prime Carbon</h1>
                                        <p className="manrope_regular text-center my-5 normal_text" style={{ color: '#475467' }}>Founded in 2024, We are a sustainability-focused company dedicated to preserving our planet through innovative environmental solutions. We specialize in carbon sequestration, afforestation, and reforestation initiatives, along with the development of clean energy solutions, including wind and solar power, carbon capture, and energy storage.</p>
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="medium_text">
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
                                    {/* <div>
                                        <img src={wtpc1} height='520px' width='520px' alt="Using cutting-edge technologies to boost the efficiency & sustainability of our conservation efforts." className="d-none d-md-block" />

                                        <img src={wtpc2} height='' width='' alt="Using cutting-edge technologies to boost the efficiency & sustainability of our conservation efforts." className="d-block d-md-none col-12 my-3" />
                                    </div> */}
                                </div>
                                <MissionVision />
                                <div className="my-5 p-3" style={{ backgroundColor: '#F1F1F1' }}>
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
                    {/* <div className="my-5 px-3">
                        <div className="text-center col-12 col-md-7 mx-auto">
                            <h2 className="bricolage_bold big_text">What interests us</h2>
                            <p style={{ fontSize: '15px' }} className="manrope_regular">
                                Prime Carbon emphasizes that every project is developed with a deep understanding of local environmental and social contexts, ensuring meaningful impacts at the grassroots level.
                            </p>
                        </div>
                        <div style={{ display: 'grid', gap: '30px' }} className="">
                            <div className="interests">
                                <div className={`rounded-5 p-3 interest_one ${activeInterest === 1 && 'curs'}`} onMouseEnter={() => setActiveInterest(1)} onMouseLeave={() => { setActiveInterest(0) }}>
                                    <div className="interests_arrow_container">
                                        <div className={`border border-white rounded-circle d-flex align-items-center justify-content-center curs ${activeInterest === 1 && 'bg-white'}`} style={{ height: "50px", width: '50px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={`${activeInterest === 1 ? 'black' : 'currentColor'}`} className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                            </svg>
                                        </div>
                                    </div>
                                    {activeInterest !== 1 ? (
                                        <h3 className="px-1 px-md-5 bricolage_bold">Nature-based Solutions</h3>
                                    ) : (
                                        <div className="p-3 w-100 blur rounded-4">
                                            <h3 className="bricolage_bold">Nature-based Solutions</h3>
                                            <p className="manrope_bold" style={{ fontSize: '15px' }}>Projects like forest preservation, reforestation and restoration, as well as other natural carbon sinks such as aquatic and soil based projects.</p>
                                        </div>
                                    )}
                                </div>
                                <div className={`rounded-5 p-3 interest_two ${activeInterest === 2 && 'curs'}`} onMouseEnter={() => setActiveInterest(2)} onMouseLeave={() => { setActiveInterest(0) }}>
                                    <div className="interests_arrow_container">
                                        <div className={`border border-white rounded-circle d-flex align-items-center justify-content-center curs ${activeInterest === 2 && 'bg-white'}`} style={{ height: "50px", width: '50px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={`${activeInterest === 2 ? 'black' : 'currentColor'}`} className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                            </svg>
                                        </div>

                                    </div>
                                    {activeInterest !== 2 ? (
                                        <h3 className="px-1 px-md-5 bricolage_bold">Clean Energy Solutions</h3>
                                    ) : (
                                        <div className="p-3 w-100 blur rounded-4">
                                            <h3 className="bricolage_bold">Clean Energy Solutions</h3>
                                            <p className="manrope_bold" style={{ fontSize: '15px' }}>Projects that involve the creation of new renewable energy sources, implementation of energy efficiency measures, and the use of low-carbon alternatives to fossil fuels.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="interests interests_reverse">
                                <div className={`rounded-5 p-3 interest_three ${activeInterest === 3 && 'curs'}`} onMouseEnter={() => setActiveInterest(3)} onMouseLeave={() => { setActiveInterest(0) }}>
                                    <div className="interests_arrow_container">
                                        <div className={`border border-white rounded-circle d-flex align-items-center justify-content-center curs ${activeInterest === 3 && 'bg-white'}`} style={{ height: "50px", width: '50px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={`${activeInterest === 3 ? 'black' : 'currentColor'}`} className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                            </svg>
                                        </div>
                                    </div>
                                    {activeInterest !== 3 ? (
                                        <h3 className="px-1 px-md-5 bricolage_bold">Afforestation</h3>
                                    ) : (
                                        <div className="p-3 w-100 blur rounded-4">
                                            <h3 className="bricolage_bold">Afforestation</h3>
                                            <p className="manrope_bold" style={{ fontSize: '15px' }}>Afforestation Projects: Establishing new forests on previously non-forested land to increase carbon absorption.</p>
                                        </div>
                                    )}
                                </div>
                                <div className={`rounded-5 p-3 interest_four ${activeInterest === 4 && 'curs'}`} onMouseEnter={() => setActiveInterest(4)} onMouseLeave={() => { setActiveInterest(0) }}>
                                    <div className="interests_arrow_container">
                                        <div className={`border border-white rounded-circle d-flex align-items-center justify-content-center curs ${activeInterest === 4 && 'bg-white'}`} style={{ height: "50px", width: '50px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={`${activeInterest === 4 ? 'black' : 'currentColor'}`} className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                            </svg>
                                        </div>
                                    </div>
                                    {activeInterest !== 4 ? (
                                        <h3 className="px-1 px-md-5 bricolage_bold">Technological Solutions</h3>
                                    ) : (
                                        <div className="p-3 w-100 blur rounded-4">
                                            <h3 className="bricolage_bold">Technological Solutions</h3>
                                            <p className="manrope_bold" style={{ fontSize: '15px' }}>Innocative technologies such as Direct Air Capture (DAC) that capture and store carbon, thereby generating carbon offsets .</p>
                                        </div>
                                    )}

                                </div>
                            </div>

                        </div>
                    </div> */}
                    {/* <div className="my-5 p-3 p-md-5" style={{ backgroundColor: '#F1F1F1' }}>
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                            <div className="col-12 col-md-3 text-center">
                                <h1 className="bricolage_bold" style={{ color: '#1E3A5F' }}>+14,000,000</h1>
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
                            <div className="col-12 col-md-3 manrope_regular" style={{ color: '#37424C99' }}>
                                <p>Prime Carbon partners with local communities and governments to unlock the social and economic value of their forests. We empower communities through education, job creation, and infrastructure improvements, ensuring our conservation projects are both sustainable and beneficial.</p>
                            </div>
                        </div>
                        <div className="text-center my-5 col-10 col-md-7 mx-auto">
                            <h2 className="bricolage_bold">Our Projects</h2>
                            <p className="mulish_regular" style={{ fontSize: '12px', color: '#525252' }}>Prime Carbon engages in various sustainable projects, such as reforestation, renewable energy installations, and eco-tourism initiatives.</p>
                            <div className="my-5">
                                <img src={map} height='200px' width='auto' alt="world map" className="map" />
                            </div>
                        </div>
                    </div> */}
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

    return (
        <div className="">
            <div className="col-12 d-flex flex-column flex-md-row justify-content-around py-5 text-white flex-wrap">
                <div className="col-8 mx-auto mx-md-0 col-lg-5 rounded-4 mission p-4 d-flex flex-column justify-content-end my-2 my-lg-0" onMouseEnter={() => setActiveBox(1)} onMouseLeave={() => setActiveBox(0)}>

                    <h1 className={`felix_regular ps-3 ${activeBox === 1 ? 'd-none' : 'd-block'} `}>Mission</h1>

                    <div className={`blur rounded-4 p-3 ${activeBox === 1 ? 'show-content' : 'd-none'}`}>
                        <h1 className="bricolage_bold">Mission</h1>
                        <p className="manrope_semibold">Prime Carbon generates sustainable projects focused on reducing carbon footprints, primarily within the voluntary carbon market, with a strong commitment to CSR</p>
                    </div>

                </div>
                <div className="col-8 mx-auto mx-md-0 col-lg-5 rounded-4 vision p-4 d-flex flex-column justify-content-end my-2 my-lg-0" onMouseEnter={() => setActiveBox(2)} onMouseLeave={() => setActiveBox(0)}>

                    <h1 className={`felix_regular ps-3 ${activeBox === 2 ? 'd-none' : 'd-block'} `}>Vision</h1>

                    <div className={`blur rounded-4 p-3 ${activeBox === 2 ? 'show-content' : 'd-none'}`}>
                        <h1 className="bricolage_bold">Vision</h1>
                        <p className="manrope_semibold">To be global leaders in sustainable invetsments, driving impactful change and inspiring commitment to environmental stewardship</p>
                    </div>

                </div>
            </div>
        </div>
    )
}