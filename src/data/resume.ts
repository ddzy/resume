import avatarUrl from '../assets/images/miaomiao.jpg'

export type ResumeLink = { label: string; text: string; href: string }

export type Project = {
  name: string
  detailsMarkdown: string
  links?: ResumeLink[]
  technologies: string
}

export const profile = {
  name: '段朝阳',
  role: '前端开发工程师',
  avatarUrl,
  facts: [
    ['年龄', '26'],
    ['学历', '本科'],
    ['工作年限', '4年'],
    ['应聘岗位', '前端开发'],
  ],
  contacts: [
    ['WeChat', 'guoguoyang_555'],
    ['QQ', '1766083035'],
    ['邮箱', 'alioeduan@foxmail.com', 'mailto:alioeduan@foxmail.com'],
    ['个人主页', 'https://yyge.top', 'https://yyge.top'],
    ['Github', 'https://github.com/ddzy', 'https://github.com/ddzy'],
  ],
} as const

export const skillTags = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'VS Code']

export const githubStats = [
  ['contributes', '4926'],
  ['pr', '53'],
] as const

export const experiences = [
  {
    period: '2020.11 - 2025.1',
    company: '广州闪趣网络科技有限公司',
    responsibilities: [
      '参与公司自营App-指趣游戏盒的所有Web业务线开发',
      '参与开发指趣游戏盒、指趣SDK的H5活动页面，与安卓、iOS原生交互',
      '参与移动端iOS-H5版本的指趣游戏盒的开发，主要在Safari浏览器中运行',
      '参与公司内部所有后台管理系统的开发和维护',
      '负责所有前端项目的开发工具、构建工具的升级和迭代：例如老旧 vue-cli 项目升级到 vite；以及自动化部署：例如打包自动上传到阿里云、与运维对接并集成gitlab-cicd',
    ],
  },
  {
    period: '2019.11 - 2020.6',
    company: '3K游戏',
    responsibilities: [
      '负责独立 & 海外游戏的业务线开发(包括移动端预约下载抽奖等 H5 页面)',
      '参与平台活动业务线开发(微信平台的引流 & 活动 H5 页面)',
      '参与内部数据平台系统的研发(利用 Vue 进行诸如 DatePicker 等组件的开发)',
      '参与团队内部的技术文档的构建(主要是前端方向的知识总结, 以及项目中遇到的难点)',
    ],
  },
]

export const projects: Project[] = [
  {
    name: '安卓指趣游戏盒的H5活动页',
    detailsMarkdown: '在安卓游戏盒的 H5 页面中，为了引流和吸引用户，开发了一些活动页，例如：`畅玩卡`、`指悦会员`、`抽奖`等；项目使用 Vue2 开发，使用 dsbridge 进行与安卓原生的交互, 了解 web 页面与安卓原生在 Webview 中的交互方式',
    links: [{ label: '项目地址:', text: '因部分交互需要安卓提供的方法，所以需在指趣游戏盒中打开: https://app-static.96966.com/web/v6d7/', href: 'https://app-static.96966.com/web/v6d7/' }],
    technologies: 'Vue2、TS等...',
  },
  {
    name: '公司内部的后台管理系统',
    detailsMarkdown: '日常迭代和维护指趣游戏盒后台、指趣SDK后台、开发者后台等各类后台管理系统',
    technologies: 'Vue2、TS等...',
  },
  {
    name: '指趣游戏盒-iOS-H5版本',
    detailsMarkdown: '在iOS-Safari中运行的指趣游戏盒简化版本',
    links: [{ label: '项目地址:', text: '需在iOS环境下访问 https://app-static.96966.com/web/zhiqu-web-common/index.html', href: 'https://app-static.96966.com/web/zhiqu-web-common/index.html' }],
    technologies: 'Vue3、TS等...',
  },
  {
    name: '闪趣官网',
    detailsMarkdown: '公司官网，响应式，兼容PC端和移动端',
    technologies: 'Vue2、TS、CSS媒体查询等...',
  },
  {
    name: '【个人项目】vue3-ui',
    detailsMarkdown: 'Vue3组件库，已实现Table、Watermark等42个常用组件，有基本的单元测试、说明文档',
    links: [
      { label: '在线预览:', text: 'https://yyge.top/vue3-ui/', href: 'https://yyge.top/vue3-ui/' },
      { label: 'npm地址:', text: 'npm install @felibrary/vue3-ui', href: 'https://www.npmjs.com/package/@felibrary/vue3-ui' },
    ],
    technologies: 'Vue3、TS等...',
  },
  {
    name: '【个人项目】flutter-github-app',
    detailsMarkdown: 'Flutter仿Github客户端App，主要实现首页、repo相关页、issue相关页、starred相关页、个人资料页',
    links: [{ label: '项目地址:', text: 'https://github.com/ddzy/github', href: 'https://github.com/ddzy/github' }],
    technologies: 'Flutter，API使用Github官方的Graphql-API...',
  },
  {
    name: '【个人项目】uniapp-cloud-demo',
    detailsMarkdown: '使用hbuilderx、uniapp结合unicloud开发的微信小程序文章demo，包括微信小程序登录、uni-id鉴权、文章增删改查、用户个人资料修改等功能',
    links: [{ label: '项目地址:', text: 'https://github.com/ddzy/uniapp-cloud-demo', href: 'https://github.com/ddzy/uniapp-cloud-demo' }],
    technologies: 'uniapp、hbuilderx、unicloud...',
  },
]

export const skillGroups = [
  {
    title: '技术栈',
    items: [
      '本人大二起自学前端, 独立完成诸如毕设等中小型项目',
      '熟悉Vue2、Vue3、TS等常用前端技术',
      '涉猎过Uniapp、Flutter等小程序及跨端开发技术，并写过Demo',
      '涉猎过NodeJS、MongoDB、Dart等后端技术',
      '了解Linux基本的操作命令，涉猎过docker、jenkins、nginx等工具，例如通过jenkins结合GitHub-Webhook实现自动部署',
    ],
  },
  {
    title: '社区',
    items: [
      '日常活跃于掘金、思否、V2EX等各大开发者社区, 关注业内前沿信息',
      '经常活跃于 GitHub, Github 提交 commit 超过 4000 次，为 utility、react-zmage、vscode-extension-doc-zh 等知名项目贡献过代码',
    ],
  },
  {
    title: '开发工具',
    items: ['熟练使用主流开发工具 VS Code, 并为其开发过插件'],
  },
]

export const openSource = [
  ['vue3-ui', 'https://github.com/ddzy/vue3-ui', '一个基于 Vue3 的 PC 端 ui 组件库'],
  ['fe-necessary-book', 'https://github.com/ddzy/fe-necessary-book', '分享我收藏的一些好书, 以及好用的开发软件(Star: 1.5K; Fork: 186)'],
  ['ts-utility-plugins', 'https://github.com/ddzy/ts-utility-plugins', '纯原生 js/ts 插件、工具方法库(Star: 104; Fork: 19)'],
  ['VS-Code-Extension-Doc-ZH', 'https://github.com/Liiked/VS-Code-Extension-Doc-ZH', 'VS Code 插件开发中文文档(Star: 2.1K; Fork: 60)'],
  ['file-positioning', 'https://github.com/ddzy/file-positioning', '一个 VS Code 插件, 源于国外开发者的一个 issue, 快速查找 VSCode 某个工作区文件夹下的文件'],
  ['cf-rune-calculator', 'https://github.com/ddzy/cf-rune-calculator', '为知名网游穿越火线写的一款网页版无尽挑战符文辅助计算工具, 累计访问量已超 `10K+`'],
] as const

export const careerObjective = [
  ['期望城市', '广州、东莞'],
  ['期望岗位', '前端开发工程师'],
] as const
