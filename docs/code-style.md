# 代码风格指导

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
<div class="Dialog is-shown">
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
.Dialog {}

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