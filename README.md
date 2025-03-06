# Hydration with Browser Scheduling API

## Overview
This repository demonstrates how React Hydration can be optimized using the **Browser Scheduling API** (`scheduler.postTask` & `scheduler.yield`). By coordinating hydration with the browser’s event loop, we can enhance interactivity, reduce blocking, and improve performance.

## Why This Matters
React’s hydration process can be **blocking**, even with Concurrent Rendering. The **Browser Scheduling API** helps break up long tasks, giving priority to user interactions and improving responsiveness.

## Key Concepts Covered
- **Traditional Hydration vs. Optimized Hydration**
- **How `scheduler.postTask` & `scheduler.yield` enhance hydration performance**
- **Performance benchmarks with flame charts & real-time debugging**
- **Future implications for React’s scheduler**

## Getting Started

### 1. Clone the Repository
```sh
git clone https://github.com/suzy-g38/Hydration-With-Scheduler-API.git
cd Hydration-With-Scheduler-API
```

### 2. Install Dependencies
```sh
yarn install  # or npm install
```

### 3. Run the Project
```sh
yarn dev  # or npm run dev
```

The app should now be running at `http://localhost:3000/`

## Demo & Benchmarks
- This repo includes flame charts to visualize **hydration performance before and after applying the Browser Scheduling API**.
- Use **React DevTools & Performance Profiler** to compare improvements.

## References
This project was inspired by insights from:
- [React Docs](https://react.dev/)
- [Browser Scheduling API](https://developer.mozilla.org/en-US/docs/Web/API/Scheduler)
- [JSer.dev Blogs](https://jser.dev/)

## Contributing
Feel free to open issues or submit PRs if you find ways to further improve hydration strategies with scheduling.

## License
MIT License


