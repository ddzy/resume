# resume

基于 Vue 3、TypeScript 和 Vite 的个人在线简历。

## 开发

```bash
pnpm install
pnpm dev
```

开发服务默认运行在 `http://localhost:3000`。

构建静态文件：

```bash
pnpm build
```

## 维护内容

简历文字和链接集中在 [src/data/resume.ts](./src/data/resume.ts)。修改个人信息、工作经历、项目经历、技能或开源项目时，通常只需编辑这个文件；页面组件不需要改动。项目经历的 `detailsMarkdown` 支持列表、链接、行内代码和代码块。开源项目使用 `githubHref` 配置仓库地址，`previewHref` 可选；只有配置后才会展示“在线预览”入口。

## History

@see: [CHANGELOG.md](./CHANGELOG.md)

## LICENSE

@see: [MIT](./LICENSE)
