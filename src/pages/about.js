import Layout from "../components/layout";
// import abc1 from '../images/abc1.png';
import abc2 from '../images/abc2.png';
// import checkbox from '../images/checkbox.png';
import '../styles/about.css';
import '../styles/home.css';
import { useState } from "react";
import values2 from '../images/values2.png';
import ourp_main from '../images/ourp_main.png';
import { ExploreProjectButton } from "./home";

export default function About() {

    const [activeBox, setActiveBox] = useState(0);

    return (
        <Layout useBackground={true}>
            <CustomBg />
            <div className="px-4">
                <div style={{ backgroundColor: '#F1F1F1' }} className="p-5">
                    <div className="my-5">
                        <h1 className="felix_regular text-center" style={{ color: '#101828', fontSize: '50px' }}>Why Choose Us?</h1>
                        <div className="d-flex flex-row justify-content-between col-12 mt-5">
                            <div className="h-100 col-8">
                                <WhyChooseUsDetails />
                            </div>
                            <div className="mvtr rounded-3 col-3 my-auto" style={{ height: '500px' }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex flex-row justify-content-around my-5 py-5 text-white">
                        <div className="col-5 rounded-4 mission p-4 d-flex flex-column justify-content-end" onMouseEnter={() => setActiveBox(1)} onMouseLeave={() => setActiveBox(0)}>
                            {activeBox !== 1 ? (
                                <h1 className="felix_regular">Mission</h1>
                            ) : (
                                <div className="blur rounded-4 p-3">
                                    <h1 className="bricolage_bold">Mission</h1>
                                    <p className="manrope_semibold">Prime Carbon generates sustainable projects focused on reducing carbon footprints, primarily within the voluntary carbon market, with a strong commitment to CSR</p>
                                </div>
                            )}
                            {/* <h1 className={`bricolage_bold ${activeBox === 1 ? 'd-none' : 'd-block'}`}>Mission</h1>
                            <div className={`blur rounded-4 p-3 ${activeBox === 1 ? 'show' : 'd-none'}`}>
                                <h1 className="bricolage_bold">Mission</h1>
                                <p className="manrope_semibold">Prime Carbon generates sustainable projects focused on reducing carbon footprints, primarily within the voluntary carbon market, with a strong commitment to CSR</p>
                            </div> */}
                        </div>
                        <div className="col-5 rounded-4 vision p-4 d-flex flex-column justify-content-end" onMouseEnter={() => setActiveBox(2)} onMouseLeave={() => setActiveBox(0)}>
                            {activeBox !== 2 ? (
                                <h1 className="felix_regular">Vision</h1>
                            ) : (
                                <div className="blur rounded-4 p-3">
                                    <h1 className="bricolage_bold">Vision</h1>
                                    <p className="manrope_semibold">To be global leaders in sustainable invetsments, driving impactful change and inspiring commitment to environmental stewardship</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="my-5 d-flex flex-column align-items-center p-5">
                        <h1 className="felix_regular" style={{ color: '#07260E', fontSize: '50px' }}>Our Values</h1>
                        <p style={{ color: '#5A7184' }}>
                            We strive to redefine the standard of excellence.
                        </p>
                        <div className="col-8 my-5 text-center">
                            <img src={values2} height='auto' width='700px' alt="values" />
                        </div>
                    </div>
                    <div className="my-5 py-5">
                        <h1 className="felix_regular text-center semi_large_text" style={{ color:'#1E3A5F' }}>Board of Directors</h1>
                        <div className="my-3 col-12 d-flex flex-row overflow-x-scroll">
                            <StakeHolders />
                            <StakeHolders />
                            <StakeHolders />
                            <StakeHolders />
                            <StakeHolders />
                        </div>
                    </div>
                    <div className="my-5 py-5">
                        <h1 className="felix_regular text-center semi_large_text" style={{ color:'#1E3A5F'  }}>Management Team</h1>
                        <div className="my-3 col-12 d-flex flex-row overflow-x-scroll">
                            <StakeHolders />
                            <StakeHolders />
                            <StakeHolders />
                            <StakeHolders />
                            <StakeHolders />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

function WhyChooseUsDetails() {

    const contents = [
        {
            'title': 'Integrated Approach',
            'content': 'We combine traditional conservation efforts with a forward-looking vision for integrating innovative technologies like BioChar and advanced carbon capture. While we are in the process of expanding these capabilities, our commitment to offering holistic and sustainable environmental solutions remains unwavering.'
        },
        {
            'title': 'Global Reach',
            'content': 'While we operate on a global scale, we tailor our projects to address local environmental and social issues, ensuring meaningful impact at the grassroots level. Our international team, representing diverse continents, allows us to have an extensive reach. Our deep understanding and appreciation of different cultures make us stand out, enabling genuine local impact in every project we undertake.'
        },
        {
            'title': 'Community Collaboration',
            'content': 'We work closely with local communities to ensure that our projects benefit both the environment and the people who depend on it. Our commitment to Corporate Social Responsibility (CSR) is integral to every project, ensuring alignment with broader social and environmental goals, thus making a comprehensive positive impact.'
        },
        {
            'title': 'Advanced Technologies',
            'content': 'By leveraging cutting-edge technologies, we enhance the efficiency and sustainability of our conservation efforts. This commitment to innovation sets us apart in the industry, ensuring our projects are both forward-thinking and impactful.'
        },
        {
            'title': 'Commitment to Transparency',
            'content': 'We prioritize openness and accountability in everything we do. From every pencil to every tree, and every resource in between, we meticulously account for everything, providing complete clarity to our stakeholders. Our transparency ensures that all involved are informed and engaged in our sustainability journey.'
        },
    ]

    return (
        <>
            {contents.map((c, i) => {
                return (
                    <div className="d-flex flex-row col-10 mb-2" key={i}>
                        {/* <div className="me-3">
                            <img src={checkbox} height='70px' width='70px' alt="checkbox" />
                        </div> */}
                        <div>
                            <h4 className="felix_regular" style={{ color: '#101828' }}>{c.title}</h4>
                            <p style={{ color: '#525252', fontSize: '12px' }} className="">
                                {c.content}
                            </p>
                        </div>
                    </div>

                )
            })}
        </>
    )
}

function StakeHolders() {
    return (
        <div style={{ height: '400px' }} className="border col-3 rounded-4 stakeholder p-3 d-flex flex-column justify-content-end mx-3">
            <div className="rounded-4 text-center text-white stakeholder-text-body">
                <h1 className="bricolage_semibold">Jason Umar</h1>
                <p className="manrope_semibold">CE0/Co-founder</p>
            </div>
        </div>
    )
}

export function CustomBg() {
    const path = window.location.pathname;
    // console.log(path)

    return (
        <div style={{ height: '700px' }} className="">
            <div className="overlay w-100 h-100 d-flex flex-row" style={{ zIndex: 1 }}>
                <div className="w-50 h-100" style={{ backgroundImage: `url(${path === '/projects' ? ourp_main : abc2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
                <div className="w-50">
                    {path === '/projects' ? (
                        <div className="p-5 h-75 d-flex flex-column justify-content-center">
                            <h1 className="felix_regular big_text">Our Projects</h1>
                            <p className="mulish_regular small_text" style={{color: '#525252' }}>Discover how Prime Carbon is making a difference through our groundbreaking projects. From restoring vital forests and advancing clean energy solutions to empowering local communities and driving impactful carbon sequestration efforts, each initiative is designed to create lasting environmental and social benefits. Explore our projects to see how we are combining cutting-edge technology with community engagement to build a more sustainable and resilient future for our planet.</p>
                            <ExploreProjectButton def={true} />
                        </div>
                    ) : (
                        <div className="p-5 h-75 d-flex flex-column justify-content-center">
                            <h1 className="felix_regular big_text">Who is Prime Carbon?</h1>
                            <p className="mulish_regular small_text" style={{color: '#525252' }}>
                                Prime Carbon is a project generation company dedicated to sustainable solutions in the carbon footprint sector, with a strong emphasis on Corporate Social Responsibility (CSR). Our deep personal commitment extends to both the environment and the communities we serve, as many of our team members have grown up in developing countries and have witnessed the environmental and social challenges these regions face. While we have excelled in our respective fields, our true goal is to become better stewards of the environment and contribute to the sustainable growth and empowerment of local communities.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}