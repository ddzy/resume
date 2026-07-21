import type { SkillTagGroup } from './types';

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

export const skillGroups = [
	{
		title: '技术栈',
		itemsMarkdown: [
			'本人大二起自学前端, 独立完成诸如毕设等中小型项目',
			'熟悉 **vue、typeScript** 等常用前端技术',
			'涉猎过 **UniApp、Flutter** 等小程序及跨端开发技术，并写过 Demo',
			'涉猎过 **Node.js、MongoDB、Dart** 等服务端技术',
			'了解 **Docker、Jenkins、Nginx** 等工具；例如通过 `Jenkins + GitHub Webhook` 实现自动部署',
		],
	},
	{
		title: '社区',
		itemsMarkdown: [
			'日常活跃于 **掘金、思否、V2EX** 等各大开发者社区，关注业内前沿信息',
			'经常活跃于 **GitHub**，累计提交 `4000+` 次，为 `utility`、`react-zmage`、`vscode-extension-doc-zh` 等项目贡献过代码',
		],
	},
	{
		title: '开发工具',
		itemsMarkdown: ['熟练使用 **VS Code**，并为其开发过插件'],
	},
];
