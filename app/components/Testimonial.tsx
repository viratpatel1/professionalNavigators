'use client';
import { useEffect, useRef, useState } from 'react';
import { FaUserTie } from 'react-icons/fa6';

export default function TestimonialSection() {
    const testimonials = [
        { name: "Riya Sharma – CA Intermediate Student", feedback: "I joined for the 10-day trial just to see how it works and I ended up staying the entire journey. The daily targets and follow-ups kept me super consistent. I finally stopped procrastinating and started studying with a proper plan." },
        { name: "Ayush Jain – CMA Final Student", feedback: "Before this, I used to make a timetable and never follow it. With Professional Navigators, I actually stuck to my schedule. The regular tests and progress tracking helped me stay focused every single day." },
        { name: "Meenal Deshpande – CS Executive Student", feedback: "The team didn’t just guide me—they kept checking in on my progress. Even during exams, they were there to motivate me. It felt like I had someone walking beside me, not just giving instructions from afar." },
        { name: "Ravi Gupta – CA Foundation Student", feedback: "What helped me most was the structure. I didn't have to think 'what should I do today?' It was already planned for me. Daily goals, consistent follow-ups, and quick doubt-solving made all the difference." },
        { name: "Aditi Verma – CMA Inter Student", feedback: "During the 10-day trial, I saw how serious they were about helping students. It wasn't just a test—it was real support. That trial gave me clarity and confidence to commit fully." },
        { name: "Nikhil Mehra – CA Final Student", feedback: "The mock tests were game-changing. I used to avoid them, but here they were regular and part of the routine. That helped me build exam stamina and understand my weak areas." },
        { name: "Shruti Shah – CS Professional Student", feedback: "What I loved was the personal attention. They remembered what I was working on, asked about my progress, and celebrated small wins. That kind of motivation kept me going, especially during tough phases." }
    ];

    const scrollRef = useRef(null);
    const intervalRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleUserInteractionStart = () => setIsUserInteracting(true);
        const handleUserInteractionEnd = () => setIsUserInteracting(false);

        container.addEventListener('touchstart', handleUserInteractionStart);
        container.addEventListener('touchend', handleUserInteractionEnd);
        container.addEventListener('mousedown', handleUserInteractionStart);
        container.addEventListener('mouseup', handleUserInteractionEnd);

        return () => {
            container.removeEventListener('touchstart', handleUserInteractionStart);
            container.removeEventListener('touchend', handleUserInteractionEnd);
            container.removeEventListener('mousedown', handleUserInteractionStart);
            container.removeEventListener('mouseup', handleUserInteractionEnd);
        };
    }, []);

    useEffect(() => {
        if (isUserInteracting) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            return;
        }

        const container = scrollRef.current;
        if (!container) return;

        const scrollStep = () => {
            const card = container.firstElementChild;
            if (!card) return;

            const cardWidth = card.offsetWidth + 16;
            let nextIndex = (currentIndex + 1) % testimonials.length;
            container.scrollTo({
                left: nextIndex * cardWidth,
                behavior: 'smooth',
            });
            setCurrentIndex(nextIndex);
        };

        intervalRef.current = setInterval(scrollStep, 2500);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [currentIndex, isUserInteracting, testimonials.length]);

    return (
        <section
            id="success"
            className="scroll-pt-0 pb-15 px-4 lg:px-35 bg-white relative overflow-hidden scroll-smooth"
        >
            <div className="text-center mb-25 max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-black mb-12 text-center">Testimonials</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 max-w-7xl mx-auto px-4">
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                        What our students <br /> have to say
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Hear directly from our students about their journey with SPC! With expert guidance, innovative teaching methods, and a student-first approach, we have helped shape countless CA aspirants into future professionals.
                    </p>
                </div>
                <div
                    className="lg:w-1/2 flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
                    ref={scrollRef}
                    style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl shadow-md p-6 min-w-[280px] max-w-[300px] snap-center flex-shrink-0"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center self-center">
                                    <FaUserTie className="text-3xl text-gray-600" />
                                </div>
                                <p className="text-gray-800 text-sm">{item.feedback}</p>
                                <p className="text-gray-900 font-semibold">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
