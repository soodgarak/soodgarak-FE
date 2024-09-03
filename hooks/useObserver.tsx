import { MutableRefObject, useEffect } from 'react';

type ObserverProps = {
  target: MutableRefObject<null>;
  onIntersect: (entries: IntersectionObserverEntry[]) => void;
  root?: null;
  rootMargin?: string;
  threshold?: number;
};

export default function useObserver({
  target,
  onIntersect,
  root = null,
  rootMargin = '0px',
  threshold = 1.0
}: ObserverProps) {
  useEffect(() => {
    let observer: IntersectionObserver;

    if (target && target.current) {
      observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold
      });
      observer.observe(target.current);
    }

    return () => observer && observer.disconnect();
  }, [target, rootMargin, threshold, onIntersect, root]);
}
