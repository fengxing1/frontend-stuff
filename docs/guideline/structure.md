# 文件结构

## 目录

* [文件命名](#文件命名)
* [目录结构](#目录结构)
  * [开发环境](#开发环境)
  * [测试环境](#测试环境)
  * [线上环境](#线上环境)

## 文件命名

文件的命名方式为 `[<namespace>-]<fileName>[-modifierName][-precision]`，各部分含义如下：

* `namespace` 代表命名空间，**主要用于图片文件**，如：`icon-arrow.png`、`bg-header.png`
* `fileName` 代表文件名，要用语义化的单词以小驼峰式拼写，如：`leftArrow.png`
* `modifierName` 代表修饰符名，要用语义化的单词以小驼峰式拼写，如：`icon-arrow-left.png`
* `precision` 代表精度，**只用于图片文件**，如：`icon-arrow-left-2x.png`

### !!! 以下情况需要特别注意

当文件名可以用形容词修饰名词的方式来命名时（多发生于图片文件），要根据情况选择是否使用 `modifierName`：

* 只有一张图片时，不必使用，如：`leftArrow.png`
* 有一组（一张以上）图片时，必须使用，如：`arrow-left.png`、`arrow-right.png`

当某个页面所引入的图片文件数量很多时（如 10 个以上），需在与页面文件同级目录下创建一个同名文件夹并把图片放进去：

```
.
└─┬─ views
  └─┬─ app
    ├─┬─ download
    │ ├─── logo.png
    │ ├─── logo-2x.png
    │ ├─── step-1.png
    │ ├─── step-1-2x.png
    │ ├─── step-2.png
    │ ├─── step-2-2x.png
    │ ├─── step-3.png
    │ ├─── step-3-2x.png
    │ ├─── step-4.png
    │ ├─── step-4-2x.png
    │ ├─── goodbye.png
    │ ├─── goodbye-2x.png
    │ └─── ...
    ├─── download.scss
    └─── download.vm
```

## 目录结构

项目的文件结构主要分为开发、测试和线上三种环境，三者之间不尽相同。

在测试和线上环境中，除了 `lib` 目录的静态资源文件都需要加 MD5 文件戳。

下面所示各种环境都有相对应的样例（[`mini`](https://github.com/maihaoche/frontend-stuff/tree/master/examples/mini)）。其中 [`mini/webapp`](https://github.com/maihaoche/frontend-stuff/tree/master/examples/mini/webapp) 为原始目录，[`mini/webapp_qa`](https://github.com/maihaoche/frontend-stuff/tree/master/examples/mini/webapp_qa) 和 [`mini/webapp_prod`](https://github.com/maihaoche/frontend-stuff/tree/master/examples/mini/webapp_prod) 是生成的。执行 FIS 命令之前，需要先安装所依赖的包和组件。在原始目录下执行如下命令：

```bash
# 安装 node 依赖，用于自动化构建
npm install

# 安装第三方组件，用于 web 页面
bower install
```

**测试和线上环境的静态资源文件结构只是给个概念，实际项目中会直接上传到对应的服务器上，而不会在本地生成。**

### 开发环境

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
├─┬─ partials                     // HTML 片段，不允许有静态资源文件
│ ├─── common.vm
│ ├─── render.vm
│ └─── statistic.vm
└─┬─ views                        // 非组件化代码
  └─┬─ account
    ├─── avatar.jpg
    ├─── detail.js
    ├─── detail.vm
    ├─── new.scss
    └─── new.vm
```

根据项目所选用的 web 框架，`components`、`layouts`、`views` 这三个目录也许会被嵌进其他目录当中，但**它们应当是同级的**。

样例请参照 [`mini/webapp`](https://github.com/maihaoche/frontend-stuff/tree/master/examples/mini/webapp)（执行 `fis3 release -w` 可监听目录生成 `.css` 等文件）。

### 测试环境

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

样例请参照 [`mini/webapp_qa`](https://github.com/maihaoche/frontend-stuff/tree/master/examples/mini/webapp_qa)（该目录是在 [`mini/webapp`](https://github.com/maihaoche/frontend-stuff/tree/master/examples/mini/webapp) 目录下执行 `fis3 release qa` 所生成）。

### 线上环境

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

样例请参照 [`mini/webapp_prod`](https://github.com/maihaoche/frontend-stuff/tree/master/examples/mini/webapp_prod)（该目录是在 [`mini/webapp`](https://github.com/maihaoche/frontend-stuff/tree/master/examples/mini/webapp) 目录下执行 `fis3 release prod` 所生成）。