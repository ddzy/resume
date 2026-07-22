import avatarUrl from '../../assets/images/miaomiao.jpg';

export const profile = {
	name: '段朝阳',
	role: '前端&Agent开发工程师',
	avatarUrl,
	facts: [
		['年龄', '28'],
		['学历', '本科'],
		['工作年限', '6年'],
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

export const githubStats = [
	['累计 Star', '1877'],
	['近一年贡献', '353'],
] as const;

export const careerObjective = [
	['期望城市', '广州、东莞'],
	['期望岗位', '前端&Agent开发工程师'],
] as const;
