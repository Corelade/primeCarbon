import Layout from "../components/layout";
import '../styles/about.css';
import '../styles/contact.css';

export default function ContactPage() {
    return (
        <Layout>
            {/* <div style={{ height: '130px' }} className="bg-black"></div> */}
            <div style={{ height: '700px' }} className="canvas">
                <div className="h-100 w-50 secbg" style={{ float: 'right' }}>
                </div>
                <div className="h-100 w-50 d-flex flex-column justify-content-center">
                    <div className="thirdbg h-75 ms-5 rounded-3 p-4 text-black d-flex flex-column align-items-center overflow-auto">
                        <h1 className="felix_regular semi_large_text">Contact Us</h1>
                        <p className="text-center manrope_regular" style={{ color: '#67748E', fontSize: '12px' }}>
                            For further enquiries, partnerships, please email hello@creative-
                            tim.com or fill the form below.
                        </p>
                        <form className="row g-4">
                            <div className="col-md-6">
                                <label for="fullname" className="form-label manrope_semibold small">Fullname</label>
                                <input type="text" className="form-control small" id="fullname" placeholder="Full Name" />
                            </div>
                            <div className="col-md-6">
                                <label for="phone" className="form-label manrope_semibold small">Phone</label>
                                <input type="number" className="form-control small" id="phone" placeholder="+234 000 000 000 0000" />
                            </div>
                            <div className="col-md-6">
                                <label for="email" className="form-label manrope_semibold small">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="hello@creative-tim.com" />
                            </div>
                            <div className="col-md-6">
                                <label for="location" className="form-label manrope_semibold small">Location</label>
                                <input type="text" className="form-control" id="location" placeholder="Nigeria" />
                            </div>
                            <div className="">
                                <label for="floatingTextarea" className="manrope_semibold small">What would you like to tell us?</label>
                                <textarea className="form-control small" placeholder="Enter your message here" id="floatingTextarea" rows='5' style={{ resize: 'none' }}></textarea>
                            </div>
                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-primary rounded-pill manrope-semibold bg-black text-white border border-0 small">
                                    Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </Layout>
    )

}
