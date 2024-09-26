// Polyfill for browser compatibility
if (typeof browser === "undefined") globalThis.browser = chrome;

document.addEventListener("DOMContentLoaded", () => {
    const formatInput = document.getElementById("format-input");
    const formatButton = document.getElementById("format-button");
    const formatError = document.getElementById("format-error");

    /* Get the currently viewed tab and send the function as script.
    This is the only method for executing a content script in the MAIN context
    and still communicating with it (albeit limited) in modern browsers. */

    formatButton.addEventListener("click", () => {
        if(/[\]\|\/\<]/.test(formatInput.value)) {
            showMessage("These characters corrupt the teambuilder ] | / <");
            return;
        }
        browser.tabs.query({
            active: true,
            currentWindow: true
        }).then(tab => {
            browser.scripting.executeScript({
                target: {tabId: tab[0].id},
                func: overwriteFormat,
                args: [formatInput.value],
                world: "MAIN"
            }).then((out) => {
                // 0 = ok, 1 = fail, else error
                if(out[0].result === 0) window.close();
                else if(out[0].result === 1) showMessage("Couldn't find a team here.");
                else showMessage("Something went wrong! Send current url and this to dev:<br>" + out[0].message);
            }).catch(() => showMessage("Extensions can't access browser-protected pages like the one in this tab."));
        });
    });

    function showMessage(message) {
        formatInput.style.display = "none";
        formatButton.style.display = "none";
        formatError.style.display = "block";
        formatError.innerHTML = message;
    }
});

function overwriteFormat(format) {
    try {
        if(window.app?.curRoom?.curTeam) {
            app.curRoom.changeFormat(format);
            return 0;
        } else return 1;
    } catch(err) {
        console.log("PS FORMAT OVERWRITE: " + err);
        return err;
    }
}