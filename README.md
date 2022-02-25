<p align="center">
    <img src="https://github.com/yuminjustin/spotlight-cli/blob/master/static/white.png">
</p>
<blockquote>
<br>
一个简单的前端项目脚手架，整体构建参照vue-cli 2.0.  <br>
A simple front-end project scaffolding, the overall build reference vue-cli 2.0. 
<br><br>
</blockquote>

### Install

    npm install -g spotlight-cli

### create a project

    /*js*/
    spotlight <template-name> <project-name>
    /*ts*/
    spotlight ts <template-name> <project-name>

example:

    /*js*/
    spotlight react my-project
    /*ts*/
    spotlight ts react my-project

<blockquote>
<br>
可以支持的template如下(安装完毕后使用 “spotlight” 命令可查阅)：<br>
The templates that can be supported are as follows (use the “spotlight ” command after installation)
<br><br>
</blockquote>

    1. normal                 es6
    2. react                  react
    3. redux                  react+redux+router+antd(bad)
    4. vue                    vue2
    5. vuex                   vue2+vuex+route+element-ui
    6. backbone               backbone+router IE(bad)
    7. mithril                mithril+router
    8. san                    san IE(bad)
    9. mobx                   react+mobx+router+antd3(bad)
    10. hook                  react hook+mobx+router+antd4
    11. ts normal             typescript
    12. ts react              typescript+react
    13. ts vue                typescript+vue2
    14. ts hook               react hook+typescript+mobx+router+antd4

## windows10 error
    ...
    参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
    ...
    + spotlight
    +
        + CategoryInfo          : SecurityError: (:) [],PSSecurityException
        + FullyQualifiedErrorId : UnauthorizedAccess

<blockquote>
如果在window10 PowerShell 使用中遇到上述报错时，简单设置一下即可：<br/>
在开始菜单搜索powershell，右键以管理员运行<br/>
输入： set-executionpolicy remotesigned  回车 <br/>
再输入：y <br/>
完毕
</blockquote>

## gulp
<blockquote>
多套模板都涉及到和gulp的配合使用，所以请确保你的gulp是全局安装的！
</blockquote>

## Suggest
### 考虑IE
<blockquote>
如果你的项目需要兼容到IE8甚至更低，建议使用san和backbone模板，优先推荐使用san。san模板去掉了router，需要自行配置；san拥有虚拟dom和数据绑定使你项目更高效和易于管理；<br><br>
</blockquote>

### 不考虑IE
<blockquote>
移动端推荐使用mithril 或者 vue, 复杂一些需求而且今后有很多扩展的项目建议用 vue 或 react；<br>
大型项目推荐使用vue全家桶 或者 react+mobx组合；
</blockquote>

### History router 支持
<blockquote>
如果要使用History router，在配置（config.js）中将html5Router设置为true，build后的代码将默认支持Apache服务器，ngix 需要另外配置，如下：
</blockquote>

        location / {
            try_files $uri $uri/ /index.html;
        }

### spotlight模板已全部升级至webpack5（部分）

### 添加autoprefixer 和 css-modules

### Typescript (research)

### 新增React hook 模板
