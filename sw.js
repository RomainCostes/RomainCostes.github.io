const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/",
            "/index.html",
            "/index.css",
            "/app.js",
            "/mushroomm-44.png",
        ])
    );
});

self.addEventListener("fetch", () => console.log("fetch"));