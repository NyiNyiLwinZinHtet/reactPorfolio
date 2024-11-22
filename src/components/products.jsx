import React, {useState} from "react";
import shoe1 from "../assets/shoes.png"
import shoe2 from "../assets/shoes1.png"
import shoe3 from "../assets/shoes2.png"
import shoe4 from "../assets/shoes3.png"


const Products = ()=> {

    const [images,setImages] = useState({
        img1: shoe1,
        img2: shoe2,
        img3: shoe3,
        img4: shoe4,
    })

    const [activeImage, setActiveImage] = useState(images.img1)
    const [amount, setAmount] = useState(1)

    return(
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center bg-indigo-800 text-white p-8 rounded-lg">
           <div className="flex flex-col gap-6 lg:w-2/4">
                <img src={activeImage} alt="" className="w-full h-auto object-contain rounded-xl transition-transform duration-100 hover:scale-110"/>

                <div className="flex flex-row justify-between h-24">
                    {
                        Object.values(images).map((img,index)=>(
                            <img key={index} src={img} alt={index+1} 
                            className={`w-26 h-24 rounded-md cursor-pointer transition-transform duration-300 hover:scale-110 ${ activeImage === img ? "border-4 border-white-500": ""}`} 
                            onClick={ () => setActiveImage(img)}/>
                            ))
                    }
                </div>
            </div>
            <div className="flex flex-col gap-4 lg:w-2/4">
                <div>
                    <span className="text-indigo-400 font-semibold mb-2">Special Sneaker</span>
                    <h1 className="text-3xl font-bold">Pure White and Blue Princes</h1>
                </div>
                <p className="text-white-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellendus ipsam modi odit beatae unde distinctio architecto eveniet quam ea expedita doloremque mollitia placeat itaque libero, voluptate temporibus similique quia?
                </p>
                <h6 className="text-2xl font-semibold">$199.99</h6>
                <div className="flex flex-row items-center gap-12">
                <div className="flex flex-row items-center">
                    <button className="bg-white py-2 px-5 rounded-lg text-indigo-400 text-3xl transition-all duration-300 hover:bg-indigo-300 hover:text-indigo-700" 
                    onClick={()=> setAmount((prev)=>Math.max(prev-1,1))} >-</button>
                    <span className="py-4 px-5 rounded-lg">{amount}</span>
                    <button className="bg-white py-2 px-5 rounded-lg text-indigo-400 text-3xl transition-all duration-300 hover:bg-indigo-300 hover:text-indigo-700"
                    onClick={()=> setAmount((prev)=>Math.max(prev+1))} >+</button>
                </div>

                    <button className="bg-indigo-500 text-white font-semibold py-3 px-16 rounded-xl h-full transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Products;