import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  minHeight?: number;
  rootMargin?: string;
}

export default function LazySection({
  children,
  minHeight = 320,
  rootMargin = '900px 0px',
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) {
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    const node = ref.current;
    if (node) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div ref={ref} style={!shouldRender ? { minHeight } : undefined}>
      {shouldRender ? children : null}
    </div>
  );
}
