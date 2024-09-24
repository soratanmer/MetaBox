const { name } = $arguments

let config = JSON.parse($files[0])

let proxyProviders = {}

$substore.cache.subs.map(sub => {
    if (sub.name == name) {
        proxyProviders = {
            [sub.name]: {
                type: "http",
                interval: 86400,
                "health-check": {
                    enable: true,
                    url: "https://www.gstatic.com/generate_204",
                    interval: 300
                },
                url: sub.url,
                path: `./proxies/${sub.name}.yaml`
            }
        }
    }
})

$content = JSON.stringify(config, null, 4)