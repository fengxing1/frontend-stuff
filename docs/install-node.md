# 安装 Node.js

## 安装 NVM

「[NVM](https://github.com/creationix/nvm)」全名为「Node Version Manager」，顾名思义，是 Node.js 的版本管理工具，可以在不同的 Node.js 版本中自由切换。

执行命令`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash`

然后，用命令`vim ~/.profile`打开 .profile 文件，添加一行代码`source ~/.nvm/nvm.sh`

最后，执行`source ~/.profile`

现在，可以试试`nvm --version`了。如果正常看到nvm 的版本号，就说明，nvm安装成功了。

## 安装node

执行 `nvm install 0.12`，就能安装 Node.js 的0.12版本了。

## 使用node

如果新打开一个命令终端，需要先执行 `nvm use 0.12`，才能开始使用Node.js。

使用前，可以试试`node -v`，看看当前，是否成功切换到了 Node.js的0.12版本。
