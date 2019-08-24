function m1(ctx) {
  global.console.log('m1 path: ', ctx.path)
  global.console.log('m1 host: ', ctx.host)
}

module.exports = function() {
  return async function(ctx, next) {
    m1(ctx)
    await next()
  }
}
