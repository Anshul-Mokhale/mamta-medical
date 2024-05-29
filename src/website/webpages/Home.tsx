
import { Link } from "react-router-dom"
import "../css/home.css"
import upload from "../assets/upload.svg"
import check from "../assets/check.svg"
import checkout from "../assets/checkout.svg"
import delivery from "../assets/delivery.svg"
import assurance from "../assets/assurance.png"
import convinence from "../assets/convenience.png"
import fastdelivery from "../assets/fast-delivery.png"

import user from "../assets/user.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import { faUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../laycomp/Navbar"
import Footer from "../laycomp/Footer"
import { useEffect } from "react"
// SwiperCore.use([Autoplay, Pagination]);

function Home() {
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                document.body.classList.add('darks');
            } else {
                document.body.classList.remove('darks');
            }
        };

        // Initial check
        if (mediaQuery.matches) {
            document.body.classList.add('darks');
        } else {
            document.body.classList.remove('darks');
        }

        // Listen for changes
        mediaQuery.addEventListener('change', handleChange);

        // Cleanup listener on component unmount
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <>
            <Navbar />
            <div style={{ overflowY: "hidden" }} className='Home'>
                <div className="Home-1">
                    <div className="heading">
                        <h1>Mamta Medical: Your Trusted Online Pharmacy</h1>
                        <p>Upload Your Prescription, Get Your Medications Delivered!</p>
                        <div className="heading-button">
                            <Link to=""><FontAwesomeIcon icon={faUpload} /> &nbsp; Upload Now</Link>
                        </div>
                    </div>
                </div>
                <div className="Home-2">
                    <h1>How it Works</h1>
                    <div className="Step-1">
                        <div className="image-1">
                            <img src={upload} alt="upload image" />
                        </div>
                        <div className="desc-1">
                            <h3>Upload Your Prescription</h3>
                            <p>Take a clear photo of your prescription and upload it on our website. It’s that simple!</p>
                        </div>
                    </div>
                    <div className="Step-2">
                        <div className="desc-2">
                            <h3>Browse and Select</h3>
                            <p>Explore our wide range of medications and add the required items to your cart.</p>
                        </div>
                        <div className="image-2">
                            <img src={check} alt="check list" />
                        </div>
                    </div>
                    <div className="Step-1">
                        <div className="image-1">
                            <img src={checkout} alt="Pay and checkout" />
                        </div>
                        <div className="desc-1">
                            <h3>Checkout Securely</h3>
                            <p>Complete your purchase with our secure checkout process and choose your preferred delivery option.</p>
                        </div>
                    </div>
                    <div className="Step-2">
                        <div className="desc-2">
                            <h3>Receive Your Medications</h3>
                            <p>Sit back and relax while we deliver your medications quickly and safely to your home.</p>
                        </div>
                        <div className="image-2">
                            <img src={delivery} alt="get delivery" />
                        </div>
                    </div>
                </div>
                <div className="Home-3">
                    <h1>Why Choose Us</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="card h-80">
                                    <img src={convinence} className="card-img-top" alt="convenience" />
                                    <div className="card-body">
                                        <h5 className="card-title">Convenience</h5>
                                        <p className="card-text">
                                            Skip the lines and save time. Order your medications from the comfort of your home with just a few clicks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-80">
                                    <img src={assurance} className="card-img-top" alt="quality assurance" />
                                    <div className="card-body">
                                        <h5 className="card-title">Quality Assurance</h5>
                                        <p className="card-text">
                                            All ourusermedications are sourced from reputable suppliers and undergo strict quality checks to ensure your safety and peace of mind.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-80">
                                    <img src={fastdelivery} className="card-img-top" alt="Fast Delivery" />
                                    <div className="card-body">
                                        <h5 className="card-title">Fast Delivery</h5>
                                        <p className="card-text">
                                            We understand the importance of timely access to medication. Enjoy swift and reliable delivery to your doorstep.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="Home-4">
                    <h1>What Customer Says</h1>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            250: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            }

                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="card h-60">
                                <div className="bpcs">
                                    <img src={user} className="card-img-top" alt="convenience" />
                                    <h5 className="card-title">User</h5>

                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ea.
                                    </p>
                                </div>
                            </div></SwiperSlide>
                        <SwiperSlide>
                            <div className="card h-60">
                                <div className="bpcs">
                                    <img src={user} className="card-img-top" alt="convenience" />
                                    <h5 className="card-title">User</h5>

                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ea.
                                    </p>
                                </div>
                            </div></SwiperSlide>
                        <SwiperSlide>
                            <div className="card h-60">
                                <div className="bpcs">
                                    <img src={user} className="card-img-top" alt="convenience" />
                                    <h5 className="card-title">User</h5>

                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ea.
                                    </p>
                                </div>
                            </div></SwiperSlide>
                        <SwiperSlide>
                            <div className="card h-60">
                                <div className="bpcs">
                                    <img src={user} className="card-img-top" alt="convenience" />
                                    <h5 className="card-title">User</h5>

                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ea.
                                    </p>
                                </div>
                            </div></SwiperSlide>
                        <SwiperSlide>
                            <div className="card h-60">
                                <div className="bpcs">
                                    <img src={user} className="card-img-top" alt="convenience" />
                                    <h5 className="card-title">User</h5>

                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ea.
                                    </p>
                                </div>
                            </div></SwiperSlide>
                        <SwiperSlide>
                            <div className="card h-60">
                                <div className="bpcs">
                                    <img src={user} className="card-img-top" alt="convenience" />
                                    <h5 className="card-title">User</h5>

                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ea.
                                    </p>
                                </div>
                            </div></SwiperSlide>

                    </Swiper>
                </div>
            </div >
            <Footer />
        </>

    )
}

export default Home
