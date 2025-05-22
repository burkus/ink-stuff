import * as esbuild from 'esbuild'
import * as fs from 'fs'

if (fs.existsSync('build')) {
    const buildDir = fs.readdirSync('build')
    if (buildDir.length) fs.rmSync('build/*', { force: true })
}

esbuild.build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outfile: 'build/index.js',
    tsconfig: 'tsconfig.json',
    format: 'esm',
    platform: 'node',
    inject: ['require-shim.js']
})