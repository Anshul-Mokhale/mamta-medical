import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { Link, useParams } from "react-router-dom";

const ViewPayment: React.FC = () => {
    const { paymentid } = useParams<{ paymentid: string }>();
    return (
        <DefaultLayout>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-title-md2 font-semibold text-black dark:text-white">
                    Transaction ID: {paymentid}
                </h2>
                <nav>
                    <ol className="flex items-center gap-2">
                        <li>
                            <Link className="font-medium" to="/user/dashboard">
                                Dashboard /
                            </Link>
                        </li>
                        <li>
                            <Link className="font-medium" to="/user/help">
                                Payments /
                            </Link>
                        </li>
                        <li className="font-medium text-primary">View Transactions</li>
                    </ol>
                </nav>
            </div>
        </DefaultLayout>
    );
}

export default ViewPayment;
