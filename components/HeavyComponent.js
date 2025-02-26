import React, { useState, useEffect } from "react";

const scheduleTask = (task) => {
  if ("scheduler" in window) {
    window.scheduler.postTask(task, { priority: "background" });
  } else {
    requestIdleCallback(task);
  }
};

const HeavyComponent = ({ defer }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const hydrate = () => {
      const start = performance.now();
      while (performance.now() - start < 50) {} 
      console.log("Hydrated Optimized HeavyComponent");
    };

    if (defer) {
      scheduleTask(hydrate);
    } else {
      hydrate();
    }
  }, [defer]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Click Me! Count: {count}
    </button>
  );
};

export default HeavyComponent;