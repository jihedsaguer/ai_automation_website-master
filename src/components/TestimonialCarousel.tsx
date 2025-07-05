import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export interface Testimonial {
    content: string;
    name: string;
    title: string;
    avatar: string;
}

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
    const [isPaused, setIsPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const extendedTestimonials = [
        ...testimonials,
        ...testimonials,
        ...testimonials,
    ];

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % testimonials.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [isPaused, testimonials.length]);

    const handlePrev = () => {
        setActiveIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <div className="relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-background/80 shadow-md hover:bg-background"
                    onClick={handlePrev}
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-background/80 shadow-md hover:bg-background"
                    onClick={handleNext}
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>

            <div
                className="overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    className="flex"
                    animate={{ x: `-${(activeIndex * 100) / testimonials.length}%` }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    {extendedTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.333%] px-4"
                            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        >
                            <div className="rounded-lg border bg-card p-6 shadow-sm h-full">
                                <div className="flex items-center mb-4">
                                    <Star className="h-5 w-5 text-yellow-500" />
                                    <Star className="h-5 w-5 text-yellow-500" />
                                    <Star className="h-5 w-5 text-yellow-500" />
                                    <Star className="h-5 w-5 text-yellow-500" />
                                    <Star className="h-5 w-5 text-yellow-500" />
                                </div>
                                <p className="text-muted-foreground mb-6">
                                    {testimonial.content}
                                </p>
                                <div className="flex items-center mt-auto">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="h-12 w-12 rounded-full object-cover"
                                    />
                                    <div className="ml-4">
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index: number) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                            activeIndex === index ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel; 