import React from 'react';

const FaqDetails = ({ faq }) => {
    const { ans, question } = faq;
    return (
        <div>
            <div className='my-1'>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">{question}</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">{ans}</p>
                </details>
            </div>
        </div>
    );
};

export default FaqDetails;