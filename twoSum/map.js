//定义一个自己的myMap，执行初始化函数，在其原型链上写
function myMap(){
    this.init();
};

//这里定义了存放的桶的个数，
myMap.prototype.len = 8;
//用来存放我们的kv
myMap.prototype.bucket = [];
//初始化函数 让每个桶里的初始next等于null
myMap.prototype.init = function (key){
    for(let i = 0; i < this.len ; i++){
        this.bucket[i] = {next:null};
    }
}
//将传入的key值转换成hash值
myMap.prototype.makeHash = function (key){
    let newHash = 0;
    if(typeof key == 'string'){
        let strLen = (key.length > 3) ? key.length : 3;
        for(let i = strLen - 3; i < strLen ; i++){
            newHash += (key[i] !== undefined) ? key[i].charCodeAt() : 0; 
        }
    }else {
        newHash = (Object.is(key,NaN)) ? 0 : +key;
    }
    return newHash;
}


//set方法 有key值就覆盖value 没有就设置上
myMap.prototype.set = function (key,value){
    //不用遍历
    let hash = this.makeHash(key);
    // console.log('hash====', hash);
    //转换成hash值
    let list = this.bucket[hash % this.len];
    // console.log('list====', list);
    //摸8放入桶里
    let nodeNext = list;
    // console.log(hash+','+list+','+nodeNext)
    
    while (nodeNext.next) {
        //next的key等于传入的key的话 value赋值 没有的话接着找下一个next
        if (nodeNext.key === key){
            nodeNext.value = value;
            return;
        }else{
            nodeNext = nodeNext.next;
        }
    }
    //如果没有next，则重新设置key，value；
    if (nodeNext.key === key) {
        nodeNext.value = value;
        return nodeNext;
    } else {
        nodeNext.next = {key,value,next:null};
        console.log('test----', nodeNext);
    }
    // 返回这个对象
    return nodeNext.next;
}
//get方法 有key则返回value没有则返回undefined
myMap.prototype.get = function (key){
    let hash = this.makeHash(key);
    let list = this.bucket[hash % this.len];
    let nodeNext = list.next;
    //从每个桶的第一个开始查看
    console.log('nodeNext----', nodeNext);
    // console.log('key----', key);
    while (nodeNext) {
        if (nodeNext.key === key) {
            // console.log(nodeNext.value)
            return nodeNext.value;
        } else {
            nodeNext = nodeNext.next;
            console.log(1111111111, nodeNext);
        }
    }
    return

}
//has 方法 有key则返回true 无则false
myMap.prototype.has = function (key){
    let hash = this.makeHash(key);
    let list = this.bucket[hash % this.len];
    let nodeNext = list ;
    //从每个桶的第一个开始查看
    while (nodeNext) {
        if (nodeNext.key === key) {
            return true;
        }else {
            nodeNext = nodeNext.next;
        }
    }
    return false;
}
//has 方法 删除key成功则返回true 无则false
myMap.prototype.delete = function (key){
    let hash = this.makeHash(key);
    let list = this.bucket[hash % this.len];
    let nodeNext = list ;
    while (nodeNext) {
        if (nodeNext.next.key === key) {
            nodeNext.next = nodeNext.next.next;
            return true;
        }else {
            nodeNext = nodeNext.next;
        }
    }
    return false;
}
//清空方法  直接执行初始化函数

myMap.prototype.clear = function (){
    this.init();
}

const map = new myMap();
// console.log('-----', map.set('girl', 'helen'));
map.set('girl', 'helen');
map.set('boy1', 'glowd1');
map.set('boy2', 'glowd2');
map.set('boy3', 'glowd3');
map.set('boy4', 'glowd4');
map.set('boy5', 'glowd5');
map.set('boy6', 'glowd6');
map.set('boy7', 'glowd7');
map.set('boy8', 'glowd8');
map.get('boy1');
map.get('boy2');
map.get('boy3');
map.get('boy4');
map.get('boy5');