'use client';

import { useEffect, useRef } from 'react';
import { FaUserTie } from 'react-icons/fa6';

export default function TestimonialSection() {
    /* ----------------------------- data (unchanged) ----------------------------- */
    const testimonials = [
        {
            name: "Riya Sharma – CA Intermediate Student",
            feedback: "I joined for the 10-day trial just to see how it works and I ended up staying the entire journey. The daily targets and follow-ups kept me super consistent. I finally stopped procrastinating and started studying with a proper plan."
        },
        {
            name: "Ayush Jain – CMA Final Student",
            feedback: "Before this, I used to make a timetable and never follow it. With Professional Navigators, I actually stuck to my schedule. The regular tests and progress tracking helped me stay focused every single day.",
        },
        {
            name: "Meenal Deshpande – CS Executive Student",
            feedback: "The team didn’t just guide me—they kept checking in on my progress. Even during exams, they were there to motivate me. It felt like I had someone walking beside me, not just giving instructions from afar."
        },
        {
            name: "Ravi Gupta – CA Foundation Student",
            feedback: "What helped me most was the structure. I didn't have to think 'what should I do today?' It was already planned for me. Daily goals, consistent follow-ups, and quick doubt-solving made all the difference."
        },
        {
            name: "Aditi Verma – CMA Inter Student",
            feedback: "During the 10-day trial, I saw how serious they were about helping students. It wasn't just a test—it was real support. That trial gave me clarity and confidence to commit fully."
        },
        {
            name: "Nikhil Mehra – CA Final Student",
            feedback: "The mock tests were game-changing. I used to avoid them, but here they were regular and part of the routine. That helped me build exam stamina and understand my weak areas."
        },
        {
            name: "Shruti Shah – CS Professional Student",
            feedback: "What I loved was the personal attention. They remembered what I was working on, asked about my progress, and celebrated small wins. That kind of motivation kept me going, especially during tough phases."
        }
    ];

    /* --------------------------- refs, state, helpers --------------------------- */
    const scrollRef = useRef<HTMLDivElement>(null);
    const indexRef = useRef(0);
    const autoplayRef = useRef<NodeJS.Timer | null>(null); // ✅ no type‑error

    // Move to the next card
    const scrollToIndex = (nextIndex: number) => {
        const container = scrollRef.current;
        if (!container) return;

        const cardWidth =
            (container.firstElementChild as HTMLElement).offsetWidth + 16; // card width + gap
        container.scrollTo({ left: cardWidth * nextIndex, behavior: 'smooth' });
        indexRef.current = nextIndex;
    };

    /* ------------------------------ autoplay setup ------------------------------ */
    useEffect(() => {
        const startAutoplay = () => {
            autoplayRef.current = setInterval(() => {
                const next = (indexRef.current + 1) % testimonials.length;
                scrollToIndex(next);
            }, 2500);
        };

        const stopAutoplay = () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
                autoplayRef.current = undefined;
            }
        };

        startAutoplay();

        /* ---------- pause when user drags / touches, resume afterwards ---------- */
        const container = scrollRef.current;
        if (!container) return;

        const handleDown = () => stopAutoplay();
        const handleUp = () => startAutoplay();

        container.addEventListener('pointerdown', handleDown, { passive: true });
        container.addEventListener('pointerup', handleUp, { passive: true });
        container.addEventListener('pointercancel', handleUp, { passive: true });
        container.addEventListener('touchstart', handleDown, { passive: true });
        container.addEventListener('touchend', handleUp, { passive: true });

        /* -------------------------- cleanup on unmount -------------------------- */
        return () => {
            stopAutoplay();
            container.removeEventListener('pointerdown', handleDown);
            container.removeEventListener('pointerup', handleUp);
            container.removeEventListener('pointercancel', handleUp);
            container.removeEventListener('touchstart', handleDown);
            container.removeEventListener('touchend', handleUp);
        };
    }, [testimonials.length]);

    /* --------------------------------- render ---------------------------------- */
    return (
        <section
            id="success"
            className="scroll-pt-0 pb-15 px-4 lg:px-35 bg-white relative overflow-hidden scroll-smooth"
        >
            {/* heading */}
            <div className="text-center mb-25">
                <h2 className="text-4xl font-extrabold text-black mb-12 text-center">
                    Testimonials
                </h2>
            </div>

            {/* text + carousel */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
                {/* left text */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                        What our students <br />
                        have to say
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Hear directly from our students about their journey with SPC! With
                        expert guidance, innovative teaching methods, and a student‑first
                        approach, we have helped shape countless CA aspirants into future
                        professionals.
                    </p>
                </div>

                {/* right carousel */}
                <div
                    ref={scrollRef}
                    className="lg:w-1/2 flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth"
                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl shadow-md p-6 min-w-[300px] max-w-[350px] snap-center"
                        >
                            <div className="flex flex-col gap-4">
                                {/* avatar */}
                                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center self-center">
                                    <FaUserTie className="text-3xl text-gray-600" />
                                </div>

                                {/* feedback */}
                                <p className="text-gray-800 text-sm">{item.feedback}</p>

                                {/* name */}
                                <p className="text-gray-900 font-semibold">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
