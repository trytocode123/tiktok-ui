import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Feedback() {

const handleToast = () => {
    toast('asdassds');
};

    return (
        
    <div>
        


        <button onClick={handleToast}>Feedback</button>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="red"
/>

    </div>
    );
}

export default Feedback;
