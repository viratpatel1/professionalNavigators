'use client'; // For Next.js app directory, ensure it's a client component

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function TestimonialSection() {
    const testimonials = [
        {
            name: "Shagun Sharma",
            feedback:
                "Best classes for CA students. The way the teachers explain with concept clarity is amazing. One of the best things is the real-life examples the teachers give and the notes are really amazing too.",
        },
        {
            name: "Manjinder Singh",
            feedback:
                "I really enjoyed the online course Professional Navigator classes. All the facilities are so good. All the teachers motivate the students to crack the exam and it should really help us. All in all teaching style and education provided by teachers are more effective and excellent.",
        },
        {
            name: "Gautam Miglani",
            feedback:
                "I’m a CA Intermediate student. I came across the Best Faculty for CA course which Professional Navigator Classes. I am extremely satisfied with the quality of classes. Moreover, prices are affordable too.",
        },
    ];

    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const scroll = () => {
            if (!scrollRef.current) return;

            const container = scrollRef.current;
            const cardWidth = (container.firstElementChild as HTMLElement).offsetWidth + 16; // card + gap
            const newIndex = (currentIndex + 1) % testimonials.length;
            container.scrollTo({
                left: cardWidth * newIndex,
                behavior: 'smooth',
            });
            setCurrentIndex(newIndex);
        };

        const interval = setInterval(scroll, 2000);

        return () => clearInterval(interval);
    }, [currentIndex, testimonials.length]);

    return (
        <section id="success" className="scroll-pt-0 pb-15 px-4 lg:px-35 bg-white relative overflow-hidden scroll-smooth">
            {/* Centered Section Label */}
            <div className="text-center mb-25">
                {/* <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Testimonials</p> */}
                <h2 className="text-4xl font-extrabold text-black mb-12 text-center">Testimonials</h2>
            </div>

            {/* Flex container for left & right */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
                {/* Left Side Text */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                        What our students <br /> have to say
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Hear directly from our students about their journey with SPC! With expert guidance, innovative teaching methods, and a student-first approach, we have helped shape countless CA aspirants into future professionals.
                    </p>
                </div>

                {/* Right Side Carousel */}
                <div
                    className="lg:w-1/2 flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
                    ref={scrollRef}
                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl shadow-md p-6 min-w-[300px] max-w-[350px] snap-center"
                        >
                            <div className="flex flex-col gap-4">
                                {/* Profile Icon */}
                                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center self-center">
                                    <Image
                                        src="/images/down.jpeg"
                                        alt="Student profile picture"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>

                                {/* Feedback */}
                                <p className="text-gray-800 text-sm">{item.feedback}</p>

                                {/* Name */}
                                <p className="text-gray-900 font-semibold">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
