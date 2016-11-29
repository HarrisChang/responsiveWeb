## 2 组织项目文件结构(适用于中小项目)
#### 2.1基本目录结构
1. doc　//用于存放项目相关文档
2. src　//文件资源文件夹
   - css　　  //样式文件夹
   - js　　　//脚本文件夹
   - image　//图片文件夹
   - less　　//less文件夹(根据公司要求或个人喜好选择自动化构建工具，本文使用gulp工具)
   > **备注**：重置样式时，推荐使用normalize.css，传统的resetStyle会使得所有标签的样式统一。而normalize.css在消除不同浏览器解析差异的同时又会保持标签的个性样式，是较好的选择。在windows环境下使用命令行`npm install --save normalize.css`即可下载。
#### 2.2非常规文件
1. robots.txt　// robots.txt是一个协议，而不是一个命令。robots.txt是搜索引擎中访问网站的时候要查看的第一个文件。robots.txt文件告诉蜘蛛程序在服务器上什么文件是可以被查看的。当然这只是互联网的道德规范，并非所有的浏览器商都是君子，安全系数为0。
2. [humans.txt](http://www.humanstxt.org.cn/)　//包含了参加该网站创建人员的信息，如团队成员、感谢和站点的技术信息。 通过该文本文件，可以快速了解该网站背后的团队信息以及他们的故事。
3. [editorconfig](http://editorconfig.org/)　//用来使不同的IDE根据该文件显示相同的代码风格，便于程序员在不同IDE中维护，包括缩进格式、编码格式、换行规格。
   > **example**
root = true　最顶层的配置文件，之后再不会查找其他文件
[\*]　以下规则应用于所有文件
charset = utf-8　所有文件的编码格式为utf-8
indent_size = 4　代码缩进的空格数，可为tab
indent_style = space　代码缩进的样式，为空格
insert_final_newline = true　每个文件以空白行结尾
trim_trailing_whitespace = true　去除换行行首的空白字符
[\*.md]　以下规则引用与markdown文件
trim_trailing_whitespace =  false　在md文件中，不去除换行行首的空白字符
4. [package.json](http://www.ydcss.com/archives/18)　//定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。npm install命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。
5. [gulpfile.js](http://www.ydcss.com/archives/18)　//gulp项目的配置文件，是位于项目根目录的普通js文件
6. gitignore　//告诉git版本控制工具，哪些文件不需要添加到版本管理中
7. LICENSE.txt　//用来存放许可协议，名称为大写，包括版权声明，开源协议
8. CHANGLOG.md　//用来存放项目每个版本的更新，以及说明版本号、更新内容、修复了哪些问题等
9. README.md　//用来存放项目简介、使用方式、相关连接