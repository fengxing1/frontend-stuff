# 通用样式

## 目录

* [UI 组件](#ui-组件)
  * [按钮](#按钮)
  * [Select2](#select2)
* [工具](#工具)
  * [对齐](#对齐)
  * [显示](#显示)
  * [布局](#布局)
  * [链接](#链接)
  * [文本](#文本)

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

### Select2

根据设计图对第三方插件 Select2 进行部分样式的覆盖。

```html
<select>
  <option value="">选择城市</option>
  <option value="hangzhou">杭州</option>
  <option value="quzhou">衢州</option>
</select>
```

在初始化时需要添加两个自定义的 class：

```js
$("select").select2({
  containerCssClass: "mhc-Select2-container",
  dropdownCssClass: "mhc-Select2-dropdown"
});
```

## 工具

### 对齐

`vertical-align` 相关。

* `u-alignBaseline` - 以基线为准
* `u-alignBottom` - 靠底部
* `u-alignMiddle` - 居中
* `u-alignTop` - 靠顶部

### 显示

`display` 相关。

* `u-block` - 显示为块元素
* `u-hidden` - 完全隐藏
* `u-hiddenVisually` - 视觉上隐藏，但对读屏软件有效
* `u-inline` - 显示为行内元素
* `u-inlineBlock` - 显示为行内块
* `u-table` - 显示为表格
* `u-tableCell` - 显示为表格单元格
* `u-tableRow` - 显示为表格行

### 布局

* `u-cf` - 清除浮动
* `u-nbfc` - 创建新的[块级格式化上下文](https://www.w3.org/TR/CSS21/visuren.html#block-formatting)
* `u-nbfcAlt` - 创建新的块级格式化上下文（替代方案）
* `u-floatLeft` - 向左浮动
* `u-floatRight` - 向右浮动

### 链接

* `u-linkBlock` - 无下划线的块级链接
* `u-linkClean` - 无下划线的链接
* `u-linkComplex` - 限制只在指定内容的交互上显示下划线

### 文本

* `u-textBreak` - 当字符串长度超过容器宽度时折行
* `u-textCenter` - 文本居中对齐
* `u-textLeft` - 文本居左对齐
* `u-textRight` - 文本居右对齐
* `u-textInheritColor` - 文字颜色继承父级
* `u-textKern` - 在支持的浏览器中支持 [kerning](http://blog.typekit.com/2014/02/05/kerning-on-the-web/)
* `u-textNoWrap` - 去除空白符包装
* `u-textTruncate` - 使文字显示在一行中，超出容器宽度部分显示省略号
