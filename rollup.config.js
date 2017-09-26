import npm from 'rollup-plugin-node-resolve'

export default {
  entry: 'd3.bundle.js',
  plugins: [npm({ jsnext: true })],
  moduleId: 'd3',
  moduleName: 'd3',
  format: 'umd',
  dest: './dist/d3.js'
}

