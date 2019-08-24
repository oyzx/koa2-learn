function m3(ctx) {
  global.console.log('m3 path: ', ctx.path)
  global.console.log('m3 host: ', ctx.host)
}

module.exports = function() {
  return async function(ctx, next) {
    m3(ctx)
    await next()
  }
}
