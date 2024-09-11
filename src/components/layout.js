import { useEffect, useState } from 'react';
// import logoWhite from '../images/logo-white.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import '../styles/layout.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


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
    const [show, setShow] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [dark, setDark] = useState(false);

    let display = 'none';
    if (show) {
        display = 'block';
    } else {
        display = 'none'
    }

    useEffect(() => {
        if (isMobile) {
            if (path === '/about' || path === '/projects') {
                setDark(true);
            }
        }
    }, [isMobile, path])


    return (
        <nav className={`text-white d-flex flex-row align-items-center justify-content-between px-3 px-lg-5 w-100 position-relative ${useBackground && !isMobile && 'add-color'}`} style={{ height: '130px', zIndex: 100 }}>
            <div>
                <img src={dark ? logo3 : logo2} alt='PrimeCarbon Logo' className='curs logo' />
            </div>
            <div className='d-flex flex-row nav_links manrope_regular d-none d-lg-flex'>
                <div className={`${path === '/' && 'activePage'} rounded-pill`} onClick={() => navigate('/')}>Home</div>
                <div className={`${path === '/about' && 'activePage'} rounded-pill`} onClick={() => navigate('/about')}>About Us</div>
                <div className={`${path === '/what-we-do' && 'activePage'} rounded-pill`} onClick={() => navigate('/what-we-do')}>What We Do</div>
                <div className={`${path === '/projects' && 'activePage'} rounded-pill`} onClick={() => navigate('/projects')}>
                    Our Projects</div>
                <div className={`${path === '/publications' && 'activePage'} rounded-pill`} onClick={() => navigate('/publications')}>Publications</div>
                <div className={`${path === '/contact' && 'activePage'} rounded-pill`} onClick={() => navigate('/contact')}>Contact Us</div>
            </div>
            <div className='d-lg-none curs'>
                {dark ? (
                    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='dropdown_menu position-relative mb-3' onClick={() => setShow(!show)}>
                        <path d="M2.3335 19.3334H25.6668M2.3335 11.0001H25.6668M2.3335 2.66675H25.6668" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                ) : (
                    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='dropdown_menu position-relative mb-3' onClick={() => setShow(!show)}>
                        <path d="M2.33337 19.3334H25.6667M2.33337 11.0001H25.6667M2.33337 2.66675H25.6667" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                )}
                <div className='dropdown-content position-absolute p-2 bg-secondary' style={{ display, right: '0', width: '160px' }}>
                    <div className={`${path === '/' && 'activePage'} mb-2 p-1`} onClick={() => navigate('/')}>Home</div>
                    <div className={`${path === '/about' && 'activePage'} mb-2 p-1`} onClick={() => navigate('/about')}>About Us</div>
                    <div className={`${path === '/what-we-do' && 'activePage'} mb-2 p-1`} onClick={() => navigate('/what-we-do')}>What We Do</div>
                    <div className={`${path === '/projects' && 'activePage'} mb-2 p-1`} onClick={() => navigate('/projects')}>
                        Our Projects</div>
                    <div className={`${path === '/publications' && 'activePage'} mb-2 p-1`} onClick={() => navigate('/publications')}>Publications</div>
                    <div className={`${path === '/contact' && 'activePage'} mb-2 p-1`} onClick={() => navigate('/contact')}>Contact Us</div>
                </div>

            </div>
        </nav>

    )
}

function Footer() {
    return (
        <>
            <FAQ />
            <div className='px-0 px-md-4 d-none d-md-block'>
                <div className='p-5' style={{ backgroundColor: '#F1F1F1' }}>
                </div>
            </div>
            <nav className='footer_nav d-flex flex-column flex-md-row p-3 p-md-5 justify-content-between flex-wrap' style={{ backgroundColor: '#F9F9F9', color: '#37424C' }}>
                <div className='col-12 col-md-6 col-lg-3 px-3 order-1 order-md-1'>
                    <h2 className='felix_regular'>Prime Carbon</h2>
                    <div className='manrope_regular'>
                        Creating significant social & environmental impacts through a combination of traditional conservation efforts and cutting-edge technologies.
                    </div>
                    <div className='d-flex flex-row justify-content-between col-8 my-2'>
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="8" fill="black" />
                            <path d="M31 11.0101C31 11.0101 28.982 12.2021 27.86 12.5401C27.2577 11.8476 26.4573 11.3567 25.567 11.134C24.6767 10.9112 23.7395 10.9673 22.8821 11.2945C22.0247 11.6218 21.2884 12.2045 20.773 12.9638C20.2575 13.7231 19.9877 14.6224 20 15.5401V16.5401C18.2426 16.5856 16.5013 16.1959 14.931 15.4055C13.3607 14.6151 12.0103 13.4487 11 12.0101C11 12.0101 7 21.0101 16 25.0101C13.9405 26.408 11.4872 27.109 9 27.0101C18 32.0101 29 27.0101 29 15.5101C29 15.2321 28.972 14.9541 28.92 14.6801C29.94 13.6741 31 11.0101 31 11.0101Z" stroke="#2FB95D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        {/* <svg width="30" height="30" viewBox="0 0 40 40" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="black" />
                            <path d="M20 24C21.0609 24 22.0783 23.5786 22.8284 22.8284C23.5786 22.0783 24 21.0609 24 20C24 18.9391 23.5786 17.9217 22.8284 17.1716C22.0783 16.4214 21.0609 16 20 16C18.9391 16 17.9217 16.4214 17.1716 17.1716C16.4214 17.9217 16 18.9391 16 20C16 21.0609 16.4214 22.0783 17.1716 22.8284C17.9217 23.5786 18.9391 24 20 24V24Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11 24V16C11 14.6739 11.5268 13.4021 12.4645 12.4645C13.4021 11.5268 14.6739 11 16 11H24C25.3261 11 26.5979 11.5268 27.5355 12.4645C28.4732 13.4021 29 14.6739 29 16V24C29 25.3261 28.4732 26.5979 27.5355 27.5355C26.5979 28.4732 25.3261 29 24 29H16C14.6739 29 13.4021 28.4732 12.4645 27.5355C11.5268 26.5979 11 25.3261 11 24Z" stroke="white" stroke-width="1.5" />
                            <path d="M25.5 14.51L25.51 14.499" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> */}
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="#37424C" />
                            <path d="M20 24C21.0609 24 22.0783 23.5786 22.8284 22.8284C23.5786 22.0783 24 21.0609 24 20C24 18.9391 23.5786 17.9217 22.8284 17.1716C22.0783 16.4214 21.0609 16 20 16C18.9391 16 17.9217 16.4214 17.1716 17.1716C16.4214 17.9217 16 18.9391 16 20C16 21.0609 16.4214 22.0783 17.1716 22.8284C17.9217 23.5786 18.9391 24 20 24V24Z" stroke="#37424C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11 24V16C11 14.6739 11.5268 13.4021 12.4645 12.4645C13.4021 11.5268 14.6739 11 16 11H24C25.3261 11 26.5979 11.5268 27.5355 12.4645C28.4732 13.4021 29 14.6739 29 16V24C29 25.3261 28.4732 26.5979 27.5355 27.5355C26.5979 28.4732 25.3261 29 24 29H16C14.6739 29 13.4021 28.4732 12.4645 27.5355C11.5268 26.5979 11 25.3261 11 24Z" stroke="#37424C" stroke-width="1.5" />
                            <path d="M25.5 14.51L25.51 14.499" stroke="#37424C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        {/* <svg width="30" height="30" viewBox="0 0 40 40" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="black" />
                            <path d="M25 10H22C20.6739 10 19.4021 10.5268 18.4645 11.4645C17.5268 12.4021 17 13.6739 17 15V18H14V22H17V30H21V22H24L25 18H21V15C21 14.7348 21.1054 14.4804 21.2929 14.2929C21.4804 14.1054 21.7348 14 22 14H25V10Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> */}
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="#37424C" />
                            <path d="M25 10H22C20.6739 10 19.4021 10.5268 18.4645 11.4645C17.5268 12.4021 17 13.6739 17 15V18H14V22H17V30H21V22H24L25 18H21V15C21 14.7348 21.1054 14.4804 21.2929 14.2929C21.4804 14.1054 21.7348 14 22 14H25V10Z" stroke="#37424C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        {/* <svg width="30" height="30" viewBox="0 0 40 40" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="black" />
                            <path d="M22 20L18.5 22V18L22 20Z" fill="black" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 20.7069V19.2919C10 16.3969 10 14.9489 10.905 14.0179C11.811 13.0859 13.237 13.0459 16.088 12.9649C17.438 12.9269 18.818 12.8999 20 12.8999C21.181 12.8999 22.561 12.9269 23.912 12.9649C26.763 13.0459 28.189 13.0859 29.094 14.0179C30 14.9489 30 16.3979 30 19.2919V20.7069C30 23.6029 30 25.0499 29.095 25.9819C28.189 26.9129 26.764 26.9539 23.912 27.0339C22.562 27.0729 21.182 27.0999 20 27.0999C18.6958 27.096 17.3916 27.074 16.088 27.0339C13.237 26.9539 11.811 26.9139 10.905 25.9819C10 25.0499 10 23.6019 10 20.7079V20.7069Z" stroke="white" stroke-width="1.5" />
                        </svg> */}
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="#37424C" />
                            <path d="M22 20L18.5 22V18L22 20Z" fill="#37424C" stroke="#37424C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 20.707V19.292C10 16.397 10 14.949 10.905 14.018C11.811 13.086 13.237 13.046 16.088 12.965C17.438 12.927 18.818 12.9 20 12.9C21.181 12.9 22.561 12.927 23.912 12.965C26.763 13.046 28.189 13.086 29.094 14.018C30 14.949 30 16.398 30 19.292V20.707C30 23.603 30 25.05 29.095 25.982C28.189 26.913 26.764 26.954 23.912 27.034C22.562 27.073 21.182 27.1 20 27.1C18.6958 27.0961 17.3916 27.0741 16.088 27.034C13.237 26.954 11.811 26.914 10.905 25.982C10 25.05 10 23.602 10 20.708V20.707Z" stroke="#37424C" stroke-width="1.5" />
                        </svg>

                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3 px-3 order-2 order-md-2 my-3 my-md-0'>
                    <h5 className='felix_regular mb-3'>Quick Links</h5>
                    <div className='manrope_regular'>
                        <div className='my-2'>About Us</div>
                        <div className='my-2'>Projects</div>
                        <div className='my-2'>What We Do</div>
                        <div className='my-2'>News/Blog</div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3 px-3 order-3 order-md-3 my-3 my-md-0'>
                    <h5 className='felix_regular mb-3'>Contact Us</h5>
                    <div className='manrope_regular'>
                        <div className='my-2 d-flex flex-row align-items-center'>
                            <svg width="14" height="14" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3335 0.666626H1.66683C0.933496 0.666626 0.340163 1.26663 0.340163 1.99996L0.333496 9.99996C0.333496 10.7333 0.933496 11.3333 1.66683 11.3333H12.3335C13.0668 11.3333 13.6668 10.7333 13.6668 9.99996V1.99996C13.6668 1.26663 13.0668 0.666626 12.3335 0.666626ZM12.0668 3.49996L7.3535 6.44663C7.14016 6.57996 6.86016 6.57996 6.64683 6.44663L1.9335 3.49996C1.76683 3.39329 1.66683 3.21329 1.66683 3.01996C1.66683 2.57329 2.1535 2.30663 2.5335 2.53996L7.00016 5.33329L11.4668 2.53996C11.8468 2.30663 12.3335 2.57329 12.3335 3.01996C12.3335 3.21329 12.2335 3.39329 12.0668 3.49996Z" fill="#37424C" />
                            </svg>

                            <span className='ms-2'>hello@website.com</span>
                        </div>
                        <div className='my-2 d-flex flex-row align-items-center'>
                            <svg width="14" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00016 0.333374C2.42016 0.333374 0.333496 2.42004 0.333496 5.00004C0.333496 7.78004 3.28016 11.6134 4.4935 13.0734C4.76016 13.3934 5.24683 13.3934 5.5135 13.0734C6.72016 11.6134 9.66683 7.78004 9.66683 5.00004C9.66683 2.42004 7.58016 0.333374 5.00016 0.333374ZM5.00016 6.66671C4.08016 6.66671 3.3335 5.92004 3.3335 5.00004C3.3335 4.08004 4.08016 3.33337 5.00016 3.33337C5.92016 3.33337 6.66683 4.08004 6.66683 5.00004C6.66683 5.92004 5.92016 6.66671 5.00016 6.66671Z" fill="#37424C" />
                            </svg>
                            <span className='ms-2'>Riverside Building, County Hall, London SE1 7PB, United Kingdom</span>
                        </div>
                        <div className='my-2 d-flex flex-row align-items-center'>
                            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.82 8.17314L9.12669 7.9798C8.72003 7.93314 8.32003 8.07314 8.03336 8.3598L6.80669 9.58647C4.92003 8.62647 3.37336 7.08647 2.41336 5.19314L3.64669 3.9598C3.93336 3.67314 4.07336 3.27314 4.02669 2.86647L3.83336 1.18647C3.75336 0.513137 3.18669 0.00646973 2.50669 0.00646973H1.35336C0.600027 0.00646973 -0.0266396 0.633136 0.0200271 1.38647C0.37336 7.0798 4.92669 11.6265 10.6134 11.9798C11.3667 12.0265 11.9934 11.3998 11.9934 10.6465V9.49314C12 8.8198 11.4934 8.25314 10.82 8.17314Z" fill="#37424C" />
                            </svg>
                            <span className='ms-2'>451-484-5939</span>
                        </div>
                    </div>

                </div>
                <div className='col-12 col-md-6 col-lg-3 px-3 order-4 order-md-4 my-3 my-md-0'>
                    <h5 className='felix_regular mb-3'>Newsletter</h5>
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
                        <div className={`rounded-2 p-3 p-md-3 bg-white mb-3 border d-flex flex-row justify-content-between align-items-center curs ${activeQuestion === question.id && 'active_question'} question col-12 col-md-8 mx-auto`} onClick={() => handleClick(i + 1)}>
                            <div className='col-10'>
                                <div className={`${activeQuestion === question.id ? 'manrope_semibold' : 'manrope_light'}`}>{question.question}</div>
                                {activeQuestion === question.id && (
                                    <div className='mt-3 manrope_regular' style={{ fontSize: '12px' }}>
                                        {question.answer}
                                    </div>
                                )}
                            </div>
                            <div>
                                {/* {activeQuestion === question.id ? ( */}
                                {/* <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.13464 0.841863L1.10196 6.87454C0.589384 7.38712 0.589384 8.21513 1.10196 8.72772C1.61454 9.2403 2.44256 9.2403 2.95514 8.72772L8.0678 3.6282L13.1673 8.72772C13.6799 9.2403 14.5079 9.2403 15.0205 8.72772C15.5331 8.21513 15.5331 7.38712 15.0205 6.87454L8.98782 0.841863C8.48838 0.329283 7.64722 0.329283 7.13464 0.841863Z" fill="white" />
                                    </svg> */}

                                {/* ) : ( */}
                                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${activeQuestion === question.id ? 'change-angle' : 'reverse-angle'}`}>
                                    <path d="M13.1671 1.25345L8.0676 6.35297L2.96808 1.25345C2.4555 0.740873 1.62748 0.740873 1.1149 1.25345C0.602324 1.76603 0.602324 2.59405 1.1149 3.10663L7.14758 9.13931C7.66016 9.65189 8.48818 9.65189 9.00076 9.13931L15.0334 3.10663C15.546 2.59405 15.546 1.76603 15.0334 1.25345C14.5209 0.754017 13.6797 0.740873 13.1671 1.25345Z" fill={`${activeQuestion === question.id ? 'white' : "#232A42"}`} />
                                </svg>

                                {/* )} */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
