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
			'熟悉`vue`, `typescript`等常用前端技术',
			'熟悉`ai`编程, 掌握`codex`等开发工具',
			'了解`agent`智能体开发, 了解通用知识库, 工具类 agent 的开发; 同时了解`zod`, `prisma`, `postgresql`等向量化数据库工具',
			'了解`docker`, `nginx`, `jenkins`, `gitlab-ci`等`cicd`工具；例如通过 jenkins + gitHub webhook 实现项目自动部署和发布',
			'了解`nextjs`, `nuxtjs`等全栈开发框架, 有做过小型 demo 项目',
			'了解基本的服务器命令和操作, 例如通过`linux`的`systemd`结合`jenkins`的运行时环境变量注入, 以及`nginx`基本配置, 部署`nuxtjs`全栈项目',
			'涉猎过`uniapp`, `flutter`等小程序及跨端开发技术，并写过小型 demo 项目',
		],
	},
	{
		title: '社区',
		itemsMarkdown: [
			'日常活跃于`掘金`, `v2ex`等各大开发者社区，关注业内信息',
			'活跃`github`，累计提交 `4000+` 次，为 `utility`、`react-zmage`、`vscode-extension-doc-zh` 等项目贡献过代码',
		],
	},
];
