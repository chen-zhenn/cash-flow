import { View } from "./View";
class UiMessagetView extends View {
    template(data) {
        return `
        <aside class="bl-container -fixed  fixed-bottom">
            <div class="toast" id="live-toast">
                <section class="toast-body">${data}</section>
            </div>
        </aside>
        `;
    }
}
