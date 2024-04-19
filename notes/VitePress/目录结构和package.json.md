# 目录结构和package.json

```
--./
|- .vitepress
---|-cache
---|-config.mts
|- node_modules
|- api-examples.md
|- index.md
|- markdown_examples.md
|- package.json
|- package-lock.json
```

- **vitepress**: 用于存放缓存（cache）和配置文件的，`config.mts`配置文件里边是对整个站点的配置，包括网站标题、描述、文档目录、导航栏、侧边栏等的配置文件，也是我们接下来学习的重点之一。
- **node_modules**: 此文件夹用于存放通过npm自动下载的项目依赖包，通常情况下，开发者无需手动操作此文件夹。
- **api-examples.md** : 该文档介绍了一些自定义模板的案例，可供学习参考，以便将来在自定义模板时使用。
- **index.md** : 这是首页对应的Markdown文档，通过Markdown语法可以对首页的样式进行定制，我们将在后续的学习中详细探讨。
- **markdown_examples.md**: `markdown`语法的实例，可以打开学习使用一下。
- **package.json** :一个项目的核心配置文件，通常用于 `Node.js` 项目中。它定义了项目的元数据和依赖关系，使得项目的安装、更新、配置和执行变得更加方便和自动化。
- **package-lock.json**:`Node.js `项目依赖管理的重要工具，它通过锁定依赖版本来确保项目的一致性和可重复性。

# config.mts文件

```typescript
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JSPang",                    // 网站的标题
  description: "关注前端技术",         // 网站的描述
  themeConfig: {                      // 对主题的配置
    // https://vitepress.dev/reference/default-theme-config
    nav: [                            // 导航栏的配置
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [                        // 侧边栏的配置
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [                    // 友链的配置，也可以叫做社交链接
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
```

# package.json

```typescript
{
  "devDependencies": {
    "vitepress": "^1.0.1"   // 项目开发时依赖的包
  },
  "scripts": {
    "docs:dev": "vitepress dev",         // 启动开发模式的服务
    "docs:build": "vitepress build",     // 对项目打包，生成静态网站
    "docs:preview": "vitepress preview"  // 生成静态网站前的预览
  }
}
```

