# doc
买好车Web前端 - 开发文档

## 新人必读
1. 邮箱设置（参考[教程](https://tower.im/projects/3c8822895be84eb8935f4433772b5b9e/docs/1160acd8aeb54d408f6034412906da33/ "邮箱设置教程")）
2. 开通[tower](https://tower.im/ "tower")账号。入职后，HR会发送一封tower邀请邮件，接受邀请即可。
3. 开通钉钉账号。

## 环境搭建以及常用工具
1. Mac电脑，强烈建议安装[Homebrew](http://brew.sh/ "HomeBrew")，安装步骤参照其[官网](http://brew.sh/ "Homebrew官网")
2. Nginx、Maven等都可以通过Homebrew进行安装和管理
3. 安装[麦宝](http://www.macabc.com/ "麦宝")，大部分常用软件都可以通过它进行下载安装
4. Intellij IDEA，通过麦宝下载。附[在线注册机](http://macabc.com/detail.htm?app_id=4 "Intellij IDEA在线注册机")
5. [Sublime Text](http://www.sublimetext.com/ "Sublime Text")安装。
6. PhotoShop下载与安装
7. Sketch下载与安装

## 调试环境配置

为了能够完整地调试所有功能，需要配置一个自定义域名，示例中将该域名定为 `mhc.com`。

### Web 服务

将 `***.properties` 文件中的 `***.domain` 的值改为 `mhc.com`。

### Nginx

1. 终端输入 `brew install nginx`
2. Finder 界面 <kbd>shift</kbd> + <kbd>cmd</kbd> + <kbd>G</kbd> 打开 `/usr/local/etc/nginx`
3. 编辑 `nginx.conf`
4. 修改如下配置
    ```
    server {
      listen 80;
      server_name localhost;

      location / {
        proxy_pass http://127.0.0.1:8080;
      }
    }
    ```

### hosts 文件

1. 终端输入 `sudo vi /etc/hosts`
2. 将域名映射到本地 IP，如 `127.0.0.1    mhc.com`
