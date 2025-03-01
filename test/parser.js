const { readFileSync } = require('fs')
const path = require('path')

const { it, describe } = require('mocha')
const { expect } = require('chai')

const { default: parser } = require('posthtml-parser')
const { default: render } = require('posthtml-render')

const html = readFileSync(
  path.resolve(__dirname, 'templates/parser.html'), 'utf8'
)

describe('Parser', () => {
  it('parser => render', done => {
    expect(html).to.eql(render(parser(html)))
    done()
  })
})
