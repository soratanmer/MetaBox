// 国内DNS服务器
const domesticNameservers = [
  "https://dns.alidns.com/dns-query", // 阿里云公共DNS
  "https://doh.pub/dns-query", // 腾讯DNSPod
  "https://doh.360.cn/dns-query" // 360安全DNS
];

// 国外DNS服务器
const foreignNameservers = [
  "https://1.1.1.1/dns-query", // Cloudflare(主)
  "https://1.0.0.1/dns-query", // Cloudflare(备)
  "https://8.8.8.8/dns-query", // Cloudflare(主)
  "https://8.8.4.4/dns-query", // Cloudflare(备)
  "https://208.67.222.222/dns-query", // OpenDNS(主)
  "https://208.67.220.220/dns-query", // OpenDNS(备)
  "https://194.242.2.2/dns-query", // Mullvad(主)
  "https://194.242.2.3/dns-query" // Mullvad(备)
];

// DNS配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    // 本地主机/设备
    "+.lan",
    "+.local",
    // Windows网络出现小地球图标
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    // QQ快速登录检测失败
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    // 微信快速登录检测失败
    "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"],
  "nameserver": [...domesticNameservers, ...foreignNameservers],
  "proxy-server-nameserver": [...domesticNameservers, ...foreignNameservers],
  "nameserver-policy": {
    "geosite:private,cn,geolocation-cn": domesticNameservers,
    "geosite:google,youtube,telegram,gfw,geolocation-!cn": foreignNameservers
  }
};

// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};

// 规则集配置
const ruleProviders = {
  "LocalAreaNetwork": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/LocalAreaNetwork.yaml",
    "path": "./ruleset/ACL4SSR/LocalAreaNetwork.yaml"
  },
  "UnBan": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/UnBan.yaml",
    "path": "./ruleset/ACL4SSR/UnBan.yaml"
  },
  "GoogleCN": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/GoogleCN.yaml",
    "path": "./ruleset/ACL4SSR/GoogleCN.yaml"
  },
  "OneDrive": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/OneDrive.yaml",
    "path": "./ruleset/ACL4SSR/OneDrive.yaml"
  },
  "Microsoft": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Microsoft.yaml",
    "path": "./ruleset/ACL4SSR/Microsoft.yaml"
  },
  "Apple": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Apple.yaml",
    "path": "./ruleset/ACL4SSR/Apple.yaml"
  },
  "Telegram": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Telegram.yaml",
    "path": "./ruleset/ACL4SSR/Telegram.yaml"
  },
  "ChinaMedia": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/ChinaMedia.yaml",
    "path": "./ruleset/ACL4SSR/ChinaMedia.yaml"
  },
  "ProxyMedia": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/ProxyMedia.yaml",
    "path": "./ruleset/ACL4SSR/ProxyMedia.yaml"
  },
  "ProxyGFWlist": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/ProxyGFWlist.yaml",
    "path": "./ruleset/ACL4SSR/ProxyGFWlist.yaml"
  },
  "ChinaDomain": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/ChinaDomain.yaml",
    "path": "./ruleset/ACL4SSR/ChinaDomain.yaml"
  },
  "ChinaCompanyIp": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/ChinaCompanyIp.yaml",
    "path": "./ruleset/ACL4SSR/ChinaCompanyIp.yaml"
  },
  "Download": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Download.yaml",
    "path": "./ruleset/ACL4SSR/Download.yaml"
  },
  "GoogleFCM": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Ruleset/GoogleFCM.yaml",
    "path": "./ruleset/ACL4SSR/GoogleFCM.yaml"
  },
  "SteamCN": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Ruleset/SteamCN.yaml",
    "path": "./ruleset/ACL4SSR/SteamCN.yaml"
  },
  "OpenAi": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Ruleset/OpenAi.yaml",
    "path": "./ruleset/ACL4SSR/OpenAi.yaml"
  },
  "NetEaseMusic": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Ruleset/NetEaseMusic.yaml",
    "path": "./ruleset/ACL4SSR/NetEaseMusic.yaml"
  },
  "Spotify": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Ruleset/Spotify.yaml",
    "path": "./ruleset/ACL4SSR/Spotify.yaml"
  },
  "Epic": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Ruleset/Epic.yaml",
    "path": "./ruleset/ACL4SSR/Epic.yaml"
  },
  "Origin": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Ruleset/Origin.yaml",
    "path": "./ruleset/ACL4SSR/Origin.yaml"
  },
  "Sony": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Ruleset/Sony.yaml",
    "path": "./ruleset/ACL4SSR/Sony.yaml"
  },
  "Steam": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Ruleset/Steam.yaml",
    "path": "./ruleset/ACL4SSR/Steam.yaml"
  },
  "Nintendo": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Ruleset/Nintendo.yaml",
    "path": "./ruleset/ACL4SSR/Nintendo.yaml"
  },
  "YouTube": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Ruleset/YouTube.yaml",
    "path": "./ruleset/ACL4SSR/YouTube.yaml"
  },
  "Netflix": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Ruleset/Netflix.yaml",
    "path": "./ruleset/ACL4SSR/Netflix.yaml"
  },
  "Bahamut": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Ruleset/Bahamut.yaml",
    "path": "./ruleset/ACL4SSR/Bahamut.yaml"
  },
  "BilibiliHMT": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Ruleset/BilibiliHMT.yaml",
    "path": "./ruleset/ACL4SSR/BilibiliHMT.yaml"
  },
  "Bilibili": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/raw/master/Clash/Providers/Ruleset/Bilibili.yaml",
    "path": "./ruleset/ACL4SSR/Bilibili.yaml"
  },
};

  // 规则
  const rules = [
    // 自定义规则
    "DOMAIN-SUFFIX,googleapis.cn,节点选择", // Google服务
    "DOMAIN-SUFFIX,gstatic.com,节点选择", // Google静态资源
    "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,节点选择", // Google Play下载服务
    "DOMAIN-SUFFIX,github.io,节点选择", // Github Pages
    "DOMAIN,v2rayse.com,节点选择", // V2rayse节点工具
    // blackmatrix7 规则集
    "RULE-SET,openai,ChatGPT",
    // Loyalsoldier 规则集
    "RULE-SET,applications,全局直连",
    "RULE-SET,private,全局直连",
    "RULE-SET,reject,广告过滤",
    "RULE-SET,icloud,微软服务",
    "RULE-SET,apple,苹果服务",
    "RULE-SET,google,谷歌服务",
    "RULE-SET,proxy,节点选择",
    "RULE-SET,gfw,节点选择",
    "RULE-SET,tld-not-cn,节点选择",
    "RULE-SET,direct,全局直连",
    "RULE-SET,lancidr,全局直连,no-resolve",
    "RULE-SET,cncidr,全局直连,no-resolve",
    "RULE-SET,telegramcidr,电报消息,no-resolve",
    // 其他规则
    "GEOIP,LAN,全局直连,no-resolve",
    "GEOIP,CN,全局直连,no-resolve",
    "MATCH,漏网之鱼"
  ];

// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

 // 覆盖原配置中的代理组
 config["proxy-groups"] = [
  {
    ...groupBaseOption,
    "name": "节点选择",
    "type": "select",
    "proxies": ["延迟选优", "故障转移", "负载均衡(散列)", "负载均衡(轮询)"],
    "include-all": true,
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
  },
  {
    ...groupBaseOption,
    "name": "延迟选优",
    "type": "url-test",
    "tolerance": 100,
    "include-all": true,
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg"
  },
  {
    ...groupBaseOption,
    "name": "故障转移",
    "type": "fallback",
    "include-all": true,
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/ambulance.svg"
  },
  {
    ...groupBaseOption,
    "name": "负载均衡(散列)",
    "type": "load-balance",
    "strategy": "consistent-hashing",
    "include-all": true,
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/merry_go.svg"
  },
  {
    ...groupBaseOption,
    "name": "负载均衡(轮询)",
    "type": "load-balance",
    "strategy": "round-robin",
    "include-all": true,
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/balance.svg"
  },
  {
    ...groupBaseOption,
    "name": "谷歌服务",
    "type": "select",
    "proxies": ["节点选择", "延迟选优", "故障转移", "负载均衡(散列)", "负载均衡(轮询)", "全局直连"],
    "include-all": true,
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/google.svg"
  },
  {
    ...groupBaseOption,
    "name": "国外媒体",
    "type": "select",
    "proxies": ["节点选择", "延迟选优", "故障转移", "负载均衡(散列)", "负载均衡(轮询)", "全局直连"],
    "include-all": true,
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/youtube.svg"
  },
  {
    ...groupBaseOption,
    "name": "电报消息",
    "type": "select",
    "proxies": ["节点选择", "延迟选优", "故障转移", "负载均衡(散列)", "负载均衡(轮询)", "全局直连"],
    "include-all": true,
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg"
  },
  {
    ...groupBaseOption,
    "name": "ChatGPT",
    "type": "select",
    "include-all": true,
    "filter": "AD|🇦🇩|AE|🇦🇪|AF|🇦🇫|AG|🇦🇬|AL|🇦🇱|AM|🇦🇲|AO|🇦🇴|AR|🇦🇷|AT|🇦🇹|AU|🇦🇺|AZ|🇦🇿|BA|🇧🇦|BB|🇧🇧|BD|🇧🇩|BE|🇧🇪|BF|🇧🇫|BG|🇧🇬|BH|🇧🇭|BI|🇧🇮|BJ|🇧🇯|BN|🇧🇳|BO|🇧🇴|BR|🇧🇷|BS|🇧🇸|BT|🇧🇹|BW|🇧🇼|BZ|🇧🇿|CA|🇨🇦|CD|🇨🇩|CF|🇨🇫|CG|🇨🇬|CH|🇨🇭|CI|🇨🇮|CL|🇨🇱|CM|🇨🇲|CO|🇨🇴|CR|🇨🇷|CV|🇨🇻|CY|🇨🇾|CZ|🇨🇿|DE|🇩🇪|DJ|🇩🇯|DK|🇩🇰|DM|🇩🇲|DO|🇩🇴|DZ|🇩🇿|EC|🇪🇨|EE|🇪🇪|EG|🇪🇬|ER|🇪🇷|ES|🇪🇸|ET|🇪🇹|FI|🇫🇮|FJ|🇫🇯|FM|🇫🇲|FR|🇫🇷|GA|🇬🇦|GB|🇬🇧|GD|🇬🇩|GE|🇬🇪|GH|🇬🇭|GM|🇬🇲|GN|🇬🇳|GQ|🇬🇶|GR|🇬🇷|GT|🇬🇹|GW|🇬🇼|GY|🇬🇾|HN|🇭🇳|HR|🇭🇷|HT|🇭🇹|HU|🇭🇺|ID|🇮🇩|IE|🇮🇪|IL|🇮🇱|IN|🇮🇳|IQ|🇮🇶|IS|🇮🇸|IT|🇮🇹|JM|🇯🇲|JO|🇯🇴|JP|🇯🇵|KE|🇰🇪|KG|🇰🇬|KH|🇰🇭|KI|🇰🇮|KM|🇰🇲|KN|🇰🇳|KR|🇰🇷|KW|🇰🇼|KZ|🇰🇿|LA|🇱🇦|LB|🇱🇧|LC|🇱🇨|LI|🇱🇮|LK|🇱🇰|LR|🇱🇷|LS|🇱🇸|LT|🇱🇹|LU|🇱🇺|LV|🇱🇻|LY|🇱🇾|MA|🇲🇦|MC|🇲🇨|MD|🇲🇩|ME|🇲🇪|MG|🇲🇬|MH|🇲🇭|MK|🇲🇰|ML|🇲🇱|MM|🇲🇲|MN|🇲🇳|MR|🇲🇷|MT|🇲🇹|MU|🇲🇺|MV|🇲🇻|MW|🇲🇼|MX|🇲🇽|MY|🇲🇾|MZ|🇲🇿|NA|🇳🇦|NE|🇳🇪|NG|🇳🇬|NI|🇳🇮|NL|🇳🇱|NO|🇳🇴|NP|🇳🇵|NR|🇳🇷|NZ|🇳🇿|OM|🇴🇲|PA|🇵🇦|PE|🇵🇪|PG|🇵🇬|PH|🇵🇭|PK|🇵🇰|PL|🇵🇱|PS|🇵🇸|PT|🇵🇹|PW|🇵🇼|PY|🇵🇾|QA|🇶🇦|RO|🇷🇴|RS|🇷🇸|RW|🇷🇼|SA|🇸🇦|SB|🇸🇧|SC|🇸🇨|SD|🇸🇩|SE|🇸🇪|SG|🇸🇬|SI|🇸🇮|SK|🇸🇰|SL|🇸🇱|SM|🇸🇲|SN|🇸🇳|SO|🇸🇴|SR|🇸🇷|SS|🇸🇸|ST|🇸🇹|SV|🇸🇻|SZ|🇸🇿|TD|🇹🇩|TG|🇹🇬|TH|🇹🇭|TJ|🇹🇯|TL|🇹🇱|TM|🇹🇲|TN|🇹🇳|TO|🇹🇴|TR|🇹🇷|TT|🇹🇹|TV|🇹🇻|TW|🇹🇼|TZ|🇹🇿|UA|🇺🇦|UG|🇺🇬|US|🇺🇸|UY|🇺🇾|UZ|🇺🇿|VA|🇻🇦|VC|🇻🇨|VN|🇻🇳|VU|🇻🇺|WS|🇼🇸|YE|🇾🇪|ZA|🇿🇦|ZM|🇿🇲|ZW|🇿🇼",
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg"
  },
  {
    ...groupBaseOption,
    "name": "微软服务",
    "type": "select",
    "proxies": ["全局直连", "节点选择", "延迟选优", "故障转移", "负载均衡(散列)", "负载均衡(轮询)"],
    "include-all": true,
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/microsoft.svg"
  },
  {
    ...groupBaseOption,
    "name": "苹果服务",
    "type": "select",
    "proxies": ["节点选择", "延迟选优", "故障转移", "负载均衡(散列)", "负载均衡(轮询)", "全局直连"],
    "include-all": true,
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/apple.svg"
  },
  {
    ...groupBaseOption,
    "name": "广告过滤",
    "type": "select",
    "proxies": ["REJECT", "DIRECT"],
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg"
  },
  {
    ...groupBaseOption,
    "name": "全局直连",
    "type": "select",
    "proxies": ["DIRECT", "节点选择", "延迟选优", "故障转移", "负载均衡(散列)", "负载均衡(轮询)"],
    "include-all": true,
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg"
  },
  {
    ...groupBaseOption,
    "name": "全局拦截",
    "type": "select",
    "proxies": ["REJECT", "DIRECT"],
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/block.svg"
  },
  {
    ...groupBaseOption,
    "name": "漏网之鱼",
    "type": "select",
    "proxies": ["节点选择", "延迟选优", "故障转移", "负载均衡(散列)", "负载均衡(轮询)", "全局直连"],
    "include-all": true,
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg"
  },
  {
    ...groupBaseOption,
    "name": "🚀 手动切换",
    "type": "select",
    "include-all": true,
  },
  {
    ...groupBaseOption,
    "name": "🇯🇵 日本节点",
    "type": "url-test",
    "include-all": true,
    "filter": "日本|川日|东京|大阪|泉日|埼玉|沪日|深日"
  },
  {
    ...groupBaseOption,
    "name": "🇭🇰 香港节点",
    "type": "url-test",
    "include-all": true,
    "filter": "港|香港"
  },
  {
    ...groupBaseOption,
    "name": "🇨🇳 台湾节点",
    "type": "url-test",
    "include-all": true,
    "filter": "台|新北|彰化|台湾"
  },
  {
    ...groupBaseOption,
    "name": "🇸🇬 狮城节点",
    "type": "url-test",
    "include-all": true,
    "filter": "新加坡|坡|狮城"
  },
  {
    ...groupBaseOption,
    "name": "🇺🇲 美国节点",
    "type": "url-test",
    "include-all": true,
    "filter": "美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥"
  },
];

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  // 返回修改后的配置
  return config;
}