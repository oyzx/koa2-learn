function m2(ctx) {
  global.console.log('m2 path: ', ctx.path)
  global.console.log('m2 host: ', ctx.host)
}

module.exports = function() {
  return async function(ctx, next) {
    m2(ctx)
    await next()
  }
}
