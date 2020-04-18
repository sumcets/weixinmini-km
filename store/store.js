import Store from 'wxministore';
import state from './state';
import methods from './method';
import pageListener from './pageLisener';

let store = new Store({
    state: state,
    methods: methods,
    pageListener: pageListener,

    nonWritable: true, //关闭重写内部page、component方法
    debug: false, //关闭日志log
    openPart: true //开启局部模式 需要在页面引入 防止卡顿
});

module.exports = store;