import React, { useState, useEffect } from 'react';

function Qty({ max = Infinity, onChangeQty, value = 1, product }) {
    const [count, setCount] = useState(value);

    useEffect(() => {
        value !== count && setCount(value);
    }, [value])

    // useEffect(() => {
    //     onChangeQty && onChangeQty(count);
    // }, [count])


    console.log("count>>>>>", count);


    function increase() {
        setCount((prevCount) => {
            const newCount = prevCount + 1;
            onChangeQty && onChangeQty(product, newCount);
            return newCount;
        });
    }

    function decrease() {
        if (count > 1)
            setCount((prevCount) => {
                const newCount = prevCount - 1;
                onChangeQty && onChangeQty(product, newCount);
                return newCount;
            });
    }

    function changeCount(e) {
        let value = e.target.value ? parseInt(e.target.value) : 0;
        setCount(Math.min(value, max));
    }


    console.log("PRODUCT", product)

    return (
        <div className="product-single-qty">
            <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
                <span className="input-group-btn input-group-prepend">
                    <button className="btn btn-outline btn-down-icon bootstrap-touchspin-down" onClick={decrease} type="button"></button>
                </span>
                <input className="horizontal-quantity form-control font1" type="number" min="1" max={max} value={count} onChange={changeCount} />
                <span className="input-group-btn input-group-append">
                    <button className="btn btn-outline btn-up-icon bootstrap-touchspin-up" onClick={increase} type="button"></button>
                </span>
            </div>
        </div>
    )
}

export default Qty;