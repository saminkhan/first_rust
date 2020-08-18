mod view;

use wasm_bindgen::prelude::*;
use web_sys::Window;

#[wasm_bindgen]
extern "C" {
    fn js_fib(n: u32) -> u32;
}

type Benchmark = ((u32, f64), (u32, f64));

fn benchmark(window: &Window, n: u8) -> Benchmark {
    let performance = window
        .performance()
        .expect("performance should be available");

    let t1 = performance.now();
    let js_ans = (js_fib(n.into()), (performance.now() - t1) / 1000.0);

    let t2 = performance.now();
    let rs_ans = (rs_fib(n.into()), (performance.now() - t2) / 1000.0);
    (js_ans, rs_ans)
}

pub fn execute(initial: u8) {
    let window = web_sys::window().expect("should have a window in this context");

    let n: u8 = match window.prompt_with_message_and_default(
        "JavaScript vs Rust+Wasm benchmark using fibonacci(n)\n\n\
            enter n (may need more than a minute for n >= 45):",
        initial.to_string().as_str(),
    ) {
        Ok(response) => match response {
            Some(i_str) => match i_str.parse::<u8>() {
                Ok(i) => i,
                Err(_e) => return, // user gives invalid u8
            },
            None => return, // user gives empty String
        },
        Err(_e) => return, // user clicks Cancel
    };

    show_result(&window, n, benchmark(&window, n));
}

fn rs_fib(n: u32) -> u32 {
    if n < 2 {
        n
    } else {
        rs_fib(n - 1) + rs_fib(n - 2)
    }
}

fn show_result(window: &Window, n: u8, result: Benchmark) {
    window
        .alert_with_message(
            format!(
                "JavaScript: fibonacci({n}) == {js_v} ({js_t} seconds)\n\
                    Rust+Wasm: fibonacci({n}) == {rs_v} ({rs_t} seconds)",
                n = n,
                js_v = (result.0).0,
                js_t = (result.0).1,
                rs_v = (result.1).0,
                rs_t = (result.1).1
            )
            .as_str(),
        )
        .unwrap();
}

#[wasm_bindgen(start)]
pub fn run_app() {
    yew::start_app::<view::YewRoot>();
}
