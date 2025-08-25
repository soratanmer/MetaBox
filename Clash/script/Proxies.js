const { type, name } = $arguments
const compatible_outbound = {
  tag: 'COMPATIBLE',
  type: 'direct',
}

let compatible
let config = JSON.parse($files[0])
let proxies = await produceArtifact({
  name,
  type: /^1$|col/i.test(type) ? 'collection' : 'subscription',
  platform: 'sing-box',
  produceType: 'internal',
})

config.proxies.push(...proxies)

config.proxies.map(i => {
  if (['手动切换'].includes(i.tag)) {
    i.proxies.push(...getTags(proxies))
  }
  if (['自动选择'].includes(i.tag)) {
    i.proxies.push(...getTags(proxies))
  }
  if (['香港节点'].includes(i.tag)) {
    i.proxies.push(...getTags(proxies, /港|hk|hongkong|Hong kong|🇭🇰/i))
  }
  if (['台湾节点'].includes(i.tag)) {
    i.proxies.push(...getTags(proxies, /台|tw|taiwan|🇹🇼|taipei/i))
  }
  if (['日本节点'].includes(i.tag)) {
    i.proxies.push(...getTags(proxies, /日本|jp|japan|🇯🇵/i))
  }
  if (['新加坡节点'].includes(i.tag)) {
    i.proxies.push(...getTags(proxies, /^(?!.*(?:us)).*(新|sg|singapore|🇸🇬)/i))
  }
  if (['美国节点'].includes(i.tag)) {
    i.proxies.push(...getTags(proxies, /美|us|unitedstates|united states|🇺🇸/i))
  }
})

config.proxies.forEach(outbound => {
  if (Array.isArray(outbound.proxies) && outbound.proxies.length === 0) {
    if (!compatible) {
      config.proxies.push(compatible_outbound)
      compatible = true
    }
    outbound.proxies.push(compatible_outbound.tag);
  }
});

$content = JSON.stringify(config, null, 4)

function getTags(proxies, regex) {
  return (regex ? proxies.filter(p => regex.test(p.tag)) : proxies).map(p => p.tag)
}
