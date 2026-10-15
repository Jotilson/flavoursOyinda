import { useEffect, useRef } from 'react';

function IframeAnimado({ src, title }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aparecer');
        }
      },
      { threshold: 0.2 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={title}
      className="iframe-animado"
      width="100%"
      height="450"
      style={{ border: 0, borderRadius: "12px" }}
      allowFullScreen=""
      loading="lazy"
    />
  );
}

export default IframeAnimado