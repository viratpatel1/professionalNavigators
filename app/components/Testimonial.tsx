'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { FaUserTie, FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa6';

export default function TestimonialSection() {
    const testimonials = [
        { name: "Aakarsh Shukla – CA Final Student", feedback: "I joined Professional Navigator's mentorship for my CA Final and it was truly a game-changer. Prachi Ma'am ensured accountability with regular follow-ups, which kept me focused every single day. Writing full-length test papers helped me improve speed and attempt papers completely. With her structured schedule and planned revisions, I was able to cover everything systematically and study 10+ hours daily without wasting time. This was undoubtedly my best attempt, and I'll always be grateful for her constant guidance and support." },
        { name: "Ayush Jain – CA Final Student", feedback: "Professional Navigator's mentorship was really a great step for me in CA Final prep. Prachi Ma'am's follow-ups kept me accountable, and the test papers improved both my speed and confidence. Her planned schedule made studying so much easier. This was my best attempt till now, and I'm truly grateful for her guidance." },
        { name: "Nikhil Mehra – CA Final Student", feedback: "The mock tests were game-changing. I used to avoid them, but here they were regular and part of the routine. That helped me build exam stamina and understand my weak areas." },
        { name: "Riya Sharma – CA Intermediate Student", feedback: "I joined for the 10-day trial just to see how it works and I ended up staying the entire journey. The daily targets and follow-ups kept me super consistent. I finally stopped procrastinating and started studying with a proper plan." },
        { name: "Ravi Gupta – CA Foundation Student", feedback: "What helped me most was the structure. I didn't have to think 'what should I do today?' It was already planned for me. Daily goals, consistent follow-ups, and quick doubt-solving made all the difference." },
        { name: "Meenal Deshpande – CS Executive Student", feedback: "The team didn't just guide me—they kept checking in on my progress. Even during exams, they were there to motivate me. It felt like I had someone walking beside me, not just giving instructions from afar." },
        { name: "Shruti Shah – CS Professional Student", feedback: "What I loved was the personal attention. They remembered what I was working on, asked about my progress, and celebrated small wins. That kind of motivation kept me going, especially during tough phases." }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedCards, setExpandedCards] = useState<boolean[]>(
        Array(testimonials.length).fill(false)
    );
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    // Touch swipe functionality for mobile
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    const minSwipeDistance = 50;

    // Auto-play functionality
    const startAutoPlay = useCallback(() => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }

        autoPlayRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000); // Change every 4 seconds
    }, [testimonials.length]);

    const stopAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
            autoPlayRef.current = null;
        }
    };

    const toggleAutoPlay = () => {
        if (isAutoPlaying) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
        setIsAutoPlaying(!isAutoPlaying);
    };

    // Initialize auto-play
    useEffect(() => {
        if (isAutoPlaying) {
            startAutoPlay();
        }

        return () => {
            stopAutoPlay();
        };
    }, [startAutoPlay, isAutoPlaying]);

    // Touch handlers for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        stopAutoPlay();
        touchEndX.current = null;
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            next();
        } else if (isRightSwipe) {
            prev();
        }

        // Restart auto-play after swipe
        if (isAutoPlaying) {
            startAutoPlay();
        }
    };

    // Navigation functions
    const next = useCallback(() => {
        stopAutoPlay();
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        if (isAutoPlaying) {
            startAutoPlay();
        }
    }, [testimonials.length, isAutoPlaying, startAutoPlay]);

    const prev = useCallback(() => {
        stopAutoPlay();
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        if (isAutoPlaying) {
            startAutoPlay();
        }
    }, [testimonials.length, isAutoPlaying, startAutoPlay]);

    const goToSlide = (index: number) => {
        stopAutoPlay();
        setCurrentIndex(index);
        if (isAutoPlaying) {
            startAutoPlay();
        }
    };

    // Desktop auto-scroll functionality
    const desktopScrollRef = useRef<HTMLDivElement>(null);
    const [desktopAutoScroll, setDesktopAutoScroll] = useState(true);

    const startDesktopAutoScroll = useCallback(() => {
        if (!desktopAutoScroll || !desktopScrollRef.current) return;

        const scrollContainer = desktopScrollRef.current;
        const scroll = () => {
            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
                // Smooth scroll back to start
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Smooth scroll to next card
                const cardWidth = scrollContainer.querySelector('[data-desktop-card]')?.clientWidth || 400;
                const gap = 24; // gap-6 = 24px
                scrollContainer.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
            }
        };

        const interval = setInterval(scroll, 4000);
        return () => clearInterval(interval);
    }, [desktopAutoScroll]);

    useEffect(() => {
        if (desktopAutoScroll) {
            const cleanup = startDesktopAutoScroll();
            return cleanup;
        }
    }, [desktopAutoScroll, startDesktopAutoScroll]);

    const toggleDesktopAutoScroll = () => {
        setDesktopAutoScroll(!desktopAutoScroll);
    };

    // Card expand functionality
    const toggleCardExpand = (index: number) => {
        const newExpanded = [...expandedCards];
        newExpanded[index] = !newExpanded[index];
        setExpandedCards(newExpanded);
    };

    const getShortText = (text: string, maxChars = 200) => {
        if (text.length <= maxChars) return text;
        return text.substring(0, maxChars) + "...";
    };

    return (
        <section className="py-15 px-4 lg:px-35 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-black mb-6">Testimonials</h2>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
                {/* Left Text */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                        What our students <br />
                        have to say
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Hear directly from our students about their journey with SPC! With expert guidance, innovative teaching methods, and a student-first approach, we have
                        helped shape countless CA aspirants into future professionals.
                    </p>
                </div>

                <div className="w-full lg:w-1/2">
                    {/* Mobile Carousel with Controls & Swipe */}
                    <div className="lg:hidden">
                        <div
                            className="bg-gray-50 rounded-xl shadow-md p-6 border border-gray-200 cursor-grab active:cursor-grabbing select-none"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div className="flex flex-col gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center self-center">
                                    <FaUserTie className="text-3xl text-gray-600" />
                                </div>

                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {testimonials[currentIndex].feedback}
                                </p>

                                <p className="text-gray-900 font-semibold text-center">
                                    {testimonials[currentIndex].name}
                                </p>
                            </div>
                        </div>

                        {/* Carousel Controls */}
                        <div className="flex items-center justify-between mt-4 px-2">
                            <button
                                onClick={prev}
                                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors active:scale-95"
                                aria-label="Previous testimonial"
                            >
                                <FaChevronLeft className="text-gray-700" />
                            </button>

                            <div className="flex items-center gap-4">
                                {/* Auto-play toggle */}
                                <button
                                    onClick={toggleAutoPlay}
                                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                                >
                                    {isAutoPlaying ? (
                                        <>
                                            <FaPause className="text-xs" />
                                            <span>Pause</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaPlay className="text-xs" />
                                            <span>Play</span>
                                        </>
                                    )}
                                </button>

                                {/* Dots indicator */}
                                <div className="flex gap-2">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-gray-700' : 'bg-gray-300'
                                                }`}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={next}
                                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors active:scale-95"
                                aria-label="Next testimonial"
                            >
                                <FaChevronRight className="text-gray-700" />
                            </button>
                        </div>

                        {/* Swipe Hint */}
                        {/* <div className="text-center mt-4">
                                <p className="text-gray-500 text-sm">
                                    👆 Swipe left or right to navigate
                                </p>
                            </div> */}
                    </div>

                    {/* Desktop Horizontal Scroll with Auto-Scroll */}
                    <div className="hidden lg:block">
                        {/* Auto-scroll controls */}
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={toggleDesktopAutoScroll}
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200"
                            >
                                {/* {desktopAutoScroll ? (
                                    <>
                                        <FaPause className="text-xs" />
                                        <span>Pause Auto-Scroll</span>
                                    </>
                                ) : (
                                    <>
                                        <FaPlay className="text-xs" />
                                        <span>Play Auto-Scroll</span>
                                    </>
                                )} */}
                            </button>
                        </div>

                        <div
                            ref={desktopScrollRef}
                            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
                            style={{
                                WebkitOverflowScrolling: "touch",
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                            }}
                        >
                            {testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    data-desktop-card
                                    className="bg-gray-50 rounded-xl shadow-md p-6 flex-shrink-0 w-[400px] hover:shadow-lg transition-shadow duration-300 flex flex-col"
                                >
                                    <div className="flex flex-col gap-4 h-full">
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center self-center bg-white shadow-sm">
                                            <FaUserTie className="text-2xl text-gray-600" />
                                        </div>

                                        {/* Feedback Text with Read More */}
                                        <div className="flex-grow">
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                {expandedCards[index] ? item.feedback : getShortText(item.feedback)}
                                            </p>
                                            {item.feedback.length > 200 && (
                                                <button
                                                    onClick={() => toggleCardExpand(index)}
                                                    className="text-blue-600 text-sm font-medium mt-2 hover:text-blue-800 transition-colors"
                                                >
                                                    {expandedCards[index] ? "Read Less" : "Read More"}
                                                </button>
                                            )}
                                        </div>

                                        {/* Name */}
                                        <div className="mt-auto pt-3 border-t border-gray-200">
                                            <p className="text-gray-900 font-semibold text-sm">
                                                {item.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop scroll hint */}
                        {/* <div className="text-center mt-2">
                            <p className="text-gray-500 text-sm">
                                ← Scroll horizontally to view more testimonials →
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}