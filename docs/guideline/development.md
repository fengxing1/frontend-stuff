# 项目开发

## 目录

* 环境搭建
  * [Compass](#Compass)
  * [Node.js](#Node.js)
* [启动应用](#启动应用)

## Compass

前端开发时所使用的 [Sass](http://sass-lang.com/) 和 [Compass](http://compass-style.org/) 依赖于 Ruby，虽然 Mac 系统中自带了，但不太好用，所以需要重装一下。

### 安装 Ruby 版本管理工具 [rbenv](https://github.com/rbenv/rbenv)

```sh
# 下载 rbenv
git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
# 映射命令
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
# 初始化
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
# 将 ruby-build 作为 rbenv 的子命令
git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
```

### 安装 Ruby

```sh
# 查看可用 Ruby 版本
rbenv install -l
# 选择安装 Ruby 版本
rbenv install VERSION
# 设置全局的 Ruby 版本
rbenv global VERSION
```

### 更新 Gem 源

因为众所周知的原因，原本的源经常不好用，所以需要更新为国内的。

```sh
# 删除默认源
gem sources -r https://rubygems.org/
# 添加淘宝镜像
gem sources -a https://ruby.taobao.org/
# 更新缓存
gem sources -u
```

### 安装 Compass

```sh
sudo gem install compass
```

## Node.js

### 安装 NVM

「[NVM](https://github.com/creationix/nvm)」全名为「Node Version Manager」，顾名思义，是 Node.js 的版本管理工具，可以在不同的 Node.js 版本中自由切换。

执行命令`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash`

然后，用命令`vim ~/.profile`打开 .profile 文件，添加一行代码`source ~/.nvm/nvm.sh`

最后，执行`source ~/.profile`

现在，可以试试`nvm --version`了。如果正常看到nvm 的版本号，就说明，nvm安装成功了。

### 安装 Node.js

执行 `nvm install 0.12`，就能安装 Node.js 的0.12版本了。

### 使用 Node.js

如果新打开一个命令终端，需要先执行 `nvm use 0.12`，才能开始使用 Node.js。

使用前，可以试试 `node -v`，看看当前，是否成功切换到了 Node.js 的 `0.12` 版本。

## 启动应用

开发功能需要在 IntelliJ IDEA 中进行。首先要启动应用，让程序可以正常跑起来，然后用监听模式启动 FIS 以将前端源文件的改变能够随时编译。

### 应用打包构建

基本每个项目的启动都是要执行一个脚本文件，假设项目目录是 `/Users/USER/work/PROJ`。

如果项目根目录中有个 `build.sh` 文件，不要直接修改它，而是拷贝一份再修改里面的路径。

```sh
# 拷贝执行脚本
cp ~/work/PROJ/build.sh ~/work/PROJ/build_USER.sh
# 修改脚本中的路径
vim ~/work/mini/build_USER.sh
```

通过 `sh ~/work/PROJ/build_USER.sh` 启动应用。

### 前端源码构建

```sh
# 切换到 fis-conf.js 所在目录
cd ~/work/PROJ/PROJ-web/src/main/webapp
# 以监听模式执行开发环境的构建任务
fis3 release -w
```