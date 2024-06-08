import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
// import Alerts from './pages/UiElements/Alerts';
// import Buttons from './pages/UiElements/Buttons';
import Home from './website/webpages/Home';
import About from './website/webpages/About';
import Contact from './website/webpages/Contact';
// import PrivateRoute from './PrivateRoute';
import Termandcondition from './website/webpages/Termandcondition';
import Termofservice from './website/webpages/Termofservice';
import Privacypolicy from './website/webpages/Privacypolicy';
import Refund from './website/webpages/Refund';
import Order from './pages/Order';
import Orderhistory from './pages/Orderhistory';
import Bill from './pages/Bill';


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Mamta medical" />
              <Home />
            </>
          }
        />
        <Route
          path='/about'
          element={
            <>
              <PageTitle title="About | Mamta medical" />
              <About />
            </>
          }
        />
        <Route
          path='/contact'
          element={
            <>
              <PageTitle title="Contact | Mamta medical" />
              <Contact />
            </>
          }
        />
        <Route
          path='/terms-and-conditions'
          element={
            <>
              <PageTitle title="Terms and Conditions | Mamta medical " />
              <Termandcondition />
            </>
          }
        />
        <Route
          path='/terms-of-services'
          element={
            <>
              <PageTitle title="Terms of Services | Mamta medical " />
              <Termofservice />
            </>
          }
        />
        <Route
          path='/privacy-policy'
          element={
            <>
              <PageTitle title="Privacy Policy | Mamta medical " />
              <Privacypolicy />
            </>
          }
        />
        <Route
          path='/refund-policy'
          element={
            <>
              <PageTitle title="Refund Policy | Mamta medical " />
              <Refund />
            </>
          }
        />
        {/* <Route element={<PrivateRoute />}>
          <Route
            path='/dashboard'
            element={
              <>
                <PageTitle title="Mamta medical | Dashboard" />
                <ECommerce />
              </>
            }
          />
        </Route> */}

        <Route
          path='/user/dashboard'
          element={
            <>
              <PageTitle title="Dashboard | Mamta medical" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/user/orders"
          element={
            <>
              <PageTitle title="Orders | Mamta Medical" />
              <Orderhistory />
            </>
          }
        />
        <Route
          path="/user/orders/order-now"
          element={
            <>
              <PageTitle title="Order Medication | Mamta Medical" />
              <Order />
            </>
          }
        />

        <Route
          path="/user/Bills"
          element={
            <>
              <PageTitle title="Bills | Mamta Medical" />
              <Bill />
            </>
          }
        />
        <Route
          path="/user/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />

        <Route
          path="/user/sign-in"
          element={
            <>
              <PageTitle title="Signin | Mamta Medical" />
              <SignIn />
            </>
          }
        />

        <Route
          path="/user/sign-up"
          element={
            <>
              <PageTitle title="Signup | Mamta Medical" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
