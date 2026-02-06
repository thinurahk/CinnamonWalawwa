import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ReviewsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / featuredTestimonials.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const scrollLeft = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : featuredTestimonials.length - 1;
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = activeIndex < featuredTestimonials.length - 1 ? activeIndex + 1 : 0;
    scrollToIndex(newIndex);
  };
  const featuredTestimonials = [
    {
      id: 1,
      name: "Yuli YogaPilates",
      location: "Spain",
      rating: 5,
      title: "So Much Fun & Great Value",
      comment: "I had an amazing experience at this Sri Lankan cooking class. From the moment we arrived, everything was welcoming, authentic, and full of heart. The ingredients were fresh and full of flavor, and each step of the cooking process was explained with so much care and passion. It wasn’t just about cooking-it was about understanding Sri Lankan culture, spices, and traditions. The food we prepared was absolutely delicious, and sharing the meal together at the end made it even more special. I highly recommend this cooking class to anyone visiting Sri Lanka who wants a genuine, hands-on, and unforgettable culinary experience."
    },
    {
      id: 2,
      name: "Zuzana Zuborova",
      location: "Slovakia",
      rating: 5,
      title: "Absolutely Amazing Experience",
      comment: "This was one of the best experiences of our sri lankan travels. Cooking in the kitchen of this pure & beautiful family felt like being home. So glad we met this beautiful soul giving out his leaflets on the beach. We had a tuk-tuk pickup arranged by the family & drove to the rice fields area. They gave us a little tour around their garden, cooked for us, explained everything and shared their recipes. We had a blast, thank you very much for everything, we’ll surely come back. "
    },
    {
      id: 3,
      name: "Kjetil Vetlejord",
      location: "Sweden",
      rating: 5,
      title: "Unforgettable Culinary Journey",
      comment: "We visited Cinnamon Walawwa yesterday with our family (two adults and four kids), and it was such a memorable experience for all of us.We started by exploring the beautiful garden, learning about the spices and ingredients used in Sri Lankan cooking. After that, we got hands-on in the kitchen, preparing the meal together and being guided step by step throughout the process. The kids were included and engaged the whole time, which made it even more special. Finally, we sat down and enjoyed the food we had cooked ourselves—full of rich, aromatic spices and incredible flavors. Everything tasted amazing, and the whole experience felt both educational and very relaxed. A wonderful, authentic experience that works perfectly for families. Highly recommended if you want to learn, cook, and enjoy great food in a beautiful setting."
    },
    {
      id: 4,
      name: "Marcel Zazijal",
      location: "Switzerland",
      rating: 5,
      title: "Perfect for Food Lovers",
      comment: "The host showed us his family garden and cinnamon plantation. He presented us how cinnamon is made. You can also try different herbs straight from the garden! The cooking class was an authentic experience with the whole family being involved. An unforgettable experience that we would recommend to anyone who is staying in vicinity."
    },
    {
      id: 5,
      name: "Lou Bolle",
      location: "Australia",
      rating: 5,
      title: "Best Activity on My Trip",
      comment: "A really enjoyable cooking class with plenty of insight into both the dishes and the ingredients. Many of the ingredients are homegrown, and before cooking you get to tour the beautiful garden where they’re grown. The food we prepared tasted excellent, and we can wholeheartedly recommend this experience. The hosts were warm, welcoming, and lovely people."
    }
  ];


  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? 'fill-gray-800 text-gray-800'
                : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const ReviewCard = ({ review }: { review: typeof featuredTestimonials[0] }) => {
    return (
      <div className="glass-card group">
        <StarRating rating={review.rating} />
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
          "{review.comment}"
        </p>
        
        <div className="flex items-center gap-3 mt-auto">
          <div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{review.name}</h4>
            <p className="text-gray-500 text-xs sm:text-sm">{review.location}</p>
          </div>
        </div>
      </div>
    );
  };

  const FeaturedTestimonial = ({ testimonial }: { testimonial: typeof featuredTestimonials[0] }) => {
    return (
      <div className="testimonial-card flex-shrink-0 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col gap-2 sm:gap-3">
          {/* Content */}
          <div className="flex flex-col">
            <div className="flex gap-0.5 sm:gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 leading-tight">
              {testimonial.title}
            </h3>
            
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3 italic line-clamp-6">
              "{testimonial.comment}"
            </p>
            
            <div className="border-t border-gray-100 pt-2 mt-1">
              <h4 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
              <p className="text-red-600 text-xs sm:text-sm font-semibold tracking-wide">{testimonial.location}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .glass-card {
          position: relative;
          background: rgba(0, 0, 0, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 24px;
          padding: 1.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.06),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.5);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(0,0,0,0.1), rgba(0,0,0,0.02));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .glass-card:hover::before {
          opacity: 1;
        }

        .glass-card:hover {
          transform: translateY(-8px);
          background: rgba(0, 0, 0, 0.05);
          box-shadow: 
            0 20px 60px 0 rgba(0, 0, 0, 0.1),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.6);
        }

        .white-bg {
          background: #ffffff;
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.08;
          animation: float 8s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .glass-card {
            padding: 1.25rem;
          }
        }

        .scroll-container {
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
        }

        .scroll-container::-webkit-scrollbar {
          display: none;
        }

        .testimonial-card {
          width: 100%;
          max-width: 500px;
          min-height: 200px;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        @media (min-width: 640px) {
          .testimonial-card {
            max-width: 550px;
            min-height: 240px;
          }
        }

        @media (min-width: 768px) {
          .testimonial-card {
            max-width: 600px;
          }
        }

        .testimonial-card:hover {
          transform: translateY(-3px);
        }

        .dot-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d1d5db;
          border: 2px solid #d1d5db;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        @media (min-width: 640px) {
          .dot-indicator {
            width: 10px;
            height: 10px;
          }
        }

        .dot-indicator.active {
          background: #c0392b;
          border-color: #c0392b;
          transform: scale(1.2);
        }

        .scroll-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        @media (min-width: 640px) {
          .scroll-button {
            width: 44px;
            height: 44px;
          }
        }

        .scroll-button:hover {
          background: #c0392b;
          border-color: #c0392b;
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 4px 16px rgba(192, 57, 43, 0.3);
        }

        .scroll-button:hover svg {
          color: white;
        }

        .scroll-button.left {
          left: -12px;
        }

        .scroll-button.right {
          right: -12px;
        }

        @media (min-width: 640px) {
          .scroll-button.left {
            left: -18px;
          }
          
          .scroll-button.right {
            right: -18px;
          }
        }

        @media (max-width: 640px) {
          .scroll-button {
            width: 40px;
            height: 40px;
          }
          
          .scroll-button.left {
            left: -20px;
          }

          .scroll-button.right {
            right: -20px;
          }
        }
      `}</style>

      <div className="white-bg py-6 sm:py-8 md:py-10 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Featured Testimonials Header */}
          <div className="text-center mb-5 sm:mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wider mb-2 sm:mb-3 text-gray-900">
                What our Guests Say
              </h2>
              <div className="w-16 sm:w-20 md:w-24 mx-auto h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent mb-3 sm:mb-4"></div>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">Discover what our guests have experienced at Cinnamon Walawwa</p>
          </div>

          {/* Horizontal Scroll Testimonials */}
          <div className="mb-6 sm:mb-8 relative">
            {/* Left Scroll Button */}
            <button 
              onClick={scrollLeft}
              className="scroll-button left"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <div className="scroll-container flex gap-6 pb-4" id="testimonial-scroll" ref={scrollContainerRef}>
              {featuredTestimonials.map((testimonial) => (
                <FeaturedTestimonial key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>

            {/* Right Scroll Button */}
            <button 
              onClick={scrollRight}
              className="scroll-button right"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
            
            {/* Dot indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {featuredTestimonials.map((_, index) => (
                <div
                  key={index}
                  className={`dot-indicator ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => scrollToIndex(index)}
                ></div>
              ))}       
            </div>

          </div>


        </div>
      </div>
    </>
  );
}
