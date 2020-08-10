# FirstRust

Clicking the gears button in middle of page will prompt for n, in order to benchmark fibonacci(n) in JavaScript and Rust+Wasm.

WARNING: n >= 45 will take several minutes to calculate.

## Requirements (for Linux):

[cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html), [npm](https://www.npmjs.com/get-npm), and [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/) must be installed.

## Additional requirements for Windows:

[git bash](https://gitforwindows.org/) must be installed.

## Production mode:

```bash
npm run build
npm start
```

## Development mode:

```bash
npm run dev
```

## Notes:

1. access the app by navigating to http://127.0.0.1:3000 with a WASM-compatible browser (ie. not IE)
2. dev mode is slower and less-compact than release build, but enables live-reloading upon code changes and browser-side debugging
3. be sure to use a git bash terminal when working in Windows (cmd, PS, and wsl cause too much pain)
