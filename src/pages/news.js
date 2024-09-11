import Layout from "../components/layout";
import '../styles/news.css';
import '../styles/whatwedo.css';
import newsimage2 from '../images/newsimage2.png';
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';


export default function News() {

    const isMobile = useMediaQuery({ maxWidth: 768 });

    const links = [];

    for (let i = 0; i < 6; i++) {
        links.push(<Newslinks key={i} index={i} />);
    }

    return (
        <Layout useBackground={true}>
            <div className="bg-black d-flex flex-column justify-content-center align-items-center news">
                <div className="d-flex flex-column justify-content-evenly align-items-center text-white h-75">
                    <div>
                        <h1 className="felix_regular text-center">Press & News</h1>
                        <p>Explore Our Journey: Innovative Solutions for a Sustainable Future</p>
                    </div>
                    <div className="wwdcb manrope_bold rounded-pill newscb">
                        Contact Us Now
                    </div>
                </div>
            </div>
            {/* <div className="w-100 rounded-circle" style={{height:'200px', backgroundColor:'#F1F1F1', marginTop:'-105px'}}>

            </div> */}
            <div className="px-0 px-md-4" style={{}}>
                <div style={{ backgroundColor: '#F1F1F1' }} className="p-2 p-md-5 d-flex flex-column flex-md-row justify-content-between flex-wrap">
                    {/* <Newslinks /> */}
                    {links}
                </div>
            </div>
        </Layout>
    )
}

function Newslinks(props) {
    const {index} = props
    const [activeDetail, setActiveDetail] = useState('');

    return (



        <div className={`col-11 col-md-3 p-2 rounded-3 m-4 ${activeDetail === index && 'activeDetail shadow'}`} onMouseEnter={() => setActiveDetail('')} onMouseLeave={() => setActiveDetail('')}>
            <img src={newsimage2} alt="sunset" className="w-100 rounded-3" height='250px' />
            <h3 className="felix_regular my-3 " style={{color:'#101828'}}>A BLOG POST</h3>
            <p className="inter_regular " style={{ color: '#475467' }}>
                Trees store carbon. When a tree is cut down that carbon is released as carbon dioxide emissions into the atmosphere, contributing to climate change.
            </p>
            {/* eslint-disable-next-line */}
            <a href="#" style={{color:'#19AB4F'}} className="inter_regular">Read More...</a>
        </div>

    )
}
