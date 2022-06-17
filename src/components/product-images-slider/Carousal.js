import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import ProductImagesSlider from '../../components/product-images-slider';
import { productImages } from '../../assets'

const Carousal = () => {
    return (
        <div>
            <div className='d-flex justify-content-center justify-content-lg-end align-items-center justify-content-md-center justify-content-sm-center' >
                <div className='carousal-height' >
                    <ProductImagesSlider images={productImages} />
                </div>
            </div>
        </div>
    )
}

export default Carousal