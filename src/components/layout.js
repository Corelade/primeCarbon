import { useEffect, useState } from 'react';
import logoWhite from '../images/logo-white.png';
import logo2 from '../images/logo2.png';
import '../styles/layout.css';
import { useNavigate, useLocation } from 'react-router-dom';


export default function Layout({ children, useBackground }) {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    // useEffect(()=>{

    // }, [])

    return (
        <div className='myfade'>
            <Navbar useBackground={useBackground} />
            {children}
            <Footer />
        </div>
    )
}


function Navbar(props) {
    const { useBackground = true } = props;
    const path = window.location.pathname;
    const navigate = useNavigate();
    const [addColor, setAddColor] = useState(false);

    // useEffect(() => {

    //     const handleScroll = () => {
    //         if (window.scrollY > 67) {
    //             setAddColor(true);
    //         } else {
    //             setAddColor(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


    return (
        <nav className={`text-white d-flex flex-row align-items-center justify-content-between px-3 px-lg-5 w-100 position-relative ${useBackground && 'add-color'}`} style={{ height: '130px', zIndex: 100 }}>
            <div>
                <img src={logo2} alt='PrimeCarbon Logo' className='curs logo' />
            </div>
            <div className='d-flex flex-row nav_links manrope_regular d-none d-md-flex'>
                <div className={`${path === '/' && 'activePage'} rounded-pill`} onClick={() => navigate('/')}>Home</div>
                <div className={`${path === '/about' && 'activePage'} rounded-pill`} onClick={() => navigate('/about')}>About Us</div>
                <div className={`${path === '/what-we-do' && 'activePage'} rounded-pill`} onClick={() => navigate('/what-we-do')}>What We Do</div>
                <div className={`${path === '/projects' && 'activePage'} rounded-pill`} onClick={() => navigate('/projects')}>
                    Our Projects</div>
                <div className={`${path === '/publications' && 'activePage'} rounded-pill`} onClick={() => navigate('/publications')}>Publications</div>
                <div className={`${path === '/contact' && 'activePage'} rounded-pill`} onClick={() => navigate('/contact')}>Contact Us</div>
            </div>
            <div className='d-md-none curs'>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </div>
        </nav>

    )
}

function Footer() {
    return (
        <>
            <FAQ />
            <div className='px-0 px-md-4'>
                <div className='p-5' style={{ backgroundColor: '#F1F1F1' }}>
                    {/* <div className='cus1 h-100 d-flex align-items-center px-2 px-md-5 text-white'>
                        <div className='w-75 h-50 flex-column justify-content-around d-none d-md-flex'>
                            <h1 className='bricolage_semibold'>Power that Doesn't Cost the Earth</h1>
                            <p className='inter_regular w-75'>If you need advice then give us a call on 07745593882 or hit the button below to request a call back!</p>
                            <button className='rounded-pill text-white p-2 w-25 manrope_bold' style={{ backgroundColor: '#1E3A5F', border: 'none' }}>
                                Contact Us
                            </button>
                        </div>
                        <button className='rounded-pill text-white p-2 col-6 col-md-6 manrope_bold d-md-none' style={{ backgroundColor: '#1E3A5F', border: 'none' }}>
                            Contact Us
                        </button>
                    </div> */}
                    
                </div>
            </div>
            <nav className='footer_nav d-flex flex-row p-3 p-md-5 justify-content-between flex-wrap' style={{backgroundColor:'#F9F9F9', color:'#37424C'}}>
                <div className='col-12 col-md-3 px-3 order-4 order-md-1'>
                    <h2 className='bricolage_semibold'>Prime Carbon</h2>
                    <div className='manrope_regular'>
                        Creating significant social & environmental impacts through a combination of traditional conservation efforts and cutting-edge technologies.
                    </div>
                    <div className='d-flex flex-row justify-content-between col-8 my-2'>
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="8" fill="black" />
                            <path d="M31 11.0101C31 11.0101 28.982 12.2021 27.86 12.5401C27.2577 11.8476 26.4573 11.3567 25.567 11.134C24.6767 10.9112 23.7395 10.9673 22.8821 11.2945C22.0247 11.6218 21.2884 12.2045 20.773 12.9638C20.2575 13.7231 19.9877 14.6224 20 15.5401V16.5401C18.2426 16.5856 16.5013 16.1959 14.931 15.4055C13.3607 14.6151 12.0103 13.4487 11 12.0101C11 12.0101 7 21.0101 16 25.0101C13.9405 26.408 11.4872 27.109 9 27.0101C18 32.0101 29 27.0101 29 15.5101C29 15.2321 28.972 14.9541 28.92 14.6801C29.94 13.6741 31 11.0101 31 11.0101Z" stroke="#2FB95D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="black" />
                            <path d="M20 24C21.0609 24 22.0783 23.5786 22.8284 22.8284C23.5786 22.0783 24 21.0609 24 20C24 18.9391 23.5786 17.9217 22.8284 17.1716C22.0783 16.4214 21.0609 16 20 16C18.9391 16 17.9217 16.4214 17.1716 17.1716C16.4214 17.9217 16 18.9391 16 20C16 21.0609 16.4214 22.0783 17.1716 22.8284C17.9217 23.5786 18.9391 24 20 24V24Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11 24V16C11 14.6739 11.5268 13.4021 12.4645 12.4645C13.4021 11.5268 14.6739 11 16 11H24C25.3261 11 26.5979 11.5268 27.5355 12.4645C28.4732 13.4021 29 14.6739 29 16V24C29 25.3261 28.4732 26.5979 27.5355 27.5355C26.5979 28.4732 25.3261 29 24 29H16C14.6739 29 13.4021 28.4732 12.4645 27.5355C11.5268 26.5979 11 25.3261 11 24Z" stroke="white" stroke-width="1.5" />
                            <path d="M25.5 14.51L25.51 14.499" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="black" />
                            <path d="M25 10H22C20.6739 10 19.4021 10.5268 18.4645 11.4645C17.5268 12.4021 17 13.6739 17 15V18H14V22H17V30H21V22H24L25 18H21V15C21 14.7348 21.1054 14.4804 21.2929 14.2929C21.4804 14.1054 21.7348 14 22 14H25V10Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="black" />
                            <path d="M22 20L18.5 22V18L22 20Z" fill="black" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 20.7069V19.2919C10 16.3969 10 14.9489 10.905 14.0179C11.811 13.0859 13.237 13.0459 16.088 12.9649C17.438 12.9269 18.818 12.8999 20 12.8999C21.181 12.8999 22.561 12.9269 23.912 12.9649C26.763 13.0459 28.189 13.0859 29.094 14.0179C30 14.9489 30 16.3979 30 19.2919V20.7069C30 23.6029 30 25.0499 29.095 25.9819C28.189 26.9129 26.764 26.9539 23.912 27.0339C22.562 27.0729 21.182 27.0999 20 27.0999C18.6958 27.096 17.3916 27.074 16.088 27.0339C13.237 26.9539 11.811 26.9139 10.905 25.9819C10 25.0499 10 23.6019 10 20.7079V20.7069Z" stroke="white" stroke-width="1.5" />
                        </svg>
                    </div>
                </div>
                <div className='col-5 col-md-3 px-3 order-1 order-md-2'>
                    <h5 className='bricolage_semibold'>Quick Links</h5>
                    <div className='manrope_regular'>
                        <div>About Us</div>
                        <div>Our Projects</div>
                        <div>What We Do</div>
                        <div>News/Blog</div>
                    </div>
                </div>
                <div className='col-5 col-md-3 px-3 order-2 order-md-3'>
                    <h5 className='bricolage_semibold'>Contact Us</h5>
                    <div className='manrope_regular'>
                        <div>About Us</div>
                        <div>Our Projects</div>
                        <div>What We Do</div>
                    </div>

                </div>
                <div className='col-12 col-md-3 px-3 order-3 order-md-4 my-3 my-md-0'>
                    <h5 className='bricolage_semibold'>Newsletter</h5>
                    <div className="input-group input-group-lg manrope_regular">
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Enter your email' style={{ fontSize: '15px' }} />
                        <span className="input-group-text bricolage_semibold bg-dark text-white" id="inputGroup-sizing-lg" style={{ border: 'none' }}>Subscribe</span>
                    </div>
                </div>

            </nav>
        </>
    )
}

function FAQ() {
    const [activeQuestion, setActiveQuestion] = useState(0)

    const questions = [
        {
            'id': 1,
            'question': 'Do you specialize in both residential and commercial landscaping?',
            'answer': "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help"
        },
        {
            'id': 2,
            'question': 'Do you provide sustainable and eco-friendly landscaping options?',
            'answer': "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help"
        },
        {
            'id': 3,
            'question': ' How do I request a consultation or estimate for my landscaping project?',
            'answer': "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help"
        },
        {
            'id': 4,
            'question': 'What factors influence the cost of a landscaping project?',
            'answer': "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help"
        },
        {
            'id': 5,
            'question': 'How often should I schedule landscape maintenance services?',
            'answer': "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help"
        },

    ]

    function handleClick(i) {
        if (activeQuestion === i) {
            setActiveQuestion(0)
        } else {
            setActiveQuestion(i)
        }
    }


    return (
        <div className='my-5 p-3 p-md-5 col-12  mx-auto'>
            <div className='text-center'>
                <h1 className='felix_regular'>Frequently Asked Questions</h1>
                <p style={{ fontSize: '12px', color: '#525252' }} className='manrope_regular'>Got Questions? Find the answers you need here! Explore to learn more about our commitment to sustainability and how we’re working to make a difference.</p>
            </div>
            <div className='mt-5'>
                {questions.map((question, i) => {
                    return (
                        <div className={`rounded-2 p-3 p-md-4 bg-white mb-3 shadow d-flex flex-row justify-content-between align-items-center curs ${activeQuestion === question.id && 'active_question'} question col-12 col-md-8 mx-auto`} onClick={() => handleClick(i + 1)}>
                            <div className='col-10'>
                                <div className='manrope_semibold'>{question.question}</div>
                                {activeQuestion === question.id && (
                                    <div className='mt-3 manrope_regular' style={{ fontSize: '12px' }}>
                                        {question.answer}
                                    </div>
                                )}
                            </div>
                            <div>
                                {activeQuestion === question.id ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-chevron-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
