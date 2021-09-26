import React from 'react';

const Footer = () => {
    return (
        <div class="fixed bottom-0 left-0 w-full text-center border-t border-grey p-6 bg-white">
            <div className="flex justify-center w-11/12 mx-auto mt-1 items-center text-sm">
            © {new Date().getFullYear()} |
                <a href="https://github.com/francosbenitez/" className="ml-1">
                Franco Sebastián Benítez
                </a>
            </div>
        </div>
    );
};

export default Footer;