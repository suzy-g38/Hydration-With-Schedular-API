import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./components/App";

// Ensure browser supports Scheduler API
if (window.scheduler?.postTask) {
  console.log("Using Browser Scheduler API for controlled hydration");

  let userInteracted = false;
  document.addEventListener("keydown", () => (userInteracted = true));
  document.addEventListener("click", () => (userInteracted = true));
  document.addEventListener("mousemove", () => (userInteracted = true));

  async function startHydration() {
    if (userInteracted) {
      console.log("User interaction detected, delaying hydration...");
      await scheduler.postTask(() => new Promise((resolve) => setTimeout(resolve, 3000)));
      console.log("Resuming hydration after delay...");
    }

    console.log("Hydration started");

    // Hydrate in chunks
    await scheduler.yield(); // Let other tasks run before starting hydration
    hydrateRoot(document.getElementById("root"), <App />);

    console.log("Hydration finished");
  }

  // Schedule hydration task
  scheduler.postTask(startHydration);
} else {
  console.log("Scheduler API not supported, hydrating normally");
  hydrateRoot(document.getElementById("root"), <App />);
}




// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";

// ReactDOM.hydrate(<App />, document.getElementById("root"));


// Progressive+Scheduler

// import React from "react";
// import { hydrateRoot } from "react-dom/client";
// import App from "./components/App";

// // Hydrate critical sections first
// const priorityElements = document.querySelectorAll(".critical-hydration");
// priorityElements.forEach((element) => {
//   hydrateRoot(element);
// });

// // Use browser scheduler for low-priority hydration
// const nonCriticalElements = document.querySelectorAll(".delayed-hydration");

// async function hydrateNonCritical() {
//   for (const element of nonCriticalElements) {
//     if ("scheduler" in window) {
//       await window.scheduler.postTask(() => hydrateRoot(element), {
//         priority: "background",
//       });
//     } else {
//       hydrateRoot(element);
//     }
//   }
// }

// hydrateNonCritical();


// import React from "react";
// import { hydrateRoot } from "react-dom/client";
// import App from "./components/App";

// // Critical Hydration (immediately hydrates high-priority components)
// const priorityElements = document.querySelectorAll(".critical-hydration");
// priorityElements.forEach((el) => {
//   hydrateRoot(el, <App />);
// });

// // Delayed Hydration (simple progressive hydration)
// const delayedElements = document.querySelectorAll(".delayed-hydration");
// setTimeout(() => {
//   delayedElements.forEach((el) => {
//     hydrateRoot(el, <App />);
//   });
// }, 3000); // Delay hydration by 3s

// // Scheduler-based Progressive Hydration (best performance)
// async function hydrateNonCritical() {
//   const nonCriticalElements = document.querySelectorAll(".non-critical-hydration");

//   for (const element of nonCriticalElements) {
//     if ("scheduler" in window) {
//       await window.scheduler.postTask(() => hydrateRoot(element, <App />), {
//         priority: "background",
//       });
//     } else {
//       hydrateRoot(element, <App />); // Fallback to normal hydration
//     }
//   }
// }

// hydrateNonCritical(); // Start non-critical hydration



//FINAL Schedulat

// import React from "react";
// import { hydrateRoot } from "react-dom/client";
// import App from "./components/App";

// // Critical Hydration (immediately hydrates only high-priority components)
// const priorityElements = document.querySelector(".critical-hydration");
// if (priorityElements) {
//   hydrateRoot(priorityElements, <App />);
// }

// // Scheduler-based Progressive Hydration (best performance)
// const delayedElements = document.querySelector(".delayed-hydration");
// if (delayedElements) {
//   setTimeout(() => {
//     hydrateRoot(delayedElements, <App />);
//   }, 3000); // Delay hydration by 3s
// }


// async function hydrateNonCritical() {
//   const nonCriticalElements = document.querySelectorAll(".non-critical-hydration");

//   for (const element of nonCriticalElements) {
//     if ("scheduler" in window) {
//       await window.scheduler.postTask(() => hydrateRoot(element, <App />), {
//         priority: "background",
//       });
//     } else {
//       hydrateRoot(element, <App />); // Fallback to normal hydration
//     }
//   }
// }

// hydrateNonCritical();


//f-2

// import React from "react";
// import { hydrateRoot } from "react-dom/client";
// import App from "./components/App";

// // Hydrate critical content immediately
// const priorityElements = document.querySelector(".critical-hydration");
// if (priorityElements) {
//   hydrateRoot(priorityElements, <App criticalOnly />);
// }

// // Delay hydration for less important parts
// const delayedElements = document.querySelector(".delayed-hydration");
// if (delayedElements) {
//   setTimeout(() => {
//     hydrateRoot(delayedElements, <App delayedOnly />);
//   }, 3000);
// }

// // Hydrate non-critical parts asynchronously
// async function hydrateNonCritical() {
//   const nonCriticalElements = document.querySelectorAll(".non-critical-hydration");

//   for (const element of nonCriticalElements) {
//     if ("scheduler" in window) {
//       await window.scheduler.postTask(() => hydrateRoot(element, <App nonCriticalOnly />), {
//         priority: "background",
//       });
//     } else {
//       hydrateRoot(element, <App nonCriticalOnly />); // Fallback
//     }
//   }
// }
// hydrateNonCritical();




