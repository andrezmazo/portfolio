import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

// Utility function to join classnames
function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

const RotatingTextContainer = styled(motion.span)`
  display: flex;
  flex-wrap: wrap;
  white-space: pre-wrap;
  position: relative;
  align-items: center;
  font-weight: bold;
  overflow: hidden;
  border-radius: 6px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.secondary},
    ${({ theme }) => theme.accent}
  );
  color: ${({ theme }) => theme.cardBg};
  padding: 0 0.5rem;
  margin-left: 0.25rem;
  transition: all 0.3s ease;

  @media (min-width: 640px) {
    padding: 0 0.5rem;
  }

  @media (min-width: 768px) {
    padding: 0 0.75rem;
  }
`;

const ScreenReaderText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  transition: all 0.3s ease;
`;

const WordContainer = styled.span`
  display: inline-flex;
  overflow: hidden;
`;

const CharacterElement = styled(motion.span)`
  display: inline-block;
`;

const SpaceElement = styled.span`
  white-space: pre;
`;

export interface RotatingTextProps {
  texts: string[];
  transition?: Record<string, any>;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  exit?: Record<string, any>;
  animatePresenceMode?: "sync" | "wait" | "popLayout";
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  loop?: boolean;
  auto?: boolean;
  splitBy?: "characters" | "words" | "lines" | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
  [key: string]: any;
}

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
  (props, ref) => {
    const {
      texts,
      transition = { type: "spring", damping: 25, stiffness: 300 },
      initial = { y: "100%", opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: "-120%", opacity: 0 },
      animatePresenceMode = "wait",
      animatePresenceInitial = false,
      rotationInterval = 2000,
      staggerDuration = 0.025,
      staggerFrom = "first",
      loop = true,
      auto = true,
      splitBy = "characters",
      onNext,
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      ...rest
    } = props;

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const splitIntoCharacters = (text: string): string[] => {
      if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
        // @ts-ignore: Segmenter API may not be typed correctly
        const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
        // @ts-ignore: Segmenter API may not be typed correctly
        return Array.from(
          segmenter.segment(text),
          (segment) => segment.segment
        );
      }
      return Array.from(text);
    };

    const elements = useMemo(() => {
      const currentText = texts[currentTextIndex];
      if (splitBy === "characters") {
        const words = currentText.split(" ");
        return words.map((word, i) => ({
          characters: splitIntoCharacters(word),
          needsSpace: i !== words.length - 1,
        }));
      }
      if (splitBy === "words") {
        return currentText.split(" ").map((word, i, arr) => ({
          characters: [word],
          needsSpace: i !== arr.length - 1,
        }));
      }
      if (splitBy === "lines") {
        return currentText.split("\n").map((line, i, arr) => ({
          characters: [line],
          needsSpace: i !== arr.length - 1,
        }));
      }
      // For a custom separator
      return currentText.split(splitBy).map((part, i, arr) => ({
        characters: [part],
        needsSpace: i !== arr.length - 1,
      }));
    }, [texts, currentTextIndex, splitBy]);

    const getStaggerDelay = useCallback(
      (index: number, totalChars: number) => {
        const total = totalChars;
        if (staggerFrom === "first") return index * staggerDuration;
        if (staggerFrom === "last")
          return (total - 1 - index) * staggerDuration;
        if (staggerFrom === "center") {
          const center = Math.floor(total / 2);
          return Math.abs(center - index) * staggerDuration;
        }
        if (staggerFrom === "random") {
          const randomIndex = Math.floor(Math.random() * total);
          return Math.abs(randomIndex - index) * staggerDuration;
        }
        if (typeof staggerFrom === "number") {
          return Math.abs(staggerFrom - index) * staggerDuration;
        }
        return 0;
      },
      [staggerFrom, staggerDuration]
    );

    const handleIndexChange = useCallback(
      (newIndex: number) => {
        setCurrentTextIndex(newIndex);
        if (onNext) onNext(newIndex);
      },
      [onNext]
    );

    const next = useCallback(() => {
      const nextIndex =
        currentTextIndex === texts.length - 1
          ? loop
            ? 0
            : currentTextIndex
          : currentTextIndex + 1;
      if (nextIndex !== currentTextIndex) {
        handleIndexChange(nextIndex);
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const previous = useCallback(() => {
      const prevIndex =
        currentTextIndex === 0
          ? loop
            ? texts.length - 1
            : currentTextIndex
          : currentTextIndex - 1;
      if (prevIndex !== currentTextIndex) {
        handleIndexChange(prevIndex);
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const jumpTo = useCallback(
      (index: number) => {
        const validIndex = Math.max(0, Math.min(index, texts.length - 1));
        if (validIndex !== currentTextIndex) {
          handleIndexChange(validIndex);
        }
      },
      [texts.length, currentTextIndex, handleIndexChange]
    );

    const reset = useCallback(() => {
      if (currentTextIndex !== 0) {
        handleIndexChange(0);
      }
    }, [currentTextIndex, handleIndexChange]);

    useImperativeHandle(
      ref,
      () => ({
        next,
        previous,
        jumpTo,
        reset,
      }),
      [next, previous, jumpTo, reset]
    );

    useEffect(() => {
      if (!auto) return;
      const intervalId = setInterval(next, rotationInterval);
      return () => clearInterval(intervalId);
    }, [next, rotationInterval, auto]);

    return (
      <RotatingTextContainer
        className={cn("text-rotate", mainClassName)}
        {...rest}
        layout
        transition={transition}
      >
        <ScreenReaderText className="text-rotate-sr-only">
          {texts[currentTextIndex]}
        </ScreenReaderText>
        <AnimatePresence
          mode={animatePresenceMode as any}
          initial={animatePresenceInitial}
        >
          <motion.div
            key={currentTextIndex}
            className={cn(
              splitBy === "lines" ? "text-rotate-lines" : "text-rotate"
            )}
            layout
            aria-hidden="true"
          >
            {elements.map((wordObj, wordIndex, array) => {
              const previousCharsCount = array
                .slice(0, wordIndex)
                .reduce((sum, word) => sum + word.characters.length, 0);
              return (
                <WordContainer
                  key={wordIndex}
                  className={cn("text-rotate-word", splitLevelClassName)}
                >
                  {wordObj.characters.map((char, charIndex) => (
                    <CharacterElement
                      key={charIndex}
                      initial={initial}
                      animate={animate}
                      exit={exit}
                      transition={{
                        ...transition,
                        delay: getStaggerDelay(
                          previousCharsCount + charIndex,
                          array.reduce(
                            (sum, word) => sum + word.characters.length,
                            0
                          )
                        ),
                      }}
                      className={cn(
                        "text-rotate-element",
                        elementLevelClassName
                      )}
                    >
                      {char}
                    </CharacterElement>
                  ))}
                  {wordObj.needsSpace && (
                    <SpaceElement className="text-rotate-space"> </SpaceElement>
                  )}
                </WordContainer>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </RotatingTextContainer>
    );
  }
);

RotatingText.displayName = "RotatingText";
export default RotatingText;
