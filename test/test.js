let str = "mongodb://admin:admin@127.0.0.1:27017/a/b/gan?aut#hSource=admin#maodian";

// let a = str.match(/(\w+):\/\/(\w+):(\w+)@(.+)\?(.*)\#(\w*)/);
// a.forEach((e) => {
//     console.log(111, e);
// });

// if ((bbb = "0000")) {
//     console.log(bbb);
// }

// let obj = {};

// if ((tmp = str.match(/(\w+):\/\/(\w+):(\w+)@(.+)\?(.*)\#(\w*)/))) {
// }
function parse(url) {
    let tmp, urlObj;
    // protocol://username:password@host:port/path?query#锚点
    if ((tmp = url.match(/(\w+):\/\/(\w+):(\w+)@(.+)\?(.*)\#(\w*)/))) {
    }
    return urlObj;
}

console.log(getAnchor(str));
