---
title: "MacEverything：macOS 快速文件搜索工具（fork自joshua-wu）"
date: 2026-05-21T11:00:00+0800
---

[MacEverything](https://github.com/ying-zhang/MacEverything) 是我从 [joshua-wu/MacEverything](https://github.com/joshua-wu/MacEverything) fork 的 macOS 快速文件搜索工具。原项目参照了 Windows 经典搜索工具 —— [Everything](https://www.voidtools.com/zh-cn/downloads/)。在 Everything 中，输入几个字符就能从海量文件中快速找到目标。macOS 上也有 Spotlight 搜索和一些免费或付费的第三方工具，但在“快速按文件名或路径搜索文件”的场景，还是希望有一个更好的工具。

原版 MacEverything 已经奠定了搜索算法的基础框架，提供了优秀的搜索性能。Fork 的直接原因是 `origin` v1.2 dmg 存在RE2 正则库依赖库缺失问题，导致应用启动失败。修复dmg包之后，继续开发——增加了中文界面，改进交互，如支持中文拼音首字母搜索；对大量文件/目录场景，更好地控制内存索引的容量等。

1. **搜索** 在原有基础上增加拼音首字母搜索（输入 `dl` 找到「电力」等）、CJK 字符 Bigram 索引、多词独立 Trigram 交集等。优化大量文件索引时内存的消耗，曾加了内存消耗统计、可选的拼音搜索和路径加速索引。<b>原项目已经支持索引文本文件内容，以及丰富的搜索选项。</b>

2. **交互** 增加了简体中文界面、多搜索窗口（Cmd+N）、可拖动列宽、右键菜单（预览、改名等）、文件改名等。索引范围、排除规则、隐藏文件/系统文件等都可以配置。

<!-- > 注意：“改名”居然一直被称为“重命名”！ -->

开发过程中，问题定位、代码实现和构建发布是由 Codex 和 Claude Code 完成的。在GitHub Actions 完成构建。

# 下载 2026-07 构建的新 v1.5.31 版

- 本站下载 [MacEverything-1.5.31.dmg](./MacEverything-arm64-1.5.31.dmg)
- GitHub 源码： [ying-zhang/MacEverything](https://github.com/ying-zhang/MacEverything)
- GitHub Release： [ying-zhang/MacEverything 1.5.31](https://github.com/ying-zhang/MacEverything/releases)

<p style="font-family:楷体; text-align:center">
欢迎下载试用<br/>
感谢 <a href="https://github.com/joshua-wu/MacEverything">原版作者 joshua-wu</a>，他的贡献是最大的<br/>
感谢我的同事帮助设计了托盘图标<img src="icon1.svg" style="width: 25px; background-color: #233"/><br/>
↓↓↓欢迎扫描页面底部的赞赏码，请我喝杯咖啡↓↓↓</p>

