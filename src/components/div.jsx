import { useEffect, useRef } from 'react';

function DivAnimada({ children }) {
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aparecer');
        }
      },
      { threshold: 0.2 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={divRef} className="div-animada">
      {children}
    </div>
  );
}

export default DivAnimada