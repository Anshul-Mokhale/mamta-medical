import React, { ReactNode } from 'react';
import Navbar from '../laycomp/Navbar';
import Footer from '../laycomp/Footer';


const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default DefaultLayout;
