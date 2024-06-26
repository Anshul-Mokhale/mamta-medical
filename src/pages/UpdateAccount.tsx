import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";

const UpdateAccount: React.FC = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Update Account" />
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Update Account
                    </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                    <form action="#">

                        <div>
                            <label className="mb-3 block text-black dark:text-white">
                                Name:
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                value="Anshul Mokhale"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block text-black dark:text-white">
                                Email:
                            </label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                value="anshumokhale@gmail.com"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block text-black dark:text-white">
                                Phone:
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Phone"
                                value="8766865573"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block text-black dark:text-white">
                                Address:
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Address"
                                value="Thugaon, pt.Karla, Chandur Railway, Amravati. 444904"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div>
                            <label className="mb-3 block text-black dark:text-white">
                                Upload Profile
                            </label>
                            <input
                                type="file"
                                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="flex justify-end mt-8 gap-4.5">
                            <button
                                className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                                type="submit"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default UpdateAccount;