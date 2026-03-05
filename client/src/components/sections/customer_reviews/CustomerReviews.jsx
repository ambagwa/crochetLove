"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import reviewImage from "../../../assets/images/review.jpg";

export default function ScrollHorizontal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Move from first item centered to last item centered
  const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <div id="example">
      <section className="intro-section">
        <h1 className="text-gray-600 font-bold text-6xl text-center mt-16 -mb-20">
          Customer Reviews
        </h1>
      </section>

      <div ref={containerRef} className="scroll-container">
        <div className="sticky-wrapper">
          <motion.div className="gallery" style={{ x }}>
            {items.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                style={{
                  "--item-color": item.color,
                }}
              >
                <Card className="relative w-full max-w-sm pt-0">
                  <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                  <img
                    src={reviewImage}
                    alt="Review cover"
                    className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                  />
                  <CardHeader>
                    <CardAction>
                      <Badge variant="secondary">
                        {/** Add stars for review */}
                        Featured
                      </Badge>
                    </CardAction>
                    <CardDescription>{item.review}</CardDescription>
                    <CardTitle className="italic">{item.name}</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <StyleSheet />
    </div>
  );
}

function StyleSheet() {
  return (
    <style>{`
            body {
                overflow-x: hidden;
            }

            #example {
                height: auto;
                overflow: visible;
            }

            .scroll-container {
                height: 200vh;
                position: relative;
            }

            .sticky-wrapper {
                position: sticky;
                top: 0;
                height: 100vh;
                width: 400px; 
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                overflow: visible;
            }

            .gallery {
                display: flex;
                gap: 30px;
                will-change: transform;
            }

            .gallery-item {
                flex-shrink: 0;
                width: 400px;
                height: 500px;
                border-radius: 12px;
                position: relative;
                overflow: hidden;
                background-image: var(--item-image);
                background-size: cover;
                background-position: center;
            }

            .gallery-item::before {
                content: "";
                position: absolute;
                inset: 0;
                background: linear-gradient(
                    to bottom,
                    transparent 60%,
                    var(--item-color)
                );
                mix-blend-mode: multiply;
            }

            .item-content {
                position: absolute;
                bottom: 30px;
                left: 30px;
                z-index: 1;
            }

            .item-number {
                font-size: 14px;
                color: var(--item-color);
                font-family: "Azeret Mono", monospace;
                display: block;
                margin-bottom: 8px;
            }

            .gallery-item h2 {
                font-size: 28px;
                font-weight: 600;
                color: #f5f5f5;
                margin: 0;
            }

            @media (max-width: 600px) {
                .sticky-wrapper {
                    width: 280px;
                }

                .gallery {
                    gap: 15px;
                }

                .gallery-item {
                    width: 280px;
                    height: 350px;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                .gallery {
                    transform: none !important;
                }
                .scroll-container {
                    height: auto;
                }
                .sticky-wrapper {
                    position: relative;
                    height: auto;
                    width: 100%;
                    overflow-x: auto;
                    padding: 50px 0;
                }
            }
        `}</style>
  );
}

const items = [
  {
    id: 1,
    color: "#ff0088",
    label: "Night One",
    review:
      "Absolutely love my handmade blanket from CrochetLove! The detail and quality are beyond anything I expected. It’s now the centerpiece of our living room. The whole buying experience was seamless and personal — I can tell this is crafted with real care.",
    name: "Amine K.",
  },
  {
    id: 2,
    color: "#dd00ee",
    label: "Night Two",
    review:
      "This was my first time ordering a custom crochet cardigan. CrochetLove made the process effortless, and the final product fits perfectly! The yarn is soft but durable, and I get compliments everywhere I wear it. I’m already planning my next order!",
    name: "James M.",
  },
  {
    id: 3,
    color: "#9911ff",
    label: "Night Three",
    review:
      "I gifted my sister a crochet home decor piece from CrochetLove and she absolutely adored it. The craftsmanship is outstanding — you can truly feel the passion in every stitch. Fast delivery and lovely customer service too!",
    name: "Mirian M.",
  },
  {
    id: 4,
    color: "#0d63f8",
    label: "Night Four",
    review:
      "CrochetLove exceeded all expectations! The designs are unique and stylish, and I appreciate the Kenyan-based craftsmanship — it feels like wearing art. I’ll definitely be recommending them to friends and family.",
    name: "Samuel T.",
  },
  {
    id: 5,
    color: "#0cdcf7",
    label: "Night Five",

    review:
      "Incredible quality and beautiful products! I ordered a set of crochet accessories and was impressed with how well they were packaged and delivered so quickly. Every item feels like it was made just for me. Highly recommend!",
    name: "Sarah L.",
  },
];

const ITEM_WIDTH = 400;
const GAP = 30;
