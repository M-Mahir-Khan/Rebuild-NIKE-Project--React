// src/components/CounterSection.jsx
import React, { useEffect, useRef, useState } from "react";

const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const counters = [
    { label: "Products", value: 100 },
    { label: "Customers", value: 50000 },
    { label: "Satisfaction", value: 98 },
    { label: "Support", value: 24 },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const interval = 30;
    const steps = duration / interval;

    const newCounts = [...counts];
    const increments = counters.map((c, i) => c.value / steps);

    let step = 0;
    const counterInterval = setInterval(() => {
      if (step >= steps) {
        clearInterval(counterInterval);
        setCounts(counters.map(c => c.value));
        return;
      }
      step++;
      setCounts(prev =>
        prev.map((value, i) => Math.ceil(value + increments[i]))
      );
    }, interval);
  }, [isVisible]);

  return (
    <section
      className="counter-section text-white text-center"
      ref={sectionRef}
    >
      <div className="container py-5">
        <div className="row">
          {counts.map((count, i) => (
            <div className="col-md-3 mb-4" key={i}>
              <h2>{count}+</h2>
              <p>{counters[i].label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
