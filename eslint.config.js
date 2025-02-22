import { vue, typescript } from '@cc-heart/eslint-config'

import { resolve } from 'path'
import { fileURLToPath } from 'url'

const filePath = fileURLToPath(import.meta.url)
const _resolve = (...rest) => resolve(filePath, '..', ...rest)

export default [
  ...vue({
    typescript: true,
    autoImport: true,
    parserOptionsOverrides: {
      project: false,
    },
  }),
  ...typescript({
    parserOptionsOverrides: {
      project: [_resolve('./tsconfig.node.json'), _resolve('./tsconfig.json')],
    },
  }),
]
