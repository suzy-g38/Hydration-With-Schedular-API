import React from "react";
import HeavyComponent from "./HeavyComponent";

const App = () => {
  return (
    <div>
      <h1>Optimized Hydration</h1>
      {[...Array(500)].map((_, i) => (
        <HeavyComponent key={i} defer />
      ))}
    </div>
  );
};

export default App;


// import React, { Suspense } from "react";
// import HeavyComponent from "./HeavyComponent";

// const App = () => {
//   return (
//     <div>
//       <h1>Optimized Hydration</h1>
//       <Suspense fallback={<p>Loading...</p>}>
//         {[...Array(500)].map((_, i) => (
//           <HeavyComponent key={i} defer />
//         ))}
//       </Suspense>
//     </div>
//   );
// };

// export default App;

// import React, { Suspense, lazy } from "react";

// // Lazy-load HeavyComponent
// const LazyHeavyComponent = lazy(() => import("./HeavyComponent"));

// const App = ({ criticalOnly, delayedOnly, nonCriticalOnly }) => {
//   return (
//     <div>
//       <h1>Optimized Hydration</h1>

//       {/* Render only critical components first */}
//       {criticalOnly && <p>Critical Content Rendered</p>}

//       {/* Render delayed components only if required */}
//       {delayedOnly && (
//         <Suspense fallback={<p>Loading...</p>}>
//           {[...Array(100)].map((_, i) => (
//             <LazyHeavyComponent key={i} defer />
//           ))}
//         </Suspense>
//       )}

//       {/* Render non-critical components separately */}
//       {nonCriticalOnly && <p>Non-Critical Content Loaded</p>}
//     </div>
//   );
// };

// export default App;



// import React, { Suspense, lazy } from "react";

// // Lazy-load HeavyComponent
// const LazyHeavyComponent = lazy(() => import("./HeavyComponent"));

// const App = () => {
//   return (
//     <div>
//       <h1>Optimized Hydration</h1>
//       <Suspense fallback={<p>Loading...</p>}>
//         {[...Array(500)].map((_, i) => (
//           <LazyHeavyComponent key={i} defer />
//         ))}
//       </Suspense>
//     </div>
//   );
// };

// export default App;

