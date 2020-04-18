export default {

    /**
     * 睡眠
     * @param {睡眠时间} ms 
     */
    $sleep(ms=1000){
        return new Promise(resolve=>setTimeout(resolve, ms))
    },
    
    /**
     * 生成随机字符串
     * @param {字符串长度} len 
     */
    $randomString(len) {
        len = len || 32;
        let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        let maxPos = chars.length;
        let str = '';
        for (let i = 0; i < len; i++) {
            str += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return str;
    },

    /**
     * 创建一个整数列表
     * @param {*} end 
     * @param {*} start 
     * @param {*} step 
     */
    $range(end, start, step) {
        //判断是否是数字和整数
        function isIntNum(target) {
            return typeof target === 'number' && Math.floor(target) === target ? true : false
        }
        let result = [];
        let startNum = start || 0;
        let endNum = end;
        let stepNum = step || 1;
        if (isIntNum(startNum) && isIntNum(endNum) && isIntNum(stepNum) && startNum + stepNum <= endNum) {
            for (let i = startNum; i <= endNum; i += stepNum) {
                result.push(i)
            }
            return result
        } else {
            throw new Error('输入的不是数字或不为整数或startnum大于endnum')
        }
    },

    /**
     * 格式化时间
     * @param {时间} time 
     */
    $formatTime(time){
        let date = new Date(time);
        if(!time){
            date = new Date();
        }
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        return year+'-' + month + '-'+day +' '+ hour +':'+ minute +':'+ second;
    }
}