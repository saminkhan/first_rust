use super::execute;
use yew::prelude::*;

pub struct YewRoot {
    link: ComponentLink<Self>,
    loading: bool,
}

pub enum Msg {
    Crunch,
}

impl Component for YewRoot {
    type Message = Msg;
    type Properties = ();

    fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {
        Self {
            link: link,
            loading: false, // TODO(samin.khan): fix CSS loader
        }
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::Crunch => execute(30),
        }
        true
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
            <div class="container-fluid p-0 h-100">
                <button
                    type="button"
                    aria-label="button"
                    id="btn-crunch"
                    class="btn btn-light fa fa-cogs"
                    title="Rusty Com"
                    onclick=self.link.callback(|_| Msg::Crunch)
                />
                <div
                    class={format!("loader loader-default {}",
                        if self.loading { "is-active" } else { "" })}
                    data-text="Loading..."
                    data-blink=""
                />
            </div>
        }
    }
}
