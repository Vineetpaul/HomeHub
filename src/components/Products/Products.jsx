import { useEffect, useState } from "react";
import products from '../../Config/Products'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = () => {

    const [currentProduct, setCurrentProduct] = useState(0);
    const [visibleProducts, setVisibleProducts] = useState(1);

    // creating Products section

    

    useEffect(() => {
        const updateVisibleProducts = () => {
            const nextVisibleProducts = window.innerWidth >= 1024
                ? 3
                : window.innerWidth >= 640
                    ? 2
                    : 1;

            setVisibleProducts(nextVisibleProducts);
            setCurrentProduct((currentIndex) =>
                Math.min(currentIndex, products.length - nextVisibleProducts)
            );
        };

        updateVisibleProducts();
        window.addEventListener("resize", updateVisibleProducts);

        return () => window.removeEventListener("resize", updateVisibleProducts);
    }, []);

    useEffect(() => {
        const maxProductIndex = products.length - visibleProducts;
        const productInterval = setInterval(() => {
            setCurrentProduct((currentIndex) =>
                currentIndex >= maxProductIndex ? 0 : currentIndex + 1
            );
        }, 4000);

        return () => clearInterval(productInterval);
    }, [visibleProducts]);

    useEffect(()=>{
        AOS.init({duration:1000, once:true, easing:'ease-in-out'})
    },[])



    return (
        <div className="flex flex-col gap-2 p-4 lg:p-16 bg-gray-200 min-h-screen">
            {/*creating Heading section  */}
            <div data-aos="fade-up" className="mt-10 lg:mt-0">
                <p className="text-red-400 ">// EXPLORE CITIES</p>
                <h1 className="mt-5 text-4xl font-bold text-gray-800 leading-tight">Take a stroll around surroundings.</h1>

            </div>



            {/* creating Products section */}
            <div className=" w-full mt-10 overflow-hidden">
                <div
                    className="flex gap-4 transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentProduct * (100 / visibleProducts)}%)` }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="w-full shrink-0 overflow-hidden rounded-lg bg-white shadow-md sm:w-1/2 lg:w-1/3">
                            <img alt={product.name} src={product.image}
                                className="h-70 w-full object-cover" />

                            <div className="p-5">
                                <h1 className="text-gray-800 font-semibold text-xl">{product.name}</h1>
                                <p className="mt-2 text-gray-800">{product.desc}</p>
                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default Products
