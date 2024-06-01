import React from 'react';
import Layout from "../layaut/Layout"
import "../css/terms.css";

const Termofservice: React.FC = () => {
    return (
        <Layout>
            <div className="Terms">
                <h1>Terms of Services</h1>
            </div>
            <div className="Terms-1">
                <div>
                    <h1>Introduction</h1>
                    <p>Welcome to Mamta Medical. These Terms of Service govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms. If you do not agree to these terms, please do not use our website.</p>
                </div>
                <div>
                    <h1>Description of Services</h1>
                    <p>Mamta Medical provides an online platform for purchasing medications and health products. Users can upload their prescriptions and place orders for delivery. Our services are intended to offer a convenient way for users to access necessary medications and health products from the comfort of their homes.</p>
                </div>
                <div>
                    <h1>User Account</h1>
                    <p>To use certain features of our website, you must create an account. When creating an account, you agree to provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device. You agree to accept responsibility for all activities that occur under your account or password.</p>
                </div>
                <div>
                    <h1>Prescription Medications</h1>
                    <p>By using Mamta Medical to purchase prescription medications, you confirm that you possess a valid prescription from a licensed healthcare provider. You must upload a clear and accurate photo of your prescription for verification. Mamta Medical reserves the right to verify the prescription with the issuing healthcare provider</p>
                </div>
                <div>
                    <h1>Medical Advice Disclaimer</h1>
                    <p>The content provided on Mamta Medical is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition.</p>
                </div>
                <div>
                    <h1>Use of the Website</h1>
                    <p>You agree to use the website only for lawful purposes and in accordance with these Terms of Service. You agree not to use the website:</p>
                    <ul>
                        <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
                        <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                        <li>To send, knowingly receive, upload, download, use, or re-use any material that does not comply with these Terms of Service.</li>
                        <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
                        <li>To impersonate or attempt to impersonate Mamta Medical, a Mamta Medical employee, another user, or any other person or entity.</li>
                    </ul>
                </div>
                <div>
                    <h1>Order Acceptance and Cancellation</h1>
                    <p>Your order constitutes an offer to us to buy the product(s). All orders are subject to acceptance by us, and we will confirm such acceptance by sending you an email that confirms that the product has been dispatched. We reserve the right to refuse or cancel any order for any reason, including limitations on quantities available</p>
                </div>
            </div>
        </Layout>
    )
}

export default Termofservice