import React from 'react'
import Layout from "../layaut/Layout"
import "../css/terms.css";
import { Link } from 'react-router-dom';

const Refund: React.FC = () => {
    return (
        <Layout>
            <div className="Terms">
                <h1>Refund Policy</h1>
            </div>
            <div className="Terms-1">
                <div>
                    <h1>Introduction</h1>
                    <p>At Mamta Medical, we are committed to ensuring customer satisfaction. If you are not satisfied with your purchase, please review our refund policy below.</p>
                </div>
                <div>
                    <h1>Eligibility for Refunds</h1>
                    <p>Refunds are available under specific conditions. If the medication is damaged or defective upon arrival, if the wrong medication was delivered, or if the medication was not delivered within the specified delivery time, you are eligible for a refund.</p>
                </div>
                <div>
                    <h1>Non-Refundable Items</h1>
                    <p>Certain items are not eligible for refunds. These include opened or used medications, medications without the original packaging, medications that require refrigeration or have specific storage requirements, and medications that are specifically indicated as non-returnable or non-refundable at the time of purchase.</p>
                </div>
                <div>
                    <h1>Refund Process</h1>
                    <p>To request a refund, please follow these steps:</p>
                    <ol>
                        <li><strong>Contact Customer Support:</strong> Reach out to our customer support team within 7 days of receiving your order. You can contact us at: <ul><li><Link to='/contact'>Contact us</Link></li> <li><a href="mailto:anshumokhale0712@gmail.com">Mail Us</a></li></ul></li>
                        <li><strong>Provide Order Details:</strong> Include your order number and a detailed description of the issue.</li>
                        <li><strong>Return Authorization:</strong> If your refund request is approved, you will receive a Return Authorization (RA) number and instructions for returning the medication.</li>
                        <li><strong>Return the Medication:</strong> Ship the medication back to us in its original packaging. Ensure the RA number is clearly marked on the package. The return shipping costs will be your responsibility unless the return is due to our error (e.g., wrong medication delivered).</li>
                        <li><strong>Refund Processing:</strong> Once we receive the returned medication and verify its condition, we will process your refund within 7-10 business days. The refund will be issued to the original payment method used during the purchase.</li>
                    </ol>
                </div>
                <div>
                    <h1>Partial Refunds</h1>
                    <p>In certain situations, only partial refunds are granted. This may occur if the medication packaging is damaged or incomplete but the medication itself is unopened and unused, or if the medication is returned more than 7 days after delivery but less than 30 days.</p>
                </div>
                <div>
                    <h1>Exchanges</h1>
                    <p>We only replace items if they are defective or damaged. If you need to exchange a defective or damaged item for the same item, please contact our customer support team for assistance.</p>
                </div>

            </div>
        </Layout>
    );
}

export default Refund;