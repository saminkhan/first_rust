import './style.css';
import('./pkg');

window.js_fib = (n) => {
    return n < 2 ? n : window.js_fib(n - 1) + window.js_fib(n - 2);
};
