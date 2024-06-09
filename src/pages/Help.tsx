import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { Link } from "react-router-dom";
import { Package } from '../types/package';
import { faArrowRight, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const Help: React.FC = () => {

    const packageData: Package[] = [
        {
            name: 'Free package',
            invoiceDate: `Jan 13,2023`,
            status: 'Closed',
        },
        {
            name: 'Standard Package',
            invoiceDate: `Jan 13,2023`,
            status: 'Responded',
        },
        {
            name: 'Business Package',
            invoiceDate: `Jan 13,2023`,
            status: 'Open',
        },
        {
            name: 'Standard Package',
            invoiceDate: `Jan 13,2023`,
            status: 'Open',
        },
        {
            name: 'Standard Package',
            invoiceDate: `Jan 13,2023`,
            status: 'Closed',
        },
    ];
    return (
        <DefaultLayout>
            <div className="flex flex-row justify-between items-center">
                <div className="mb-6 flex flex-col gap-3 sm:flex-col sm:justify-between">
                    <h2 className="text-title-md2 font-semibold text-black dark:text-white">
                        Help
                    </h2>
                    <nav>
                        <ol className="flex items-center gap-2">
                            <li>
                                <Link className="font-medium" to="/">
                                    Dashboard /
                                </Link>
                            </li>
                            <li className="font-medium text-primary">Help</li>
                        </ol>
                    </nav>
                </div>
                <div>
                    <Link
                        to="/user/help/create-ticket"
                        className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        <span>
                            <FontAwesomeIcon icon={faSquarePlus} className="text-2xl" />


                        </span>
                        Create Ticket
                    </Link>
                </div>
            </div>


            <div>
                <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                    <div className="max-w-full overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                        Ticket id
                                    </th>
                                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                        Ticket date
                                    </th>
                                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                        Ticket Status
                                    </th>
                                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {packageData.map((packageItem, key) => (
                                    <tr key={key}>
                                        <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                            <h5 className="font-medium text-black dark:text-white">
                                                {packageItem.name}
                                            </h5>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <p className="text-black dark:text-white">
                                                {packageItem.invoiceDate}
                                            </p>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <p
                                                className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${packageItem.status === 'Open'
                                                    ? 'bg-teal-500 text-teal-500'
                                                    : packageItem.status === 'Closed'
                                                        ? 'bg-danger text-danger'
                                                        : packageItem.status === 'Responded'
                                                            ? 'text-green-500 bg-green-500'
                                                            : 'text-yellow-500 bg-yellow-500'
                                                    }`}
                                            >
                                                {packageItem.status}
                                            </p>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <div className="flex items-center space-x-3.5">
                                                <Link
                                                    to='/user/help/view-ticket/1823dkf3'
                                                    className="hover:text-primary text-center">
                                                    View &nbsp;
                                                    <FontAwesomeIcon icon={faArrowRight} />
                                                </Link>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Help;