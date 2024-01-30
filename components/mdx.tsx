import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import {read} from 'to-vfile'
import {unified} from 'unified'

export async function getMDXComponents(mdx) {
const file = await unified()
.use(remarkParse)
.use(remarkHtml)
.process(await read(mdx))
return file
}