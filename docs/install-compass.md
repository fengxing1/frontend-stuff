# 安装 Compass

前端开发时所使用的 [Sass](http://sass-lang.com/) 和 [Compass](http://compass-style.org/) 依赖于 Ruby，虽然 Mac 系统中自带了，但不太好用，所以需要重装一下。

## 安装 Ruby 版本管理工具 [rbenv](https://github.com/rbenv/rbenv)

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

## 安装 Ruby

```sh
# 查看可用 Ruby 版本
rbenv install -l
# 选择安装 Ruby 版本
rbenv install VERSION
# 设置全局的 Ruby 版本
rbenv global VERSION
```

## 更新 Gem 源

因为众所周知的原因，原本的源经常不好用，所以需要更新为国内的。

```sh
# 删除默认源
gem sources -r https://rubygems.org/
# 添加淘宝镜像
gem sources -a https://ruby.taobao.org/
# 更新缓存
gem sources -u
```

## 安装 Compass

```sh
sudo gem install compass
```
