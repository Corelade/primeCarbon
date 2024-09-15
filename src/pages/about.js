import Layout from "../components/layout";
import abc2 from '../images/abc2.webp';
import '../styles/about.css';
import '../styles/home.css';
import { useState } from "react";
import values2 from '../images/values2.png';
import values3 from '../images/values3.png';
import ourp_main from '../images/ourp_main.webp';
import { ExploreProjectButton } from "./home";
import { MissionVision } from "./home";
import { useMediaQuery } from 'react-responsive';

export default function About() {

    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <Layout useBackground={true}>
            <CustomBg />
            <div className="px-0 px-md-4">
                <div style={{ backgroundColor: '#F1F1F1' }} className="p-0 p-md-5">
                    <div className="pt-5">
                        <h1 className="felix_regular text-center" style={{ color: '#101828' }}>Why Choose Us?</h1>
                        <div className="d-flex flex-column flex-md-row justify-content-between col-12 mt-5">
                            <div className="h-100 col-12 col-md-8">
                                <WhyChooseUsDetails />
                            </div>
                            <div className={`mvtr ${isMobile ? 'rounded-0' : 'rounded-3'} col-12 col-md-3 my-auto`} style={{ height: '500px' }}>
                            </div>
                        </div>
                    </div>
                    <MissionVision />
                    <div className="my-0 my-md-5 d-flex flex-column align-items-center p-2 p-md-5">
                        <h1 className="felix_regular" style={{ color: '#07260E'}}>Our Values</h1>
                        <p style={{ color: '#5A7184' }}>
                            We strive to redefine the standard of excellence.
                        </p>
                        <div className="col-12 col-md-8 my-5 text-center">
                            <img src={isMobile ? values3 : values2} height='auto' alt="values" className="values"/>
                        </div>
                    </div>
                    <div className="my-0 my-md-5 py-md-5">
                        <h1 className="felix_regular text-center" style={{ color: '#1E3A5F' }}>Board of Directors</h1>
                        <div className="my-3 col-12 d-flex flex-column flex-md-row overflow-x-scroll align-items-center">
                            <StakeHolders />
                            <StakeHolders />
                            <StakeHolders />
                            <StakeHolders />
                            <StakeHolders />
                        </div>
                    </div>
                    <div className="my-5 my-md-5 py-md-5">
                        <h1 className="felix_regular text-center" style={{ color: '#1E3A5F' }}>Management Team</h1>
                        <div className="my-3 col-12 d-flex flex-column flex-md-row overflow-x-scroll align-items-center">
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
                    <div className="d-flex flex-row col-12 col-md-10 mb-2" key={i}>
                        <div className="text-center text-md-start">
                            <h6 className="felix_regular" style={{ color: '#101828' }}>{c.title}</h6>
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

    const [active, setActive] = useState(false);

    return (
        <div style={{ height: '400px' }} className={`border col-10 col-md-3 rounded-4 stakeholder p-3 d-flex flex-column ${active ? 'justify-content-center' : 'justify-content-end'} mx-3 mb-2 mb-md-0`} onMouseEnter={()=>setActive(true)} onMouseLeave={()=>setActive(false)}>
            <div className={`rounded-4 text-center text-white ${active && 'show'} stakeholder-text-body pt-2`}>
                <div className={`${active ? 'd-none' : 'd-block'}`}>
                    <h3 className="felix_regular">Jason Umar</h3>
                    <p className="manrope_semibold">CE0/Co-founder</p>
                </div>
                <div className={`${active ? 'd-block bdfilter' : 'd-none'}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, elit nec consequat aliquam, odio turpis varius velit, nec tincidunt purus erat nec nisi. Proin vitae tellus ac metus facilisis malesuada. Integer nec purus non eros efficitur volutpat. Cras euismod nulla eu risus sagittis, at cursus eros suscipit. Vivamus in velit risus. Duis facilisis vehicula lectus a euismod. 
                </div>
            </div>
        </div>
    )
}

export function CustomBg() {
    const path = window.location.pathname;
    const isMobile = useMediaQuery({ maxWidth: 768 });
    
    let myHeight='700px';
    let mt;
    let myWidth = 'w-50';
    
    if(isMobile){
        // let myClass;
        // if(path === '/about'){
        //     myClass = 'flex'
        // }
        myHeight = '970px';
        mt = '-130px';
        myWidth = 'w-100'

    }

    return (
        <div style={{ height: myHeight, marginTop:mt }} className="">
            <div className="overlay w-100 h-100 d-flex flex-column flex-lg-row" style={{ zIndex: 1, height:myHeight }}>
                <div className={`${myWidth} h-100 order-2 order-lg-1`} style={{ backgroundImage: `url(${path === '/projects' ? ourp_main : abc2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
                <div className={`${myWidth} order-1 order-lg-2 ${isMobile && 'd-flex align-items-center text-center pt-5'}`}>
                    {path === '/projects' ? (
                        <div className={`p-5 ${!isMobile && 'h-75'} d-flex flex-column justify-content-center`}>
                            <h1 className="felix_regular">Our Projects</h1>
                            <p className="mulish_regular small_text" style={{ color: '#525252' }}>Discover how Prime Carbon is making a difference through our groundbreaking projects. From restoring vital forests and advancing clean energy solutions to empowering local communities and driving impactful carbon sequestration efforts, each initiative is designed to create lasting environmental and social benefits. Explore our projects to see how we are combining cutting-edge technology with community engagement to build a more sustainable and resilient future for our planet.</p>
                            <ExploreProjectButton def={true} />
                        </div>
                    ) : (
                        <div className={`p-5 ${!isMobile && 'h-75'} d-flex flex-column justify-content-center`}>
                            <h1 className="felix_regular">Who is Prime Carbon?</h1>
                            <p className="mulish_regular small_text" style={{ color: '#525252' }}>
                                Prime Carbon is a project generation company dedicated to sustainable solutions in the carbon footprint sector, with a strong emphasis on Corporate Social Responsibility (CSR). Our deep personal commitment extends to both the environment and the communities we serve, as many of our team members have grown up in developing countries and have witnessed the environmental and social challenges these regions face. While we have excelled in our respective fields, our true goal is to become better stewards of the environment and contribute to the sustainable growth and empowerment of local communities.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}