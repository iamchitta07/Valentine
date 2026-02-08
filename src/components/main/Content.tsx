import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cards } from '../../constants';
import Card from './Card';
gsap.registerPlugin(ScrollTrigger);

const AnimatedCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=800%`, // Length of the scroll
          scrub: 1,
          pin: true, 
          anticipatePin: 1,
        },
      });

      // Text Animation
      tl.from(headerRef.current, {
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        scale: 3,
        opacity: 1, // Start fully opaque
        duration: 2, // Takes up some scroll distance
        ease: "power2.inOut"
      });

      cardsRef.current.forEach((card, index) => {
        const isLeft = index % 2 === 0;
        const xPos = isLeft ? -90 : 90;
        let yPos:number;
        if(index&1) 
          yPos= -250 + ((index-1) * 65); // Stack them vertically
        else
          yPos = -250 + (index * 65);

        tl.fromTo(card, 
          { 
            y: 1000, 
            scale: 0.5, 
            opacity: 0,
            x: isLeft ? -200 : 200 // Come from sides slightly
          },
          { 
          y: 0, 
            x: 0, 
            scale: 1.5, 
            opacity: 1, 
            duration: 1,
            ease: "power2.out"
          }
        )
        .to(card, {
          x: xPos,
          y: yPos,
          rotateY: 180,
          scale: 1,
          duration: 1,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-pink-200">
      <div 
        ref={sectionRef} 
        className="min-h-screen w-screen flex items-center justify-center z-2"
      >
        <h1 ref={headerRef} className="absolute top-8 text-black text-4xl uppercase font-bold font-bokul w-full text-center z-3">
          কিছু মুহূর্ত 
        </h1>
        
        {cards.map((ele, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="absolute w-40 h-55 preserve-3d will-change-transform"
          >
            <Card {...ele} />
            <div className="absolute inset-0 backface-hidden overflow-hidden rotate-y-180 h-full w-full rounded-xl border-[0.5px]">
              <img src={ele.backCard} alt='Back Card Image' className='object-cover h-full w-full' />
            </div>  
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCards;