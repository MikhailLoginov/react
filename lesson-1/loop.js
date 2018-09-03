const loop = function(times = 0, callback = null) {
  for (let i = 0; i<times; i++) {
    return loop(times-1, loop(times-1, callback));
  }
}