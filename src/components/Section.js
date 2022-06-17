// import { Modal } from 'bootstrap'
import React from 'react'
import { useState } from 'react'
import Modal from './Modal'
// import { Modal } from 'react-bootstrap'
import Carousal from './product-images-slider/Carousal'
import Timeline from './Timeline'

const Section = () => {

    const [modal, showModal] = useState(false)

    const handleClose = () => {
        showModal(false)
    }
    const handleOpen = () => {
        showModal(true)
    }

    return (
        <div className='container' >
            <div className="text-center mt-5">
                <h1 className='title'>Canvas Lite</h1>
            </div>
            <div className="row mt-5">
                {/* leftcontainer */}
                <div className="col-lg-6 col-md-12 col-sm-12 mb-md-5 mb-sm-5 ">
                    <Carousal />
                </div>
                {/* leftcontainerend */}
                {/* rightContainer */}
                <div className="col-lg-6   ">
                    <p className='d-flex section-p font-weight-bold justify-content-lg-start justify-content-md-center justify-content-sm-center'>Show your passion some love by designing a beautiful custom <br /> cookbook of your own. Put together your family recipes or a story of <br />  your wonderous kitchen experiments.  You can choose from a variety <br /> of elegent  themes and sizes to suit your book just right and make it <br /> yours.    </p>
                    <br />
                    <div className='row justify-content-lg-start justify-content-md-center justify-content-sm-center'>
                        <div className="col-6 ">
                            <Timeline />
                        </div>
                        <div className=" col-3 d-flex align-items-end pb-4"> <img className='section-timeline-img' src="../square_canvas.png" alt="" /></div>
                    </div>
                    {/* rightContainerend */}
                    <br />
                    <br />
                    <div className="create-button text-center mb-5">
                        <h3 className='font-weight-bold section-h3'>GET 20% OFF</h3>
                        <h5 className='font-weight-light'>Use Code: FBGC</h5>
                        <button className='section-button mt-3' onClick={handleOpen}>CREATE</button>
                        {modal && <Modal handleClose={handleClose} />}

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Section