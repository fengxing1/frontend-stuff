# 文件结构

项目的文件结构主要分为开发、测试和线上三种环境，三者之间不尽相同。

在测试和线上环境中，除了 `lib` 目录的静态资源文件都需要加 MD5 文件戳。

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
