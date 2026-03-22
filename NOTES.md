- smol-est app
  - 1. HTML 
  - 2. add babel
  - 3. vite config
  - 4. done
- embedding apps
  - vanilla (useful for traditional server rendering)
    - pnpm create vite (Vanilla)
    - have to build the app from the previous step (as a library)
      - show diff via 
        ```bash
        diff --color 1-smol-est/ 2-smol-est-as-library/ --minimal --ignore-all-space
        ```
  - as components
  - full apps
  - nested routing
