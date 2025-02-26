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