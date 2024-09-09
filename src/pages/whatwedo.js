import Layout from "../components/layout";
import '../styles/whatwedo.css';
// import ourp2 from '../images/ourp2.png';
// import { useState } from "react";
// import comper1 from '../images/comper1.png';
// import comper2 from '../images/comper2.png';
// import comper3 from '../images/comper3.png';
// import comper4 from '../images/comper4.png';
import checkbox_white from '../images/checkbox_white.png';


export default function WhatWeDo() {
    return (
        <Layout useBackground={true}>
            {/* <div style={{ height: '130px' }} className="bg-black"></div> */}
            <div className="px-4">
                <div style={{ backgroundColor: '#F1F1F1' }} className="px-5">
                    <div style={{ height: '600px' }} className="rounded-bottom-4">
                        <div style={{ height: '85%' }} className="d-flex flex-column justify-content-center align-items-center mx-auto text-white wwdbi anim">
                            <h1 className="felix_regular" style={{ fontSize: '50px' }}>Beyond Borders</h1>
                            <p className="mulish_regular col-6 text-center">
                                Our comprehensive approach to project development, strong stakeholder engagement, and dedication to high standards of verification and transparency ensure that we continue to grow and thrive in the evolving carbon market.
                            </p>
                            {/* <div className="wwdcb manrope_bold">
                                Contact Us Now
                            </div> */}
                        </div>
                        <div className="d-flex flex-row rounded-bottom-4 text-white align-items-center justify-content-between px-5 figures" style={{ backgroundColor: '#043A3A', height: '15%' }}>
                            <div className="d-flex flex-column align-items-center col-3">
                                <h1 className="felix_regular m-0">1.2M<span style={{ color: 'green' }}>+</span></h1>
                                <div className="mulish_regular">Hectares of forest protected</div>
                            </div>
                            <div className="d-flex flex-column align-items-center col-3">
                                <h1 className="felix_regular m-0">2k<span style={{ color: 'green' }}>+</span></h1>
                                <div className="mulish_regular">Hectares of forest protected</div>
                            </div>
                            <div className="d-flex flex-column align-items-center col-3">
                                <h1 className="felix_regular m-0">$12M<span style={{ color: 'green' }}>+</span></h1>
                                <div className="mulish_regular">Hectares of forest protected</div>
                            </div>
                            <div className="d-flex flex-column align-items-center col-3">
                                <h1 className="felix_regular m-0">124+<span style={{ color: 'green' }}>+</span></h1>
                                <div className="mulish_regular">Hectares of forest protected</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 py-5">
                        <div className="col-8 mx-auto text-center">
                            <h1 className="felix_regular" style={{ color: '#101828' }}>How we make a difference</h1>
                            <p className="inter_regular" style={{ color: '#101828', fontSize: '12px' }}>
                                Transparency and community engagement are at the heart of everything we do. We ensure that all our projects align with broader social and environmental goals, actively involving local communities in sustainable development and educational programs. This collaborative approach helps us address environmental challenges while contributing to the socio-economic upliftment of the communities we serve.˝
                            </p>
                        </div>
                        <div className="my-5 py-5">
                            {/* <WhatWeDoDetails /> */}
                            <OurDifferences />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="d-flex justify-content-center flex-column p-5 align-items-center">
                <h1 className="bricolage_bold col-7 text-center" style={{ fontSize: '60px', color: '#232A42' }}>See What They Are Saying About Us</h1>
                <div className="my-2">
                    <Comments />
                </div>
            </div> */}
        </Layout>
    )
}

// function WhatWeDoDetails() {
//     const details = [
//         {
//             'img': ourp2,
//             'title': 'Conservation',
//             'content': 'Prime Carbon protects and regenerates forests, preserving tropical ecosystems and supporting local communities for long-term health and biodiversity'
//         },
//         {
//             'img': ourp2,
//             'title': 'Carbon Offsets',
//             'content': 'We fund conservation by selling verified carbon units, helping businesses meet climate targets and offset emissions, with real impacts on reducing CO2 levels'
//         },
//         {
//             'img': ourp2,
//             'title': 'Community',
//             'content': 'Prime Carbon partners with communities and governments to unlock forest value, providing education, jobs, and infrastructure to ensure sustainable, beneficial conservation projects.'
//         },
//         {
//             'img': ourp2,
//             'title': 'SDGs',
//             'content': 'We collaborate with industry leaders to align our projects with the UN Sustainable Development Goals, supporting objectives like poverty reduction, health, education, and environmental protection.'
//         },
//     ]

//     const [activeDetail, setActiveDetail] = useState('')

//     return (
//         <div className="d-flex flex-row justify-content-center flex-wrap">
//             {
//                 details.map((detail, i) => {
//                     return (
//                         <div key={i} className={`col-3 p-2 rounded-3 bg-white m-4 ${activeDetail === i && 'activeDetail shadow'}`} onMouseEnter={() => setActiveDetail(i)} onMouseLeave={() => setActiveDetail('')}>
//                             <img src={detail.img} alt="solar panel" className="w-100 rounded-3" height='250px' />
//                             <h3 className="bricolage_bold my-3">{detail.title}</h3>
//                             <p className="inter_regular" style={{ color: '#475467' }}>
//                                 {detail.content}
//                             </p>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// function Comments() {

//     const comments = [
//         {
//             'name': 'Eko Susiloanto',
//             'role': 'Regional Mobility Manager',
//             'comment': '“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi at est euismod volutpat. Fusce a iaculis leo. Maecenas tempor hendrerit cursus.',
//             'image': comper1
//         },
//         {
//             'name': 'Tri Cahyono',
//             'role': 'Human Accounts Supervisor',
//             'comment': '“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi at est euismod volutpat. Fusce a iaculis leo. Maecenas tempor hendrerit cursus.',
//             'image': comper2
//         },
//         {
//             'name': 'Tjandra Mangkualam',
//             'role': 'District Directives Producer',
//             'comment': '“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi at est euismod volutpat. Fusce a iaculis leo. Maecenas tempor hendrerit cursus.',
//             'image': comper3
//         },
//         {
//             'name': 'Cak Mukidi',
//             'role': 'Forward Paradigm Manager',
//             'comment': '“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi at est euismod volutpat. Fusce a iaculis leo. Maecenas tempor hendrerit cursus.',
//             'image': comper4
//         },
//     ]

//     // backgroundColor:'#37424C'
//     return (
//         <div className="d-flex flex-row flex-wrap justify-content-evenly">
//             {
//                 comments.map((comment, i) => {
//                     return (
//                         <div className="col-5 rounded-3 px-5 py-3 m-4 shadow d-flex flex-column justify-content-between position-relative" style={{ height: '200px' }}>
//                             <div className="manrope_regular">
//                                 {comment.comment}
//                             </div>
//                             <div>
//                                 <h2 className="bricolage_bold mb-0">{comment.name}</h2>
//                                 <p className="manrope_regular m-0" style={{ fontSize: '12px' }}>{comment.role}</p>
//                             </div>
//                             <div className="position-absolute h-100 d-flex flex-column justify-content-center" style={{ top: '0px', left: '-30px' }}>
//                                 <img src={comment.image} className="rounded-circle" height='60px' width='60px' alt="commenter" />
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

function OurDifferences() {
    const points = [
        {
            'title': 'CONSERVATION',
            'content': 'Prime Carbon protects and regenerates forests, preserving tropical ecosystems and supporting local communities for long-term health and biodiversity'
        },
        {
            'title': 'CARBON OFFSETS',
            'content': 'We fund conservation by selling verified carbon units, helping businesses meet climate targets and offset emissions, with real impacts on reducing CO2 levels'
        },
        {
            'title': 'COMMUNITY',
            'content': 'Prime Carbon partners with communities and governments to unlock forest value, providing education, jobs, and infrastructure to ensure sustainable, beneficial conservation projects.'
        },
        {
            'title': 'SDGs',
            'content': 'We collaborate with industry leaders to align our projects with the UN Sustainable Development Goals, supporting objectives like poverty reduction, health, education, and environmental protection.'
        },
    ]

    return(
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {points.map((point, i)=>{
                return (
                    <div className="col-5 p-4 mb-3 d-flex flex-column justify-content-center align-items-center">
                        <img src={checkbox_white} height={'50px'} width={'50px'} alt="checkbox"/>
                        <h5 className="felix_regular my-4">{point.title}</h5>
                        <p className="col-10 text-center">{point.content}</p>
                    </div>
                )
            })}
        </div>
    )
}