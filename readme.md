# k6 Hello World

This repository contains a simple "Hello World" example using [k6](https://k6.io/), a modern load testing tool.

## Getting Started

### Prerequisites

- [k6](https://k6.io/docs/getting-started/installation/) installed

### Running the Test

```sh
k6 run script.js
```

Replace `script.js` with your test script file.

### Project Structure

```
.
├── readme.md
├── script.js
```

- `script.js`: Main k6 test script.

### Example Output

When you run the test, you should see output similar to:

```
          /\      |‾‾|  /‾‾/  /‾/
     /\  /  \     |  |_/  /  / /
    /  \/    \    |      |  /  ‾‾\
   /          \   |  |‾\  \ | (_) |
  / __________ \  |__|  \__\ \___/ .io

  execution: local
     script: script.js
     output: -

  scenarios: (100.00%) 1 scenario, 1 max VUs, 1m0s max duration (incl. graceful stop):
           * default: 1 looping VUs for 10s (gracefulStop: 30s)

...
```

## Resources

- [k6 Documentation](https://k6.io/docs/)
- [k6 GitHub](https://github.com/grafana/k6)

---

Feel free to modify this README as your project evolves.