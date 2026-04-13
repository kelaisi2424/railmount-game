# Railmount Game - railmountgame.com

Play Railmount online free — a train puzzle game by Hempuli.

## 本地运行
1. 方法一：直接双击 index.html 打开浏览器
2. 方法二：`npx serve .`（推荐）
3. 方法三：VS Code Live Server 插件

## 部署到 Cloudflare Pages
1. 在 GitHub 创建仓库 `railmount-game`
2. 把代码推送到 GitHub
3. 登录 Cloudflare Dashboard → Pages → Create a project
4. 连接 GitHub 仓库
5. 构建设置：Framework = None，Build command 留空，Output directory = /
6. 部署完成后绑定域名 railmountgame.com
7. 在 Cloudflare DNS 里添加 CNAME 记录指向 Pages 项目

## 接入 Google AdSense
1. 注册 Google AdSense 账号（需要网站有内容后申请）
2. 审核通过后获取 ca-pub 代码
3. 替换 index.html 中所有 `<!-- Replace with AdSense code -->` 注释处的内容
4. 每个 .ad-slot 替换为对应尺寸的 AdSense 广告单元

## 提交到 Google Search Console
1. 打开 search.google.com/search-console
2. 添加网站 railmountgame.com
3. 通过 Cloudflare DNS 验证所有权
4. 提交 sitemap.xml
5. 请求索引首页
