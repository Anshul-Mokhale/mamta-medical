import "../css/about.css"
import who_are_we from "../assets/who-are-we.png"
import our_mission from "../assets/mission.png"
import convinence from "../assets/convenience.png"
import what_we_offer from "../assets/open-box.png"
import Navbar from "../laycomp/Navbar"
import Footer from "../laycomp/Footer"

function About() {

    return (
        <>
            <Navbar />
            <div className="About">
                <div className="About-1">
                    <h1>About us</h1>
                </div>
                <div className="About-2">
                    <div className="About-inner-block">
                        <img src={who_are_we} alt="who are we" />
                        <h1>Who We Are</h1>
                        <p className="text-justify">Mamta Medical was founded with the vision of revolutionizing the way people access their medications. We are a team of dedicated healthcare professionals, pharmacists, and technology experts who believe in the power of innovation to improve healthcare delivery. Our online platform is designed to offer you the convenience of ordering your medications from the comfort of your home while ensuring the highest standards of quality and service.</p>
                    </div>

                </div>
                <div className="About-2">
                    <div className="About-inner-block">
                        <img src={our_mission} alt="who are we" />
                        <h1>Our Mission</h1>
                        <p className="text-justify">At Mamta Medical, our mission is to make healthcare accessible, convenient, and reliable for everyone. We understand the importance of timely and easy access to medications, and we're committed to providing a seamless online pharmacy experience that prioritizes your health and well-being.</p>
                    </div>
                </div>
                <div className="About-2">
                    <div className="About-inner-block">
                        <img src={what_we_offer} alt="who are we" />
                        <h1>What We Offer</h1>
                        <p className="text-justify">
                            <li><strong>Wide Range of Medications:</strong> From prescription drugs to over-the-counter medications, we offer a comprehensive selection to meet all your healthcare needs.</li>
                            <li><strong>Easy Prescription Upload:</strong> Simply upload a clear photo of your prescription to place your order. Our streamlined process makes it easy and hassle-free.</li>
                            <li><strong>Expert Pharmacist Support:</strong> Our team of experienced pharmacists is always available to provide guidance, answer your questions, and ensure you understand your medication regimen.</li>
                            <li><strong>Fast and Reliable Delivery:</strong> We prioritize quick and secure delivery to ensure you receive your medications when you need them.</li>
                        </p>
                    </div>
                </div>
                <div className="About-2">
                    <div className="About-inner-block">
                        <img src={convinence} alt="who are we" />
                        <h1>Our Commitment to You</h1>
                        <p className="text-justify">
                            At Mamta Medical, we are committed to building a trustworthy and reliable online pharmacy that you can depend on. We continuously work to improve our services, expand our product range, and enhance your overall experience. Your health and well-being are at the heart of everything we do.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default About
