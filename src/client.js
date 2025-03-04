import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

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