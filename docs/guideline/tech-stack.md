# 技术栈

这里所描述的主要是用于 B2B 项目的技术、库和工具，并且也是今后所有项目的发展方向。

## 目录

* [源码](#源码)
	* [HTML](#html)
	* [CSS](#css)
	* [JavaScript](#javascript)
* [库](#库)
	* [特性封装](#特性封装)
	* [一致性及兼容性](#一致性及兼容性)
	* [UI 组件](#ui-组件)
	* [其他](#其他)
* [工具](#工具)

## 源码

这里的「源码」是指**开发阶段未经任何处理的代码**，可以是标准语言的异构语言，也可以是标准语言的子集。

### HTML

根据场景需要，同时使用前后端模板：

* 整体页面结构使用后端模板 [Velocity](http://velocity.apache.org)
* 动态生成的页面组件（如列表或表格的条目）使用无逻辑的 [Handlebars](http://handlebarsjs.com)

### CSS

使用预处理器 [Sass](http://sass-lang.com)，主要原因如下：

* 编程特性大大提高了开发效率和可维护性、可复用性
* 规则嵌套增加了可读性
* 类 CSS 的语法降低了入门门槛

### JavaScript

采用最熟悉最稳定的 [ES5](https://es5.github.io)。

## 库

### 特性封装

* [jQuery](http://jquery.com)
* [Compass](http://compass-style.org)
  * 提供了大量用于 Sass 的 `mixin` 和 `function`
  * 为了配合 FIS3 而采用阉割版的 [compass-mixins](https://github.com/Igosuki/compass-mixins)

### 一致性及兼容性

* [Normalize.css](http://necolas.github.io/normalize.css/) 使每个标签的样式符合 W3C 标准
* [html5shiv](https://github.com/aFarkas/html5shiv) 使各浏览器都支持 HTML5 标签（可仅 IE8 引入）
* [es5-shim](https://github.com/es-shims/es5-shim) 使各浏览器都支持 ES5 方法

### UI 组件

* [Select2](https://select2.github.io) 美化 `<select>` 并增强功能
* [iCheck](http://icheck.fronteed.com) 美化 `<input type="radio">` 和 `<input type="checkbox">`
* [Datepicker](https://github.com/fengyuanchen/datepicker) 日期拾取器

### 其他

* [Beetle](https://github.com/maihaoche/beetle) 移动 web 解决方案
* [Piston](https://github.com/maihaoche/piston) 数据收集与分析
* [H5Fx](https://github.com/ourai/H5Fx) 基于 HTML5 规范进行表单验证

## 工具

* [Bumblebee](https://github.com/maihaoche/node-b3) 将静态资源文件上传到 CDN 和生成活动页面模板
* [Bower](http://bower.io) 管理第三方前端库
* [FIS3](http://fis.baidu.com/fis3/) 编译、打包静态资源文件
