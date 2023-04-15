const textarea = document.getElementById("textarea") as HTMLTextAreaElement;
const save = document.getElementById("save") as HTMLButtonElement;
const checkbox = document.getElementById("checkbox") as HTMLInputElement;

save.addEventListener("click", () => {
    const blocked = textarea.value.split("\n").map(s => s.trim()).filter(Boolean);
    chrome.storage.local.set({ blocked });
});

checkbox.addEventListener("change", (event) => {
    const enabled = (event.target as HTMLInputElement).checked;
    chrome.storage.local.set({ enabled });
});

window.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get(["blocked", "enabled"], function (local) {
        const { blocked, enabled } = local;
        if (Array.isArray(blocked)) {
            textarea.value = blocked.join("\n");
            checkbox.checked = enabled;
        }
    });
});
