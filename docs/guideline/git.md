# Git

Git 是现在很常用并且很好的代码版本管理工具。

## 目录

* [基本概念](#基本概念)
	* [常用命令](#常用命令)
	* [Git Flow](#git-flow)
* [协作规范](#协作规范)
	* [代码提交](#代码提交)
	* [代码合并](#代码合并)
	* [分支管理](#分支管理)

## 基本概念

### 常用命令

Git 中的命令有很多，但工作中常用的无外乎那么几种：

* `git fetch`——从远程仓库获取代码更新；
* `git pull`——从远程仓库拉取最新代码到本地仓库；
* `git status`——查看本地文件状态；
* `git add`——将本地文件的修改添加到「提交列表」；
* `git commit`——将「提交列表」中的文件提交到本地仓库；
* `git stash`——将未提交的已修改文件添加到暂存区；
* `git rebase`——更改提交所基于的节点；
* `git merge`——合并其他分支的代码到当前分支；
* `git push`——将提交到本地仓库的改变推送到远程仓库。

从远程仓库新拉取代码时：

* `git remote`——设置远程仓库源；
* `git clone`——从远程仓库克隆代码到本地。

对分支进行操作时：

* `git checkout`——切换分支或节点；
* `git branch`——新建或删除分支。

代码出现问题时：

* `git reset`——将当前代码重置到指定提交节点；
* `git revert`——把当前代码恢复到指定提交节点并产生新的提交节点。

上述代码的具体含义和使用方式请看[官方文档](https://git-scm.com/book/zh/)或廖雪峰所写的《[Git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)》。

### Git Flow

这是一个很成熟的分支管理模型，它能够应对 99% 的场景，剩下的那 1% 留给几乎不存在的极度变态的场景。

简单说来，[Git flow](http://nvie.com/posts/a-successful-git-branching-model/) 就是给原本普普通通的分支赋予了不同的「职责」：

* **master**——最为稳定功能最为完整的随时可发布的代码；
* hotfix——修复线上代码的 bug；
* release——发布定期要上线的功能；
* **develop**——永远是功能最新的分支；
* feature——某个功能点正在开发阶段。

看到上面的「master」和「develop」加粗了吧？代表它们是「主分支」，其他的分支是基于它们派生出来的。各类型分支之间的关系用一张图来表现就是：

![Git Flow](git/git-workflow-release-cycle-4maintenance.png "Git Flow")

更多信息可参考 xirong 所整理的《[Git工作流指南](https://github.com/xirong/my-git/blob/master/git-workflow-tutorial.md)》。

## 协作规范

### 代码提交

如何去写一个提交信息，《[Git: 教你如何在Commit时有话可说](http://mp.weixin.qq.com/s?__biz=MzAwNDYwNzU2MQ==&mid=401622986&idx=1&sn=470717939914b956ac372667ed23863c&scene=2&srcid=0114ZcTNyAMH8CLwTKlj6CTN&from=timeline&isappinstalled=0#wechat_redirect)》中做了很好的说明。在具体开发工作中主要需要遵守的原则就是「使每个 commit 都有质量」，只要坚持做到以下几点就 OK 了：

* 每个提交是一个小的功能点，避免相同功能点的多个提交；
* 提交信息的简述要言简意赅，详情要精炼简洁。

### 代码合并

搭建 [GitLab](https://about.gitlab.com/downloads) 来辅助代码审核及分支合并，团队中只有一两个人有主分支的管理权限。

整个流程如下：

1. 普通人员根据任务内容创建对应分支；
2. 开发完并自测之后发送「合并请求（merge request）」；
3. 管理人员审核代码：
  * 有问题时通知负责开发的人修改代码；
  * 没问题时接受请求。

在合并代码时，要尽量使用 `git rebase` 而避免 `git merge`，这是为了减少提交图表上出现很多无用的合并提交节点，保持记录的清洁且可追踪。请按照以下步骤进行操作：

1. 切换到 develop 分支并拉取远程仓库的最新代码；
2. 切回 feature 分支并通过 `git rebase` 将 develop 分支的代码合并进来；
3. 将本地仓库的代码推送到远程仓库；
4. 发送将 feature 分支合并至 develop 分支的合并请求；
5. 通知并等待分支管理人员对合并请求进行处理。

虽然提倡使用 `git rebase`，但也要分场景，盲目使用会一团糟！**只能在尚未创建远程分支时使用。**否则会产生冲突和一堆重复的提交节点。**建议当自己一个人进行开发时，在功能完成之前不要急着创建远程分支。**

### 分支管理

#### 简要流程

1. 开发新功能的时候，从 develop 分支拉出一条新的 feature 分支。
  * 如果该 feature 分支只是一个人开发，那么可以不 push 到远程仓库；
  * 如果该 feature 分支多人开发，那么必须 push 到远程仓库。
2. 新功能开发完成后，合并回 develop 分支。（注：feature 分支从不直接与 master 分支进行交互）
3. 当 develop 分支的功能，足以进行发布的时候，创建 release 分支。release 分支创建后，新功能不可以提交到该分支，但是可以进行一些 bug 修复的工作。如果有新功能，可以留在下一次发布。
4. 发布 release 分支。
5. release 分支发布完成后，需要将该分支合并到 master 分支并分配一个版本号并打上 tag。紧接着，将该 release 分支合并到 develop 分支上去。这个合并过程，SourceTree 能自动完成。
6. 如果发现线上版本有 bug，比如 master 分支，新发现一个 bug。可以创建 hotfix 分支进行修复。这个是**唯一**可以直接从 master 分支 fork 出来的分支。
7. hotfix 分支只能存在一个，修复完成后需要马上合并回 master 分支和 develop 分支，SourceTree 也能自动完成。

#### 命名规则

* feature 分支：按照功能点（而不是需求）命名
* release 分支：用发布时间命名
  * tag：用[语义化的版本号](http://semver.org/lang/zh-CN/)命名
* hotfix 分支：issue 编号或 bug 性质等
