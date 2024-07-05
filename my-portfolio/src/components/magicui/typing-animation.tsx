// components/magicui/typing-animation.tsx
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  texts: string[];
  duration?: number;
  delayBetweenTexts?: number;
  className?: string;
}

export default function TypingAnimation({
  texts,
  duration = 200,
  delayBetweenTexts = 2000,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < texts[currentTextIndex].length) {
        setDisplayedText(texts[currentTextIndex].substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
        setTimeout(() => {
          setI(0);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }, delayBetweenTexts);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i, texts, currentTextIndex, duration, delayBetweenTexts]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText}
    </h1>
  );
}
