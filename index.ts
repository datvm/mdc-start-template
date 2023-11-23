import "@material/web/progress/circular-progress";
import "@material/web/button/elevated-button";
import "@material/web/icon/icon";

// For typing
import { MdCircularProgress } from "@material/web/progress/circular-progress";
import { MdElevatedButton } from "@material/web/button/elevated-button";

new class {

    #pgb: MdCircularProgress = document.querySelector(".loader")!;
    #btn: MdElevatedButton = document.querySelector(".btn-hello")!;

    constructor() {
        this.#btn.disabled = true;
        this.#btn.addEventListener("click",
            () => alert("Hello"));

        setTimeout(async () => {
            this.#pgb.indeterminate = false;
            this.#pgb.max = 100;

            for (let i = 0; i < 100; i++) {
                await new Promise(r => setTimeout(r, 20));
                this.#pgb.value += 1;
            }

            this.#btn.disabled = false;
        }, 1000);
    }

}();