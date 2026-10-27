import { useEffect, useRef } from 'react';

function ImagemA({ src, alt }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aparecer');
        }
      },
      { threshold: 0.2 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img 
      ref={imgRef}
      src={src}
      alt={alt} 
      className="imagem-animada imgA"
    />
  );
}
export default ImagemA