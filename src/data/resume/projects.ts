import type { Project, ProjectGroup } from './types';

const guanchenProjects: Project[] = [
	{
		name: '借款&催收App的H5页面',
		detailsMarkdown: [
			'所有H5页面都是运行在安卓原生App内的, 通过自定义jsbridge与原生交互; 根据包体的等级, 会有不同的端化情况(端化程度指的是由原生实现的页面), 大多数包体只是登录注册流程端化, App的核心流程(`申贷`, `领款`, `还款`, `分期`)都由 `H5` 实现',
			'为包体接入了 `chatwoot` 在线客服, 为了让客服入口在部分页面展示, 所以封装成了`插件`和 `mixins`, 方便将 `chatwoot` 的钩子和 Vue 生命周期结合, 同时统一初始化 `chatwoot`, 方便管理和后续维护',
			'针对产品要求的对于 `chatwoot` 的定制化需求, 比如需要自定义 chatwoot 聊天框的样式; 需要在会话的时候传递一些额外的信息(比如订单id之类的); chatwoot 自身的 ui 会在移动端异形屏出现 bug; chatwoot 自身对于图片的预览功能欠缺; chatwoot 聊天消息出现的邮箱会受 App 的制约导致跳转行为不符合逾期等等, 我直接拉取并修改 chatwoot 源码, 通过与产品, 运维, 后端同事沟通, 采用公司自建 chatwoot 的方式来方便定制化',
		].join('<br /><br />'),
		links: [{ label: '项目地址:', text: '-', href: '' }],
		technologies: 'vue2, jenkins, chatwoot, webview',
	},
	{
		name: '借款App各种后台',
		detailsMarkdown: [
			'主要是业务后台, 催收后台等常规的后台管理系统的功能增删改查迭代, 包括包体的各种配置, 资方的配置, 借款单管理等等',
		].join('<br /><br />'),
		links: [{ label: '项目地址:', text: '-', href: '' }],
		technologies: 'vue2, admin, 后台管理系统',
	},
	{
		name: '借款App官网',
		detailsMarkdown: [
			'纯静态官网, 有首页, 隐私政策, 关于我们, 产品介绍, 联系我们等页面, 采用 `Vue` + `Vant` 开发',
		].join('<br /><br />'),
		links: [{ label: '项目地址:', text: '-', href: '' }],
		technologies: 'vue3, 官网, css',
	},
	{
		name: '借款App主流程UI自动化测试工具',
		detailsMarkdown: [
			'针对后续可能在开发新功能的过程中, 对于代码的改动可能会影响借款主流程, 所以我结合 `AI` 决策流与 `agent-browser`, 利用 `agent-browser` 识别整个页面的可交互元素, 包括元素的内容, 元素的语义化(`role`), 然后将这些可交互元素格式化发给 AI 大模型, 让大模型决定下一步是继续填写表单, 还是点击提交按钮, 还是关闭弹窗, 整个流程自动化, 方便在后续增加新功能时快速自测;',
			'整个自动化测试工具只需要提供一个本地开发链接, 比如 http://localhost:3000, 然后会通过 `sse` 事件流实时输出当前测试步骤',
		].join('<br /><br />'),
		links: [{ label: '项目地址:', text: '-', href: '' }],
		technologies: 'vue3, agent, 自动化测试, ai大模型',
	},
	{
		name: 'Raycast包体快速查询插件',
		detailsMarkdown: [
			'为了在繁多的马甲包快速根据`测试包名`, `正式包名`, `App名`查找对应包体, 所以我写了个 `Raycast` 插件, 可在 `Mac` 上通过快捷键快速搜索并过滤包体, 节省了翻文档的时间',
		].join('<br /><br />'),
		links: [{ label: '项目地址:', text: '-', href: '' }],
		technologies: 'vue3, raycast, 插件, typescript',
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
		technologies: 'vue2、typescript',
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
		technologies: 'vue2、typescript',
	},
	{
		name: '闪趣官网',
		detailsMarkdown: '公司官网，响应式，兼容PC端和移动端',
		technologies: 'vue2, typescript, css',
	},
];

const personalProjects: Project[] = [
	{
		name: '【个人项目】vue3-ui',
		detailsMarkdown:
			'Vue3组件库，已实现Table、Watermark等42个常用组件，有基本的单元测试、说明文档',
		links: [
			{ label: '在线预览:', text: 'https://yyge.top/vue3-ui/', href: 'https://yyge.top/vue3-ui/' },
			{ label: 'npm地址:', text: 'npm install @felibrary/vue3-ui', href: 'https://www.npmjs.com/package/@felibrary/vue3-ui' },
		],
		technologies: 'vue3, typescript',
	},
	{
		name: '【个人项目】flutter-github-app',
		detailsMarkdown:
			'Flutter仿Github客户端App，主要实现首页、repo相关页、issue相关页、starred相关页、个人资料页',
		links: [{ label: '项目地址:', text: 'https://github.com/ddzy/github', href: 'https://github.com/ddzy/github' }],
		technologies: 'flutter, graphql',
	},
	{
		name: '【个人项目】uniapp-cloud-demo',
		detailsMarkdown:
			'使用hbuilderx、uniapp结合unicloud开发的微信小程序文章demo，包括微信小程序登录、uni-id鉴权、文章增删改查、用户个人资料修改等功能',
		links: [{ label: '项目地址:', text: 'https://github.com/ddzy/uniapp-cloud-demo', href: 'https://github.com/ddzy/uniapp-cloud-demo' }],
		technologies: 'uniapp、hbuilderx、unicloud...',
	},
];

export const projectGroups: ProjectGroup[] = [
	{ title: '冠晨', defaultExpanded: true, projects: guanchenProjects },
	{ title: '闪趣', projects: shanquProjects },
	{ title: '个人', projects: personalProjects },
];
