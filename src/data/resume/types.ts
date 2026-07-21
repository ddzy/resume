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

export type SkillTagGroup = {
	title: string;
	tags: string[];
};

export type ExperienceItem = {
	period: string;
	company: string;
	responsibilities: string[];
};

export type OpenSourceProject = {
	name: string;
	githubHref: string;
	previewHref?: string;
	description: string;
	stars: number;
	forks: number;
};
