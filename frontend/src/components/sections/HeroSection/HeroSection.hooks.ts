
import { useState, useEffect, useRef, useCallback } from 'react';

export const useTypewriter = (initialTexts: string[], speed = 150) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  
  // Важно: используем useRef для сохранения текстов между рендерами
  const textsRef = useRef<string[]>([]);
  const initializedRef = useRef(false);

  // Инициализация один раз
  useEffect(() => {
    if (!initializedRef.current) {
      const shuffled = [...initialTexts].sort(() => Math.random() - 0.5);
      textsRef.current = shuffled;
      initializedRef.current = true;
    }
  }, [initialTexts]); // Добавляем initialTexts в зависимости

  useEffect(() => {
    const interval = setInterval(() => {
      const currentText = textsRef.current[currentIndex];

      if (!currentText) return;

      if (!isRemoving) {
        if (charIndex < currentText.length) {
          setDisplayText(prev => prev + currentText[charIndex]);
          setCharIndex(prev => prev + 1);
        } else {
          if (charIndex === currentText.length + 15) {
            setIsRemoving(true);
          } else {
            setCharIndex(prev => prev + 1);
          }
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
        } else {
          setIsRemoving(false);
          setCharIndex(0);
          setCurrentIndex(prev => {
            if (prev === textsRef.current.length - 1) {
              // Перемешиваем массив для следующего цикла
              const newArray = [...textsRef.current].sort(() => Math.random() - 0.5);
              textsRef.current = newArray;
              return 0;
            }
            return prev + 1;
          });
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentIndex, charIndex, isRemoving, displayText, speed]);

  return displayText;
};