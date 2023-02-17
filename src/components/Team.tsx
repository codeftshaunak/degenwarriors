import Image from "next/image";
import hero1 from "../images/hero1.png";
import hero2 from "../images/hero2.png";
import hero3 from "../images/hero3.png";
import hero4 from "../images/hero4.png";
import { useState, useEffect, useRef, memo } from "react";

const Team = () => {
  const [isVisible, setIsVisible] = useState(Array(4).fill(false));
  const refs = Array(4).fill(null).map(() => useRef(null));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => {
            prev[index] = true;
            return [...prev];
          });
          observer.unobserve(entry.target);
        }
      });
    });
    refs.forEach((ref, index) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="team" id="team">
      <div className="container">
        <h1 className="team__title">TEAM</h1>
        <div className="team__membar">
          {[...Array(4)].map((_, index) => (
            <div key={index} ref={refs[index]}>
              {isVisible[index] && (
                <Image
                  src={index === 0 ? hero1 : index === 1 ? hero2 : index === 2 ? hero3 : hero4}
                  width={300}
                  height={400}
                  alt={`Team member ${index + 1}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Team);
