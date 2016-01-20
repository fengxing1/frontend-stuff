"use strict";

// FIS 全局属性
fis.set("project.md5Connector", "-");
fis.set("project.ignore", [
  "bower_components/**",
  "node_modules/**",
  "*-INF/**",
  "velocity/**",
  "fis-conf.js",
  "bower.json",
  "package.json",
  ".*"
]);

// 项目变量
fis.set("proj_name", "mini");
fis.set("proj_ver", "1.1");

// 开发环境
// fis3 release -w
fis
  .media("dev")
  .match("_*.*", {
    release: false
  }, true)
  .match("*.*", {
    deploy: fis.plugin("local-deliver", {
      to: "."
    })
  })
  .match("*.scss", {
    rExt: ".css",
    parser: fis.plugin("node-sass")
  }, true)
  .match("*.{vm,html,xml,properties}", {
    release: false
  });

// 测试环境
// fis3 release qa
fis
  .media("qa")
  .match("*.scss", {
    release: false
  }, true)
  .match("*.{css,js,jpg,png,gif}", {
    useHash: true
  })
  .match("*.css", {
    optimizer: fis.plugin("clean-css")
  })
  .match("*.js", {
    optimizer: fis.plugin("uglify-js"),
    postprocessor: fis.plugin("jswrapper")
  })
  .match("*.png", {
    optimizer: fis.plugin("png-compressor")
  })
  .match("**", {
    release: "$0",
    domain: "//hmc.com",
    deploy: fis.plugin("local-deliver", {
      to: "../webapp_qa"
    })
  })
  .match("/bower_components/(**)", {
    useHash: false,
    release: "/assets/lib/$1"
  })
  .match("/template/{components,views}/**.js", {
    isMod: true
  })
  .match("/template/components/(**.{css,js,png,jpg,gif})", {
    release: "/assets/${proj_name}/${proj_ver}/c/$1"
  })
  .match("/template/views/(**.{css,js,png,jpg,gif})", {
    release: "/assets/${proj_name}/${proj_ver}/p/$1"
  })
  .match("/template/views/**", {
    useSameNameRequire: true
  });

// 线上环境
// fis3 release prod
fis
  .media("prod")
  .match("*.scss", {
    release: false
  }, true)
  .match("*.{css,js,jpg,png,gif}", {
    useHash: true
  })
  .match("*.css", {
    optimizer: fis.plugin("clean-css")
  })
  .match("*.js", {
    optimizer: fis.plugin("uglify-js"),
    postprocessor: fis.plugin("jswrapper")
  })
  .match("*.png", {
    optimizer: fis.plugin("png-compressor")
  })
  .match("**", {
    release: "$0",
    domain: "//img.mhc.com",
    deploy: fis.plugin("local-deliver", {
      to: "../webapp_prod"
    })
  })
  .match("/bower_components/(**)", {
    useHash: false,
    release: "/lib/$1"
  })
  .match("/template/{components,views}/**.js", {
    isMod: true
  })
  .match("/template/components/(**.{css,js,png,jpg,gif})", {
    release: "/${proj_name}/${proj_ver}/c/$1"
  })
  .match("/template/views/(**.{css,js,png,jpg,gif})", {
    release: "/${proj_name}/${proj_ver}/p/$1"
  })
  .match("/template/views/**", {
    useSameNameRequire: true
  });
