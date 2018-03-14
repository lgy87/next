/*
 * Guangyao Li
 * 2017/07/11
 * lgy87@foxmail.com
 */
/*
 * 只用在lodash/fp中的一些高阶函数(map, reduce, transform, forEach...)上
 * 返回对应的高阶函数，该高阶函数接受的iteratee参数，接受与非fp中的一致
 */
const args = {
  cap: false,
}
export default hof => hof.convert(args)