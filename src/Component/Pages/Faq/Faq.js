import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FaqDetails from './FaqDetails';

const Faq = () => {
    const faqs = useLoaderData();
    console.log(faqs);
    return (
        <div>
            <div className='container mx-auto'>
                <div className="container flex flex-col justify-center px-4 py-4 mx-auto md:p-8">
                    <h2 className="text-3xl font-semibold sm:text-4xl text-center text-green-600">Frequently Asked Questions</h2>
                </div>
                <div className='gap-5 m-5 md:m-10'>
                    {
                        faqs.map((faq, index) => <FaqDetails
                            key={index}
                            faq={faq}
                        ></FaqDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Faq;