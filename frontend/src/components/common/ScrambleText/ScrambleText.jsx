import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const chars = '!<>-_\\\\/[]{}—=+*^?#________';

const ScrambleText = ({ text, duration = 1000, className = "" }) => {
  const [scrambled, setScrambled] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (!isInView) {
      setScrambled(text.replace(/[a-zA-Z0-9]/g, '_'));
      return;
    }

    let start = Date.now();
    let frameId;

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      
      let nextStr = '';
      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          nextStr += ' ';
          continue;
        }
        
        // As progress goes from 0 to 1, more characters become resolved.
        const charProgress = i / text.length;
        
        if (progress >= charProgress + 0.1 || progress === 1) {
          nextStr += text[i];
        } else {
          nextStr += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      
      setScrambled(nextStr);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [text, duration, isInView]);

  return (
    <span ref={ref} className={className} style={{ display: 'inline-block', fontVariantNumeric: 'tabular-nums' }}>
      {scrambled}
    </span>
  );
};

export default ScrambleText;
