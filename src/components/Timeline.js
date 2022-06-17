import React from 'react'
import { useState } from 'react'

const Timeline = () => {


    const [item, setItem] = useState(true)
    const [item1, setItem1] = useState(false)
    const [item2, setItem2] = useState(false)
    const [item3, setItem3] = useState(false)
    const [item4, setItem4] = useState(false)

    const handleChange = () => {
        setItem(true)
        setItem1(false)
        setItem2(false)
        setItem3(false)
        setItem4(false)
    }
    const handleChange1 = () => {
        setItem1(true)
        setItem2(false)
        setItem3(false)
        setItem4(false)
        setItem(false)
    }
    const handleChange2 = () => {
        setItem2(true)
        setItem3(false)
        setItem4(false)
        setItem(false)
        setItem1(false)
    }
    const handleChange3 = () => {
        setItem3(true)
        setItem4(false)
        setItem(false)
        setItem1(false)
        setItem2(false)

    }
    const handleChange4 = () => {
        setItem4(true)
        setItem(false)
        setItem1(false)
        setItem2(false)
        setItem3(false)
    }


    return (
        <div>
            <h4 className='font-weight-bold'>Size</h4>
            <ul class="timeline mt-4">
                <li onClick={handleChange} className={(item ? "timeline-item1-red p-red" : "timeline-item")}>
                    <h5 className='timeline-h5' >6"x6" | ₹599</h5>
                </li>

                <li onClick={handleChange1} className={(item1 ? "timeline-item1-red p-red" : "timeline-item")}>
                    <h5 className='timeline-h5' >12"x12" | ₹799</h5>
                </li>

                <li onClick={handleChange2} className={(item2 ? "timeline-item1-red p-red" : "timeline-item")}>
                    <h5 className='timeline-h5' >12"x18" | ₹999</h5>
                </li>

                <li onClick={handleChange3} className={(item3 ? "timeline-item1-red p-red" : "timeline-item")}>
                    <h5 className='timeline-h5' >18"x12" | ₹799</h5>
                </li>
                <li onClick={handleChange4} className={(item4 ? "timeline-item1-red p-red" : "timeline-item")}>
                    <h5 className='timeline-h5' >16"x20" | ₹1,399</h5>
                </li>
            </ul>

        </div >
    )
}

export default Timeline