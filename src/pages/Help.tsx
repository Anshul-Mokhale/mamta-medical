import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { Link } from "react-router-dom";
import { Package } from '../types/package';
import { faSquare, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const Help: React.FC = () => {

    const packageData: Package[] = [
        {
            name: 'Free package',
            invoiceDate: `Jan 13,2023`,
            status: 'Delivered',
        },
        {
            name: 'Standard Package',
            invoiceDate: `Jan 13,2023`,
            status: 'Out for Delivery',
        },
        {
            name: 'Business Package',
            invoiceDate: `Jan 13,2023`,
            status: 'Order Ready',
        },
        {
            name: 'Standard Package',
            invoiceDate: `Jan 13,2023`,
            status: 'Processing',
        },
        {
            name: 'Standard Package',
            invoiceDate: `Jan 13,2023`,
            status: 'Failed',
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
                                        Order id
                                    </th>
                                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                        Order date
                                    </th>
                                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                        Order Status
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
                                                className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${packageItem.status === 'Delivered'
                                                    ? 'bg-teal-500 text-teal-500'
                                                    : packageItem.status === 'Failed'
                                                        ? 'bg-danger text-danger'
                                                        : packageItem.status === 'Out for Delivery'
                                                            ? 'text-green-500 bg-green-500'
                                                            : packageItem.status === 'Order Ready'
                                                                ? 'bg-orange-500 text-orange-500'
                                                                : packageItem.status === 'Bill Generated'
                                                                    ? 'text-blue-500 bg-blue-500'
                                                                    : 'text-yellow-500 bg-yellow-500'
                                                    }`}
                                            >
                                                {packageItem.status}
                                            </p>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <div className="flex items-center space-x-3.5">
                                                <Link
                                                    to='/user/orders/vieworder'
                                                    className="hover:text-primary text-center">
                                                    <svg
                                                        className="fill-current"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 18 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                                                            fill=""
                                                        />
                                                        <path
                                                            d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                                                            fill=""
                                                        />
                                                    </svg>
                                                    View
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