feather2-hook-anysuffix
===============================

解决feather2不支持对非components目录中的js和css文件require或import时必须写后缀的问题

## 使用

```sh
npm install feather2-hook-anysuffix --save-dev
```

```js
//conf.js
//新增一个查找任意后缀的hook
feather.config.set('modules.hook', 'anysuffix');
//支持查找es6，vue
feather.config.set('project.fileType.js', ['es6', 'vue']);
```

```js
//static/xxx.js

import A from './a'; //先查找./a.es6, 在查找./a.vue

//查找当前文件下的./index文件

require.async('./', () => {
	//do anything
})
```

```sh
feather2 release
```

### 注意： 目前插件不支持lothar，需知，慎用