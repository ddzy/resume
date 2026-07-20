import avatarUrl from '../assets/images/miaomiao.jpg';

export type ResumeLink = { label: string; text: string; href: string };

export type Project = {
	name: string;
	detailsMarkdown: string;
	links?: ResumeLink[];
	technologies: string;
};

export type ProjectGroup = {
	title: string;
	defaultExpanded?: boolean;
	projects: Project[];
};

export const profile = {
	name: '段朝阳',
	role: '前端&Agent开发工程师',
	avatarUrl,
	facts: [
		['年龄', '28'],
		['学历', '本科'],
		['工作年限', '5.5年'],
		['应聘岗位', '前端&Agent开发'],
	],
	contacts: [
		['WeChat', '-'],
		['QQ', '-'],
		['邮箱', 'alioeduan@foxmail.com', 'mailto:alioeduan@foxmail.com'],
		['个人主页', 'https://yyge.top', 'https://yyge.top'],
		['Github', 'https://github.com/ddzy', 'https://github.com/ddzy'],
	],
} as const;

export type SkillTagGroup = {
	title: string;
	tags: string[];
};

export const skillTagGroups: SkillTagGroup[] = [
	{
		title: '前端开发',
		tags: ['vue', 'typeScript', 'css', 'nuxtjs'],
	},
	{
		title: 'Agent 与 AI',
		tags: ['agent开发', 'langchain', 'zod', 'ai编程', 'codex'],
	},
	{
		title: '工程质量',
		tags: [
			'自动化测试',
			'playwright',
			'agent-browser',
			'gitlab-cicd',
			'jenkins',
		],
	},
	{
		title: '服务端与数据库',
		tags: ['nestjs', 'prisma', 'postgresql', 'mongodb'],
	},
];

export const githubStats = [
	['累计 Star', '1877'],
	['近一年贡献', '353'],
] as const;

interface ExperienceItem {
	period: string;
	company: string;
	responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
	{
		period: '2025.3 - 2026.4',
		company: '广州冠晨网络有限公司',
		responsibilities: [
			'参与公司海外金融借款app马甲包的开发, 主要负责墨西哥国家业务线',
			'移动端App: 负责不同端化情况的H5借款/还款/申贷/分期页面与安卓原生的交互',
			'业务后台: 负责app包体后台管理系统的功能迭代',
			'催收后台: 负责墨象催收后台管理系统的功能迭代',
			'静态官网: 负责各包体的PC端官网的开发',
			'针对App的H5流程, 开发AI自动化工具, 开发新功能之后, 可自动跑主流程',
			'为方便日常开发快速寻找包体/包名/App名称, 开发 Raycast 插件, 可快速找到',
		],
	},
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
];

const guanchenProjects: Project[] = [
	{
		name: '借款&催收App的H5页面',
		detailsMarkdown: [
			'所有H5页面都是运行在安卓原生App内的, 通过自定义jsbridge与原生交互; 根据包体的等级, 会有不同的端化情况(端化程度指的是由原生实现的页面), 大多数包体只是登录注册流程端化, App的核心流程(`申贷`, `领款`, `还款`, `分期`)都由 `H5` 实现',
			'为包体接入了 `chatwoot` 在线客服, 为了让客服入口在部分页面展示, 所以封装成了`插件`和 `mixins`, 方便将 `chatwoot` 的钩子和 Vue 生命周期结合, 同时统一初始化 `chatwoot`, 方便管理和后续维护',
			'针对产品要求的对于 `chatwoot` 的定制化需求, 比如需要自定义 chatwoot 聊天框的样式; 需要在会话的时候传递一些额外的信息(比如订单id之类的); chatwoot 自身的 ui 会在移动端异形屏出现 bug; chatwoot 自身对于图片的预览功能欠缺; chatwoot 聊天消息出现的邮箱会受 App 的制约导致跳转行为不符合逾期等等, 我直接拉取并修改 chatwoot 源码, 通过与产品, 运维, 后端同事沟通, 采用公司自建 chatwoot 的方式来方便定制化',
		].join('<br /><br />'),
		links: [
			{
				label: '项目地址:',
				text: '-',
				href: '',
			},
		],
		technologies: 'Vue2, Jenkins, Chatwoot, WebView',
	},
	{
		name: '借款App各种后台',
		detailsMarkdown: [
			'主要是业务后台, 催收后台等常规的后台管理系统的功能增删改查迭代, 包括包体的各种配置, 资方的配置, 借款单管理等等',
		].join('<br /><br />'),
		links: [
			{
				label: '项目地址:',
				text: '-',
				href: '',
			},
		],
		technologies: 'Vue2, Admin, 后台管理系统',
	},
	{
		name: '借款App官网',
		detailsMarkdown: [
			'纯静态官网, 有首页, 隐私政策, 关于我们, 产品介绍, 联系我们等页面, 采用 `Vue` + `Vant` 开发',
		].join('<br /><br />'),
		links: [
			{
				label: '项目地址:',
				text: '-',
				href: '',
			},
		],
		technologies: 'Vue2, Admin, 后台管理系统',
	},
	{
		name: '借款App主流程UI自动化测试工具',
		detailsMarkdown: [
			'针对后续可能在开发新功能的过程中, 对于代码的改动可能会影响借款主流程, 所以我结合 `AI` 决策流与 `agent-browser`, 利用 `agent-browser` 识别整个页面的可交互元素, 包括元素的内容, 元素的语义化(`role`), 然后将这些可交互元素格式化发给 AI 大模型, 让大模型决定下一步是继续填写表单, 还是点击提交按钮, 还是关闭弹窗, 整个流程自动化, 方便在后续增加新功能时快速自测;',
			'整个自动化测试工具只需要提供一个本地开发链接, 比如 http://localhost:3000, 然后会通过 `sse` 事件流实时输出当前测试步骤',
		].join('<br /><br />'),
		links: [
			{
				label: '项目地址:',
				text: '-',
				href: '',
			},
		],
		technologies: 'Vue3, Agent, 自动化测试, AI大模型',
	},
	{
		name: 'Raycast包体快速查询插件',
		detailsMarkdown: [
			'为了在繁多的马甲包快速根据`测试包名`, `正式包名`, `App名`查找对应包体, 所以我写了个 `Raycast` 插件, 可在 `Mac` 上通过快捷键快速搜索并过滤包体, 节省了翻文档的时间',
		].join('<br /><br />'),
		links: [
			{
				label: '项目地址:',
				text: '-',
				href: '',
			},
		],
		technologies: 'Vue3, Agent, 自动化测试, AI大模型',
	},
];

const shanquProjects: Project[] = [
	{
		name: '安卓指趣游戏盒的H5活动页',
		detailsMarkdown:
			'在安卓游戏盒的 H5 页面中，为了引流和吸引用户，开发了一些活动页，例如：`畅玩卡`、`指悦会员`、`抽奖`等；项目使用 Vue2 开发，使用 dsbridge 进行与安卓原生的交互, 了解 web 页面与安卓原生在 Webview 中的交互方式',
		links: [
			{
				label: '项目地址:',
				text: '因部分交互需要安卓提供的方法，所以需在指趣游戏盒中打开: https://app-static.96966.com/web/v6d7/',
				href: 'https://app-static.96966.com/web/v6d7/',
			},
		],
		technologies: 'Vue2、TS等...',
	},
	{
		name: '公司内部的后台管理系统',
		detailsMarkdown:
			'日常迭代和维护指趣游戏盒后台、指趣SDK后台、开发者后台等各类后台管理系统',
		technologies: 'Vue2、TS等...',
	},
	{
		name: '指趣游戏盒-iOS-H5版本',
		detailsMarkdown: '在iOS-Safari中运行的指趣游戏盒简化版本',
		links: [
			{
				label: '项目地址:',
				text: '需在iOS环境下访问 https://app-static.96966.com/web/zhiqu-web-common/index.html',
				href: 'https://app-static.96966.com/web/zhiqu-web-common/index.html',
			},
		],
		technologies: 'Vue3、TS等...',
	},
	{
		name: '闪趣官网',
		detailsMarkdown: '公司官网，响应式，兼容PC端和移动端',
		technologies: 'Vue2、TS、CSS媒体查询等...',
	},
];

const personalProjects: Project[] = [
	{
		name: '【个人项目】vue3-ui',
		detailsMarkdown:
			'Vue3组件库，已实现Table、Watermark等42个常用组件，有基本的单元测试、说明文档',
		links: [
			{
				label: '在线预览:',
				text: 'https://yyge.top/vue3-ui/',
				href: 'https://yyge.top/vue3-ui/',
			},
			{
				label: 'npm地址:',
				text: 'npm install @felibrary/vue3-ui',
				href: 'https://www.npmjs.com/package/@felibrary/vue3-ui',
			},
		],
		technologies: 'Vue3、TS等...',
	},
	{
		name: '【个人项目】flutter-github-app',
		detailsMarkdown:
			'Flutter仿Github客户端App，主要实现首页、repo相关页、issue相关页、starred相关页、个人资料页',
		links: [
			{
				label: '项目地址:',
				text: 'https://github.com/ddzy/github',
				href: 'https://github.com/ddzy/github',
			},
		],
		technologies: 'Flutter，API使用Github官方的Graphql-API...',
	},
	{
		name: '【个人项目】uniapp-cloud-demo',
		detailsMarkdown:
			'使用hbuilderx、uniapp结合unicloud开发的微信小程序文章demo，包括微信小程序登录、uni-id鉴权、文章增删改查、用户个人资料修改等功能',
		links: [
			{
				label: '项目地址:',
				text: 'https://github.com/ddzy/uniapp-cloud-demo',
				href: 'https://github.com/ddzy/uniapp-cloud-demo',
			},
		],
		technologies: 'uniapp、hbuilderx、unicloud...',
	},
];

export const projectGroups: ProjectGroup[] = [
	{
		title: '冠晨',
		defaultExpanded: true,
		projects: guanchenProjects,
	},
	{
		title: '闪趣',
		projects: shanquProjects,
	},
	{
		title: '个人',
		projects: personalProjects,
	},
];

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
];

export type OpenSourceProject = {
	name: string;
	githubHref: string;
	previewHref?: string;
	description: string;
	stars: number;
	forks: number;
};

export const openSourceProjects: readonly OpenSourceProject[] = [
	{
		name: 'vue3-ui',
		githubHref: 'https://github.com/ddzy/vue3-ui',
		previewHref: 'https://vue3-ui.yyge.top',
		description: '一个基于 Vue3 的 PC 端 ui 组件库',
		stars: 5,
		forks: 1,
	},
	{
		name: 'fe-necessary-book',
		githubHref: 'https://github.com/ddzy/fe-necessary-book',
		description: '分享我收藏的一些好书, 以及好用的开发软件',
		stars: 1464,
		forks: 182,
	},
	{
		name: 'VS-Code-Extension-Doc-ZH',
		githubHref: 'https://github.com/Liiked/VS-Code-Extension-Doc-ZH',
		description: 'VS Code 插件开发中文文档',
		stars: 2211,
		forks: 159,
	},
	{
		name: 'stage-07-agent-observability-evaluation',
		githubHref:
			'https://github.com/ddzy/stage-07-agent-observability-evaluation',
		previewHref: 'https://agent07.yyge.top',
		description: '企业知识库与工具 Agent',
		stars: 0,
		forks: 0,
	},
	{
		name: 'ts-utility-plugins',
		githubHref: 'https://github.com/ddzy/ts-utility-plugins',
		description: '纯原生 js/ts 插件、工具方法库',
		stars: 104,
		forks: 14,
	},
	{
		name: 'file-positioning',
		githubHref: 'https://github.com/ddzy/file-positioning',
		description:
			'一个 VS Code 插件, 源于国外开发者的一个 issue, 快速查找 VSCode 某个工作区文件夹下的文件',
		stars: 4,
		forks: 4,
	},
	{
		name: 'cf-rune-calculator',
		githubHref: 'https://github.com/ddzy/cf-rune-calculator',
		previewHref: 'https://cf-rune.yyge.top',
		description:
			'为知名网游穿越火线写的一款网页版无尽挑战符文辅助计算工具, 累计访问量已超 `10K+`',
		stars: 4,
		forks: 1,
	},
];

export const careerObjective = [
	['期望城市', '广州、东莞'],
	['期望岗位', '前端&Agent开发工程师'],
] as const;
