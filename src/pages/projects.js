import Layout from "../components/layout";
// import ourp2 from '../images/ourp2.png';
import ourp4 from '../images/ourp4.png';
import '../styles/about.css';
import { CustomBg } from "./about";
import '../styles/projects.css';
import { useMediaQuery } from 'react-responsive';


export function Projects() {
    
    return (
        <Layout useBackground={true}>
            <CustomBg />
            <div className="px-0 px-md-4" >
                <div className="px-0 p-5" style={{backgroundColor:'#F1F1F1'}}>
                    <ProjectDetails />
                    <ProjectDetails />
                    <ProjectDetails />
                </div>
            </div>
        </Layout>
    )
}


function ProjectDetails() {

    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div className="my-5">
            <div className={`${!isMobile ? 'py-3' : 'p-4'} d-flex flex-column flex-md-row align-items-center show-border col-11 col-md-12 mx-auto`}>
                <div className="col-12 col-md-6 d-flex flex-row justify-content-center align-items-center order-2 order-md-1">
                    <img src={ourp4} alt="Our Project Images" className="project-image"/>
                </div>
                <div className="col-12 col-md-6 order-1 order-md-2 text-center text-md-start">
                    <h1 className="felix_regular " style={{color:'#1E3A5F'}}>Project 1 - BR</h1>
                    <div className="manrope_semibold " style={{color:'#1E3A5F99'}}>
                        <div>
                            <div>
                                <p className="my-0">Description:</p>
                                <p className="">
                                    The Green Horizons Reforestation Initiative aims to restore 10,000 hectares of degraded land in the Amazon Rainforest. This project focuses on planting native tree species to revive the ecosystem, increase biodiversity, and sequester carbon.
                                    Partnering with local communities, the initiative provides jobs, training, and sustainable agriculture opportunities, ensuring long-term economic benefits. By reforesting this critical area, the project contributes to global climate change mitigation, supports the United Nations Sustainable Development Goals, and protects one of the world's most vital carbon sinks.</p>
                            </div>
                            <div className="d-none d-md-block">
                                <p className="my-0">Impact:</p>
                                <ul>
                                    <li>Carbon Sequestration: Estimated 1 million metric tons of CO2 offset over 20 years.</li>
                                    <li>Biodiversity: Restoration of habitat for endangered species.</li>
                                    <li>Community Benefits: Employment for 500+ locals and training in sustainable practices.</li>
                                </ul>
                            </div>
                            <div className="d-none d-md-block">
                                <p>This project exemplifies Prime Carbon’s commitment to environmental preservation and community empowerment.</p>
                            </div>
                        </div>
                        <div className="d-none d-md-block">
                            <p className="my-0">Location: <span className="manrope_bold" style={{color:'#1E3A5F'}}>Amazon Rainforest, Brazil</span></p>
                            <p className="my-0">Date: <span className="manrope_bold" style={{color:'#1E3A5F'}}>18th July, 2014</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}