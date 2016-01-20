# 文件结构

项目的文件结构主要分为开发、测试和线上三种环境，三者之间不尽相同。

在测试和线上环境中，除了 `lib` 目录的静态资源文件都需要加 MD5 文件戳。

下面所示各种环境都有相对应的样例（[`mini`](../examples/mini)）。其中 [`mini/webapp`](../examples/mini/webapp) 为原始目录，[`mini/webapp_qa`](../examples/mini/webapp_qa) 和 [`mini/webapp_prod`](../examples/mini/webapp_prod) 是生成的。执行 FIS 命令之前，需要先安装所依赖的包和组件。在原始目录下执行如下命令：

```
npm install
bower install
```

**测试和线上环境的静态资源文件结构只是给个概念，实际项目中会直接上传到对应的服务器上，而不会在本地生成。**

## 开发环境

因为采用「就近维护」原则，静态资源文件与后端模板文件关联性较高。

```
.
├─┬─ bower_components             // 工具 Bower 自动生成的
│ ├─── jquery-1.12.0
│ └─── normalize.css-3.0.3
├─┬─ components                   // 组件化代码
│ ├─┬─ header
│ │ ├─── header.js
│ │ ├─── header.scss
│ │ ├─── header.vm
│ │ └─── logo.png
│ └─┬─ footer
│   ├─── footer.scss
│   └─── footer.vm
├─┬─ layouts                      // 页面布局，不允许有静态资源文件
│ └─── default.vm
└─┬─ views                        // 非组件化代码
  └─┬─ account
    ├─── avatar.jpg
    ├─── detail.js
    ├─── detail.vm
    ├─── new.scss
    └─── new.vm
```

根据项目所选用的 web 框架，`components`、`layouts`、`views` 这三个目录也许会被嵌进其他目录当中，但**它们应当是同级的**。

样例请参照 [`mini/webapp`](../examples/mini/webapp)（执行 `fis3 release -w` 可监听目录生成 `.css` 等文件）。

## 测试环境

```
.
└─┬─ assets
  ├─┬─ lib                        // 第三方库，对应开发环境的 bower_components 目录
  │ ├─── jquery-1.12.0
  │ └─── normalize.css-3.0.3
  └─┬─ mini                       // 项目代码，mini 是项目名
    └─┬─ 1.1                      // 项目版本
      ├─┬─ c                      // 项目组件化代码，对应开发环境的 components 目录
      │ ├─┬─ header
      │ │ ├─── header.js
      │ │ ├─── header.css
      │ │ └─── logo.png
      │ └─┬─ footer
      │   └─── footer.css
      └─┬─ p                      // 项目非组件化代码，对应开发环境的 views 目录
        └─┬─ account
          ├─── avatar.jpg
          ├─── detail.js
          ├─── detail.vm
          ├─── new.scss
          └─── new.vm
```

样例请参照 [`mini/webapp_qa`](../examples/mini/webapp_qa)（该目录是在 [`mini/webapp`](../examples/mini/webapp) 目录下执行 `fis3 release qa` 所生成）。

## 线上环境

线上环境与测试环境的不同只在于**线上环境没有 assets 目录**。

```
.
├─┬─ lib
│ ├─── jquery-1.12.0
│ └─── normalize.css-3.0.3
└─┬─ mini
  └─┬─ 1.1
    ├─┬─ c
    │ ├─┬─ header
    │ │ ├─── header.js
    │ │ ├─── header.css
    │ │ └─── logo.png
    │ └─┬─ footer
    │   └─── footer.css
    └─┬─ p
      └─┬─ account
        ├─── avatar.jpg
        ├─── detail.js
        ├─── detail.vm
        ├─── new.scss
        └─── new.vm
```

样例请参照 [`mini/webapp_prod`](../examples/mini/webapp_prod)（该目录是在 [`mini/webapp`](../examples/mini/webapp) 目录下执行 `fis3 release prod` 所生成）。
