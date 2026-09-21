
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "@/app/components/animations/Reveal";

const MotionImage = motion.create(Image);

export default function Gallery() {
  const shouldReduceMotion = useReducedMotion();

  const imageAnimation = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <section className="gallery section" id="fotos">
      <div className="container">
        <Reveal>
              <p className="section-kicker">Momentos nuestros</p>

              <div className="gallery-heading">
                <h2>
                  Un poco de
                  <br />
                  <em>nuestra historia.</em>
                </h2>

                <p>Algunas memorias que nos han traído hasta aquí.</p>
              </div>
            </Reveal>

        <div className="gallery-grid">
          <MotionImage
            className="gallery-tall"
            src="https://res.cloudinary.com/dk7uzygr4/image/upload/f_auto,q_auto,c_limit,w_1200/v1790010446/DSC_0015.jpg"
            alt="Mica y Alan"
            width={1200}
            height={1600}
            {...imageAnimation}
            transition={{
              ...imageAnimation.transition,
              delay: 0,
            }}
          />

          <MotionImage
            src="https://res.cloudinary.com/dk7uzygr4/image/upload/f_auto,q_auto,c_limit,w_1200/v1790010445/DSC_0005.jpg"
            alt="Mica y Alan"
            width={1200}
            height={900}
            {...imageAnimation}
            transition={{
              ...imageAnimation.transition,
              delay: 0.1,
            }}
          />

          <MotionImage
            className="gallery-tall gallery-offset"
            src="https://res.cloudinary.com/dk7uzygr4/image/upload/f_auto,q_auto,c_limit,w_1200/v1790010445/DSC_0190.jpg"
            alt="Mica y Alan"
            width={1200}
            height={1600}
            {...imageAnimation}
            transition={{
              ...imageAnimation.transition,
              delay: 0.15,
            }}
          />

          <MotionImage
            src="https://res.cloudinary.com/dk7uzygr4/image/upload/f_auto,q_auto,c_limit,w_1200/v1790010444/DSC_0176.jpg"
            alt="Mica y Alan"
            width={1200}
            height={900}
            {...imageAnimation}
            transition={{
              ...imageAnimation.transition,
              delay: 0.2,
            }}
          />

          <MotionImage
            className="gallery-tall"
            src="https://res.cloudinary.com/dk7uzygr4/image/upload/f_auto,q_auto,c_limit,w_1200/v1790010443/DSC_0039.jpg"
            alt="Mica y Alan"
            width={1200}
            height={1600}
            {...imageAnimation}
            transition={{
              ...imageAnimation.transition,
              delay: 0.25,
            }}
          />

          <MotionImage
            src="https://res.cloudinary.com/dk7uzygr4/image/upload/f_auto,q_auto,c_limit,w_1200/v1790013408/DSC_0191.jpg"
            alt="Mica y Alan"
            width={1200}
            height={900}
            {...imageAnimation}
            transition={{
              ...imageAnimation.transition,
              delay: 0.3,
            }}
          />
        </div>
      </div>
    </section>
  );
}




