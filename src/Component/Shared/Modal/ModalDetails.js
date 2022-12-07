import React from 'react';

const ModalDetails = ({ data }) => {
    return (
        <div className="bg-[#EEF2FE] card card-compact w-96 rounded-none m-2 ">
            <figure><img className='w-2/5 md:w-3/5' src={data.img} alt="Shoes" /></figure>
            <div className="card-body flex justify-center items-center">
                <h2 className="text-lg text-green-600 font-bold">{data.title}</h2>
            </div>
        </div>
    );
};

export default ModalDetails;