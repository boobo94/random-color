module.exports = {
  getColor: () => `#${((1 << 24) * Math.random() | 0).toString(16)}`
}
