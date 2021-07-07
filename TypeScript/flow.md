# Flow
JavaScript的静态类型检查器，插件工具
### 方式
通过给变量/参数添加注解（类型注解）来实现在开发阶段对类型的检查，避免了运行后才发现错误；
### 安装应用
```
yarn init --yes //初始化并保存config
yarn add flow-bin --dev //在此项目添加flow工具
yarn flow init //初始化flow
yarn flow //运行flow检测 运行之前需要在被检测的代码页设置@flow以标记其需要检测 
yarn flow stop //停止flow
```
>注意：使用flow时需要关闭工具的代码检测工具，vscode在设置中搜索javascript validate,取消勾选
>可以通过安装vscode插件'Flow Language Support'，直接标记出检测结果，而不用每次运行检测
### 编译移除类型注解
- 方式一：使用flow自有的remove插件移除
```
yarn add flow-remove-types --dev //安装移除插件
yarn flow-remove-types src -d dist //移除注解，并将编译好的文件放入dist文件夹中
```
- 方式二：使用babel插件移除
```
yarn add @babel/core @babel/cli @babel/preset-flow --dev //安装babel 
yarn babel src -d dist
```
安装过后需在根目录添加.babelrc配置文件，配置内容如下：
```
{
    "presets": ["@babel/preset-flow"]
}
```
>个人感觉babel更好些，编译移除后代码格式更规范

[代码示例](/TypeScript/flow/src/flow.js)
