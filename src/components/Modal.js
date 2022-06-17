import React from 'react'
import { motion } from "framer-motion"

const Modal = ({ handleClose }) => {
    return (
        <div className='section-modal-backdrop'>
            <motion.div animate={{ scale: 1, transition: { ease: "easeOut", duration: 0.2 } }} initial={{ scale: 0 }} >

                <div className="section-modal ">
                    <h1>Hello</h1>
                    <i onClick={handleClose} class="bi bi-x-lg section-modal-close"></i>

                </div>
            </motion.div>
        </div>
    )
}

export default Modal