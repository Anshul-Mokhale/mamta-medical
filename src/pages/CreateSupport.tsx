import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { Link } from "react-router-dom";

const CreateSupport: React.FC = () => {
    return (
        <DefaultLayout>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-title-md2 font-semibold text-black dark:text-white">
                    Create Ticket
                </h2>
                <nav>
                    <ol className="flex items-center gap-2">
                        <li>
                            <Link className="font-medium" to="/">
                                Dashboard /
                            </Link>
                        </li>
                        <li>
                            <Link className="font-medium" to="/">
                                Help /
                            </Link>
                        </li>
                        <li className="font-medium text-primary">Create Ticket</li>
                    </ol>
                </nav>
            </div>
        </DefaultLayout>
    )
}

export default CreateSupport;