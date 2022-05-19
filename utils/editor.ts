import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import { EditorProps } from '@bytemd/react'

const plugins = [gfm(), highlight()]

const locale: EditorProps['locale'] = {
  write: '编辑',
  preview: '预览',
  toc: '目录',
  closeToc: '关闭目录',
  help: '帮助',
  closeHelp: '关闭帮助',
  writeOnly: '仅编辑',
  exitWriteOnly: '退出仅编辑',
  previewOnly: '仅预览',
  exitPreviewOnly: '退出仅预览',
  fullscreen: '全屏',
  exitFullscreen: '退出全屏',
  source: '源代码',
  words: '字数',
  lines: '行数',
  sync: '同步滚动',
  top: '回到顶部',
  h1: '一级标题',
  h2: '二级标题',
  h3: '三级标题',
  h4: '四级标题',
  h5: '五级标题',
  h6: '六级标题',
  bold: '粗体',
  italic: '斜体',
  quote: '引用',
  link: '链接',
  image: '图片',
  code: '代码',
  codeBlock: '代码块',
  ul: '无序列表',
  ol: '有序列表',
  cheatsheet: '语法',
  shortcuts: '快捷键',
  headingText: '标题',
  boldText: '粗体文本',
  italicText: '斜体文本',
  quotedText: '引用文本',
  linkText: '链接描述',
  imageTitle: '图片描述',
  codeText: '代码',
  codeLang: '编程语言',
  olItem: '项目',
  ulItem: '项目'
}

export default {
  locale,
  plugins
}
