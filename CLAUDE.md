# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` - 启动开发服务器
- `pnpm build` - 类型检查 + 构建生产版本
- `pnpm type-check` - 仅运行 TypeScript 类型检查
- `pnpm preview` - 预览生产构建

## Architecture

这是一个基于 Vue 3 + TypeScript + Vite 的启动模板，使用以下核心技术栈：

### 自动化特性

- **文件路由**: 使用 `unplugin-vue-router`，在 `src/pages/` 下创建 `.vue` 文件即自动生成路由
- **布局系统**: 使用 `vite-plugin-vue-layouts`，布局文件放在 `src/layouts/`
- **组件自动导入**: 使用 `unplugin-vue-components`，`src/components/` 下的组件无需手动 import
- **API 自动导入**: 使用 `unplugin-auto-import`，Vue、Vue Router、VueUse、Pinia 的 API 无需手动 import
- **Composables 自动导入**: `src/composables/` 和 `src/stores/` 下的导出会自动可用

### 状态管理

- 使用 Pinia，配置了 `pinia-plugin-persistedstate` 支持状态持久化

### 样式

- Tailwind CSS v4（使用 `@tailwindcss/vite` 插件）
- 使用 `@egoist/tailwindcss-icons` 支持图标（如 `i-carbon-*`）
- 深色模式通过 `.dark` class 切换，配合 VueUse 的 `useColorMode`

### 类型生成

构建/开发时会自动生成以下类型文件：
- `src/typed-router.d.ts` - 路由类型
- `src/auto-imports.d.ts` - 自动导入类型
- `src/components.d.ts` - 组件类型

## Requirements

- Node.js 24.x
- pnpm 10.x
