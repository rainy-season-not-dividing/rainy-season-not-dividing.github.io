# 朱雄雄 · 个人主页

基于 Vue 3 + Vite + Tailwind CSS 的静态个人博客/主页，部署于 GitHub Pages。

访问地址：**https://yujibufenhanshu.github.io**

## 本地开发

```bash
npm install
npm run dev
```

浏览器打开 http://localhost:5173

## 构建

```bash
npm run build
```

产物在 `dist/`，可本地预览：`npm run preview`。

## 部署到 GitHub Pages

1. **仓库要求**  
   使用 GitHub 用户页仓库：`yujibufenhanshu.github.io`（与你的 GitHub 用户名一致）。

2. **推送代码**  
   将本项目推送到该仓库的 `main` 分支。

3. **开启 GitHub Pages（Actions）**  
   - 仓库 → **Settings** → **Pages**  
   - **Source** 选择 **GitHub Actions**（不要选 “Deploy from a branch”）。

4. **自动部署**  
   每次推送到 `main` 分支会触发 `.github/workflows/deploy.yml`，构建并部署到 GitHub Pages。

## 内容维护

- **个人与站点信息**：`src/data/site.ts`
- **科研经历**：`src/data/research.ts`
- **竞赛/编程经历（工程项目）**：`src/data/projects.ts`
- **获奖**：`src/data/awards.ts`
- **技能**：`src/data/skills.ts`
- **博客文章**：`src/data/posts.ts`（可后续改为从 Markdown 文件加载）
- **简历 PDF**：将你的简历命名为 `cv.pdf` 放在 `public/` 目录，替换现有文件即可。

## 技术栈

- Vue 3 + TypeScript
- Vue Router
- Vite
- Tailwind CSS
- Marked（博客 Markdown 渲染）

## 许可证

MIT
