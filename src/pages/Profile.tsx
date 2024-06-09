import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import CoverOne from '../images/backgimg.jpg';
import userSix from '../images/user/user-06.png';
import { Link } from 'react-router-dom';




const Profile = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />

        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <img src={userSix} alt="profile" />

            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              Danish Heilium
            </h3>
            {/* <p className="font-medium">Ui/Ux Designer</p> */}
            <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-2 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  10
                </span>
                <span className="text-sm">Orders</span>
              </div>

              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  10
                </span>
                <span className="text-sm">Payments</span>
              </div>
            </div>

            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-black dark:text-white">
                About Me
              </h4>

              <div>
                <div className="rounded-sm border border-stroke bg-white mt-5 px-0 pt-0 pb-0 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-0 xl:pb-0">
                  <div className="max-w-full overflow-x-auto">
                    <table className="w-full table-auto">
                      <tbody>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                          <td className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                            Email:
                          </td>
                          <td className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                            anshumokhale@gmail.com
                          </td>
                        </tr>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                          <td className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                            Phone:
                          </td>
                          <td className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                            +91 8766865573
                          </td>
                        </tr>

                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                          <td className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                            Address:
                          </td>
                          <td className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                            Thugaon, pt. Karla, Chandur Railway, Amravati.
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
