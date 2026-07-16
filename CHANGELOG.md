# Change Log

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## ✍ [2026-7-16]

### Added

- 基于 Vue 3、TypeScript、Vite 与 Sass 重构在线简历
- 新增 `src/data/resume.ts`，集中维护个人信息、工作经历、项目经历、技能与开源信息
- 新增组件化页面结构：个人信息、工作经历、项目经历
- 新增 PC 与移动端响应式布局，以及打印样式
- 新增 `src/assets/styles/reset.css` 全局重置样式

### Changed

- 本地开发与预览服务统一使用 `3000` 端口
- 样式调整为全局 `main.scss` 与组件内 `scoped SCSS` 的组合，便于局部维护
- 图片资源迁移至 `src/assets/images`
- README 更新为当前的开发、构建与内容维护方式

### Removed

- 移除旧版原生 JavaScript、Less、Bootstrap/G2/Axios CDN 依赖
- 移除旧版 `source/` 目录及其打印产物
- 移除浏览器端 GitHub API 请求，避免接口失败影响简历展示

## ✍ [2019-3-1]

### Added

- Initial Release

## ...

## ✍ [2019-5-25]

### Changed

- 使用`rem`替代`px`
- 使用`Github-api`更新相关数据

## ✍ [2019-6-19]

### Added

- 项目经历(`project-experience`)区块下新增项目: [fe-necessary-book](https://github.com/ddzy/fe-necessary-book)

### Fixed

- 修复github区块(`github-collection`)下的`stars`数量统计问题
  - 貌似只能统计`public`仓库的`star`数量

## ✍ [2019-7-5]

### Added

- index.html
  - 新增头像链接, 指向`github`对应的[repo](https://github.com/ddzy/resume)

### Changed

- README
  - 改进`说明`区块
  - 增加`History`区块
- CHANGELOG
  - 小标题前增加`emoji`图标

## ✍ [2019-7-7]

### Changed

- index.js
  - 更新`github`有关数据

## ✍ [2019-7-15]

### Changed

- 页面样式调整, 使用`rem`替代`px`

## ✍ [2019-8-9]

- index.js
  - 更新`github`相关数据

## ✍ [2019-9-27]

### Added

- 新增`个人优势`区块

### Changed

- 更新`Github统计`数据
- 更新`个人信息`
- 更新`求职意向`
- 更新`掌握技能`

### Removed

- 移除`leetcode进度`区块

## ✍ [2019-10-15]

### Changed

- 更新`掌握技能`区块的内容

## ✍ [2020-8-19]

### Changed

- 移除 `个人优势` 区块, 添加 `工作经历` 区块
- 更新 `求职意向` 区块

## ✍ [2020-8-31]

- 更新 `个人信息` 区块的链接地址
