//Normal-Hydration

// import React, { useState, useEffect } from "react";

// const HeavyComponent = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const start = performance.now();
//     while (performance.now() - start < 50) {} // Simulate heavy work
//     console.log("Hydrated HeavyComponent");
//   }, []);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Click Me! Count: {count}
//     </button>
//   );
// };

// export default HeavyComponent;

//Selective Hydration

// import React, { useState, useEffect } from "react";

// const HeavyComponent = ({ defer }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const hydrate = () => {
//       const start = performance.now();
//       while (performance.now() - start < 50) {} // Simulate heavy work
//       console.log("Hydrated HeavyComponent");
//     };

//     if (defer) {
//       setTimeout(hydrate, 2000); // Delay hydration
//     } else {
//       hydrate();
//     }
//   }, [defer]);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Click Me! Count: {count}
//     </button>
//   );
// };

// export default HeavyComponent;

//Progressive Hydration + Scheduler

// import React, { useState, useEffect } from "react";

// const scheduleTask = (task) => {
//   if ("scheduler" in window) {
//     window.scheduler.postTask(task, { priority: "background" });
//   } else {
//     requestIdleCallback(task);
//   }
// };

// const HeavyComponent = ({ defer }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const hydrate = () => {
//       const start = performance.now();
//       while (performance.now() - start < 50) {} // Simulate heavy work
//       console.log("Hydrated Optimized HeavyComponent");
//     };

//     if (defer) {
//       scheduleTask(hydrate);
//     } else {
//       hydrate();
//     }
//   }, [defer]);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Click Me! Count: {count}
//     </button>
//   );
// };

// export default HeavyComponent;


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
      while (performance.now() - start < 50) {} // Simulate heavy work
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





// import React, { useState, useEffect } from "react";

// const scheduleTask = (task) => {
//   if ("scheduler" in window) {
//     // @ts-ignore
//     window.scheduler.postTask(task, { priority: "background" });
//   } else {
//     requestIdleCallback(task);
//   }
// };

// const HeavyComponent = ({ defer }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const hydrate = () => {
//       const start = performance.now();
//       while (performance.now() - start < 50) {} // Simulate heavy work

//       console.log("Hydrated Optimized HeavyComponent");
//     };
//     hydrate();

//     if (defer) {
//       // scheduleTask(hydrate);
//     } else {
//       // hydrate();
//     }
//   }, [defer]);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Click Me! Count: {count}
//     </button>
//   );
// };

// export default HeavyComponent;



