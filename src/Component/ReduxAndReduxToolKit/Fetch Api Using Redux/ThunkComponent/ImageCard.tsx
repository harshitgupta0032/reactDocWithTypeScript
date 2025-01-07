
interface ProductsType {
    title: string;
    image: string;
    price: number;
    discount: number
}

const ImageCard: React.FC<ProductsType> = ({ title, price, discount, image }) => {

    const calculateDiscountedPrice = (price: number, discount: number) => {
        const discountAmount = (price * discount) / 100;
        return Math.floor(price - discountAmount);
    }
    return <>
        <div className=" w-64  h-fit p-5 flex flex-col justify-center items-center gap-5">
            <img className=" cursor-pointer object-contain hover:scale-110 ease-in-out duration-300 transition-all  w-60 shadow-lg rounded-xl h-60" src={image} alt="product" />
            <div className="flex flex-col gap-3 justify-start w-full">
                <h1 className="font-semibold">{title.slice(0, 20)}...</h1>
                <div className="flex flex-wrap gap-4 justify-start items-center">
                    {
                        discount ?
                            <p className="line-through text-gray-500">{price}</p>
                            :
                            <p className="text-gray-500 line-through">0.00</p>
                    }
                    <h1 className="text-xl font-bold"><span className="text-green-500">$</span>{discount ? calculateDiscountedPrice(price, discount) : price}</h1>
                    {
                        discount ?
                            <div><span className="h-fit w-fit p-1 text-white text-sm rounded-full bg-red-400">{discount}%</span><span className="font-semibold">off</span></div>
                            : ""
                    }
                </div>
            </div>
        </div>
    </>
}
export default ImageCard