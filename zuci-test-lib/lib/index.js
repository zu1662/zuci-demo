module.exports = {
  sum(a, b) {
    return a + b
  },
  init({option, param}){
    console.log('执行 Init 方法', option, param)
  }
}