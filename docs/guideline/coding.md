# 编写页面

我们公司的工作流程是：产品提需求；设计出图稿；前端做页面。设计师所出的设计稿，会是 Photoshop 或者 Sketch 的文件，所要编写的页面中的图标、图片等需要自己从设计稿中导出。

时不时会有做活动页面的需求，这时的需求方可能是产品，也可能是运营。活动页面是种较为特殊的页面。如果说开发功能是考验编程和架构能力，那么做活动页面就是考验切图和重构能力。相对来说，这个比较难些，因为**活动页面是要在尽可能短的时间内做出尽可能语义化的页面**。

## 目录

* [切图](#切图)
	* [丈量尺寸](#丈量尺寸)
	* [测量间距](#测量间距)
	* [导出图片](#导出图片)

## 切图

虽然用的是不同的图形处理工具，但是步骤和方法都差不多。

### 丈量尺寸

在 Photoshop 中，在目标图层上按下 <kbd>command</kbd> + <kbd>T</kbd> 选中，然后 <kbd>fn</kbd> + <kbd>F8</kbd> 显示所选图层信息。

![](coding/size-in-photoshop.png)

在 Sketch 中，选中想要查看的对象，右侧的属性面板中有相关信息。

![](coding/size-in-sketch.png)

### 测量间距

选中层后，在 Photoshop 中按住 <kbd>command</kbd> 或在 Sketch 中按住 <kbd>option</kbd>，光标移动到目标层上就会出现相关信息。

### 导出图片

在 Photoshop 中有两种导出图片的方式：

* 在图层列表中选中要导出的图层点击右键，选择「快速导出为 PNG」；
* 用切片工具切好区块后按 <kbd>option</kbd> + <kbd>shift</kbd> + <kbd>command</kbd> + <kbd>S</kbd>。

![](coding/export-in-photoshop.png)

在 Sketch 中导出图片更简单些。选中图片点击右侧面板底部的「Make Exportable」出现导出选项。

![](coding/export-in-sketch-step-1.png)

选择要导出的尺寸，默认只有 1 倍大小的，然后导出图片。

![](coding/export-in-sketch-step-2.png)

