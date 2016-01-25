# 通用样式

## UI 组件

### 按钮

「按钮」可以是 `<button>` 也可以是 `<a>`，具体使用哪个标签要根据情境而定。无论是哪种形式的按钮，都要加一个 `.Button`，然后按情形添加以下 class：

* 基本按钮（橙色）添加 `.Button--primary`
* 失效不能点击的按钮，`<button>` 添加 `disabled` 属性，`<a>` 添加 `.is-disabled`
* 小一号的按钮添加 `.Button--small`

按钮的默认高度为 `35px`。

```html
<!-- 基本的按钮（橙色） -->
<button type="button" class="Button Button--primary">按钮</button>
<!-- 失效的按钮（灰色） -->
<button type="button" class="Button Button--primary" disabled>按钮</button>
<!-- 小的按钮 -->
<button type="button" class="Button Button--small Button--primary">按钮</button>

<!-- 基本的仿按钮链接 -->
<a href="#" class="Button Button--primary">仿按钮链接</a>
<!-- 失效的仿按钮链接 -->
<a href="#" class="Button Button--primary is-disabled">仿按钮链接</a>
```
