import "../css/contact.css"
import contact from "../assets/contact.svg"
import Footer from "../laycomp/Footer"
import Navbar from "../laycomp/Navbar"
function Contact() {

    return (
        <>
            <Navbar />
            <div className="Contact">

                <div className="contactBox">
                    <div className="contactBoxleft">
                        <img src={contact} alt="" />
                    </div>
                    <div className="contactBoxRight">
                        <h1>Contact Us</h1>
                        <form className='contactForm'>
                            <div className="formName">
                                <input type="text" placeholder='Enter First Name' required />
                                <input type="text" placeholder='Enter Last Name' required />
                            </div>
                            <div className="formEmail">
                                <input type="email" placeholder='Enter Email' required />
                            </div>
                            <div className="formNumber">
                                <input type="tel" placeholder='Enter Phone' required />
                            </div>
                            <div className="formText">
                                <textarea placeholder='Enter Your Message'></textarea>
                            </div>
                            <div className="formSubmit">
                                <button type="submit" className="submitBtn">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Contact
