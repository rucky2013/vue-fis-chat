/**
 * File:    fis-conf.js.
 * Date:    2016/1/25.
 * Creator: CheneyLiu.
 */

// 设置不产出文件, 及目录
fis.match('*.md', { release: false });
fis.match('package.json', { release: false });
fis.match('mock/**', { release: false });

// 模块钩子
fis.hook('commonjs');

// 依赖模块
fis.match("/modules/*.js", {
  isMod: true,
  useMap: true,
  release: '/static/$0'
});

//components下面的所有js资源都是组件化资源
fis.match("/components/**", {
  isMod: true,
  release: '/static/$0'
});
//component组件资源id支持简写
fis.match(/^\/components\/(.*)$/i, {
  id : '$1'
});

// 图像资源
fis.match(/static\/images\/.*\.(jpeg|jpg|png)$/,{
  useHash: false
});

// 提交
fis.match('::packager', {
  // npm install [-g] fis3-postpackager-loader
  // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
  postpackager: fis.plugin('loader', {
    resourceType: 'mod',
    useInlineMap: true // 资源映射表内嵌
  }),
  packager: fis.plugin('map'),

}).match('**/*.css', {
  packTo: '/static/pkg/all.css' //css打成一个包
});

//  生产模式
fis.media('prod')
    .match('**.js', {
      optimizer: fis.plugin('uglify-js')
    })
    .match('modules/*.js',{
      packTo: '/static/pkg/common.js'
    })
    .match('components/**/*.js',{
      packTo: '/static/pkg/app.js'
    })
    .match('**.css', {
      optimizer: fis.plugin('clean-css')
    });


// 住使用愉快