// don't run babel-loader through the sinon module
module.exports = [
  /sinon\/lib\/sinon/,
  /\/localforage\//,
]
