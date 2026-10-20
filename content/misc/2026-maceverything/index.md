---
title: "MacEverything：macOS 快速文件搜索工具（fork自joshua-wu）"
date: 2026-10-21T05:26:04+0800
---

[MacEverything](https://github.com/ying-zhang/MacEverything) 是我从 [joshua-wu/MacEverything](https://github.com/joshua-wu/MacEverything) fork 的 macOS 快速文件搜索工具。原项目参照了 Windows 经典搜索工具 —— [Everything](https://www.voidtools.com/zh-cn/downloads/)。在 Everything 中，输入几个字符就能从海量文件中快速找到目标。macOS 上也有 Spotlight 搜索和一些免费或付费的第三方工具，但在“快速按文件名或路径搜索文件”的场景，还是希望有一个更好的工具。

原版 MacEverything 已经奠定了搜索算法的基础框架，提供了优秀的搜索性能。Fork 的直接原因是上游安装包存在 RE2 正则库依赖缺失问题，导致应用启动失败。修复安装包之后继续开发——增加了中文界面，改进交互，如支持中文拼音首字母搜索；对大量文件/目录场景，更好地控制内存索引的容量等。

1. **搜索** 在原有基础上增加拼音首字母搜索（输入 `dl` 找到「电力」等）、CJK 字符 Bigram 索引、多词独立 Trigram 交集等。优化大量文件索引时的内存消耗，曾加了内存消耗统计、可选的拼音搜索和路径加速索引。<b>（原项目已经支持索引文本文件内容，以及丰富的搜索选项。）</b>

2. **交互** 增加了简体中文界面、多搜索窗口（Cmd+N）、可拖动列宽、右键菜单、改名、预览等。索引范围、排除规则、隐藏文件/系统文件等都可以配置。

开发过程中，问题定位、代码实现和构建发布是由 Codex 和 Claude Code 完成的。当前使用本地 Xcode 构建，GitHub Actions 用于自动验证。

# 下载

**v1.10.20 已正式发布（2026-10-21，构建号 14）**，支持 macOS 15 及以上系统。RE2/Abseil 改为静态链接，修复安装后启动闪退，保留 Hardened Runtime 和库验证；修复启动问题的测试包已通过异机验证。此前有问题的安装包已撤下，v1.5.30 保留为历史正式版本。

此版本还汇总了自 v1.5.30 以来的搜索和索引优化、中文与拼音搜索、信息面板与批量操作、CSV/TXT 导出、MCP/CLI/HTTP 自动化，以及外置盘和 NAS 生命周期保护。完整内容见[中文发布说明](https://github.com/ying-zhang/MacEverything/releases/tag/v1.10.20)。

- Apple Silicon：[MacEverything-arm64-1.10.20.dmg](./MacEverything-arm64-1.10.20.dmg)（[GitHub 下载](https://github.com/ying-zhang/MacEverything/releases/download/v1.10.20/MacEverything-arm64.dmg)）
- Intel：[MacEverything-x86_64-1.10.20.dmg](./MacEverything-x86_64-1.10.20.dmg)（[GitHub 下载](https://github.com/ying-zhang/MacEverything/releases/download/v1.10.20/MacEverything-x86_64.dmg)）
- Homebrew 安装：先执行 `brew tap ying-zhang/maceverything`，再执行 `brew install --cask maceverything`；更新已有安装：`brew update && brew upgrade --cask maceverything`
- GitHub Release：[ying-zhang/MacEverything v1.10.20](https://github.com/ying-zhang/MacEverything/releases/tag/v1.10.20)
- SHA256（arm64）：`0252a210abeba01ff1f424ad9777742cf678d64d787fbc0f3151d0646ccea987`
- SHA256（x86_64）：`6dc51796c9fd5ebced90741464f71766e79bad98e830e06c8e6fa4ea047255a7`
- GitHub 源码：https://github.com/ying-zhang/MacEverything ； https://github.com/joshua-wu/MacEverything
- 知乎相关问题：[Mac 下有没有和 Everything 一样的快速索引工具？](https://www.zhihu.com/question/20549498)；[为何windows自带的文件搜索这么慢，而Everything的这么快？](https://www.zhihu.com/question/25280685/answer/2036216672059643593)

应用采用 ad-hoc 签名；若首次启动被 macOS 阻止，请先尝试打开一次，再前往“系统设置 → 隐私与安全性”选择“仍要打开”。

<p style="font-family:楷体; text-align:center">
欢迎下载使用<br/>
感谢 <a href="https://github.com/joshua-wu/MacEverything">原版作者 joshua-wu</a>，他的贡献是最大的<br/>
感谢我的同事帮助设计了托盘图标<img src="icon1.svg" style="width: 25px; background-color: #233"/><br/>
↓↓↓欢迎扫描页面底部的赞赏码，请我喝杯咖啡↓↓↓</p>

