<p align="center">
    <img src="https://github.com/yuminjustin/spotlight-cli/blob/master/static/sp_wihte.png">
</p>
一个简单的前端项目脚手架，整体构建参照vue-cli.  <br>
A simple front-end project scaffolding, the overall build reference vue-cli. <br>

### Install

    npm install -g spotlight-cli

### create a project

    spotlight init <template-name> <project-name>

example:

    spotlight init react my-project



可以支持的template如下(安装完毕后使用 “spotlight” 命令可查阅)：<br>
The templates that can be supported are as follows (use the “spotlight ” command after installation)<br><br>

    1. normal           (es6)  
    2. react              (react) 
    3. react_all         (react+redux+router+ant)
    4. vue                (vue)
    5. vue_all           (vue+vuex+router+element-ui) 
    6. backbone       (backbone+router)
    7. mithril            (mithril+router)
    8. san                (san)
    9. mobx             (react+mobx+router+ant)
    
    
<br><br>

### Suggest
#### 考虑IE 
        如果你的项目需要兼容到IE8甚至更低，建议使用san和backbone模板，优先推荐使用san。san模板去掉了router，需要自行配置；san拥有虚拟dom和数据绑定使你项目更高效和易于管理；<br><br>
#### 不考虑IE
        移动端推荐使用mithril 或者 vue, 复杂一些需求而且今后有很多扩展的项目建议用 vue 或 react；<br><br>
        大型项目推荐使用vue全家桶 或者 react+mobx组合；
