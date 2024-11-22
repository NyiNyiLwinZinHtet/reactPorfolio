import ProjectImg1 from '../assets/project1.jpg'
import ProjectImg2 from '../assets/project2.png'
import ProjectImg3 from '../assets/project3.png'
import ProjectImg4 from '../assets/project4.png'

export default function Project(){
    return(
        <>
        <div className='bg-indigo-800 m-20 max-w-full'>
            <div className='grid justify-items-center m-10'>
                <h1 className='text-3xl text-white mt-10'>Projects</h1>
            </div>
            <div>
                <div className='grid grid-cols-2 gap-4 p-5'>
                    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                        <div className='md:flex'>
                            <div className='p-8'>
                                <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>Profile Management System</div>
                                <a href="#">SubHeading</a>
                                <p className='mt-2 text-slate-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nihil accusantium amet.</p>
                            </div>
                            <div className='md:shrink-0 p-5'>
                                <img src={ProjectImg1} alt="projectImg1" width={200} height={200} />
                            </div>
                        </div>
                    </div>
                    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                        <div className='md:flex'>
                            <div className='md:shrink-0 p-5'>
                                <img src={ProjectImg2} alt="projectImg2" width={200} height={200} />
                            </div>
                            <div className='p-8'>
                                <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>Ecommerce Management System</div>
                                <a href="#">SubHeading</a>
                                <p className='mt-2 text-slate-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nihil accusantium amet.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className='grid grid-cols-2 gap-4 p-5'>
                    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                        <div className='md:flex'>
                            <div className='md:shrink-0 p-5'>
                                <img src={ProjectImg3} alt="projectImg3" width={200} height={200} />
                            </div>
                            <div className='p-8'>
                                <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>Login Design System</div>
                                <a href="#">SubHeading</a>
                                <p className='mt-2 text-slate-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nihil accusantium amet.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                        <div className='md:flex'> 
                            <div className='p-8'>
                                <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>Employees Management System</div>
                                <a href="#">SubHeading</a>
                                <p className='mt-2 text-slate-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nihil accusantium amet.</p>
                            </div>
                            <div className='md:shrink-0 p-5'>
                                <img src={ProjectImg4} alt="projectImg4" width={200} height={200} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}