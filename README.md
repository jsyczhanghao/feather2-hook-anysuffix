feather2-hook-anysuffix
===============================

解决feather2不支持对非components目录中的js和css文件require或import时必须写后缀的问题

## 使用

```sh
npm install feather2-hook-anysuffix --save-dev
```

```js
//conf.js
//修改原本查找的hook为feather2-hook-anysuffix
feather.config.set('modules.hook', 'anysuffix');
```

```sh
feather2 release
```

### 注意： 目前插件不支持lothar，需知，慎用