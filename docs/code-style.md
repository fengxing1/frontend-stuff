# 代码风格指导

## [SUIT](http://suitcss.github.io) 命名规则

```html
<div class="Dialog is-shown">
  <div class="Dialog-header">
    <h3>对话框标题</h3>
    <button type="button" class="Dialog-button Dialog-button--close js-closeDialog">关闭</button>
  </div>
  <div class="Dialog-body"></div>
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

.Dialog-header {}
.Dialog-body {}
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
.Dialog-button--ok {
}
.Dialog-button--cancel {}
```

```js
$(".js-closeDialog").on("click", function() {
  $(this).closest(".Dialog").removeClass("is-shown");

  return false;
});
```