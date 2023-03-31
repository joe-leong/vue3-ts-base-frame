/* eslint-disable @typescript-eslint/no-var-requires */
const pageGenerator = require('./templates/components/promptPage.js')
const componentGenerator = require('./templates/components/promptComponent.js')
module.exports = function (plop) {
  plop.setGenerator('new page', pageGenerator)
  plop.setGenerator('new component', componentGenerator)
}
