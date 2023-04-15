chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get(["blocked", "enabled"], function (local: { blocked?: any[]; enabled?: boolean }) {
        if (!Array.isArray(local.blocked)) {
            chrome.storage.local.set({ blocked: [] });
        }

        if (typeof local.enabled !== "boolean") {
            chrome.storage.local.set({ enabled: false });
        }
    });
});

chrome.tabs.onUpdated.addListener((tabId: number, changeInfo: chrome.tabs.TabChangeInfo) => {
    console.log("Tab Updated")
    const url = changeInfo.url
    if (!url) {
        return;
    }

    const hostname = new URL(url).hostname;

    chrome.storage.local.get(["blocked", "enabled"], (local: { blocked?: string[]; enabled?: boolean }) => {
        const { blocked, enabled } = local;
        console.log("Hostname", hostname)
        console.log("Blocked", blocked)
        console.log("Enabled", enabled)
        if (Array.isArray(blocked) && enabled && blocked.find(domain => hostname.includes(domain))) {
            console.log("Updating tab")
            chrome.tabs.update(tabId, { url: "blocked.html" });
        }
    });
});
