// Import Custom Component
import ProductOne from '../../features/products/product-one';

export default function ProductsGrid(props) {

    const { products = [], gridClass = "col-6 col-sm-4 col-xl-3", loading, perPage, addClass = '' } = props;


    const addToWishList = () => {
        // document.querySelector(".wishlist-popup") && document.querySelector(".wishlist-popup").classList.add("active");
        // setTimeout(() => {
        //     document.querySelector(".wishlist-popup") && document.querySelector(".wishlist-popup").classList.remove("active");
        // }, 2000);
    }


    const addToCart = () => { 
        //toast( <CartPopup product={ { ...e.payload.product, index: e.index } } /> );
    }

    return (
        <>
            <div className={`row skeleton-body skel-shop-products ${addClass} ${!loading ? 'loaded' : ''}`}>
                {
                    loading ?
                        new Array(parseInt(perPage)).fill(1).map((item, index) =>
                            <div className={`skel-pro skel-pro-grid pr-3 pl-3 ${gridClass}`} key={"ProductGrid:" + index}></div>
                        )
                        :
                        products?.map((item, index) => (
                            <div className={gridClass} key={`product-${index}`}>
                                <ProductOne adClass="inner-quickview inner-icon" addToWishList={addToWishList} addToCart={addToCart} product={item} />
                            </div>
                        ))
                }
            </div>
            {
                !loading && products.length === 0 ?
                    <div className="info-box with-icon"><p>No products were found matching your selection.</p></div>
                    : ''
            }
        </>
    )
}