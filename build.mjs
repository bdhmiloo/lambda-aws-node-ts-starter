import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: 'node',
  target: ['es2020'],
  outfile: 'build/index.js',
  external: [ 'better-sqlite3', 'mysql2', 'oracledb', 'sqlite3', 'tedious', 'mysql', 'pg-query-stream',]
})
