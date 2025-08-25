const { type, name } = $arguments
const compatible_proxies = {
  name: 'COMPATIBLE',
  type: 'direct',
}

let config = JSON.parse($files[0])
let proxies = await produceArtifact({
  name,
  type: /^1$|col/i.test(type) ? 'collection' : 'subscription',
  platform: 'Mihomo',
  produceType: 'internal',
})

config.proxies.push(...proxies)

config['proxy-groups'].map(i => {
  if (['手动切换'].includes(i.name)) {
    i.proxies.push(...getTags(proxies))
  }
  if (['自动选择'].includes(i.name)) {
    i.proxies.push(...getTags(proxies))
  }
  if (['香港节点'].includes(i.name)) {
    i.proxies.push(...getTags(proxies, /港|hk|hongkong|Hong kong|🇭🇰/i))
  }
  if (['台湾节点'].includes(i.name)) {
    i.proxies.push(...getTags(proxies, /台|tw|taiwan|🇹🇼|taipei/i))
  }
  if (['日本节点'].includes(i.name)) {
    i.proxies.push(...getTags(proxies, /日本|jp|japan|🇯🇵/i))
  }
  if (['新加坡节点'].includes(i.name)) {
    i.proxies.push(...getTags(proxies, /^(?!.*(?:us)).*(新|sg|singapore|🇸🇬)/i))
  }
  if (['美国节点'].includes(i.name)) {
    i.proxies.push(...getTags(proxies, /美|us|unitedstates|united states|🇺🇸/i))
  }
})

config['proxy-groups'].forEach(i => {
  if (Array.isArray(i.proxies) && i.proxies.length === 0) {
    i.proxies.push(compatible_proxies.name);
  }
});

$content = JSON.stringify(config, null, 4)

function getTags(proxies, regex) {
  return (regex ? proxies.filter(p => regex.test(p.name)) : proxies).map(p => p.name)
}
