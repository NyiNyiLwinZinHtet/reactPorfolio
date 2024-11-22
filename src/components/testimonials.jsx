import Testimonial1 from '../assets/testimonial1.jpg'
import Testimonial2 from '../assets/testimonial2.jpg'
import Testimonial3 from '../assets/testimonial3.jpg'
import Testimonial4 from '../assets/testimonial4.jpg'

const testimonials = [
    { 
        img: Testimonial1, 
        name: "Ma'am Henery Loric", 
        position: "Assistant Manager" 
    },
    { 
        img: Testimonial2, 
        name: "Mr. John Doe", 
        position: "Team Leader" 
    },
    { 
        img: Testimonial3, 
        name: "Ms. Jane Smith", 
        position: "Senior Developer" 
    },
    { 
        img: Testimonial4, 
        name: "Mr. Alex Brown", 
        position: "Project Manager" 
    }
];

export default function Testimonials(){
    return(
 <>
        <div className='grid justify-items-center'>
            <h1 className='text-3xl text-white mt-10'>Testimonials</h1>
        </div>
        <div className='flex bg-indigo-800 m-20 ssm:flex-col lg:flex-row'>
            {/* Testimonial Card Component */}
            {testimonials.map((testimonial, index) => (
                <div 
                    key={index} 
                    className="relative rounded-xl overflow-hidden p-3 hover:animate-pulse flex-shrink-0 lg:flex-1"
                >
                    <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
                        <img 
                            src={testimonial.img} 
                            alt={`Photo of ${testimonial.name}`} 
                            className="absolute -left-6 w-28 h-28 rounded-full shadow-lg object-full" 
                        />
                        <div className="min-w-0 py-5 pl-28 pr-5">
                            <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                                {testimonial.name}
                            </div>
                            <div className="text-slate-500 font-medium text-sm sm:text-base truncate dark:text-slate-400">
                                {testimonial.position}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}