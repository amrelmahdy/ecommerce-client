import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ShopBanner ( { adClass } ) {
    return (
        <div className={ `category-banner banner banner1 rounded m-b-4 ${adClass}` } style={ { backgroundColor: '#d9e1e1' } }>
            <figure>
                <LazyLoadImage
                    alt="banner"
                    src="images/home/banners/banner-1.png"
                    width="100%"
                    height={ 200 }
                    threshold={ 500 }
                    effect="black and white"
                />
            </figure>

            <div className="banner-layer banner-layer-middle banner-layer-right">
                <h4 className="font-weight-normal text-body">Exclusive Product New Arrival</h4>
                <h2 className="m-l-n-1 p-r-5 m-r-2">Organic Coffee</h2>

                <div className="position-relative">
                    <h3 className="text-uppercase">Special Blend</h3>
                    <h5 className="rotate-text font-weight-normal text-primary">Fresh!</h5>
                </div>
            </div>
        </div>
    )
}

export default React.memo( ShopBanner );