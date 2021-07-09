import React from 'react';
import Pic from './PicsArt.jpg';
import {Link} from 'react-router-dom';

export default function About() {
    return (
<div className="flex pt-20 flex-col items-center justify-center py-1 bg-white sm:flex-row">
    <div className="p-4 sm:w-1/2 lg:w-1/4 h-1/2">
        <div className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
            <img className="h-auto rounded-t-lg" alt=""
                src={Pic} />
            <div className="px-6 pt-3 text-xl font-bold">
                <span>Siddhesh Panhale</span>
            </div>
            <div className="px-6 pt-0 pt-2">
                <small>Frontend Developer <br/> +91 9833044810</small>
                {/* <div className="overflow-hidden h-16 ..."></div> */}
            </div>
            <div className="px-6 py-2 pb-4">
                <Link href="#"
                    className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-teal-400 rounded-full">#REACT</Link>
            </div>
        </div>
    </div>
</div>
    )
}


// https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80