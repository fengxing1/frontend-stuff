# 技术栈

源码编写：

* HTML 代码的编写同时采用前后端模板
  * 前端模板用于 JS 中生成 HTML 结构时调用，使用无逻辑的 [Handlebars](http://handlebarsjs.com)
  * 后端模板用于正常的页面输出，与以往一样使用 [Velocity](http://velocity.apache.org)
* CSS 代码使用 [Sass](http://sass-lang.com)
  * 编程特性大大提高了开发效率和可维护性、可复用性
  * 规则嵌套增加了可读性
  * 类 CSS 的语法降低了入门门槛
* JS 采用 [ES5](https://es5.github.io)

底层库：

* [Compass](http://compass-style.org)
  * 提供了大量用于 Sass 的 `mixin` 和 `function`
  * 为了配合 FIS3 而采用阉割版的 [compass-mixins](https://github.com/Igosuki/compass-mixins)
* [Normalize.css](http://necolas.github.io/normalize.css/)
  * 统一各浏览器中标签的表现形式
  * 使每个标签的样式都符合 W3C 标准
* [jQuery](http://jquery.com)

工具：

* [Bower](http://bower.io)
  * 前端组件管理
* [FIS3](http://fis.baidu.com/fis3/)
  * 异构语言源码编译成标准语言代码
  * 按照规范打包、部署静态资源文件
