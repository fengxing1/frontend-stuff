# Git 规范

## 使用方式

### 准则

* 使每个 commit 都有质量
  * 每个 commit 是一个小的 feature
    * 避免相同 feature 的多个 commit
  * commit 信息要言简意赅

## 分支管理

采用 [Git flow](http://nvie.com/posts/a-successful-git-branching-model/) 方式来管理分支。

![Git Flow](https://raw.githubusercontent.com/xirong/my-git/master/images/git-workflow-release-cycle-4maintenance.png "Git Flow")

### 分支类型

1. master 分支：包含稳定版本，随时可以发布，且不应该直接向它提交代码；
2. develop 分支：最新的开发分支，不能直接向 develop 分支提交代码，可以通过 feature 分支合并到 develop 分支；
3. feature 分支：可以同时存在多个，开发新功能的时候，可以从 develop 分支拉出一个 feature 分支；
4. release 分支：同一时间，只存在 1 个，生命周期很短，仅仅是为了发布；
5. hotfix 分支：同一时间，只存在 1 个，生命周期很短，用来修复 bug，或者小粒度修改发布。

更多信息可参考 [Git Flow 工作流](https://github.com/xirong/my-git/blob/master/git-workflow-tutorial.md)。

### 简要流程

1. 开发新功能的时候，从 develop 分支拉出一条新的 feature 分支。
  * 如果该 feature 分支只是一个人开发，那么可以不 push 到远程仓库；
  * 如果该 feature 分支多人开发，那么必须 push 到远程仓库。
2. 新功能开发完成后，合并回 develop 分支。（注：feature 分支从不直接与 master 分支进行交互）
3. 当 develop 分支的功能，足以进行发布的时候，创建 release 分支。release 分支创建后，新功能不可以提交到该分支，但是可以进行一些 bug 修复的工作。如果有新功能，可以留在下一次发布。
4. 发布 release 分支。
5. release 分支发布完成后，需要将该分支合并到 master 分支并分配一个版本号并打上 tag。紧接着，将该 release 分支合并到 develop 分支上去。这个合并过程，SourceTree 能自动完成。
6. 如果发现线上版本有 bug，比如 master 分支，新发现一个 bug。可以创建 hotfix 分支进行修复。这个是**唯一**可以直接从 master 分支 fork 出来的分支。
7. hotfix 分支只能存在一个，修复完成后需要马上合并回 master 分支和 develop 分支，SourceTree 也能自动完成。

### 命名规则

* feature 分支：按照功能点（而不是需求）命名
* release 分支：用发布时间命名
  * tag：用[语义化的版本号](http://semver.org/lang/zh-CN/)命名（大调整结束之前主版本号为「0」）
* hotfix 分支：issue 编号或 bug 性质等

### 代码合并

搭建 [GitLab](https://about.gitlab.com/downloads) 来辅助代码审核及分支合并，团队中只有一两个人有主分支（master 和 develop 分支）的管理权限。

整个流程如下：

1. 普通人员根据任务内容创建对应分支
2. 开发完并自测之后发送 merge request
3. 管理人员审核代码
  * 有问题时通知负责开发的人修改代码
  * 没问题时接受请求
