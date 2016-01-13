# 代码风格指导

统一的代码风格可以提高团队的协作效率，能够让新人迅速读懂代码。

## 通则

* 严格遵守「结构、表现、行为相分离」
  * 统计代码的情况除外
* 遵守 DRY(Don't Repeat Yourself) 原则
* 每行行首要比上一行多一个缩进（每个缩进是两个空格）
* 每行行末不要有多余的空白符
* 一般情况，所有字符拼写都用小写
* 模块化开发
* 命名要用英文单词且具备语义
* 要有必要的注释，尤其是比较复杂的地方
* 尽量少写多余的无用的垃圾代码
* 不需要的代码要删掉，不要注释掉

## HTML

HTML 代码采用 HTML5 标准。

* 文档类型为 `<!DOCTYPE html>`
* 单行标签末尾不要有反斜杠，如：`<link rel="stylesheet">`
* `<img>` 标签要有 `alt` 属性，以在图片没显示出的时候知道是什么
* `<input>` 标签要指明 `type` 属性的值，即使值为 `text`
* `<input>` 和 `<textarea>` 要指定 `placeholder`
* 用 `tabindex` 属性设置表单元素填写顺序
* 用 `autofocus` 指定默认获取焦点的文本框
* `<button>` 标签要指明 `type` 属性的值

```html
<!DOCTYPE html>
<html lang="zh-CN" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <title>代码风格指导</title>
    <link rel="stylesheet" href="code-style-demo.css">
  </head>
  <body>
    <main>
      <header>
        <img src="img/logo.png" alt="网站 LOGO">
        <h1>代码风格指导</h1>
      </header>
      <form action="/login" method="post">
        <input type="text" value="" placeholder="请输入用户名" tabindex="1" autofocus="autofocus">
        <input type="password" value="" placeholder="请输入密码" tabindex="2">
        <button type="submit" tabindex="3">登录</button>
      </form>
    </main>
    <script src="code-style-demo.js"></script>
  </body>
</html>
```

## CSS

* 每条声明后面要用 `;` 结尾

更多请参照 [Principles of writing consistent, idiomatic CSS](https://github.com/necolas/idiomatic-css)

## JavaScript

* 每个文件都封闭成立即执行的匿名函数 `(function() {})();` 以保证不会变量污染
  * 如果使用的构建工具中具备包装文件（wrapper）的功能，在编写源码时不必遵守
* 每条语句后面要用 `;` 结尾
* 每个函数尽可能地简短，每个函数都是一个小模块，完成一个小功能

```js
// code-style-demo.js 文件
(function() {

function isFormValid( $form ) {
  if ( $("[type='text']", $form).val() === "" ) {
    return "用户名不能为空！";
  }

  if ( $("[type="password"]", $form).val() === "" ) {
    return "密码不能为空！";
  }

  return true;
}

$("form").on("submit", function() {
  var validateResult = isFormValid($(this));

  if ( validateResult !== true ) {
    alert(validateResult);

    return false;
  }
});

})();
```

更多请参照 [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js)

## className 命名规则

所谓的「className」，既是 HTML 的 `class` 属性，又是 CSS 中的 `class`，它的命名方式在前端开发中具有很重要的作用，影响着项目的质量。我们的项目中采用基于 [SUIT](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) 的方式对其命名：

* u-utilityName
* js-actionName
* ComponentName
* ComponentName--modifierName
* ComponentName-descendentName
* ComponentName-descendentName--modifierName
* ComponentName.is-stateOfComponent

其中 `js-actionName` 是扩充进去的，代表 DOM 元素的事件绑定触发器。（参考 Nicolas Gallagher 的《[About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/#javascript-specific-classes)》）

```html
<button type="button" class="js-openDialog">打开对话框</button>

<!-- 对话框 -->
<div class="Dialog">
  <div class="Dialog-header">
    <h3>对话框标题</h3>
    <button type="button" class="Dialog-button Dialog-button--close js-closeDialog">关闭</button>
  </div>
  <div class="Dialog-body">
    <p>我是对话框呀，啦啦啦～</p>
  </div>
  <div class="Dialog-footer u-clearfix">
    <button type="button" class="Dialog-button Dialog-button--ok is-disabled">确定</button>
    <button type="button" class="Dialog-button Dialog-button--cancel js-closeDialog">取消</button>
  </div>
</div>
```

```scss
/**
 * Clearfix
 */
.u-clearfix {
  &:before,
  &:after {
    content: "\0020";
    display: table;
  }

  &:after {
    clear: both;
  }
}


/**
 * Dialog
 */
.Dialog {
  display: none;

  &.is-shown {
    display: block;
  }
}

.Dialog-header {
  // 对话框标题
  h3 {}
}
.Dialog-body {
  p {}
}
.Dialog-footer {}

.Dialog-button {
  padding: 0;
  text-align: center;
  cursor: pointer;

  &.is-disabled {
    color: #fff !important;
    background-color: #c5c5c5 !important;
    cursor: default !important;
  }
}
.Dialog-button--close {}
.Dialog-button--ok {}
.Dialog-button--cancel {}
```

```js
// 打开对话框
$(".js-openDialog").on("click", function() {
  $(".Dialog").closest(".Dialog").addClass("is-shown");

  return false;
});

// 关闭对话框
$(".js-closeDialog").on("click", function() {
  $(this).closest(".Dialog").removeClass("is-shown");

  return false;
});
```
