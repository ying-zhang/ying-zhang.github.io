---
title: "中国计算机学会(CCF)推荐国际学术会议和期刊目录(2019)-单页"
date: 2019-12-31T08:00:00+0800
draft: false
---

{{< rawhtml >}}
<div class="s">
<p>很久之前整理论文列表，感觉“中国计算机学会推荐国际学术会议和期刊目录(2019)”分成多页用起来不太方便，于是把它们合并到一起。</p>

<p>目录(2019版)的PDF文件：<a href="https://www.ccf.org.cn/ccf/contentcore/resource/download?ID=144845" target="_blank">https://www.ccf.org.cn/ccf/contentcore/resource/download?ID=144845</a></p>

<p>2019年除了增加一些英文会议和期刊，还增加了中文的学术期刊目录：</p>
<ul>
<li><a href="https://www.ccf.org.cn/Academic_Evaluation/By_category/">中国计算机学会推荐国际学术会议和期刊目录</a></li>
<li><a href="https://www.ccf.org.cn/ccftjgjxskwml/">中国计算机学会推荐中文科技期刊目录</a></li>
</ul>

</div>

<hr/>

<h1>说明</h1>

<div class="s">

<p>表中“方向”的全称为:</p>
<table style="font-size:0.8em">
<tr style="border: 0">
<td width="360px"><ul>
<li>系统：计算机体系结构/并行与分布计算/存储系统</li>
<li>网络：计算机网络</li>
<li>安全：网络与信息安全</li>
<li>软工：软件工程/系统软件/程序设计语言</li>
<li>数据库：数据库/数据检索/内容检索</li>
</ul></td>
<td><ul>
<li>理论：计算机科学理论</li>
<li>多媒体：计算机图形学与多媒体</li>
<li>AI：人工智能</li>
<li>交互：人机交互与普适计算</li>
<li>综合：交叉/综合/新兴</li>
</ul></td>
</tr>
</table>
</div>

<h1>分方向汇总</h1>

<style>table {border-collapse: collapse; font-size: 0.64em}
tr {border-bottom: 1px solid #004ba0}
.tt{font-weight:bold; background-color:#1976d2}
#stat td {width: 3.5em; text-align: center}
</style>

<table id="stat"><thead class="tt">
<tr><th style="width:5em" rowspan="2">方向</th><th colspan="3">会议</th><th style="width:6em" rowspan="2">会议 汇总</th><th colspan="3">期刊</th><th style="width:6em" rowspan="2">期刊 汇总</th><th rowspan="2">总计</th></tr>
<tr><td>A</td><td>B</td><td>C</td><td>A</td><td>B</td><td>C</td></tr>
</thead>
<tbody>
<tr><td>系统</td><td>9</td><td>26</td><td>26</td><td>61</td><td>5</td><td>10</td><td>11</td><td>26</td><td>87</td></tr>
<tr><td>网络</td><td>4</td><td>10</td><td>19</td><td>33</td><td>3</td><td>6</td><td>10</td><td>19</td><td>52</td></tr>
<tr><td>安全</td><td>5</td><td>12</td><td>24</td><td>41</td><td>3</td><td>4</td><td>8</td><td>15</td><td>56</td></tr>
<tr><td>软工</td><td>9</td><td>20</td><td>25</td><td>54</td><td>3</td><td>13</td><td>8</td><td>24</td><td>78</td></tr>
<tr><td>数据库</td><td>5</td><td>11</td><td>12</td><td>28</td><td>4</td><td>13</td><td>14</td><td>31</td><td>59</td></tr>
<tr><td>理论</td><td>5</td><td>8</td><td>10</td><td>23</td><td>3</td><td>13</td><td>12</td><td>28</td><td>51</td></tr>
<tr><td>多媒体</td><td>4</td><td>13</td><td>12</td><td>29</td><td>3</td><td>10</td><td>12</td><td>25</td><td>54</td></tr>
<tr><td>AI</td><td>7</td><td>12</td><td>21</td><td>40</td><td>4</td><td>21</td><td>36</td><td>61</td><td>101</td></tr>
<tr><td>交互</td><td>3</td><td>7</td><td>13</td><td>23</td><td>2</td><td>6</td><td>3</td><td>11</td><td>34</td></tr>
<tr><td>综合</td><td>2</td><td>5</td><td>7</td><td>14</td><td>2</td><td>15</td><td>9</td><td>26</td><td>40</td></tr>
<tr class="tt"><td>总计</td><td>53</td><td>124</td><td>169</td><td>346</td><td>32</td><td>111</td><td>123</td><td>266</td><td>612</td></tr>
</tbody></table>

<h1>完整清单</h1>

<p class="plft s"><a href="/misc/2019-CCF-List.xlsx"><b>Excel格式的完整清单</b></a></p>

<script>
var domain='全部';//方向(系统，网络...)
var level='全部'; //级别(A,B,C)
var kind='全部';  //类型(期刊，会议)

function f1(obj){
  domain=obj.textContent;
  filter();
  highlight(obj,11);
}

function f2(obj){
  level=obj.textContent;
  filter();
  highlight(obj,5);
}

function f3(obj){
  kind=obj.textContent;
  filter();
  highlight(obj,4);
}

function highlight(obj, len){
  obj.style.background="#88ccff";
  len+=len
  for (i=3; i<len; i+=2) {
    var s = obj.parentNode.childNodes[i];//text,td,text,td...
    if (s!=obj){
      s.style.background="";
    }
  }
}

function filter(){
  var items=document.querySelectorAll('#allList tr');
  var len=items.length;
  for (i=1; i<len; i++) {
    var tr=items[i];
    var tdDomain = tr.childNodes[0];
    var tdLevel  = tr.childNodes[1];
    var tdKind   = tr.childNodes[2];

    if((tdDomain.textContent===domain || domain === '全部') && 
       (tdLevel.textContent===level   || level === '全部') &&
       (tdKind.textContent===kind     || kind === '全部')){
      tr.style.display="";
    } else {
      tr.style.display="none";
    }
  }
}
</script>

<style>#filter{cursor:pointer;} 
#filter td{text-align:center; width:4em}
#filter .thd{border-top:1px solid #004ba0}
#filter .col{border-right:1px solid #004ba0; background:#1976d2; font-weight:bold}
</style>

<table id="filter">
<tr class="thd">
<td class="col">方向</td>
<td style="background:#88ccff" onclick="f1(this)">全部</td>
<td onclick="f1(this)">系统</td>
<td onclick="f1(this)">网络</td>
<td onclick="f1(this)">安全</td>
<td onclick="f1(this)">软工</td>
<td width="5em" onclick="f1(this)">数据库</td>
<td onclick="f1(this)">理论</td>
<td width="5em" onclick="f1(this)">多媒体</td>
<td width="3em" onclick="f1(this)">AI</td>
<td onclick="f1(this)">交互</td>
<td onclick="f1(this)">综合</td>
</tr>
<tr>
<td class="col">级别</td>
<td style="background:#88ccff" onclick="f2(this)">全部</td>
<td onclick="f2(this)">A</td>
<td onclick="f2(this)">B</td>
<td onclick="f2(this)">C</td>
<td colspan="7"></td>
</tr>
<tr>
<td class="col">类型</td>
<td style="background:#88ccff" onclick="f3(this)">全部</td>
<td onclick="f3(this)">期刊</td>
<td onclick="f3(this)">会议</td>
<td colspan="8"></td>

</tr>
</table>

<br/>

<style>.oo { background-color: #cccccc; }
.hd{ background-color: #88ccff; }
</style>

<table id="allList">
<tr class="tt"><td width="50px">方向</td><td width="35px">级别</td><td width="35px">类型</td><td width="35px">序号</td><td width="40px">刊物简称</td><td>刊物全称</td><td>出版社</td><td>网址</td></tr>
<tr class="hd"><td>系统</td><td>A</td><td>期刊</td><td>1</td><td>TOCS</td><td>ACM Transactions on Computer Systems</td><td>ACM</td><td><a href="https://dblp.org/db/journals/tocs/">https://dblp.org/db/journals/tocs/</a></td></tr>
<tr><td>系统</td><td>A</td><td>期刊</td><td>2</td><td>TOS</td><td>ACM Transactions on Storage</td><td>ACM</td><td><a href="https://dblp.org/db/journals/tos/">https://dblp.org/db/journals/tos/</a></td></tr>
<tr class="oo"><td>系统</td><td>A</td><td>期刊</td><td>3</td><td>TCAD</td><td>IEEE Transactions on Computer-Aided Design of Integrated Circuits And System</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tcad/">https://dblp.org/db/journals/tcad/</a></td></tr>
<tr><td>系统</td><td>A</td><td>期刊</td><td>4</td><td>TC</td><td>IEEE Transactions on Computers</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tc/">https://dblp.org/db/journals/tc/</a></td></tr>
<tr class="oo"><td>系统</td><td>A</td><td>期刊</td><td>5</td><td>TPDS</td><td>IEEE Transactions on Parallel and Distributed Systems</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tpds/">https://dblp.org/db/journals/tpds/</a></td></tr>
<tr class="hd"><td>系统</td><td>B</td><td>期刊</td><td>1</td><td>TACO</td><td>ACM Transactions on Architecture and Code Optimization</td><td>ACM</td><td><a href="https://dblp.org/db/journals/taco/">https://dblp.org/db/journals/taco/</a></td></tr>
<tr><td>系统</td><td>B</td><td>期刊</td><td>2</td><td>TAAS</td><td>ACM Transactions on Autonomous and Adaptive Systems</td><td>ACM</td><td><a href="https://dblp.org/db/journals/taas/">https://dblp.org/db/journals/taas/</a></td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>期刊</td><td>3</td><td>TODAES</td><td>ACM Transactions on Design Automation of Electronic Systems</td><td>ACM</td><td><a href="https://dblp.org/db/journals/todaes/">https://dblp.org/db/journals/todaes/</a></td></tr>
<tr><td>系统</td><td>B</td><td>期刊</td><td>4</td><td>TECS</td><td>ACM Transactions on Embedded Computing Systems</td><td>ACM</td><td><a href="https://dblp.org/db/journals/tecs/">https://dblp.org/db/journals/tecs/</a></td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>期刊</td><td>5</td><td>TRETS</td><td>ACM Transactions on Reconfigurable Technology and Systems</td><td>ACM</td><td><a href="https://dblp.org/db/journals/trets/">https://dblp.org/db/journals/trets/</a></td></tr>
<tr><td>系统</td><td>B</td><td>期刊</td><td>6</td><td>TVLSI</td><td>IEEE Transactions on Very Large Scale Integration (VLSI) Systems</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tvlsi/">https://dblp.org/db/journals/tvlsi/</a></td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>期刊</td><td>7</td><td>JPDC</td><td>Journal of Parallel and Distributed Computing</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/jpdc/">https://dblp.org/db/journals/jpdc/</a></td></tr>
<tr><td>系统</td><td>B</td><td>期刊</td><td>8</td><td>JSA</td><td>Journal of Systems Architecture: Embedded Software Design</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/jsa/">https://dblp.org/db/journals/jsa/</a></td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>期刊</td><td>9</td><td>PARCO</td><td>Parallel Computing</td><td>Elsevier</td><td><a href="https://dblp.org/db/conf/parco/">https://dblp.org/db/conf/parco/</a></td></tr>
<tr><td>系统</td><td>B</td><td>期刊</td><td>10</td><td></td><td>Performance Evaluation: An International Journal</td><td>Elsevier</td><td><a href="http://www.journals.elsevier.com/performance-evaluation/">http://www.journals.elsevier.com/performance-evaluation/</a></td></tr>
<tr class="hd"><td>系统</td><td>C</td><td>期刊</td><td>1</td><td>JETC</td><td>ACM Journal on Emerging Technologies in Computing Systems</td><td>ACM</td><td><a href="https://dblp.org/db/journals/jetc/">https://dblp.org/db/journals/jetc/</a></td></tr>
<tr><td>系统</td><td>C</td><td>期刊</td><td>2</td><td></td><td>Concurrency and Computation: Practice and Experience</td><td>Wiley</td><td><a href="https://dblp.org/db/journals/concurrency/">https://dblp.org/db/journals/concurrency/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>期刊</td><td>3</td><td>DC</td><td>Distributed Computing</td><td>Springer</td><td><a href="https://dblp.org/db/journals/dc/">https://dblp.org/db/journals/dc/</a></td></tr>
<tr><td>系统</td><td>C</td><td>期刊</td><td>4</td><td>FGCS</td><td>Future Generation Computer Systems</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/fgcs/">https://dblp.org/db/journals/fgcs/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>期刊</td><td>5</td><td>TCC</td><td>IEEE Transactions on Cloud Computing</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tcc/">https://dblp.org/db/journals/tcc/</a></td></tr>
<tr><td>系统</td><td>C</td><td>期刊</td><td>6</td><td>Integration</td><td>Integration, the VLSI Journal</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/integration/">https://dblp.org/db/journals/integration/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>期刊</td><td>7</td><td>JETTA</td><td>Journal of Electronic Testing-Theory and Applications</td><td>Springer</td><td><a href="http://link.springer.com/journal/10836">http://link.springer.com/journal/10836</a></td></tr>
<tr><td>系统</td><td>C</td><td>期刊</td><td>8</td><td>JGC</td><td>Journal of Grid computing</td><td>Springer</td><td><a href="https://dblp.org/db/journals/grid/">https://dblp.org/db/journals/grid/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>期刊</td><td>9</td><td>MICPRO</td><td>Microprocessors and Microsystems: Embedded Hardware Design</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/mam/">https://dblp.org/db/journals/mam/</a></td></tr>
<tr><td>系统</td><td>C</td><td>期刊</td><td>10</td><td>RTS</td><td>Real-Time Systems</td><td>Springer</td><td><a href="https://dblp.org/db/journals/rts/">https://dblp.org/db/journals/rts/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>期刊</td><td>11</td><td>TJSC</td><td>The Journal of Supercomputing</td><td>Springer</td><td><a href="https://dblp.org/db/journals/tjs/">https://dblp.org/db/journals/tjs/</a></td></tr>
<tr class="hd"><td>系统</td><td>A</td><td>会议</td><td>1</td><td>PPoPP</td><td>ACM SIGPLAN Symposium on Principles &amp; Practice of Parallel Programming</td><td>ACM</td><td><a href="https://dblp.org/db/conf/ppopp/">https://dblp.org/db/conf/ppopp/</a></td></tr>
<tr><td>系统</td><td>A</td><td>会议</td><td>2</td><td>FAST</td><td>Conference on File and Storage Technologies</td><td>USENIX</td><td><a href="https://dblp.org/db/conf/fast/">https://dblp.org/db/conf/fast/</a></td></tr>
<tr class="oo"><td>系统</td><td>A</td><td>会议</td><td>3</td><td>DAC</td><td>Design Automation Conference</td><td>ACM</td><td><a href="https://dblp.org/db/conf/dac/">https://dblp.org/db/conf/dac/</a></td></tr>
<tr><td>系统</td><td>A</td><td>会议</td><td>4</td><td>HPCA</td><td>High Performance Computer Architecture</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/hpca/">https://dblp.org/db/conf/hpca/</a></td></tr>
<tr class="oo"><td>系统</td><td>A</td><td>会议</td><td>5</td><td>MICRO</td><td>IEEE/ACM International Symposium on Microarchitecture</td><td>IEEE/ACM</td><td><a href="https://dblp.org/db/conf/micro/">https://dblp.org/db/conf/micro/</a></td></tr>
<tr><td>系统</td><td>A</td><td>会议</td><td>6</td><td>SC</td><td>International Conference for High Performance Computing, Networking, Storage, and Analysis</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/sc/">https://dblp.org/db/conf/sc/</a></td></tr>
<tr class="oo"><td>系统</td><td>A</td><td>会议</td><td>7</td><td>ASPLOS</td><td>International Conference on Architectural Support for Programming Languages and Operating Systems</td><td>ACM</td><td><a href="https://dblp.org/db/conf/asplos/">https://dblp.org/db/conf/asplos/</a></td></tr>
<tr><td>系统</td><td>A</td><td>会议</td><td>8</td><td>ISCA</td><td>International Symposium on Computer Architecture</td><td>ACM /IEEE</td><td><a href="https://dblp.org/db/conf/isca/">https://dblp.org/db/conf/isca/</a></td></tr>
<tr class="oo"><td>系统</td><td>A</td><td>会议</td><td>9</td><td>USENIX ATC</td><td>USENIX Annul Technical Conference</td><td>USENIX</td><td><a href="https://dblp.org/db/conf/usenix/">https://dblp.org/db/conf/usenix/</a></td></tr>
<tr class="hd"><td>系统</td><td>B</td><td>会议</td><td>1</td><td>SoCC</td><td>ACM Symposium on Cloud Computing</td><td>ACM</td><td><a href="https://dblp.org/db/conf/cloud/">https://dblp.org/db/conf/cloud/</a></td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>2</td><td>SPAA</td><td>ACM Symposium on Parallelism in Algorithms and Architectures</td><td>ACM</td><td><a href="https://dblp.org/db/conf/spaa/">https://dblp.org/db/conf/spaa/</a></td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>3</td><td>PODC</td><td>ACM Symposium on Principles of Distributed Computing</td><td>ACM</td><td><a href="https://dblp.org/db/conf/podc/">https://dblp.org/db/conf/podc/</a></td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>4</td><td>FPGA</td><td>ACM/SIGDA International Symposium on Field-Programmable Gate Arrays</td><td>ACM</td><td><a href="https://dblp.org/db/conf/fpga/">https://dblp.org/db/conf/fpga/</a></td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>5</td><td>CGO</td><td>Code Generation and Optimization</td><td>IEEE/ACM</td><td><a href="https://dblp.org/db/conf/cgo/">https://dblp.org/db/conf/cgo/</a></td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>6</td><td>DATE</td><td>Design, Automation &amp; Test in Europe</td><td>IEEE/ACM</td><td><a href="https://dblp.org/db/conf/date/">https://dblp.org/db/conf/date/</a></td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>7</td><td>EuroSys</td><td>European Conference on Computer Systems</td><td>ACM</td><td><a href="https://dblp.org/db/conf/eurosys/">https://dblp.org/db/conf/eurosys/</a></td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>8</td><td>HOT CHIPS</td><td>Hot Chips: A Symposium on High Performance Chips</td><td>IEEE</td><td><a href="http://www.hotchips.org/">http://www.hotchips.org/</a></td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>9</td><td>CLUSTER</td><td>IEEE International Conference on Cluster Computing</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/cluster/">https://dblp.org/db/conf/cluster/</a></td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>10</td><td>ICCD</td><td>International Conference on Computer Design</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/iccd/">https://dblp.org/db/conf/iccd/</a></td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>11</td><td>ICCAD</td><td>International Conference on Computer-Aided Design</td><td>IEEE/ACM</td><td><a href="https://dblp.org/db/conf/iccad/">https://dblp.org/db/conf/iccad/</a></td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>12</td><td>ICDCS</td><td>International Conference on Distributed Computing Systems</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icdcs/">https://dblp.org/db/conf/icdcs/</a></td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>13</td><td>CODES+ISSS</td><td>International Conference on Hardware/Software Co-design and System Synthesis</td><td>ACM/ IEEE</td><td><a href="https://dblp.org/db/conf/codes/">https://dblp.org/db/conf/codes/</a></td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>14</td><td>HiPEAC</td><td>International Conference on High Performance and Embedded Architectures and Compilers</td><td>ACM</td><td><a href="https://dblp.org/db/conf/hipeac/">https://dblp.org/db/conf/hipeac/</a></td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>15</td><td>SIGMETRICS</td><td>International Conference on Measurement and Modeling of Computer Systems</td><td>ACM</td><td><a href="https://dblp.org/db/conf/sigmetrics/">https://dblp.org/db/conf/sigmetrics/</a></td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>16</td><td>PACT</td><td>International Conference on Parallel Architectures and Compilation Techniques</td><td>IEEE/ACM</td><td><a href="https://dblp.org/db/conf/IEEEpact/">https://dblp.org/db/conf/IEEEpact/</a></td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>17</td><td>ICPP</td><td>International Conference on Parallel Processing</td><td></td><td><a href="https://dblp.org/db/conf/icpp/">https://dblp.org/db/conf/icpp/</a></td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>18</td><td>ICS</td><td>International Conference on Supercomputing</td><td>ACM</td><td><a href="https://dblp.org/db/conf/ics/">https://dblp.org/db/conf/ics/</a></td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>19</td><td>VEE</td><td>International Conference on Virtual Execution Environments</td><td>ACM</td><td><a href="https://dblp.org/db/conf/vee/">https://dblp.org/db/conf/vee/</a></td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>20</td><td>IPDPS</td><td>International Parallel &amp; Distributed Processing Symposium</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/ipps/">https://dblp.org/db/conf/ipps/</a></td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>21</td><td>Performance</td><td>International Symposium on Computer Performance Modeling, Measurements and Evaluation</td><td>ACM</td><td><a href="https://dblp.org/db/conf/performance/">https://dblp.org/db/conf/performance/</a></td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>22</td><td>HPDC</td><td>International Symposium on High Performance Distributed Computing</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/hpdc/">https://dblp.org/db/conf/hpdc/</a></td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>23</td><td>ITC</td><td>International Test Conference</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/itc/">https://dblp.org/db/conf/itc/</a></td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>24</td><td>LISA</td><td>Large Installation System Administration Conference</td><td>USENIX</td><td><a href="https://dblp.org/db/conf/lisa/">https://dblp.org/db/conf/lisa/</a></td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>25</td><td>MSST</td><td>Mass Storage Systems and Technologies</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/mss/">https://dblp.org/db/conf/mss/</a></td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>26</td><td>RTAS</td><td>Real-Time and Embedded Technology and Applications Symposium</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/rtas/">https://dblp.org/db/conf/rtas/</a></td></tr>
<tr class="hd"><td>系统</td><td>C</td><td>会议</td><td>1</td><td>CF</td><td>ACM International Conference on Computing Frontiers</td><td>ACM</td><td><a href="https://dblp.org/db/conf/cf/">https://dblp.org/db/conf/cf/</a></td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>2</td><td>SYSTOR</td><td>ACM International Systems and Storage Conference</td><td>ACM</td><td><a href="https://dblp.org/db/conf/systor/">https://dblp.org/db/conf/systor/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>3</td><td>NOCS</td><td>ACM/IEEE International Symposium on Networks-on-Chip</td><td>ACM/IEEE</td><td><a href="https://dblp.org/db/conf/nocs/">https://dblp.org/db/conf/nocs/</a></td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>4</td><td>ASAP</td><td>Application-Specific Systems, Architectures, and Processors</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/asap/">https://dblp.org/db/conf/asap/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>5</td><td>ASP-DAC</td><td>Asia and South Pacific Design Automation Conference</td><td>ACM/IEEE</td><td><a href="https://dblp.org/db/conf/aspdac/">https://dblp.org/db/conf/aspdac/</a></td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>6</td><td>Euro-Par</td><td>European Conference on Parallel and Distributed Computing</td><td>Springer</td><td><a href="https://dblp.org/db/conf/europar/">https://dblp.org/db/conf/europar/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>7</td><td>ETS</td><td>European Test Symposium</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/ets/">https://dblp.org/db/conf/ets/</a></td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>8</td><td>FPL</td><td>Field Programmable Logic and Applications</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/fpl/">https://dblp.org/db/conf/fpl/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>9</td><td>FCCM</td><td>Field-Programmable Custom Computing Machines</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/fccm/">https://dblp.org/db/conf/fccm/</a></td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>10</td><td>GLSVLSI</td><td>Great Lakes Symposium on VLSI</td><td>ACM/IEEE</td><td><a href="https://dblp.org/db/conf/glvlsi/">https://dblp.org/db/conf/glvlsi/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>11</td><td>ATS</td><td>IEEE Asian Test Symposium</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/ats/">https://dblp.org/db/conf/ats/</a></td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>12</td><td>HPCC</td><td>IEEE International Conference on High Performance Computing and Communications</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/hpcc/">https://dblp.org/db/conf/hpcc/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>13</td><td>HiPC</td><td>IEEE International Conference on High Performance Computing, Data and Analytics</td><td>IEEE/ ACM</td><td><a href="https://dblp.org/db/conf/hipc/">https://dblp.org/db/conf/hipc/</a></td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>14</td><td>MASCOTS</td><td>IEEE International Symposium on Modeling, Analysis, and Simulation of Computer and Telecommunication Systems</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/mascots/">https://dblp.org/db/conf/mascots/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>15</td><td>ISPA</td><td>IEEE International Symposium on Parallel and Distributed Processing with Applications</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/ispa/">https://dblp.org/db/conf/ispa/</a></td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>16</td><td>CCGRID</td><td>IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing</td><td>ACM/IEEE</td><td><a href="https://dblp.org/db/conf/ccgrid/">https://dblp.org/db/conf/ccgrid/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>17</td><td>NPC</td><td>IFIP International Conference on Network and Parallel Computing</td><td>Springer</td><td><a href="https://dblp.org/db/conf/npc/">https://dblp.org/db/conf/npc/</a></td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>18</td><td>ICA3PP</td><td>International Conference on Algorithms and Architectures for Parallel Processing</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/ica3pp/">https://dblp.org/db/conf/ica3pp/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>19</td><td>CASES</td><td>International Conference on Compilers, Architectures, and Synthesis for Embedded Systems</td><td>ACM</td><td><a href="https://dblp.org/db/conf/cases/">https://dblp.org/db/conf/cases/</a></td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>20</td><td>FPT</td><td>International Conference on Field-Programmable Technology</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/fpt/">https://dblp.org/db/conf/fpt/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>21</td><td>ICPADS</td><td>International Conference on Parallel and Distributed Systems</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icpads/">https://dblp.org/db/conf/icpads/</a></td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>22</td><td>ISCAS</td><td>International Symposium on Circuits and Systems</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/iscas/">https://dblp.org/db/conf/iscas/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>23</td><td>ISLPED</td><td>International Symposium on Low Power Electronics and Design</td><td>ACM/IEEE</td><td><a href="https://dblp.org/db/conf/islped/">https://dblp.org/db/conf/islped/</a></td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>24</td><td>ISPD</td><td>International Symposium on Physical Design</td><td>ACM</td><td><a href="https://dblp.org/db/conf/ispd/">https://dblp.org/db/conf/ispd/</a></td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>25</td><td>HotI</td><td>Symposium on High-Performance Interconnects</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/hoti/">https://dblp.org/db/conf/hoti/</a></td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>26</td><td>VTS</td><td>VLSI Test Symposium</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/vts/">https://dblp.org/db/conf/vts/</a></td></tr>
<tr class="hd"><td>网络</td><td>A</td><td>期刊</td><td>1</td><td>JSAC</td><td>IEEE Journal of Selected Areas in Communications</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/jsac/">https://dblp.org/db/journals/jsac/</a></td></tr>
<tr><td>网络</td><td>A</td><td>期刊</td><td>2</td><td>TMC</td><td>IEEE Transactions on Mobile Computing</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tmc/">https://dblp.org/db/journals/tmc/</a></td></tr>
<tr class="oo"><td>网络</td><td>A</td><td>期刊</td><td>3</td><td>TON</td><td>IEEE/ACM Transactions on Networking</td><td>IEEE/ACM</td><td><a href="https://dblp.org/db/journals/ton/">https://dblp.org/db/journals/ton/</a></td></tr>
<tr class="hd"><td>网络</td><td>B</td><td>期刊</td><td>1</td><td>TOIT</td><td>ACM Transactions on Internet Technology</td><td>ACM</td><td><a href="https://dblp.org/db/journals/toit/">https://dblp.org/db/journals/toit/</a></td></tr>
<tr><td>网络</td><td>B</td><td>期刊</td><td>2</td><td>TOMCCAP</td><td>ACM Transactions on Multimedia Computing, Communications and Applications</td><td>ACM</td><td><a href="https://dblp.org/db/journals/tomccap/">https://dblp.org/db/journals/tomccap/</a></td></tr>
<tr class="oo"><td>网络</td><td>B</td><td>期刊</td><td>3</td><td>TOSN</td><td>ACM Transactions on Sensor Networks</td><td>ACM</td><td><a href="https://dblp.org/db/journals/tosn/">https://dblp.org/db/journals/tosn/</a></td></tr>
<tr><td>网络</td><td>B</td><td>期刊</td><td>4</td><td>CN</td><td>Computer Networks</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/cn/">https://dblp.org/db/journals/cn/</a></td></tr>
<tr class="oo"><td>网络</td><td>B</td><td>期刊</td><td>5</td><td>TCOM</td><td>IEEE Transactions on Communications</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tcom/">https://dblp.org/db/journals/tcom/</a></td></tr>
<tr><td>网络</td><td>B</td><td>期刊</td><td>6</td><td>TWC</td><td>IEEE Transactions on Wireless Communications</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/twc/">https://dblp.org/db/journals/twc/</a></td></tr>
<tr class="hd"><td>网络</td><td>C</td><td>期刊</td><td>1</td><td></td><td>Ad Hoc Networks</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/adhoc/">https://dblp.org/db/journals/adhoc/</a></td></tr>
<tr><td>网络</td><td>C</td><td>期刊</td><td>2</td><td>CC</td><td>Computer Communications</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/comcom/">https://dblp.org/db/journals/comcom/</a></td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>期刊</td><td>3</td><td>TNSM</td><td>IEEE Transactions on Network and Service Management</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tnsm/">https://dblp.org/db/journals/tnsm/</a></td></tr>
<tr><td>网络</td><td>C</td><td>期刊</td><td>4</td><td></td><td>IET Communications</td><td>IET</td><td><a href="https://dblp.org/db/journals/iet-com/">https://dblp.org/db/journals/iet-com/</a></td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>期刊</td><td>5</td><td>JNCA</td><td>Journal of Network and Computer Applications</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/jnca/">https://dblp.org/db/journals/jnca/</a></td></tr>
<tr><td>网络</td><td>C</td><td>期刊</td><td>6</td><td>MONET</td><td>Mobile Networks &amp; Applications</td><td>Springer</td><td><a href="https://dblp.org/db/journals/monet/">https://dblp.org/db/journals/monet/</a></td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>期刊</td><td>7</td><td></td><td>Networks</td><td>Wiley</td><td><a href="https://dblp.org/db/journals/networks/">https://dblp.org/db/journals/networks/</a></td></tr>
<tr><td>网络</td><td>C</td><td>期刊</td><td>8</td><td>PPNA</td><td>Peer-to-Peer Networking and Applications</td><td>Springer</td><td><a href="https://dblp.org/db/journals/ppna/">https://dblp.org/db/journals/ppna/</a></td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>期刊</td><td>9</td><td>WCMC</td><td>Wireless Communications &amp; Mobile Computing</td><td>Wiley.</td><td><a href="https://dblp.org/db/journals/wicomm/">https://dblp.org/db/journals/wicomm/</a></td></tr>
<tr><td>网络</td><td>C</td><td>期刊</td><td>10</td><td></td><td>Wireless Networks</td><td>Springer</td><td><a href="https://dblp.org/db/journals/winet/">https://dblp.org/db/journals/winet/</a></td></tr>
<tr class="hd"><td>网络</td><td>A</td><td>会议</td><td>1</td><td>SIGCOMM</td><td>ACM International Conference on Applications, Technologies, Architectures, and Protocols for Computer Communication</td><td>ACM</td><td><a href="https://dblp.org/db/conf/sigcomm/">https://dblp.org/db/conf/sigcomm/</a></td></tr>
<tr><td>网络</td><td>A</td><td>会议</td><td>2</td><td>MobiCom</td><td>ACM International Conference on Mobile Computing and Networking</td><td>ACM</td><td><a href="https://dblp.org/db/conf/mobicom/">https://dblp.org/db/conf/mobicom/</a></td></tr>
<tr class="oo"><td>网络</td><td>A</td><td>会议</td><td>3</td><td>INFOCOM</td><td>IEEE International Conference on Computer Communications</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/infocom/">https://dblp.org/db/conf/infocom/</a></td></tr>
<tr><td>网络</td><td>A</td><td>会议</td><td>4</td><td>NSDI</td><td>Symposium on Network System Design and Implementation</td><td>USENIX</td><td><a href="https://dblp.org/db/conf/nsdi/">https://dblp.org/db/conf/nsdi/</a></td></tr>
<tr class="hd"><td>网络</td><td>B</td><td>会议</td><td>1</td><td>SenSys</td><td>ACM Conference on Embedded Networked Sensor Systems</td><td>ACM</td><td><a href="https://dblp.org/db/conf/sensys/">https://dblp.org/db/conf/sensys/</a></td></tr>
<tr><td>网络</td><td>B</td><td>会议</td><td>2</td><td>CoNEXT</td><td>ACM International Conference on Emerging Networking Experiments and Technologies</td><td>ACM</td><td><a href="https://dblp.org/db/conf/conext/">https://dblp.org/db/conf/conext/</a></td></tr>
<tr class="oo"><td>网络</td><td>B</td><td>会议</td><td>3</td><td>SECON</td><td>IEEE Communications Society Conference on Sensor and Ad Hoc Communications and Networks</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/secon/">https://dblp.org/db/conf/secon/</a></td></tr>
<tr><td>网络</td><td>B</td><td>会议</td><td>4</td><td>IPSN</td><td>International Conference on Information Processing in Sensor Networks</td><td>IEEE/ACM</td><td><a href="https://dblp.org/db/conf/ipsn/">https://dblp.org/db/conf/ipsn/</a></td></tr>
<tr class="oo"><td>网络</td><td>B</td><td>会议</td><td>5</td><td>MobiSys</td><td>International Conference on Mobile Systems, Applications, and Services</td><td>ACM</td><td><a href="https://dblp.org/db/conf/mobisys/">https://dblp.org/db/conf/mobisys/</a></td></tr>
<tr><td>网络</td><td>B</td><td>会议</td><td>6</td><td>ICNP</td><td>International Conference on Network Protocols</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icnp/">https://dblp.org/db/conf/icnp/</a></td></tr>
<tr class="oo"><td>网络</td><td>B</td><td>会议</td><td>7</td><td>MobiHoc</td><td>International Symposium on Mobile Ad Hoc Networking and Computing</td><td>ACM/IEEE</td><td><a href="https://dblp.org/db/conf/mobihoc/">https://dblp.org/db/conf/mobihoc/</a></td></tr>
<tr><td>网络</td><td>B</td><td>会议</td><td>8</td><td>NOSSDAV</td><td>International Workshop on Network and Operating System Support for Digital Audio and Video</td><td>ACM</td><td><a href="https://dblp.org/db/conf/nossdav/">https://dblp.org/db/conf/nossdav/</a></td></tr>
<tr class="oo"><td>网络</td><td>B</td><td>会议</td><td>9</td><td>IWQoS</td><td>International Workshop on Quality of Service</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/iwqos/">https://dblp.org/db/conf/iwqos/</a></td></tr>
<tr><td>网络</td><td>B</td><td>会议</td><td>10</td><td>IMC</td><td>Internet Measurement Conference</td><td>ACM/USENIX</td><td><a href="https://dblp.org/db/conf/imc/">https://dblp.org/db/conf/imc/</a></td></tr>
<tr class="hd"><td>网络</td><td>C</td><td>会议</td><td>1</td><td>ANCS</td><td>Architectures for Networking and Communications Systems</td><td>ACM/IEE E</td><td><a href="https://dblp.org/db/conf/ancs/">https://dblp.org/db/conf/ancs/</a></td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>2</td><td>APNOMS</td><td>Asia-Pacific Network Operations and Management Symposium</td><td>IFIP/IEEE</td><td><a href="https://dblp.org/db/conf/apnoms/">https://dblp.org/db/conf/apnoms/</a></td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>3</td><td>FORTE</td><td>Formal Techniques for Networked and Distributed Systems</td><td>Springer</td><td><a href="https://dblp.org/db/conf/forte/">https://dblp.org/db/conf/forte/</a></td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>4</td><td>LCN</td><td>IEEE Conference on Local Computer Networks</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/lcn/">https://dblp.org/db/conf/lcn/</a></td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>5</td><td>GLOBECO M</td><td>IEEE Global Communications Conference</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/globecom/">https://dblp.org/db/conf/globecom/</a></td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>6</td><td>ICC</td><td>IEEE International Conference on Communications</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icc/">https://dblp.org/db/conf/icc/</a></td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>7</td><td>ICCCN</td><td>IEEE International Conference on Computer Communications and Networks</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icccn/">https://dblp.org/db/conf/icccn/</a></td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>8</td><td>MASS</td><td>IEEE International Conference on Mobile Ad-hoc and Sensor Systems</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/mass/">https://dblp.org/db/conf/mass/</a></td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>9</td><td>P2P</td><td>IEEE International Conference on Peer-to-Peer Computing</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/p2p/">https://dblp.org/db/conf/p2p/</a></td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>10</td><td>IPCCC</td><td>IEEE International Performance Computing and Communications Conference</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/ipccc/">https://dblp.org/db/conf/ipccc/</a></td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>11</td><td>WoWMoM</td><td>IEEE International Symposium on a World of Wireless, Mobile and Multimedia Networks</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/wowmom/">https://dblp.org/db/conf/wowmom/</a></td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>12</td><td>ISCC</td><td>IEEE Symposium on Computers and Communications</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/iscc/">https://dblp.org/db/conf/iscc/</a></td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>13</td><td>WCNC</td><td>IEEE Wireless Communications &amp; Networking Conference</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/wcnc/">https://dblp.org/db/conf/wcnc/</a></td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>14</td><td>Networking</td><td>IFIP International Conferences on Networking</td><td>IFIP</td><td><a href="https://dblp.org/db/conf/networking/">https://dblp.org/db/conf/networking/</a></td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>15</td><td>IM</td><td>IFIP/IEEE International Symposium on Integrated Network Management</td><td>IFIP/IEEE</td><td><a href="https://dblp.org/db/conf/im/">https://dblp.org/db/conf/im/</a></td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>16</td><td>MSN</td><td>International Conference on Mobile Ad-hoc and Sensor Networks</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/msn/">https://dblp.org/db/conf/msn/</a></td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>17</td><td>MSWiM</td><td>International Conference on Modeling, Analysis and Simulation of Wireless and Mobile Systems</td><td>ACM</td><td><a href="https://dblp.org/db/conf/mswim/">https://dblp.org/db/conf/mswim/</a></td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>18</td><td>WASA</td><td>International Conference on Wireless Algorithms, Systems, and Applications</td><td>Springer</td><td><a href="https://dblp.org/db/conf/wasa/">https://dblp.org/db/conf/wasa/</a></td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>19</td><td>HotNets</td><td>The Workshop on Hot Topics in Networks</td><td>ACM</td><td><a href="https://dblp.org/db/conf/hotnets/">https://dblp.org/db/conf/hotnets/</a></td></tr>
<tr class="hd"><td>安全</td><td>A</td><td>期刊</td><td>1</td><td>TDSC</td><td>IEEE Transactions on Dependable and Secure Computing</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tdsc/">https://dblp.org/db/journals/tdsc/</a></td></tr>
<tr><td>安全</td><td>A</td><td>期刊</td><td>2</td><td>TIFS</td><td>IEEE Transactions on Information Forensics and Security</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tifs/">https://dblp.org/db/journals/tifs/</a></td></tr>
<tr class="oo"><td>安全</td><td>A</td><td>期刊</td><td>3</td><td></td><td>Journal of Cryptology</td><td>Springer</td><td><a href="https://dblp.org/db/journals/joc/">https://dblp.org/db/journals/joc/</a></td></tr>
<tr class="hd"><td>安全</td><td>B</td><td>期刊</td><td>1</td><td>TOPS</td><td>ACM Transactions on Privacy and Security</td><td>ACM</td><td><a href="https://tops.acm.org/">https://tops.acm.org/</a></td></tr>
<tr><td>安全</td><td>B</td><td>期刊</td><td>2</td><td></td><td>Computers &amp; Security</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/compsec/">https://dblp.org/db/journals/compsec/</a></td></tr>
<tr class="oo"><td>安全</td><td>B</td><td>期刊</td><td>3</td><td></td><td>Designs, Codes and Cryptography</td><td>Springer</td><td><a href="https://dblp.org/db/journals/dcc/">https://dblp.org/db/journals/dcc/</a></td></tr>
<tr><td>安全</td><td>B</td><td>期刊</td><td>4</td><td>JCS</td><td>Journal of Computer Security</td><td>IOS Press</td><td><a href="https://dblp.org/db/journals/jcs/">https://dblp.org/db/journals/jcs/</a></td></tr>
<tr class="hd"><td>安全</td><td>C</td><td>期刊</td><td>1</td><td>CLSR</td><td>Computer Law and Security Review</td><td>Elsevier</td><td><a href="http://www.journals.elsevier.com/computer-law-and- security-review/">http://www.journals.elsevier.com/computer-law-and- security-review/</a></td></tr>
<tr><td>安全</td><td>C</td><td>期刊</td><td>2</td><td></td><td>EURASIP Journal on Information Security</td><td>Springer</td><td><a href="https://dblp.org/db/journals/ejisec/">https://dblp.org/db/journals/ejisec/</a></td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>期刊</td><td>3</td><td></td><td>IET Information Security</td><td>IET</td><td><a href="https://dblp.org/db/journals/iet-ifs/">https://dblp.org/db/journals/iet-ifs/</a></td></tr>
<tr><td>安全</td><td>C</td><td>期刊</td><td>4</td><td>IMCS</td><td>Information Management &amp; Computer Security</td><td>Emerald</td><td><a href="https://dblp.org/db/journals/imcs/">https://dblp.org/db/journals/imcs/</a></td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>期刊</td><td>5</td><td>IJICS</td><td>International Journal of Information and Computer Security</td><td>Inderscience</td><td><a href="https://dblp.org/db/journals/ijics/">https://dblp.org/db/journals/ijics/</a></td></tr>
<tr><td>安全</td><td>C</td><td>期刊</td><td>6</td><td>IJISP</td><td>International Journal of Information Security and Privacy</td><td>Idea Group Inc</td><td><a href="https://dblp.org/db/journals/ijisp/">https://dblp.org/db/journals/ijisp/</a></td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>期刊</td><td>7</td><td>JISA</td><td>Journal of Information Security and Application</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/istr/">https://dblp.org/db/journals/istr/</a></td></tr>
<tr><td>安全</td><td>C</td><td>期刊</td><td>8</td><td>SCN</td><td>Security and Communication Networks</td><td>Wiley</td><td><a href="https://dblp.org/db/journals/scn/">https://dblp.org/db/journals/scn/</a></td></tr>
<tr class="hd"><td>安全</td><td>A</td><td>会议</td><td>1</td><td>CCS</td><td>ACM Conference on Computer and Communications Security</td><td>ACM</td><td><a href="https://dblp.org/db/conf/ccs/">https://dblp.org/db/conf/ccs/</a></td></tr>
<tr><td>安全</td><td>A</td><td>会议</td><td>2</td><td>EUROCRYPT</td><td>European Cryptology Conference</td><td>Springer</td><td><a href="https://dblp.org/db/conf/eurocrypt/">https://dblp.org/db/conf/eurocrypt/</a></td></tr>
<tr class="oo"><td>安全</td><td>A</td><td>会议</td><td>3</td><td>S&amp;P</td><td>IEEE Symposium on Security and Privacy</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/sp/">https://dblp.org/db/conf/sp/</a></td></tr>
<tr><td>安全</td><td>A</td><td>会议</td><td>4</td><td>CRYPTO</td><td>International Cryptology Conference</td><td>Springer</td><td><a href="https://dblp.org/db/conf/crypto/">https://dblp.org/db/conf/crypto/</a></td></tr>
<tr class="oo"><td>安全</td><td>A</td><td>会议</td><td>5</td><td>USENIX Security</td><td>Usenix Security Symposium</td><td>USENIX Association</td><td><a href="https://dblp.org/db/conf/uss/">https://dblp.org/db/conf/uss/</a></td></tr>
<tr class="hd"><td>安全</td><td>B</td><td>会议</td><td>1</td><td>ACSAC</td><td>Annual Computer Security Applications Conference</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/acsac/">https://dblp.org/db/conf/acsac/</a></td></tr>
<tr><td>安全</td><td>B</td><td>会议</td><td>2</td><td>ASIACRYPT</td><td>Annual International Conference on the Theory and Application of Cryptology and Information Security</td><td>Springer</td><td><a href="https://dblp.org/db/conf/asiacrypt/">https://dblp.org/db/conf/asiacrypt/</a></td></tr>
<tr class="oo"><td>安全</td><td>B</td><td>会议</td><td>3</td><td>ESORICS</td><td>European Symposium on Research in Computer Security</td><td>Springer</td><td><a href="https://dblp.org/db/conf/esorics/">https://dblp.org/db/conf/esorics/</a></td></tr>
<tr><td>安全</td><td>B</td><td>会议</td><td>4</td><td>FSE</td><td>Fast Software Encryption</td><td>Springer</td><td><a href="https://dblp.org/db/conf/fse/">https://dblp.org/db/conf/fse/</a></td></tr>
<tr class="oo"><td>安全</td><td>B</td><td>会议</td><td>5</td><td>CSFW</td><td>IEEE Computer Security Foundations Workshop</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/csfw/">https://dblp.org/db/conf/csfw/</a></td></tr>
<tr><td>安全</td><td>B</td><td>会议</td><td>6</td><td>SRDS</td><td>IEEE International Symposium on Reliable Distributed Systems</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/srds/">https://dblp.org/db/conf/srds/</a></td></tr>
<tr class="oo"><td>安全</td><td>B</td><td>会议</td><td>7</td><td>CHES</td><td>International Conference on Cryptographic Hardware and Embedded Systems</td><td>Springer</td><td><a href="https://dblp.org/db/conf/ches/">https://dblp.org/db/conf/ches/</a></td></tr>
<tr><td>安全</td><td>B</td><td>会议</td><td>8</td><td>DSN</td><td>International Conference on Dependable Systems and Networks</td><td>IEEE/IFIP</td><td><a href="https://dblp.org/db/conf/dsn/">https://dblp.org/db/conf/dsn/</a></td></tr>
<tr class="oo"><td>安全</td><td>B</td><td>会议</td><td>9</td><td>RAID</td><td>International Symposium on Recent Advances in Intrusion Detection</td><td>Springer</td><td><a href="https://dblp.org/db/conf/raid/">https://dblp.org/db/conf/raid/</a></td></tr>
<tr><td>安全</td><td>B</td><td>会议</td><td>10</td><td>PKC</td><td>International Workshop on Practice and Theory in Public Key Cryptography</td><td>Springer</td><td><a href="https://dblp.org/db/conf/pkc/">https://dblp.org/db/conf/pkc/</a></td></tr>
<tr class="oo"><td>安全</td><td>B</td><td>会议</td><td>11</td><td>NDSS</td><td>ISOC Network and Distributed System Security Symposium</td><td>ISOC</td><td><a href="https://dblp.org/db/conf/ndss/">https://dblp.org/db/conf/ndss/</a></td></tr>
<tr><td>安全</td><td>B</td><td>会议</td><td>12</td><td>TCC</td><td>Theory of Cryptography Conference</td><td>Springer</td><td><a href="https://dblp.org/db/conf/tcc/">https://dblp.org/db/conf/tcc/</a></td></tr>
<tr class="hd"><td>安全</td><td>C</td><td>会议</td><td>1</td><td>WiSec</td><td>ACM Conference on Security and Privacy in Wireless and Mobile Networks</td><td>ACM</td><td><a href="https://dblp.org/db/conf/wisec/">https://dblp.org/db/conf/wisec/</a></td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>2</td><td>SACMAT</td><td>ACM Symposium on Access Control Models and Technologies</td><td>ACM</td><td><a href="https://dblp.org/db/conf/sacmat/">https://dblp.org/db/conf/sacmat/</a></td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>3</td><td>DRM</td><td>ACM Workshop on Digital Rights Management</td><td>ACM</td><td><a href="https://dblp.org/db/conf/drm/">https://dblp.org/db/conf/drm/</a></td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>4</td><td>IH&amp;MMSec</td><td>ACM Workshop on Information Hiding and Multimedia Security</td><td>ACM</td><td><a href="https://dblp.org/db/conf/ih/">https://dblp.org/db/conf/ih/</a></td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>5</td><td>ACNS</td><td>Applied Cryptography and Network Security</td><td>Springer</td><td><a href="https://dblp.org/db/conf/acns/">https://dblp.org/db/conf/acns/</a></td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>6</td><td>AsiaCCS</td><td>Asia Conference on Computer and Communications Security</td><td>ACM</td><td><a href="https://dblp.org/db/conf/ccs/">https://dblp.org/db/conf/ccs/</a></td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>7</td><td>ACISP</td><td>Australasia Conference on Information Security and Privacy</td><td>Springer</td><td><a href="https://dblp.org/db/conf/acisp/">https://dblp.org/db/conf/acisp/</a></td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>8</td><td>CT-RSA</td><td>Cryptographer's Track at RSA Conference</td><td>Springer</td><td><a href="https://dblp.org/db/conf/ctrsa/">https://dblp.org/db/conf/ctrsa/</a></td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>9</td><td>DIMVA</td><td>Detection of Intrusions and Malware &amp; Vulnerability Assessment</td><td></td><td><a href="https://dblp.org/db/conf/dimva/">https://dblp.org/db/conf/dimva/</a></td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>10</td><td>DFRWS</td><td>Digital Forensic Research Workshop</td><td>Elsevier</td><td><a href="https://dblp.org/db/conf/dfrws/">https://dblp.org/db/conf/dfrws/</a></td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>11</td><td>FC</td><td>Financial Cryptography and Data Security</td><td>Springer</td><td><a href="https://dblp.org/db/conf/fc/">https://dblp.org/db/conf/fc/</a></td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>12</td><td>TrustCom</td><td>IEEE International Conference on Trust, Security and Privacy in Computing and Communications</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/trustcom/">https://dblp.org/db/conf/trustcom/</a></td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>13</td><td>SEC</td><td>IFIP International Information Security Conference</td><td>Springer</td><td><a href="https://dblp.org/db/conf/sec/">https://dblp.org/db/conf/sec/</a></td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>14</td><td>IFIP WG 11.9</td><td>IFIP WG 11.9 International Conference on Digital Forensics</td><td>Springer</td><td>*http://www.ifip119.org/Conferences/</td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>15</td><td>ISC</td><td>Information Security Conference</td><td>Springer</td><td><a href="https://dblp.org/db/conf/isw/">https://dblp.org/db/conf/isw/</a></td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>16</td><td>ICDF2C</td><td>International Conference on Digital Forensics &amp; Cyber Crime</td><td>Springer</td><td><a href="https://dblp.org/db/conf/icdf2c/">https://dblp.org/db/conf/icdf2c/</a></td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>17</td><td>ICICS</td><td>International Conference on Information and Communications Security</td><td>Springer</td><td><a href="https://dblp.org/db/conf/icics/">https://dblp.org/db/conf/icics/</a></td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>18</td><td>SecureComm</td><td>International Conference on Security and Privacy in Communication Networks</td><td>ACM</td><td><a href="https://dblp.org/db/conf/securecomm/">https://dblp.org/db/conf/securecomm/</a></td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>19</td><td>NSPW</td><td>New Security Paradigms Workshop</td><td>ACM</td><td><a href="https://dblp.org/db/conf/nspw/">https://dblp.org/db/conf/nspw/</a></td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>20</td><td>PAM</td><td>Passive and Active Measurement Conference</td><td>Springer</td><td><a href="https://dblp.org/db/conf/pam/">https://dblp.org/db/conf/pam/</a></td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>21</td><td>PETS</td><td>Privacy Enhancing Technologies Symposium</td><td>Springer</td><td><a href="https://dblp.org/db/conf/pet/">https://dblp.org/db/conf/pet/</a></td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>22</td><td>SAC</td><td>Selected Areas in Cryptography</td><td>Springer</td><td><a href="https://dblp.org/db/conf/sacrypt/">https://dblp.org/db/conf/sacrypt/</a></td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>23</td><td>SOUPS</td><td>Symposium On Usable Privacy and Security</td><td>USENIX</td><td><a href="https://dblp.org/db/conf/soups/">https://dblp.org/db/conf/soups/</a></td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>24</td><td>HotSec</td><td>USENIX Workshop on Hot Topics in Security</td><td>USENIX</td><td>*http://www.usenix.org/events/</td></tr>
<tr class="hd"><td>软工</td><td>A</td><td>期刊</td><td>1</td><td>TOPLAS</td><td>ACM Transactions on Programming Languages &amp; Systems</td><td>ACM</td><td><a href="https://dblp.org/db/journals/toplas/">https://dblp.org/db/journals/toplas/</a></td></tr>
<tr><td>软工</td><td>A</td><td>期刊</td><td>2</td><td>TOSEM</td><td>ACM Transactions on Software Engineering and Methodology</td><td>ACM</td><td><a href="https://dblp.org/db/journals/tosem/">https://dblp.org/db/journals/tosem/</a></td></tr>
<tr class="oo"><td>软工</td><td>A</td><td>期刊</td><td>3</td><td>TSE</td><td>IEEE Transactions on Software Engineering</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tse/">https://dblp.org/db/journals/tse/</a></td></tr>
<tr class="hd"><td>软工</td><td>B</td><td>期刊</td><td>1</td><td>ASE</td><td>Automated Software Engineering</td><td>Springer</td><td><a href="https://dblp.org/db/journals/ase/">https://dblp.org/db/journals/ase/</a></td></tr>
<tr><td>软工</td><td>B</td><td>期刊</td><td>2</td><td>ESE</td><td>Empirical Software Engineering</td><td>Springer</td><td><a href="https://dblp.org/db/journals/ese/">https://dblp.org/db/journals/ese/</a></td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>期刊</td><td>3</td><td>TSC</td><td>IEEE Transactions on Service Computing</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tsc/">https://dblp.org/db/journals/tsc/</a></td></tr>
<tr><td>软工</td><td>B</td><td>期刊</td><td>4</td><td>IETS</td><td>IET Software</td><td>IET</td><td><a href="https://dblp.org/db/journals/iet-sen/">https://dblp.org/db/journals/iet-sen/</a></td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>期刊</td><td>5</td><td>IST</td><td>Information and Software Technology</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/infsof/">https://dblp.org/db/journals/infsof/</a></td></tr>
<tr><td>软工</td><td>B</td><td>期刊</td><td>6</td><td>JFP</td><td>Journal of Functional Programming</td><td>Cambridge University Press</td><td><a href="https://dblp.org/db/journals/jfp/">https://dblp.org/db/journals/jfp/</a></td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>期刊</td><td>7</td><td></td><td>Journal of Software: Evolution and Process</td><td>Wiley</td><td><a href="https://dblp.org/db/journals/smr/">https://dblp.org/db/journals/smr/</a></td></tr>
<tr><td>软工</td><td>B</td><td>期刊</td><td>8</td><td>JSS</td><td>Journal of Systems and Software</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/jss/">https://dblp.org/db/journals/jss/</a></td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>期刊</td><td>9</td><td>RE</td><td>Requirements Engineering</td><td>Springer</td><td><a href="https://dblp.org/db/journals/re/">https://dblp.org/db/journals/re/</a></td></tr>
<tr><td>软工</td><td>B</td><td>期刊</td><td>10</td><td>SCP</td><td>Science of Computer Programming</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/scp/">https://dblp.org/db/journals/scp/</a></td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>期刊</td><td>11</td><td>SoSyM</td><td>Software and System Modeling</td><td>Springer</td><td><a href="https://dblp.org/db/journals/sosym/">https://dblp.org/db/journals/sosym/</a></td></tr>
<tr><td>软工</td><td>B</td><td>期刊</td><td>12</td><td>STVR</td><td>Software Testing, Verification and Reliability</td><td>Wiley</td><td><a href="https://dblp.org/db/journals/stvr/">https://dblp.org/db/journals/stvr/</a></td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>期刊</td><td>13</td><td>SPE</td><td>Software: Practice and Experience</td><td>Wiley</td><td><a href="https://dblp.org/db/journals/spe/">https://dblp.org/db/journals/spe/</a></td></tr>
<tr class="hd"><td>软工</td><td>C</td><td>期刊</td><td>1</td><td>CL</td><td>Computer Languages, Systems and Structures</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/cl/">https://dblp.org/db/journals/cl/</a></td></tr>
<tr><td>软工</td><td>C</td><td>期刊</td><td>2</td><td>IJSEKE</td><td>International Journal on Software Engineering and Knowledge Engineering</td><td>World Scientific</td><td><a href="https://dblp.org/db/journals/ijseke/">https://dblp.org/db/journals/ijseke/</a></td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>期刊</td><td>3</td><td>STTT</td><td>International Journal on Software Tools for Technology Transfer</td><td>Springer</td><td><a href="https://dblp.org/db/journals/sttt/">https://dblp.org/db/journals/sttt/</a></td></tr>
<tr><td>软工</td><td>C</td><td>期刊</td><td>4</td><td>JLAP</td><td>Journal of Logic and Algebraic Programming</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/jlp/jlap.html/">https://dblp.org/db/journals/jlp/jlap.html/</a></td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>期刊</td><td>5</td><td>JWE</td><td>Journal of Web Engineering</td><td>Rinton Press</td><td><a href="https://dblp.org/db/journals/jwe/">https://dblp.org/db/journals/jwe/</a></td></tr>
<tr><td>软工</td><td>C</td><td>期刊</td><td>6</td><td>SOCA</td><td>Service Oriented Computing and Applications</td><td>Springer</td><td><a href="https://dblp.org/db/journals/soca/">https://dblp.org/db/journals/soca/</a></td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>期刊</td><td>7</td><td>SQJ</td><td>Software Quality Journal</td><td>Springer</td><td><a href="https://dblp.org/db/journals/sqj/">https://dblp.org/db/journals/sqj/</a></td></tr>
<tr><td>软工</td><td>C</td><td>期刊</td><td>8</td><td>TPLP</td><td>Theory and Practice of Logic Programming</td><td>Cambridge University Press</td><td><a href="https://dblp.org/db/journals/tplp/">https://dblp.org/db/journals/tplp/</a></td></tr>
<tr class="hd"><td>软工</td><td>A</td><td>会议</td><td>1</td><td>PLDI</td><td>ACM SIGPLAN Conference on Programming Language Design &amp; Implementation</td><td>ACM</td><td><a href="https://dblp.org/db/conf/pldi/">https://dblp.org/db/conf/pldi/</a></td></tr>
<tr><td>软工</td><td>A</td><td>会议</td><td>2</td><td>POPL</td><td>ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages</td><td>ACM</td><td><a href="https://dblp.org/db/conf/popl/">https://dblp.org/db/conf/popl/</a></td></tr>
<tr class="oo"><td>软工</td><td>A</td><td>会议</td><td>3</td><td>FSE/ESEC</td><td>ACM SIGSOFT Symposium on the Foundation of Software Engineering/ European Software Engineering Conference</td><td>ACM</td><td><a href="https://dblp.org/db/conf/sigsoft/">https://dblp.org/db/conf/sigsoft/</a></td></tr>
<tr><td>软工</td><td>A</td><td>会议</td><td>4</td><td>SOSP</td><td>ACM Symposium on Operating Systems Principles</td><td>ACM</td><td><a href="https://dblp.org/db/conf/sosp/">https://dblp.org/db/conf/sosp/</a></td></tr>
<tr class="oo"><td>软工</td><td>A</td><td>会议</td><td>5</td><td>OOPSLA</td><td>Conference on Object-Oriented Programming Systems, Languages, and Applications</td><td>ACM</td><td><a href="https://dblp.org/db/conf/oopsla/">https://dblp.org/db/conf/oopsla/</a></td></tr>
<tr><td>软工</td><td>A</td><td>会议</td><td>6</td><td>ASE</td><td>International Conference on Automated Software Engineering</td><td>IEEE/ACM</td><td><a href="https://dblp.org/db/conf/kbse/">https://dblp.org/db/conf/kbse/</a></td></tr>
<tr class="oo"><td>软工</td><td>A</td><td>会议</td><td>7</td><td>ICSE</td><td>International Conference on Software Engineering</td><td>ACM/IEEE</td><td><a href="https://dblp.org/db/conf/icse/">https://dblp.org/db/conf/icse/</a></td></tr>
<tr><td>软工</td><td>A</td><td>会议</td><td>8</td><td>ISSTA</td><td>International Symposium on Software Testing and Analysis</td><td>ACM</td><td><a href="https://dblp.org/db/conf/issta/">https://dblp.org/db/conf/issta/</a></td></tr>
<tr class="oo"><td>软工</td><td>A</td><td>会议</td><td>9</td><td>OSDI</td><td>USENIX Symposium on Operating Systems Design and Implementations</td><td>USENIX</td><td><a href="https://dblp.org/db/conf/osdi/">https://dblp.org/db/conf/osdi/</a></td></tr>
<tr class="hd"><td>软工</td><td>B</td><td>会议</td><td>1</td><td>ECOOP</td><td>European Conference on Object-Oriented Programming</td><td>AITO</td><td><a href="https://dblp.org/db/conf/ecoop/">https://dblp.org/db/conf/ecoop/</a></td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>2</td><td>ETAPS</td><td>European Joint Conferences on Theory and Practice of Software</td><td>Springer</td><td><a href="https://dblp.org/db/conf/etaps/">https://dblp.org/db/conf/etaps/</a></td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>3</td><td>ICPC</td><td>IEEE International Conference on Program Comprehension</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/iwpc/">https://dblp.org/db/conf/iwpc/</a></td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>4</td><td>RE</td><td>IEEE International Requirements Engineering Conference</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/re/">https://dblp.org/db/conf/re/</a></td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>5</td><td>CAiSE</td><td>International Conference on Advanced Information Systems Engineering</td><td>Springer</td><td><a href="https://dblp.org/db/conf/caise/">https://dblp.org/db/conf/caise/</a></td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>6</td><td>ICFP</td><td>International Conference on Function Programming</td><td>ACM</td><td><a href="https://dblp.org/db/conf/icfp/">https://dblp.org/db/conf/icfp/</a></td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>7</td><td>LCTES</td><td>International Conference on Languages, Compilers and Tools for Embedded Systems</td><td>ACM</td><td><a href="https://dblp.org/db/conf/lctrts/">https://dblp.org/db/conf/lctrts/</a></td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>8</td><td>MoDELS</td><td>International Conference on Model Driven Engineering Languages and Systems</td><td>ACM, IEEE</td><td><a href="https://dblp.org/db/conf/models/">https://dblp.org/db/conf/models/</a></td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>9</td><td>CP</td><td>International Conference on Principles and Practice of Constraint Programming</td><td>Springer</td><td><a href="https://dblp.org/db/conf/cp/">https://dblp.org/db/conf/cp/</a></td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>10</td><td>ICSOC</td><td>International Conference on Service Oriented Computing</td><td>Springer</td><td><a href="https://dblp.org/db/conf/icsoc/">https://dblp.org/db/conf/icsoc/</a></td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>11</td><td>SANER</td><td>International Conference on Software Analysis, Evolution, and Reengineering</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/wcre/">https://dblp.org/db/conf/wcre/</a></td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>12</td><td>ICSME</td><td>International Conference on Software Maintenance and Evolution</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icsm/">https://dblp.org/db/conf/icsm/</a></td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>13</td><td>VMCAI</td><td>International Conference on Verification, Model Checking, and Abstract Interpretation</td><td>Springer</td><td><a href="https://dblp.org/db/conf/vmcai/">https://dblp.org/db/conf/vmcai/</a></td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>14</td><td>ICWS</td><td>International Conference on Web Services （Research Track）</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icws/">https://dblp.org/db/conf/icws/</a></td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>15</td><td>Middleware</td><td>International Middleware Conference</td><td>ACM/IFIP/ USENIX</td><td><a href="https://dblp.org/db/conf/middleware/">https://dblp.org/db/conf/middleware/</a></td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>16</td><td>SAS</td><td>International Static Analysis Symposium</td><td>Springer</td><td><a href="https://dblp.org/db/conf/sas/">https://dblp.org/db/conf/sas/</a></td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>17</td><td>ESEM</td><td>International Symposium on Empirical Software Engineering and Measurement</td><td>ACM/IEEE</td><td><a href="https://dblp.org/db/conf/esem/">https://dblp.org/db/conf/esem/</a></td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>18</td><td>FM</td><td>International Symposium on Formal Methods</td><td>FME</td><td><a href="https://dblp.org/db/conf/fm/">https://dblp.org/db/conf/fm/</a></td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>19</td><td>ISSRE</td><td>International Symposium on Software Reliability Engineering</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/issre/">https://dblp.org/db/conf/issre/</a></td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>20</td><td>HotOS</td><td>USENIX Workshop on Hot Topics in Operating Systems</td><td>USENIX</td><td><a href="https://dblp.org/db/conf/hotos/">https://dblp.org/db/conf/hotos/</a></td></tr>
<tr class="hd"><td>软工</td><td>C</td><td>会议</td><td>1</td><td>PEPM</td><td>ACM SIGPLAN Workshop on Partial Evaluation and Program Manipulation</td><td>ACM</td><td><a href="https://dblp.org/db/conf/pepm/">https://dblp.org/db/conf/pepm/</a></td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>2</td><td>PASTE</td><td>ACMSIGPLAN-SIGSOFT Workshop on Program Analysis for Software Tools and Engineering</td><td>ACM</td><td><a href="https://dblp.org/db/conf/paste/">https://dblp.org/db/conf/paste/</a></td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>3</td><td>APLAS</td><td>Asian Symposium on Programming Languages and Systems</td><td>Springer</td><td><a href="https://dblp.org/db/conf/aplas/">https://dblp.org/db/conf/aplas/</a></td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>4</td><td>APSEC</td><td>Asia-Pacific Software Engineering Conference</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/apsec/">https://dblp.org/db/conf/apsec/</a></td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>5</td><td>EASE</td><td>Evaluation and Assessment in Software Engineering</td><td>ACM</td><td><a href="https://dblp.org/db/conf/ease/">https://dblp.org/db/conf/ease/</a></td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>6</td><td>ICECCS</td><td>IEEE International Conference on Engineering of Complex Computer Systems</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/iceccs/">https://dblp.org/db/conf/iceccs/</a></td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>7</td><td>ICST</td><td>IEEE International Conference on Software Testing, Verification and Validation</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icst/">https://dblp.org/db/conf/icst/</a></td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>8</td><td>ISPASS</td><td>IEEE International Symposium on Performance Analysis of Systems and Software</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/ispass/">https://dblp.org/db/conf/ispass/</a></td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>9</td><td>SCAM</td><td>IEEE International Working Conference on Source Code Analysis and Manipulation</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/scam/">https://dblp.org/db/conf/scam/</a></td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>10</td><td>COMPSAC</td><td>International Computer Software and Applications Conference</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/compsac/">https://dblp.org/db/conf/compsac/</a></td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>11</td><td>ICFEM</td><td>International Conference on Formal Engineering Methods</td><td>Springer</td><td><a href="https://dblp.org/db/conf/icfem/">https://dblp.org/db/conf/icfem/</a></td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>12</td><td>TOOLS</td><td>International Conference on Objects, Models, Components, Patterns</td><td>Springer</td><td><a href="https://dblp.org/db/conf/tools/">https://dblp.org/db/conf/tools/</a></td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>13</td><td>SCC</td><td>International Conference on Service Computing</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/IEEEscc/">https://dblp.org/db/conf/IEEEscc/</a></td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>14</td><td>ICSSP</td><td>International Conference on Software and System Process</td><td>ACM</td><td><a href="https://dblp.org/db/conf/ispw/">https://dblp.org/db/conf/ispw/</a></td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>15</td><td>SEKE</td><td>International Conference on Software Engineering and Knowledge Engineering</td><td>KSI</td><td><a href="https://dblp.org/db/conf/seke/">https://dblp.org/db/conf/seke/</a></td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>16</td><td>QRS</td><td>International Conference on Software Quality, Reliability and Security</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/qrs/">https://dblp.org/db/conf/qrs/</a></td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>17</td><td>ICSR</td><td>International Conference on Software Reuse</td><td>Springer</td><td><a href="https://dblp.org/db/conf/icsr/">https://dblp.org/db/conf/icsr/</a></td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>18</td><td>ICWE</td><td>International Conference on Web Engineering</td><td>Springer</td><td><a href="https://dblp.org/db/conf/icwe/">https://dblp.org/db/conf/icwe/</a></td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>19</td><td>SPIN</td><td>International SPIN Workshop on Model Checking Software</td><td>Springer</td><td><a href="https://dblp.org/db/conf/spin/">https://dblp.org/db/conf/spin/</a></td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>20</td><td>ATVA</td><td>International Symposium on Automated Technology for Verification and Analysis</td><td>Springer</td><td><a href="https://dblp.org/db/conf/atva/">https://dblp.org/db/conf/atva/</a></td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>21</td><td>LOPSTR</td><td>International Symposium on Logic-based Program Synthesis and Transformation</td><td>Springer</td><td><a href="https://dblp.org/db/conf/lopstr/">https://dblp.org/db/conf/lopstr/</a></td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>22</td><td>TASE</td><td>International Symposium on Theoretical Aspects of Software Engineering</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/tase/">https://dblp.org/db/conf/tase/</a></td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>23</td><td>MSR</td><td>Mining Software Repositories</td><td>IEEE/ACM</td><td><a href="https://dblp.org/db/conf/msr/">https://dblp.org/db/conf/msr/</a></td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>24</td><td>REFSQ</td><td>Requirements Engineering: Foundation for Software Quality</td><td>Springer</td><td><a href="https://dblp.org/db/conf/refsq/">https://dblp.org/db/conf/refsq/</a></td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>25</td><td>WICSA</td><td>Working IEEE/IFIP Conference on Software Architecture</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/wicsa/">https://dblp.org/db/conf/wicsa/</a></td></tr>
<tr class="hd"><td>数据库</td><td>A</td><td>期刊</td><td>1</td><td>TODS</td><td>ACM Transactions on Database Systems</td><td>ACM</td><td><a href="https://dblp.org/db/journals/tods/">https://dblp.org/db/journals/tods/</a></td></tr>
<tr><td>数据库</td><td>A</td><td>期刊</td><td>2</td><td>TOIS</td><td>ACM Transactions on Information Systems</td><td>ACM</td><td><a href="https://dblp.org/db/journals/tois/">https://dblp.org/db/journals/tois/</a></td></tr>
<tr class="oo"><td>数据库</td><td>A</td><td>期刊</td><td>3</td><td>TKDE</td><td>IEEE Transactions on Knowledge and Data Engineering</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tkde/">https://dblp.org/db/journals/tkde/</a></td></tr>
<tr><td>数据库</td><td>A</td><td>期刊</td><td>4</td><td>VLDBJ</td><td>The VLDB Journal</td><td>Springer</td><td><a href="https://dblp.org/db/journals/vldb/">https://dblp.org/db/journals/vldb/</a></td></tr>
<tr class="hd"><td>数据库</td><td>B</td><td>期刊</td><td>1</td><td>TKDD</td><td>ACM Transactions on Knowledge Discovery from Data</td><td>ACM</td><td><a href="https://dblp.org/db/journals/tkdd/">https://dblp.org/db/journals/tkdd/</a></td></tr>
<tr><td>数据库</td><td>B</td><td>期刊</td><td>2</td><td>TWEB</td><td>ACM Transactions on the Web</td><td>ACM</td><td><a href="https://dblp.org/db/journals/tweb/">https://dblp.org/db/journals/tweb/</a></td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>期刊</td><td>3</td><td>AEI</td><td>Advanced Engineering Informatics</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/aei/">https://dblp.org/db/journals/aei/</a></td></tr>
<tr><td>数据库</td><td>B</td><td>期刊</td><td>4</td><td>DKE</td><td>Data and Knowledge Engineering</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/dke/">https://dblp.org/db/journals/dke/</a></td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>期刊</td><td>5</td><td>DMKD</td><td>Data Mining and Knowledge Discovery</td><td>Springer</td><td><a href="https://dblp.org/db/journals/datamine/">https://dblp.org/db/journals/datamine/</a></td></tr>
<tr><td>数据库</td><td>B</td><td>期刊</td><td>6</td><td>EJIS</td><td>European Journal of Information Systems</td><td>Springer</td><td><a href="https://dblp.org/db/journals/ejis/">https://dblp.org/db/journals/ejis/</a></td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>期刊</td><td>7</td><td></td><td>GeoInformatica</td><td>Springer</td><td><a href="https://dblp.org/db/journals/geoinformatica/">https://dblp.org/db/journals/geoinformatica/</a></td></tr>
<tr><td>数据库</td><td>B</td><td>期刊</td><td>8</td><td>IPM</td><td>Information Processing and Management</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/ipm/">https://dblp.org/db/journals/ipm/</a></td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>期刊</td><td>9</td><td></td><td>Information Sciences</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/isci/">https://dblp.org/db/journals/isci/</a></td></tr>
<tr><td>数据库</td><td>B</td><td>期刊</td><td>10</td><td>IS</td><td>Information Systems</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/is/">https://dblp.org/db/journals/is/</a></td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>期刊</td><td>11</td><td>JASIST</td><td>Journal of the American Society for Information Science and Technology</td><td>American Society for Information Science and Technology</td><td><a href="https://dblp.org/db/journals/jasis/">https://dblp.org/db/journals/jasis/</a></td></tr>
<tr><td>数据库</td><td>B</td><td>期刊</td><td>12</td><td>JWS</td><td>Journal of Web Semantics</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/ws/">https://dblp.org/db/journals/ws/</a></td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>期刊</td><td>13</td><td>KAIS</td><td>Knowledge and Information Systems</td><td>Springer</td><td><a href="https://dblp.org/db/journals/kais/">https://dblp.org/db/journals/kais/</a></td></tr>
<tr class="hd"><td>数据库</td><td>C</td><td>期刊</td><td>1</td><td>DPD</td><td>Distributed and Parallel Databases</td><td>Springer</td><td><a href="https://dblp.org/db/journals/dpd/">https://dblp.org/db/journals/dpd/</a></td></tr>
<tr><td>数据库</td><td>C</td><td>期刊</td><td>2</td><td>I&amp;M</td><td>Information and Management</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/iam/">https://dblp.org/db/journals/iam/</a></td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>期刊</td><td>3</td><td>IPL</td><td>Information Processing Letters</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/ipl/">https://dblp.org/db/journals/ipl/</a></td></tr>
<tr><td>数据库</td><td>C</td><td>期刊</td><td>4</td><td>IR</td><td>Information Retrieval Journal</td><td>Springer</td><td><a href="https://dblp.org/db/journals/ir/">https://dblp.org/db/journals/ir/</a></td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>期刊</td><td>5</td><td>IJCIS</td><td>International Journal of Cooperative Information Systems</td><td>World Scientific</td><td><a href="https://dblp.org/db/journals/ijcis/">https://dblp.org/db/journals/ijcis/</a></td></tr>
<tr><td>数据库</td><td>C</td><td>期刊</td><td>6</td><td>IJGIS</td><td>International Journal of Geographical Information Science</td><td>Taylor &amp; Francis</td><td><a href="https://dblp.org/db/journals/gis/">https://dblp.org/db/journals/gis/</a></td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>期刊</td><td>7</td><td>IJIS</td><td>International Journal of Intelligent Systems</td><td>Wiley</td><td><a href="https://dblp.org/db/journals/ijis/">https://dblp.org/db/journals/ijis/</a></td></tr>
<tr><td>数据库</td><td>C</td><td>期刊</td><td>8</td><td>IJKM</td><td>International Journal of Knowledge Management</td><td>IGI</td><td><a href="https://dblp.org/db/journals/ijkm/">https://dblp.org/db/journals/ijkm/</a></td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>期刊</td><td>9</td><td>IJSWIS</td><td>International Journal on Semantic Web and Information Systems</td><td>IGI</td><td><a href="https://dblp.org/db/journals/ijswis/">https://dblp.org/db/journals/ijswis/</a></td></tr>
<tr><td>数据库</td><td>C</td><td>期刊</td><td>10</td><td>JCIS</td><td>Journal of Computer Information Systems</td><td>IACIS</td><td><a href="https://dblp.org/db/journals/jcis/">https://dblp.org/db/journals/jcis/</a></td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>期刊</td><td>11</td><td>JDM</td><td>Journal of Database Management</td><td>IGI-Global</td><td><a href="https://dblp.org/db/journals/jdm/">https://dblp.org/db/journals/jdm/</a></td></tr>
<tr><td>数据库</td><td>C</td><td>期刊</td><td>12</td><td>JGITM</td><td>Journal of Global Information Technology Management</td><td>Ivy League Publishing</td><td><a href="http://www.tandfonline.com/loi/ugit20#.Vnv35pN97rI">http://www.tandfonline.com/loi/ugit20#.Vnv35pN97rI</a></td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>期刊</td><td>13</td><td>JIIS</td><td>Journal of Intelligent Information Systems</td><td>Springer</td><td><a href="https://dblp.org/db/journals/jiis/">https://dblp.org/db/journals/jiis/</a></td></tr>
<tr><td>数据库</td><td>C</td><td>期刊</td><td>14</td><td>JSIS</td><td>Journal of Strategic Information Systems</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/jsis/">https://dblp.org/db/journals/jsis/</a></td></tr>
<tr class="hd"><td>数据库</td><td>A</td><td>会议</td><td>1</td><td>SIGMOD</td><td>ACM Conference on Management of Data</td><td>ACM</td><td><a href="https://dblp.org/db/conf/sigmod/">https://dblp.org/db/conf/sigmod/</a></td></tr>
<tr><td>数据库</td><td>A</td><td>会议</td><td>2</td><td>SIGKDD</td><td>ACM Knowledge Discovery and Data Mining</td><td>ACM</td><td><a href="https://dblp.org/db/conf/kdd/">https://dblp.org/db/conf/kdd/</a></td></tr>
<tr class="oo"><td>数据库</td><td>A</td><td>会议</td><td>3</td><td>ICDE</td><td>IEEE International Conference on Data Engineering</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icde/">https://dblp.org/db/conf/icde/</a></td></tr>
<tr><td>数据库</td><td>A</td><td>会议</td><td>4</td><td>SIGIR</td><td>International Conference on Research on Development in Information Retrieval</td><td>ACM</td><td><a href="https://dblp.org/db/conf/sigir/">https://dblp.org/db/conf/sigir/</a></td></tr>
<tr class="oo"><td>数据库</td><td>A</td><td>会议</td><td>5</td><td>VLDB</td><td>International Conference on Very Large Data Bases</td><td>Morgan Kaufmann/ACM</td><td><a href="https://dblp.org/db/conf/vldb/">https://dblp.org/db/conf/vldb/</a></td></tr>
<tr class="hd"><td>数据库</td><td>B</td><td>会议</td><td>1</td><td>CIKM</td><td>ACM International Conference on Information and Knowledge Management</td><td>ACM</td><td><a href="https://dblp.org/db/conf/cikm/">https://dblp.org/db/conf/cikm/</a></td></tr>
<tr><td>数据库</td><td>B</td><td>会议</td><td>2</td><td>WSDM</td><td>ACM International Conference on Web Search and Data Mining</td><td>ACM</td><td><a href="https://dblp.org/db/conf/wsdm/">https://dblp.org/db/conf/wsdm/</a></td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>会议</td><td>3</td><td>PODS</td><td>ACM Symposium on Principles of Database Systems</td><td>ACM</td><td><a href="https://dblp.org/db/conf/pods/">https://dblp.org/db/conf/pods/</a></td></tr>
<tr><td>数据库</td><td>B</td><td>会议</td><td>4</td><td>DASFAA</td><td>Database Systems for Advanced Applications</td><td>Springer</td><td><a href="https://dblp.org/db/conf/dasfaa/">https://dblp.org/db/conf/dasfaa/</a></td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>会议</td><td>5</td><td>ECML-PKDD</td><td>European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases</td><td>Springer</td><td><a href="https://dblp.org/db/conf/ecml/ https://dblp.org/db/conf/pkdd/">https://dblp.org/db/conf/ecml/ https://dblp.org/db/conf/pkdd/</a></td></tr>
<tr><td>数据库</td><td>B</td><td>会议</td><td>6</td><td>ISWC</td><td>IEEE International Semantic Web Conference</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/semweb/">https://dblp.org/db/conf/semweb/</a></td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>会议</td><td>7</td><td>ICDM</td><td>International Conference on Data Mining</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icdm/">https://dblp.org/db/conf/icdm/</a></td></tr>
<tr><td>数据库</td><td>B</td><td>会议</td><td>8</td><td>ICDT</td><td>International Conference on Database Theory</td><td>Springer</td><td><a href="https://dblp.org/db/conf/icdt/">https://dblp.org/db/conf/icdt/</a></td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>会议</td><td>9</td><td>EDBT</td><td>International Conference on Extending DB Technology</td><td>Springer</td><td><a href="https://dblp.org/db/conf/edbt/">https://dblp.org/db/conf/edbt/</a></td></tr>
<tr><td>数据库</td><td>B</td><td>会议</td><td>10</td><td>CIDR</td><td>International Conference on Innovative Data Systems Research</td><td>Online Proceeding</td><td><a href="https://dblp.org/db/conf/cidr/">https://dblp.org/db/conf/cidr/</a></td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>会议</td><td>11</td><td>SDM</td><td>SIAM International Conference on Data Mining</td><td>SIAM</td><td><a href="https://dblp.org/db/conf/sdm/">https://dblp.org/db/conf/sdm/</a></td></tr>
<tr class="hd"><td>数据库</td><td>C</td><td>会议</td><td>1</td><td>APWeb</td><td>Asia Pacific Web Conference</td><td>Springer</td><td><a href="https://dblp.org/db/conf/apweb/">https://dblp.org/db/conf/apweb/</a></td></tr>
<tr><td>数据库</td><td>C</td><td>会议</td><td>2</td><td>DEXA</td><td>Database and Expert System Applications</td><td>Springer</td><td><a href="https://dblp.org/db/conf/dexa/">https://dblp.org/db/conf/dexa/</a></td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>会议</td><td>3</td><td>ECIR</td><td>European Conference on IR Research</td><td>Springer</td><td><a href="https://dblp.org/db/conf/ecir/">https://dblp.org/db/conf/ecir/</a></td></tr>
<tr><td>数据库</td><td>C</td><td>会议</td><td>4</td><td>ESWC</td><td>Extended Semantic Web Conference</td><td>Springer</td><td><a href="https://dblp.org/db/conf/esws/">https://dblp.org/db/conf/esws/</a></td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>会议</td><td>5</td><td>WebDB</td><td>International ACM Workshop on Web and Databases</td><td>ACM</td><td><a href="https://dblp.org/db/conf/webdb/">https://dblp.org/db/conf/webdb/</a></td></tr>
<tr><td>数据库</td><td>C</td><td>会议</td><td>6</td><td>ER</td><td>International Conference on Conceptual Modeling</td><td>Springer</td><td><a href="https://dblp.org/db/conf/er/">https://dblp.org/db/conf/er/</a></td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>会议</td><td>7</td><td>MDM</td><td>International Conference on Mobile Data Management</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/mdm/">https://dblp.org/db/conf/mdm/</a></td></tr>
<tr><td>数据库</td><td>C</td><td>会议</td><td>8</td><td>SSDBM</td><td>International Conference on Scientific and Statistical DB Management</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/ssdbm/">https://dblp.org/db/conf/ssdbm/</a></td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>会议</td><td>9</td><td>WAIM</td><td>International Conference on Web Age Information Management</td><td>Springer</td><td><a href="https://dblp.org/db/conf/waim/">https://dblp.org/db/conf/waim/</a></td></tr>
<tr><td>数据库</td><td>C</td><td>会议</td><td>10</td><td>SSTD</td><td>International Symposium on Spatial and Temporal Databases</td><td>Springer</td><td><a href="https://dblp.org/db/conf/ssd/">https://dblp.org/db/conf/ssd/</a></td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>会议</td><td>11</td><td>PAKDD</td><td>Pacific-Asia Conference on Knowledge Discovery and Data Mining</td><td>Springer</td><td><a href="https://dblp.org/db/conf/pakdd/">https://dblp.org/db/conf/pakdd/</a></td></tr>
<tr><td>数据库</td><td>C</td><td>会议</td><td>12</td><td>WISE</td><td>Web Information Systems Engineering</td><td>Springer</td><td><a href="https://dblp.org/db/conf/wise/">https://dblp.org/db/conf/wise/</a></td></tr>
<tr class="hd"><td>理论</td><td>A</td><td>期刊</td><td>1</td><td>TIT</td><td>IEEE Transactions on Information Theory</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tit/">https://dblp.org/db/journals/tit/</a></td></tr>
<tr><td>理论</td><td>A</td><td>期刊</td><td>2</td><td>IANDC</td><td>Information and Computation</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/iandc/">https://dblp.org/db/journals/iandc/</a></td></tr>
<tr class="oo"><td>理论</td><td>A</td><td>期刊</td><td>3</td><td>SICOMP</td><td>SIAM Journal on Computing</td><td>SIAM</td><td><a href="https://dblp.org/db/journals/siamcomp/">https://dblp.org/db/journals/siamcomp/</a></td></tr>
<tr class="hd"><td>理论</td><td>B</td><td>期刊</td><td>1</td><td>TALG</td><td>ACM Transactions on Algorithms</td><td>ACM</td><td><a href="https://dblp.org/db/journals/talg/">https://dblp.org/db/journals/talg/</a></td></tr>
<tr><td>理论</td><td>B</td><td>期刊</td><td>2</td><td>TOCL</td><td>ACM Transactions on Computational Logic</td><td>ACM</td><td><a href="https://dblp.org/db/journals/tocl/">https://dblp.org/db/journals/tocl/</a></td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>期刊</td><td>3</td><td>TOMS</td><td>ACM Transactions on Mathematical Software</td><td>ACM</td><td><a href="https://dblp.org/db/journals/toms/">https://dblp.org/db/journals/toms/</a></td></tr>
<tr><td>理论</td><td>B</td><td>期刊</td><td>4</td><td>Algorithmica</td><td>Algorithmica</td><td>Springer</td><td><a href="https://dblp.org/db/journals/algorithmica/">https://dblp.org/db/journals/algorithmica/</a></td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>期刊</td><td>5</td><td>CC</td><td>Computational Complexity</td><td>Springer</td><td><a href="https://dblp.org/db/journals/cc/">https://dblp.org/db/journals/cc/</a></td></tr>
<tr><td>理论</td><td>B</td><td>期刊</td><td>6</td><td>FAC</td><td>Formal Aspects of Computing</td><td>Springer</td><td><a href="https://dblp.org/db/journals/fac/">https://dblp.org/db/journals/fac/</a></td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>期刊</td><td>7</td><td>FMSD</td><td>Formal Methods in System Design</td><td>Springer</td><td><a href="https://dblp.org/db/journals/fmsd/">https://dblp.org/db/journals/fmsd/</a></td></tr>
<tr><td>理论</td><td>B</td><td>期刊</td><td>8</td><td>INFORMS</td><td>INFORMS Journal on Computing</td><td>INFORMS</td><td><a href="https://dblp.org/db/journals/informs/">https://dblp.org/db/journals/informs/</a></td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>期刊</td><td>9</td><td>JCSS</td><td>Journal of Computer and System Sciences</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/jcss/">https://dblp.org/db/journals/jcss/</a></td></tr>
<tr><td>理论</td><td>B</td><td>期刊</td><td>10</td><td>JGO</td><td>Journal of Global Optimization</td><td>Springer</td><td><a href="https://dblp.org/db/journals/jgo/">https://dblp.org/db/journals/jgo/</a></td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>期刊</td><td>11</td><td>JSC</td><td>Journal of Symbolic Computation</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/jsc/">https://dblp.org/db/journals/jsc/</a></td></tr>
<tr><td>理论</td><td>B</td><td>期刊</td><td>12</td><td>MSCS</td><td>Mathematical Structures in Computer Science</td><td>Cambridge University Press</td><td><a href="https://dblp.org/db/journals/mscs/">https://dblp.org/db/journals/mscs/</a></td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>期刊</td><td>13</td><td>TCS</td><td>Theoretical Computer Science</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/tcs/">https://dblp.org/db/journals/tcs/</a></td></tr>
<tr class="hd"><td>理论</td><td>C</td><td>期刊</td><td>1</td><td>ACTA</td><td>Acta Informatica</td><td>Springer</td><td><a href="https://dblp.org/db/journals/acta/">https://dblp.org/db/journals/acta/</a></td></tr>
<tr><td>理论</td><td>C</td><td>期刊</td><td>2</td><td>APAL</td><td>Annals of Pure and Applied Logic</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/apal/">https://dblp.org/db/journals/apal/</a></td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>期刊</td><td>3</td><td>DAM</td><td>Discrete Applied Mathematics</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/dam/">https://dblp.org/db/journals/dam/</a></td></tr>
<tr><td>理论</td><td>C</td><td>期刊</td><td>4</td><td>FUIN</td><td>Fundamenta Informaticae</td><td>IOS Press</td><td><a href="https://dblp.org/db/journals/fuin/">https://dblp.org/db/journals/fuin/</a></td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>期刊</td><td>5</td><td>LISP</td><td>Higher-Order and Symbolic Computation</td><td>Springer</td><td><a href="https://dblp.org/db/journals/lisp/">https://dblp.org/db/journals/lisp/</a></td></tr>
<tr><td>理论</td><td>C</td><td>期刊</td><td>6</td><td>IPL</td><td>Information Processing Letters</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/ipl/">https://dblp.org/db/journals/ipl/</a></td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>期刊</td><td>7</td><td>JCOMPLEXITY</td><td>Journal of Complexity</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/jc/">https://dblp.org/db/journals/jc/</a></td></tr>
<tr><td>理论</td><td>C</td><td>期刊</td><td>8</td><td>LOGCOM</td><td>Journal of Logic and Computation</td><td>Oxford University Press</td><td><a href="https://dblp.org/db/journals/logcom/">https://dblp.org/db/journals/logcom/</a></td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>期刊</td><td>9</td><td>JSL</td><td>Journal of Symbolic Logic</td><td>Association for Symbolic Logic</td><td><a href="https://dblp.org/db/journals/jsyml/">https://dblp.org/db/journals/jsyml/</a></td></tr>
<tr><td>理论</td><td>C</td><td>期刊</td><td>10</td><td>LMCS</td><td>Logical Methods in Computer Science</td><td>LMCS</td><td><a href="https://dblp.org/db/journals/lmcs/">https://dblp.org/db/journals/lmcs/</a></td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>期刊</td><td>11</td><td>SIDMA</td><td>SIAM Journal on Discrete Mathematics</td><td>SIAM</td><td><a href="https://dblp.org/db/journals/siamdm/">https://dblp.org/db/journals/siamdm/</a></td></tr>
<tr><td>理论</td><td>C</td><td>期刊</td><td>12</td><td></td><td>Theory of Computing Systems</td><td>Springer</td><td><a href="https://dblp.org/db/journals/mst/">https://dblp.org/db/journals/mst/</a></td></tr>
<tr class="hd"><td>理论</td><td>A</td><td>会议</td><td>1</td><td>STOC</td><td>ACM Symposium on the Theory of Computing</td><td>ACM</td><td><a href="https://dblp.org/db/conf/stoc/">https://dblp.org/db/conf/stoc/</a></td></tr>
<tr><td>理论</td><td>A</td><td>会议</td><td>2</td><td>SODA</td><td>ACM-SIAM Symposium on Discrete Algorithms</td><td>SIAM</td><td><a href="https://dblp.org/db/conf/soda/">https://dblp.org/db/conf/soda/</a></td></tr>
<tr class="oo"><td>理论</td><td>A</td><td>会议</td><td>3</td><td>CAV</td><td>Computer Aided Verification</td><td>Springer</td><td><a href="https://dblp.org/db/conf/cav/">https://dblp.org/db/conf/cav/</a></td></tr>
<tr><td>理论</td><td>A</td><td>会议</td><td>4</td><td>FOCS</td><td>IEEE Annual Symposium on Foundations of Computer Science</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/focs/">https://dblp.org/db/conf/focs/</a></td></tr>
<tr class="oo"><td>理论</td><td>A</td><td>会议</td><td>5</td><td>LICS</td><td>IEEE Symposium on Logic in Computer Science</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/lics/">https://dblp.org/db/conf/lics/</a></td></tr>
<tr class="hd"><td>理论</td><td>B</td><td>会议</td><td>1</td><td>SoCG</td><td>ACM Symposium on Computational Geometry</td><td>ACM</td><td><a href="https://dblp.org/db/conf/compgeom/">https://dblp.org/db/conf/compgeom/</a></td></tr>
<tr><td>理论</td><td>B</td><td>会议</td><td>2</td><td>ESA</td><td>European Symposium on Algorithms</td><td>Springer</td><td><a href="https://dblp.org/db/conf/esa/">https://dblp.org/db/conf/esa/</a></td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>会议</td><td>3</td><td>CCC</td><td>IEEE Conference on Computational Complexity</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/coco/">https://dblp.org/db/conf/coco/</a></td></tr>
<tr><td>理论</td><td>B</td><td>会议</td><td>4</td><td>ICALP</td><td>International Colloquium on Automata, Languages and Programming</td><td>Springer</td><td><a href="https://dblp.org/db/conf/icalp/">https://dblp.org/db/conf/icalp/</a></td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>会议</td><td>5</td><td>CADE/IJCAR</td><td>International Conference on Automated Deduction/International Joint Conference on Automated Reasoning</td><td>Springer</td><td><a href="https://dblp.org/db/conf/cade/">https://dblp.org/db/conf/cade/</a></td></tr>
<tr><td>理论</td><td>B</td><td>会议</td><td>6</td><td>CONCUR</td><td>International Conference on Concurrency Theory</td><td>Springer</td><td><a href="https://dblp.org/db/conf/concur/">https://dblp.org/db/conf/concur/</a></td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>会议</td><td>7</td><td>HSCC</td><td>International Conference on Hybrid Systems: Computation and Control</td><td>Springer and ACM</td><td><a href="https://dblp.org/db/conf/hybrid/">https://dblp.org/db/conf/hybrid/</a></td></tr>
<tr><td>理论</td><td>B</td><td>会议</td><td>8</td><td>SAT</td><td>Theory and Applications of Satisfiability Testing</td><td>Springer</td><td><a href="https://dblp.org/db/conf/sat/">https://dblp.org/db/conf/sat/</a></td></tr>
<tr class="hd"><td>理论</td><td>C</td><td>会议</td><td>1</td><td>CSL</td><td>Computer Science Logic</td><td>Springer</td><td><a href="https://dblp.org/db/conf/csl/">https://dblp.org/db/conf/csl/</a></td></tr>
<tr><td>理论</td><td>C</td><td>会议</td><td>2</td><td>FMCAD</td><td>Formal Methods in Computer-Aided Design</td><td>ACM</td><td><a href="https://dblp.org/db/conf/fmcad/">https://dblp.org/db/conf/fmcad/</a></td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>会议</td><td>3</td><td>FSTTCS</td><td>Foundations of Software Technology and Theoretical Computer Science</td><td>Indian Association for Research in Computing Science</td><td><a href="https://dblp.org/db/conf/fsttcs/">https://dblp.org/db/conf/fsttcs/</a></td></tr>
<tr><td>理论</td><td>C</td><td>会议</td><td>4</td><td>DSAA</td><td>IEEE International Conference on Data Science and Advanced Analytics</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/dsaa/">https://dblp.org/db/conf/dsaa/</a></td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>会议</td><td>5</td><td>ICTAC</td><td>International Colloquium on Theoretical Aspects of Computing</td><td>Springer</td><td><a href="https://dblp.org/db/conf/ictac/">https://dblp.org/db/conf/ictac/</a></td></tr>
<tr><td>理论</td><td>C</td><td>会议</td><td>6</td><td>IPCO</td><td>International Conference on Integer Programming and Combinatorial Optimization</td><td>Springer</td><td><a href="https://dblp.org/db/conf/ipco/">https://dblp.org/db/conf/ipco/</a></td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>会议</td><td>7</td><td>RTA</td><td>International Conference on Rewriting Techniques and Applications</td><td>Springer</td><td><a href="https://dblp.org/db/conf/rta/">https://dblp.org/db/conf/rta/</a></td></tr>
<tr><td>理论</td><td>C</td><td>会议</td><td>8</td><td>ISAAC</td><td>International Symposium on Algorithms and Computation</td><td>Springer</td><td><a href="https://dblp.org/db/conf/isaac/">https://dblp.org/db/conf/isaac/</a></td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>会议</td><td>9</td><td>MFCS</td><td>Mathematical Foundations of Computer Science</td><td>Springer</td><td><a href="https://dblp.org/db/conf/mfcs/">https://dblp.org/db/conf/mfcs/</a></td></tr>
<tr><td>理论</td><td>C</td><td>会议</td><td>10</td><td>STACS</td><td>Symposium on Theoretical Aspects of Computer Science</td><td>Springer</td><td><a href="https://dblp.org/db/conf/stacs/">https://dblp.org/db/conf/stacs/</a></td></tr>
<tr class="hd"><td>多媒体</td><td>A</td><td>期刊</td><td>1</td><td>TOG</td><td>ACM Transactions on Graphics</td><td>ACM</td><td><a href="https://dblp.org/db/journals/tog/">https://dblp.org/db/journals/tog/</a></td></tr>
<tr><td>多媒体</td><td>A</td><td>期刊</td><td>2</td><td>TIP</td><td>IEEE Transactions on Image Processing</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tip/">https://dblp.org/db/journals/tip/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>A</td><td>期刊</td><td>3</td><td>TVCG</td><td>IEEE Transactions on Visualization and Computer Graphics</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tvcg/">https://dblp.org/db/journals/tvcg/</a></td></tr>
<tr class="hd"><td>多媒体</td><td>B</td><td>期刊</td><td>1</td><td>TOMCCAP</td><td>ACM Transactions on Multimedia Computing, Communications and Application</td><td>ACM</td><td><a href="https://dblp.org/db/journals/tomccap/">https://dblp.org/db/journals/tomccap/</a></td></tr>
<tr><td>多媒体</td><td>B</td><td>期刊</td><td>2</td><td>CAGD</td><td>Computer Aided Geometric Design</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/cagd/">https://dblp.org/db/journals/cagd/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>期刊</td><td>3</td><td>CGF</td><td>Computer Graphics Forum</td><td>Wiley</td><td><a href="https://dblp.org/db/journals/cgf/">https://dblp.org/db/journals/cgf/</a></td></tr>
<tr><td>多媒体</td><td>B</td><td>期刊</td><td>4</td><td>CAD</td><td>Computer-Aided Design</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/cad/">https://dblp.org/db/journals/cad/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>期刊</td><td>5</td><td>GM</td><td>Graphical Models</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/cvgip/">https://dblp.org/db/journals/cvgip/</a></td></tr>
<tr><td>多媒体</td><td>B</td><td>期刊</td><td>6</td><td>TCSVT</td><td>IEEE Transactions on Circuits and Systems for Video Technology</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tcsv/">https://dblp.org/db/journals/tcsv/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>期刊</td><td>7</td><td>TMM</td><td>IEEE Transactions on Multimedia</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tmm/">https://dblp.org/db/journals/tmm/</a></td></tr>
<tr><td>多媒体</td><td>B</td><td>期刊</td><td>8</td><td>JASA</td><td>Journal of The Acoustical Society of America</td><td>AIP</td><td><a href="http://scitation.aip.org/content/asa/journal/jasa">http://scitation.aip.org/content/asa/journal/jasa</a></td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>期刊</td><td>9</td><td>SIIMS</td><td>SIAM Journal on Imaging Sciences</td><td>SIAM</td><td><a href="https://dblp.org/db/journals/siamis/">https://dblp.org/db/journals/siamis/</a></td></tr>
<tr><td>多媒体</td><td>B</td><td>期刊</td><td>10</td><td>Speech Com</td><td>Speech Communication</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/speech/">https://dblp.org/db/journals/speech/</a></td></tr>
<tr class="hd"><td>多媒体</td><td>C</td><td>期刊</td><td>1</td><td>CGTA</td><td>Computational Geometry: Theory and Applications</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/comgeo/">https://dblp.org/db/journals/comgeo/</a></td></tr>
<tr><td>多媒体</td><td>C</td><td>期刊</td><td>2</td><td>CAVW</td><td>Computer Animation and Virtual Worlds</td><td>Wiley</td><td><a href="http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)1546 -427X">http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)1546 -427X</a></td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>期刊</td><td>3</td><td>C&amp;G</td><td>Computers &amp; Graphics</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/cg/">https://dblp.org/db/journals/cg/</a></td></tr>
<tr><td>多媒体</td><td>C</td><td>期刊</td><td>4</td><td>DCG</td><td>Discrete &amp; Computational Geometry</td><td>Springer</td><td><a href="https://dblp.org/db/journals/dcg/">https://dblp.org/db/journals/dcg/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>期刊</td><td>5</td><td>SPL</td><td>IEEE Signal Processing Letters</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/spl/">https://dblp.org/db/journals/spl/</a></td></tr>
<tr><td>多媒体</td><td>C</td><td>期刊</td><td>6</td><td>IET-IPR</td><td>IET Image Processing</td><td>IET</td><td><a href="https://dblp.org/db/journals/iet-ipr/">https://dblp.org/db/journals/iet-ipr/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>期刊</td><td>7</td><td>JVCIR</td><td>Journal of Visual Communication and Image Representation</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/jvcir/">https://dblp.org/db/journals/jvcir/</a></td></tr>
<tr><td>多媒体</td><td>C</td><td>期刊</td><td>8</td><td>MS</td><td>Multimedia Systems</td><td>Springer</td><td><a href="https://dblp.org/db/journals/mms/">https://dblp.org/db/journals/mms/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>期刊</td><td>9</td><td>MTA</td><td>Multimedia Tools and Applications</td><td>Springer</td><td><a href="https://dblp.org/db/journals/mta/">https://dblp.org/db/journals/mta/</a></td></tr>
<tr><td>多媒体</td><td>C</td><td>期刊</td><td>10</td><td></td><td>Signal Processing</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/sigpro/">https://dblp.org/db/journals/sigpro/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>期刊</td><td>11</td><td>SPIC</td><td>Signal Processing: Image Communication</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/spic/">https://dblp.org/db/journals/spic/</a></td></tr>
<tr><td>多媒体</td><td>C</td><td>期刊</td><td>12</td><td>TVC</td><td>The Visual Computer</td><td>Springer</td><td><a href="https://dblp.org/db/journals/vc/">https://dblp.org/db/journals/vc/</a></td></tr>
<tr class="hd"><td>多媒体</td><td>A</td><td>会议</td><td>1</td><td>ACM MM</td><td>ACM International Conference on Multimedia</td><td>ACM</td><td><a href="https://dblp.org/db/conf/mm/">https://dblp.org/db/conf/mm/</a></td></tr>
<tr><td>多媒体</td><td>A</td><td>会议</td><td>2</td><td>SIGGRAPH</td><td>ACM SIGGRAPH Annual Conference</td><td>ACM</td><td><a href="https://dblp.org/db/conf/siggraph/">https://dblp.org/db/conf/siggraph/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>A</td><td>会议</td><td>3</td><td>VR</td><td>IEEE Virtual Reality</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/vr/">https://dblp.org/db/conf/vr/</a></td></tr>
<tr><td>多媒体</td><td>A</td><td>会议</td><td>4</td><td>IEEE VIS</td><td>IEEE Visualization Conference</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/visualization/">https://dblp.org/db/conf/visualization/</a></td></tr>
<tr class="hd"><td>多媒体</td><td>B</td><td>会议</td><td>1</td><td>ICMR</td><td>ACM SIGMM International Conference on Multimedia Retrieval</td><td>ACM</td><td><a href="https://dblp.org/db/conf/mir/">https://dblp.org/db/conf/mir/</a></td></tr>
<tr><td>多媒体</td><td>B</td><td>会议</td><td>2</td><td>SI3D</td><td>ACM Symposium on Interactive 3D Graphics</td><td>ACM</td><td><a href="https://dblp.org/db/conf/si3d/">https://dblp.org/db/conf/si3d/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>会议</td><td>3</td><td>SCA</td><td>ACM/Eurographics Symposium on Computer Animation</td><td>ACM</td><td><a href="https://dblp.org/db/conf/sca/">https://dblp.org/db/conf/sca/</a></td></tr>
<tr><td>多媒体</td><td>B</td><td>会议</td><td>4</td><td>DCC</td><td>Data Compression Conference</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/dcc/">https://dblp.org/db/conf/dcc/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>会议</td><td>5</td><td>EG</td><td>Eurographics</td><td>Wiley/ Blackwell</td><td><a href="https://dblp.org/db/conf/eurographics/">https://dblp.org/db/conf/eurographics/</a></td></tr>
<tr><td>多媒体</td><td>B</td><td>会议</td><td>6</td><td>EuroVis</td><td>Eurographics Conference on Visualization</td><td>ACM</td><td><a href="https://dblp.org/db/conf/vissym/">https://dblp.org/db/conf/vissym/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>会议</td><td>7</td><td>SGP</td><td>Eurographics Symposium on Geometry Processing</td><td>Wiley/Blackwell</td><td><a href="https://dblp.org/db/conf/sgp/">https://dblp.org/db/conf/sgp/</a></td></tr>
<tr><td>多媒体</td><td>B</td><td>会议</td><td>8</td><td>EGSR</td><td>Eurographics Symposium on Rendering</td><td>Wiley/Blackwell</td><td><a href="https://dblp.org/db/conf/rt/">https://dblp.org/db/conf/rt/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>会议</td><td>9</td><td>ICASSP</td><td>IEEE International Conference on Acoustics, Speech and SP</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icassp/">https://dblp.org/db/conf/icassp/</a></td></tr>
<tr><td>多媒体</td><td>B</td><td>会议</td><td>10</td><td>ICME</td><td>IEEE International Conference on Multimedia &amp; Expo</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icmcs/">https://dblp.org/db/conf/icmcs/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>会议</td><td>11</td><td>ISMAR</td><td>International Symposium on Mixed and Augmented Reality</td><td>IEEE/ACM</td><td><a href="https://dblp.org/db/conf/ismar/">https://dblp.org/db/conf/ismar/</a></td></tr>
<tr><td>多媒体</td><td>B</td><td>会议</td><td>12</td><td>PG</td><td>Pacific Graphics: The Pacific Conference on Computer Graphics and Applications</td><td>Wiley/Blackwell</td><td><a href="https://dblp.org/db/conf/pg/">https://dblp.org/db/conf/pg/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>会议</td><td>13</td><td>SPM</td><td>Symposium on Solid and Physical Modeling</td><td>SMA/Elsevier</td><td><a href="https://dblp.org/db/conf/sma/">https://dblp.org/db/conf/sma/</a></td></tr>
<tr class="hd"><td>多媒体</td><td>C</td><td>会议</td><td>1</td><td></td><td>ACM Symposium on Virtual Reality Software and Technology</td><td>ACM</td><td><a href="https://dblp.org/db/conf/vrst/">https://dblp.org/db/conf/vrst/</a></td></tr>
<tr><td>多媒体</td><td>C</td><td>会议</td><td>2</td><td>CASA</td><td>Computer Animation and Social Agents</td><td>Wiley</td><td><a href="https://dblp.org/db/conf/ca/">https://dblp.org/db/conf/ca/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>会议</td><td>3</td><td>CGI</td><td>Computer Graphics International</td><td>Springer</td><td><a href="https://dblp.org/db/conf/cgi/">https://dblp.org/db/conf/cgi/</a></td></tr>
<tr><td>多媒体</td><td>C</td><td>会议</td><td>4</td><td>INTERSPEECH</td><td>Conference of the International Speech Communication Association</td><td></td><td><a href="https://dblp.org/db/conf/interspeech/">https://dblp.org/db/conf/interspeech/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>会议</td><td>5</td><td>GMP</td><td>Geometric Modeling and Processing</td><td>Elsevier</td><td><a href="https://dblp.org/db/conf/gmp/">https://dblp.org/db/conf/gmp/</a></td></tr>
<tr><td>多媒体</td><td>C</td><td>会议</td><td>6</td><td>PacificVis</td><td>IEEE Pacific Visualization Symposium</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/apvis/">https://dblp.org/db/conf/apvis/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>会议</td><td>7</td><td>3DV</td><td>International Conference on 3D Vision</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/3dim/">https://dblp.org/db/conf/3dim/</a></td></tr>
<tr><td>多媒体</td><td>C</td><td>会议</td><td>8</td><td>CAD/Graphics</td><td>International Conference on Computer-Aided Design and Computer Graphics</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/cadgraphics/">https://dblp.org/db/conf/cadgraphics/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>会议</td><td>9</td><td>ICIP</td><td>International Conference on Image Processing</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icip/">https://dblp.org/db/conf/icip/</a></td></tr>
<tr><td>多媒体</td><td>C</td><td>会议</td><td>10</td><td>MMM</td><td>International Conference on Multimedia Modeling</td><td>Springer</td><td><a href="https://dblp.org/db/conf/mmm/">https://dblp.org/db/conf/mmm/</a></td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>会议</td><td>11</td><td>PCM</td><td>Pacific-Rim Conference on Multimedia</td><td>Springer</td><td><a href="https://dblp.org/db/conf/pcm/">https://dblp.org/db/conf/pcm/</a></td></tr>
<tr><td>多媒体</td><td>C</td><td>会议</td><td>12</td><td>SMI</td><td>Shape Modeling International</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/smi/">https://dblp.org/db/conf/smi/</a></td></tr>
<tr class="hd"><td>AI</td><td>A</td><td>期刊</td><td>1</td><td>AI</td><td>Artificial Intelligence</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/ai/">https://dblp.org/db/journals/ai/</a></td></tr>
<tr><td>AI</td><td>A</td><td>期刊</td><td>2</td><td>TPAMI</td><td>IEEE Trans on Pattern Analysis and Machine Intelligence</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/pami/">https://dblp.org/db/journals/pami/</a></td></tr>
<tr class="oo"><td>AI</td><td>A</td><td>期刊</td><td>3</td><td>IJCV</td><td>International Journal of Computer Vision</td><td>Springer</td><td><a href="https://dblp.org/db/journals/ijcv/">https://dblp.org/db/journals/ijcv/</a></td></tr>
<tr><td>AI</td><td>A</td><td>期刊</td><td>4</td><td>JMLR</td><td>Journal of Machine Learning Research</td><td>MIT Press</td><td><a href="https://dblp.org/db/journals/jmlr/">https://dblp.org/db/journals/jmlr/</a></td></tr>
<tr class="hd"><td>AI</td><td>B</td><td>期刊</td><td>1</td><td>TAP</td><td>ACM Transactions on Applied Perception</td><td>ACM</td><td><a href="https://dblp.org/db/journals/tap/">https://dblp.org/db/journals/tap/</a></td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>2</td><td>TSLP</td><td>ACM Transactions on Speech and Language Processing</td><td>ACM</td><td><a href="https://dblp.org/db/journals/tslp/">https://dblp.org/db/journals/tslp/</a></td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>3</td><td>AAMAS</td><td>Autonomous Agents and Multi-Agent Systems</td><td>Springer</td><td><a href="https://dblp.org/db/journals/aamas/">https://dblp.org/db/journals/aamas/</a></td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>4</td><td></td><td>Computational Linguistics</td><td>MIT Press</td><td><a href="https://dblp.org/db/journals/coling/">https://dblp.org/db/journals/coling/</a></td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>5</td><td>CVIU</td><td>Computer Vision and Image Understanding</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/cviu/">https://dblp.org/db/journals/cviu/</a></td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>6</td><td>DKE</td><td>Data and Knowledge Engineering</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/dke/">https://dblp.org/db/journals/dke/</a></td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>7</td><td></td><td>Evolutionary Computation</td><td>MIT Press</td><td><a href="https://dblp.org/db/journals/ec/">https://dblp.org/db/journals/ec/</a></td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>8</td><td>TAC</td><td>IEEE Transactions on Affective Computing</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/taffco/">https://dblp.org/db/journals/taffco/</a></td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>9</td><td>TASLP</td><td>IEEE Transactions on Audio, Speech, and Language Processing</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/taslp/">https://dblp.org/db/journals/taslp/</a></td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>10</td><td></td><td>IEEE Transactions on Cybernetics</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tcyb/">https://dblp.org/db/journals/tcyb/</a></td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>11</td><td>TEC</td><td>IEEE Transactions on Evolutionary Computation</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tec/">https://dblp.org/db/journals/tec/</a></td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>12</td><td>TFS</td><td>IEEE Transactions on Fuzzy Systems</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tfs/">https://dblp.org/db/journals/tfs/</a></td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>13</td><td>TNNLS</td><td>IEEE Transactions on Neural Networks and learning systems</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tnn/">https://dblp.org/db/journals/tnn/</a></td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>14</td><td>IJAR</td><td>International Journal of Approximate Reasoning</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/ijar/">https://dblp.org/db/journals/ijar/</a></td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>15</td><td>JAIR</td><td>Journal of Artificial Intelligence Research</td><td>AAAI</td><td><a href="https://dblp.org/db/journals/jair/">https://dblp.org/db/journals/jair/</a></td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>16</td><td></td><td>Journal of Automated Reasoning</td><td>Springer</td><td><a href="https://dblp.org/db/journals/jar/">https://dblp.org/db/journals/jar/</a></td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>17</td><td>JSLHR</td><td>Journal of Speech, Language, and Hearing Research</td><td>American Speech- Language Hearing Association</td><td><a href="http://jslhr.pubs.asha.org/">http://jslhr.pubs.asha.org/</a></td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>18</td><td></td><td>Machine Learning</td><td>Springer</td><td><a href="https://dblp.org/db/journals/ml/">https://dblp.org/db/journals/ml/</a></td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>19</td><td></td><td>Neural Computation</td><td>MIT Press</td><td><a href="https://dblp.org/db/journals/neco/">https://dblp.org/db/journals/neco/</a></td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>20</td><td></td><td>Neural Networks</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/nn/">https://dblp.org/db/journals/nn/</a></td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>21</td><td>PR</td><td>Pattern Recognition</td><td>Elsevier</td><td><a href="https://dblp.org/db/conf/par/">https://dblp.org/db/conf/par/</a></td></tr>
<tr class="hd"><td>AI</td><td>C</td><td>期刊</td><td>1</td><td>TALLIP</td><td>ACM Transactions on Asian and Low- Resource Language Information Processing</td><td>ACM</td><td><a href="https://dblp.org/db/journals/talip/">https://dblp.org/db/journals/talip/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>2</td><td></td><td>Applied Intelligence</td><td>Springer</td><td><a href="https://dblp.org/db/journals/apin/">https://dblp.org/db/journals/apin/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>3</td><td>AIM</td><td>Artificial Intelligence in Medicine</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/artmed/">https://dblp.org/db/journals/artmed/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>4</td><td></td><td>Artificial Life</td><td>MIT Press</td><td><a href="https://dblp.org/db/journals/alife/">https://dblp.org/db/journals/alife/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>5</td><td></td><td>Computational Intelligence</td><td>Wiley</td><td><a href="https://dblp.org/db/journals/ci/">https://dblp.org/db/journals/ci/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>6</td><td></td><td>Computer Speech and Language</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/csl/">https://dblp.org/db/journals/csl/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>7</td><td></td><td>Connection Science</td><td>Taylor &amp; Francis</td><td><a href="https://dblp.org/db/journals/connection/">https://dblp.org/db/journals/connection/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>8</td><td>DSS</td><td>Decision Support Systems</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/dss/">https://dblp.org/db/journals/dss/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>9</td><td>EAAI</td><td>Engineering Applications of Artificial Intelligence</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/eaai/">https://dblp.org/db/journals/eaai/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>10</td><td></td><td>Expert Systems</td><td>Blackwell/Wiley</td><td><a href="https://dblp.org/db/journals/es/">https://dblp.org/db/journals/es/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>11</td><td>ESWA</td><td>Expert Systems with Applications</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/eswa/">https://dblp.org/db/journals/eswa/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>12</td><td></td><td>Fuzzy Sets and Systems</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/fss/">https://dblp.org/db/journals/fss/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>13</td><td>TG</td><td>IEEE Transactions on Games</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tciaig/">https://dblp.org/db/journals/tciaig/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>14</td><td>IET-CVI</td><td>IET Computer Vision</td><td>IET</td><td><a href="http://digital-library.theiet.org/content/journals/iet-cvi">http://digital-library.theiet.org/content/journals/iet-cvi</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>15</td><td></td><td>IET Signal Processing</td><td>IET</td><td>* http://digital-library.theiet.org/content/journals/iet-spr</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>16</td><td>IVC</td><td>Image and Vision Computing</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/ivc/">https://dblp.org/db/journals/ivc/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>17</td><td>IDA</td><td>Intelligent Data Analysis</td><td>IOS Press</td><td><a href="https://dblp.org/db/journals/ida/">https://dblp.org/db/journals/ida/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>18</td><td>IJCIA</td><td>International Journal of Computational Intelligence and Applications</td><td>World Scientific</td><td><a href="https://dblp.org/db/journals/ijcia/">https://dblp.org/db/journals/ijcia/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>19</td><td>IJIS</td><td>International Journal of Intelligent Systems</td><td>Wiley</td><td><a href="https://dblp.org/db/journals/ijis/">https://dblp.org/db/journals/ijis/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>20</td><td>IJNS</td><td>International Journal of Neural Systems</td><td>World Scientific</td><td><a href="https://dblp.org/db/journals/ijns/">https://dblp.org/db/journals/ijns/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>21</td><td>IJPRAI</td><td>International Journal of Pattern Recognition and Artificial Intelligence</td><td>World Scientific</td><td><a href="https://dblp.org/db/journals/ijprai/">https://dblp.org/db/journals/ijprai/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>22</td><td>IJUFKS</td><td>International Journal of Uncertainty, Fuzziness and Knowledge-Based System</td><td>World Scientific</td><td><a href="https://dblp.org/db/journals/ijufks/">https://dblp.org/db/journals/ijufks/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>23</td><td>IJDAR</td><td>International Journal on Document Analysis and Recognition</td><td>Springer</td><td><a href="https://dblp.org/db/journals/ijdar/">https://dblp.org/db/journals/ijdar/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>24</td><td>JETAI</td><td>Journal of Experimental and Theoretical Artificial Intelligence</td><td>Taylor &amp; Francis</td><td><a href="https://dblp.org/db/journals/jetai/">https://dblp.org/db/journals/jetai/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>25</td><td>KBS</td><td>Knowledge-Based Systems</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/kbs/">https://dblp.org/db/journals/kbs/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>26</td><td></td><td>Machine Translation</td><td>Springer</td><td><a href="https://dblp.org/db/journals/mt/">https://dblp.org/db/journals/mt/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>27</td><td></td><td>Machine Vision and Applications</td><td>Springer</td><td><a href="https://dblp.org/db/journals/mva/">https://dblp.org/db/journals/mva/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>28</td><td></td><td>Natural Computing</td><td>Springer</td><td><a href="https://dblp.org/db/journals/nc/">https://dblp.org/db/journals/nc/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>29</td><td>NLE</td><td>Natural Language Engineering</td><td>Cambridge University Press</td><td><a href="https://dblp.org/db/journals/nle/">https://dblp.org/db/journals/nle/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>30</td><td>NCA</td><td>Neural Computing &amp; Applications</td><td>Springer</td><td><a href="https://dblp.org/db/journals/nca/">https://dblp.org/db/journals/nca/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>31</td><td>NPL</td><td>Neural Processing Letters</td><td>Springer</td><td><a href="https://dblp.org/db/journals/npl/">https://dblp.org/db/journals/npl/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>32</td><td></td><td>Neurocomputing</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/ijon/">https://dblp.org/db/journals/ijon/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>33</td><td>PAA</td><td>Pattern Analysis and Applications</td><td>Springer</td><td><a href="https://dblp.org/db/journals/paa/">https://dblp.org/db/journals/paa/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>34</td><td>PRL</td><td>Pattern Recognition Letters</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/prl/">https://dblp.org/db/journals/prl/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>35</td><td></td><td>Soft Computing</td><td>Springer</td><td><a href="https://dblp.org/db/journals/soco/">https://dblp.org/db/journals/soco/</a></td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>36</td><td>WI</td><td>Web Intelligence</td><td>IOS Press</td><td><a href="https://dblp.org/db/journals/wias/">https://dblp.org/db/journals/wias/</a></td></tr>
<tr class="hd"><td>AI</td><td>A</td><td>会议</td><td>1</td><td>AAAI</td><td>AAAI Conference on Artificial Intelligence</td><td>AAAI</td><td><a href="https://dblp.org/db/conf/aaai/">https://dblp.org/db/conf/aaai/</a></td></tr>
<tr><td>AI</td><td>A</td><td>会议</td><td>2</td><td>NeurIPS</td><td>Annual Conference on Neural Information Processing Systems</td><td>MIT Press</td><td><a href="https://dblp.org/db/conf/nips/">https://dblp.org/db/conf/nips/</a></td></tr>
<tr class="oo"><td>AI</td><td>A</td><td>会议</td><td>3</td><td>ACL</td><td>Annual Meeting of the Association for Computational Linguistics</td><td>ACL</td><td><a href="https://dblp.org/db/conf/acl/">https://dblp.org/db/conf/acl/</a></td></tr>
<tr><td>AI</td><td>A</td><td>会议</td><td>4</td><td>CVPR</td><td>IEEE Conference on Computer Vision and Pattern Recognition</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/cvpr/">https://dblp.org/db/conf/cvpr/</a></td></tr>
<tr class="oo"><td>AI</td><td>A</td><td>会议</td><td>5</td><td>ICCV</td><td>International Conference on Computer Vision</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/iccv/">https://dblp.org/db/conf/iccv/</a></td></tr>
<tr><td>AI</td><td>A</td><td>会议</td><td>6</td><td>ICML</td><td>International Conference on Machine Learning</td><td>ACM</td><td><a href="https://dblp.org/db/conf/icml/">https://dblp.org/db/conf/icml/</a></td></tr>
<tr class="oo"><td>AI</td><td>A</td><td>会议</td><td>7</td><td>IJCAI</td><td>International Joint Conference on Artificial Intelligence</td><td>Morgan Kaufmann</td><td><a href="https://dblp.org/db/conf/ijcai/">https://dblp.org/db/conf/ijcai/</a></td></tr>
<tr class="hd"><td>AI</td><td>B</td><td>会议</td><td>1</td><td>COLT</td><td>Annual Conference on Computational Learning Theory</td><td>Springer</td><td><a href="https://dblp.org/db/conf/colt/">https://dblp.org/db/conf/colt/</a></td></tr>
<tr><td>AI</td><td>B</td><td>会议</td><td>2</td><td>EMNLP</td><td>Conference on Empirical Methods in Natural Language Processing</td><td>ACL</td><td><a href="https://dblp.org/db/conf/emnlp/">https://dblp.org/db/conf/emnlp/</a></td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>会议</td><td>3</td><td>ECAI</td><td>European Conference on Artificial Intelligence</td><td>IOS Press</td><td><a href="https://dblp.org/db/conf/ecai/">https://dblp.org/db/conf/ecai/</a></td></tr>
<tr><td>AI</td><td>B</td><td>会议</td><td>4</td><td>ECCV</td><td>European Conference on Computer Vision</td><td>Springer</td><td><a href="https://dblp.org/db/conf/eccv/">https://dblp.org/db/conf/eccv/</a></td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>会议</td><td>5</td><td>ICRA</td><td>IEEE International Conference on Robotics and Automation</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icra/">https://dblp.org/db/conf/icra/</a></td></tr>
<tr><td>AI</td><td>B</td><td>会议</td><td>6</td><td>ICAPS</td><td>International Conference on Automated Planning and Scheduling</td><td>AAAI</td><td><a href="https://dblp.org/db/conf/aips/">https://dblp.org/db/conf/aips/</a></td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>会议</td><td>7</td><td>ICCBR</td><td>International Conference on Case-Based Reasoning and Development</td><td>Springer</td><td><a href="https://dblp.org/db/conf/iccbr/">https://dblp.org/db/conf/iccbr/</a></td></tr>
<tr><td>AI</td><td>B</td><td>会议</td><td>8</td><td>COLING</td><td>International Conference on Computational Linguistics</td><td>ACM</td><td><a href="https://dblp.org/db/conf/coling/">https://dblp.org/db/conf/coling/</a></td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>会议</td><td>9</td><td>KR</td><td>International Conference on Principles of Knowledge Representation and Reasoning</td><td>Morgan Kaufmann</td><td><a href="https://dblp.org/db/conf/kr/">https://dblp.org/db/conf/kr/</a></td></tr>
<tr><td>AI</td><td>B</td><td>会议</td><td>10</td><td>UAI</td><td>International Conference on Uncertainty in Artificial Intelligence</td><td>AUAI</td><td><a href="https://dblp.org/db/conf/uai/">https://dblp.org/db/conf/uai/</a></td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>会议</td><td>11</td><td>AAMAS</td><td>International Joint Conference on Autonomous Agents and Multiagent Systems</td><td>Springer</td><td><a href="https://dblp.org/db/conf/atal/">https://dblp.org/db/conf/atal/</a></td></tr>
<tr><td>AI</td><td>B</td><td>会议</td><td>12</td><td>PPSN</td><td>Parallel Problem Solving from Nature</td><td>Springer</td><td><a href="https://dblp.org/db/conf/ppsn/">https://dblp.org/db/conf/ppsn/</a></td></tr>
<tr class="hd"><td>AI</td><td>C</td><td>会议</td><td>1</td><td>AISTATS</td><td>Artificial Intelligence and Statistics</td><td>JMLR</td><td><a href="https://dblp.org/db/conf/aistats/">https://dblp.org/db/conf/aistats/</a></td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>2</td><td>ACCV</td><td>Asian Conference on Computer Vision</td><td>Springer</td><td><a href="https://dblp.org/db/conf/accv/">https://dblp.org/db/conf/accv/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>3</td><td>ACML</td><td>Asian Conference on Machine Learning</td><td>JMLR</td><td><a href="https://dblp.org/db/conf/acml/">https://dblp.org/db/conf/acml/</a></td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>4</td><td>BMVC</td><td>British Machine Vision Conference</td><td>British Machine Vision Association</td><td><a href="https://dblp.org/db/conf/bmvc/">https://dblp.org/db/conf/bmvc/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>5</td><td>NLPCC</td><td>CCF International Conference on Natural Language Processing and Chinese Computing</td><td>Springer</td><td><a href="https://dblp.org/db/conf/nlpcc/">https://dblp.org/db/conf/nlpcc/</a></td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>6</td><td>CoNLL</td><td>Conference on Computational Natural Language Learning</td><td>Association for Computational Linguistics</td><td><a href="https://dblp.org/db/conf/conll/">https://dblp.org/db/conf/conll/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>7</td><td>GECCO</td><td>Genetic and Evolutionary Computation Conference</td><td>ACM</td><td><a href="https://dblp.org/db/conf/gecco/">https://dblp.org/db/conf/gecco/</a></td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>8</td><td>ICTAI</td><td>IEEE International Conference on Tools with Artificial Intelligence</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/ictai/">https://dblp.org/db/conf/ictai/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>9</td><td>IROS</td><td>IEEE\RSJ International Conference on Intelligent Robots and Systems</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/iros/">https://dblp.org/db/conf/iros/</a></td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>10</td><td>ALT</td><td>International Conference on Algorithmic Learning Theory</td><td>Springer</td><td><a href="https://dblp.org/db/conf/alt/">https://dblp.org/db/conf/alt/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>11</td><td>ICANN</td><td>International Conference on Artificial Neural Networks</td><td>Springer</td><td><a href="https://dblp.org/db/conf/icann/">https://dblp.org/db/conf/icann/</a></td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>12</td><td>FG</td><td>International Conference on Automatic Face and Gesture Recognition</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/fgr/">https://dblp.org/db/conf/fgr/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>13</td><td>ICDAR</td><td>International Conference on Document Analysis and Recognition</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icdar/">https://dblp.org/db/conf/icdar/</a></td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>14</td><td>ILP</td><td>International Conference on Inductive Logic Programming</td><td>Springer</td><td><a href="https://dblp.org/db/conf/ilp/">https://dblp.org/db/conf/ilp/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>15</td><td>KSEM</td><td>International conference on Knowledge Science, Engineering and Management</td><td>Springer</td><td><a href="https://dblp.org/db/conf/ksem/">https://dblp.org/db/conf/ksem/</a></td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>16</td><td>ICONIP</td><td>International Conference on Neural Information Processing</td><td>Springer</td><td><a href="https://dblp.org/db/conf/iconip/">https://dblp.org/db/conf/iconip/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>17</td><td>ICPR</td><td>International Conference on Pattern Recognition</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icpr/">https://dblp.org/db/conf/icpr/</a></td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>18</td><td>ICB</td><td>International Joint Conference on Biometrics</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/icb/">https://dblp.org/db/conf/icb/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>19</td><td>IJCNN</td><td>International Joint Conference on Neural Networks</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/ijcnn/">https://dblp.org/db/conf/ijcnn/</a></td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>20</td><td>PRICAI</td><td>Pacific Rim International Conference on Artificial Intelligence</td><td>Springer</td><td><a href="https://dblp.org/db/conf/pricai/">https://dblp.org/db/conf/pricai/</a></td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>21</td><td>NAACL</td><td>The Annual Conference of the North American Chapter of the Association for Computational Linguistics</td><td>NAACL</td><td><a href="https://dblp.org/db/conf/naacl/">https://dblp.org/db/conf/naacl/</a></td></tr>
<tr class="hd"><td>交互</td><td>A</td><td>期刊</td><td>1</td><td>TOCHI</td><td>ACM Transactions on Computer-Human Interaction</td><td>ACM</td><td><a href="https://dblp.org/db/journals/tochi/">https://dblp.org/db/journals/tochi/</a></td></tr>
<tr><td>交互</td><td>A</td><td>期刊</td><td>2</td><td>IJHCS</td><td>International Journal of Human Computer Studies</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/ijmms/">https://dblp.org/db/journals/ijmms/</a></td></tr>
<tr class="hd"><td>交互</td><td>B</td><td>期刊</td><td>1</td><td>CSCW</td><td>Computer Supported Cooperative Work</td><td>Springer</td><td><a href="https://dblp.org/db/journals/cscw/">https://dblp.org/db/journals/cscw/</a></td></tr>
<tr><td>交互</td><td>B</td><td>期刊</td><td>2</td><td>HCI</td><td>Human Computer Interaction</td><td>Taylor &amp; Francis</td><td><a href="https://dblp.org/db/journals/hhci/">https://dblp.org/db/journals/hhci/</a></td></tr>
<tr class="oo"><td>交互</td><td>B</td><td>期刊</td><td>3</td><td></td><td>IEEE Transactions on Human-Machine Systems</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/thms/">https://dblp.org/db/journals/thms/</a></td></tr>
<tr><td>交互</td><td>B</td><td>期刊</td><td>4</td><td>IWC</td><td>Interacting with Computers</td><td>Oxford University Press</td><td><a href="https://dblp.org/db/journals/iwc/">https://dblp.org/db/journals/iwc/</a></td></tr>
<tr class="oo"><td>交互</td><td>B</td><td>期刊</td><td>5</td><td>IJHCI</td><td>International Journal of Human-Computer Interaction</td><td>Taylor &amp; Francis</td><td><a href="https://dblp.org/db/journals/ijhci/">https://dblp.org/db/journals/ijhci/</a></td></tr>
<tr><td>交互</td><td>B</td><td>期刊</td><td>6</td><td>UMUAI</td><td>User Modeling and User-Adapted Interaction</td><td>Springer</td><td><a href="https://dblp.org/db/journals/umuai/">https://dblp.org/db/journals/umuai/</a></td></tr>
<tr class="hd"><td>交互</td><td>C</td><td>期刊</td><td>1</td><td>BIT</td><td>Behaviour &amp; Information Technology</td><td>Taylor &amp; Francis</td><td><a href="https://dblp.org/db/journals/behaviourIT/">https://dblp.org/db/journals/behaviourIT/</a></td></tr>
<tr><td>交互</td><td>C</td><td>期刊</td><td>2</td><td>PUC</td><td>Personal and Ubiquitous Computing</td><td>Springer</td><td><a href="https://dblp.org/db/journals/puc/">https://dblp.org/db/journals/puc/</a></td></tr>
<tr class="oo"><td>交互</td><td>C</td><td>期刊</td><td>3</td><td>PMC</td><td>Pervasive and Mobile Computing</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/percom/">https://dblp.org/db/journals/percom/</a></td></tr>
<tr class="hd"><td>交互</td><td>A</td><td>会议</td><td>1</td><td>CSCW</td><td>ACM Conference on Computer Supported Cooperative Work and Social Computing</td><td>ACM</td><td><a href="https://dblp.org/db/conf/cscw/">https://dblp.org/db/conf/cscw/</a></td></tr>
<tr><td>交互</td><td>A</td><td>会议</td><td>2</td><td>CHI</td><td>ACM Conference on Human Factors in Computing Systems</td><td>ACM</td><td><a href="https://dblp.org/db/conf/chi/">https://dblp.org/db/conf/chi/</a></td></tr>
<tr class="oo"><td>交互</td><td>A</td><td>会议</td><td>3</td><td>UbiComp</td><td>ACM International Conference on Ubiquitous Computing</td><td>ACM</td><td><a href="https://dblp.org/db/conf/huc/">https://dblp.org/db/conf/huc/</a></td></tr>
<tr class="hd"><td>交互</td><td>B</td><td>会议</td><td>1</td><td>GROUP</td><td>ACM Conference on Supporting Group Work</td><td>ACM</td><td><a href="https://dblp.org/db/conf/group/">https://dblp.org/db/conf/group/</a></td></tr>
<tr><td>交互</td><td>B</td><td>会议</td><td>2</td><td>IUI</td><td>ACM International Conference on Intelligent User Interfaces</td><td>ACM</td><td><a href="https://dblp.org/db/conf/iui/">https://dblp.org/db/conf/iui/</a></td></tr>
<tr class="oo"><td>交互</td><td>B</td><td>会议</td><td>3</td><td>ITS</td><td>ACM International Conference on Interactive Tabletops and Surfaces</td><td>ACM</td><td><a href="https://dblp.org/db/conf/tabletop/">https://dblp.org/db/conf/tabletop/</a></td></tr>
<tr><td>交互</td><td>B</td><td>会议</td><td>4</td><td>UIST</td><td>ACM Symposium on User Interface Software and Technology</td><td>ACM</td><td><a href="https://dblp.org/db/conf/uist/">https://dblp.org/db/conf/uist/</a></td></tr>
<tr class="oo"><td>交互</td><td>B</td><td>会议</td><td>5</td><td>ECSCW</td><td>European Conference on Computer Supported Cooperative Work</td><td>Springer</td><td><a href="https://dblp.org/db/conf/ecscw/">https://dblp.org/db/conf/ecscw/</a></td></tr>
<tr><td>交互</td><td>B</td><td>会议</td><td>6</td><td>PERCOM</td><td>IEEE International Conference on Pervasive Computing and Communications</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/percom/">https://dblp.org/db/conf/percom/</a></td></tr>
<tr class="oo"><td>交互</td><td>B</td><td>会议</td><td>7</td><td>MobileHCI</td><td>International Conference on Human Computer Interaction with Mobile Devices and Services</td><td>ACM</td><td><a href="https://dblp.org/db/conf/mhci/">https://dblp.org/db/conf/mhci/</a></td></tr>
<tr class="hd"><td>交互</td><td>C</td><td>会议</td><td>1</td><td>DIS</td><td>ACM Conference on Designing Interactive Systems</td><td>ACM</td><td><a href="https://dblp.org/db/conf/ACMdis/">https://dblp.org/db/conf/ACMdis/</a></td></tr>
<tr><td>交互</td><td>C</td><td>会议</td><td>2</td><td>ICMI</td><td>ACM International Conference on Multimodal Interaction</td><td>ACM</td><td><a href="https://dblp.org/db/conf/icmi/">https://dblp.org/db/conf/icmi/</a></td></tr>
<tr class="oo"><td>交互</td><td>C</td><td>会议</td><td>3</td><td>ASSETS</td><td>ACM SIGACCESS Conference on Computers and Accessibility</td><td>ACM</td><td><a href="https://dblp.org/db/conf/assets/">https://dblp.org/db/conf/assets/</a></td></tr>
<tr><td>交互</td><td>C</td><td>会议</td><td>4</td><td>GI</td><td>Graphics Interface conference</td><td>ACM</td><td><a href="https://dblp.org/db/conf/graphicsinterface/">https://dblp.org/db/conf/graphicsinterface/</a></td></tr>
<tr class="oo"><td>交互</td><td>C</td><td>会议</td><td>5</td><td>UIC</td><td>IEEE International Conference on Ubiquitous Intelligence and Computing</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/uic/">https://dblp.org/db/conf/uic/</a></td></tr>
<tr><td>交互</td><td>C</td><td>会议</td><td>6</td><td></td><td>IEEE World Haptics Conference</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/haptics/">https://dblp.org/db/conf/haptics/</a></td></tr>
<tr class="oo"><td>交互</td><td>C</td><td>会议</td><td>7</td><td>INTERACT</td><td>IFIP TC13 Conference on Human-Computer Interaction</td><td>IFIP</td><td><a href="https://dblp.org/db/conf/interact/">https://dblp.org/db/conf/interact/</a></td></tr>
<tr><td>交互</td><td>C</td><td>会议</td><td>8</td><td>IDC</td><td>Interaction Design and Children</td><td>ACM</td><td><a href="https://dblp.org/db/conf/acmidc/">https://dblp.org/db/conf/acmidc/</a></td></tr>
<tr class="oo"><td>交互</td><td>C</td><td>会议</td><td>9</td><td>CollaborateCom</td><td>International Conference on Collaborative Computing: Networking, Applications and Worksharing</td><td>Springer</td><td><a href="http://collaboratecom.org">http://collaboratecom.org</a></td></tr>
<tr><td>交互</td><td>C</td><td>会议</td><td>10</td><td>CSCWD</td><td>International Conference on Computer Supported Cooperative Work in Design</td><td>Springer</td><td><a href="https://dblp.org/db/conf/cscwd/">https://dblp.org/db/conf/cscwd/</a></td></tr>
<tr class="oo"><td>交互</td><td>C</td><td>会议</td><td>11</td><td>CoopIS</td><td>International Conference on Cooperative Information Systems</td><td>Springer</td><td><a href="https://dblp.org/db/conf/coopis/">https://dblp.org/db/conf/coopis/</a></td></tr>
<tr><td>交互</td><td>C</td><td>会议</td><td>12</td><td>MobiQuitous</td><td>International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services</td><td>Springer</td><td><a href="https://dblp.org/db/conf/mobiquitous/">https://dblp.org/db/conf/mobiquitous/</a></td></tr>
<tr class="oo"><td>交互</td><td>C</td><td>会议</td><td>13</td><td>AVI</td><td>International Working Conference on Advanced Visual Interfaces</td><td>ACM</td><td><a href="https://dblp.org/db/conf/avi/">https://dblp.org/db/conf/avi/</a></td></tr>
<tr class="hd"><td>综合</td><td>A</td><td>期刊</td><td>1</td><td>JACM</td><td>Journal of the ACM</td><td>ACM</td><td><a href="https://dblp.org/db/journals/jacm/">https://dblp.org/db/journals/jacm/</a></td></tr>
<tr><td>综合</td><td>A</td><td>期刊</td><td>2</td><td>Proc. IEEE</td><td>Proceedings of the IEEE</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/pieee/">https://dblp.org/db/journals/pieee/</a></td></tr>
<tr class="hd"><td>综合</td><td>B</td><td>期刊</td><td>1</td><td></td><td>Bioinformatics</td><td>Oxford University Press</td><td><a href="https://dblp.org/db/journals/bioinformatics/">https://dblp.org/db/journals/bioinformatics/</a></td></tr>
<tr><td>综合</td><td>B</td><td>期刊</td><td>2</td><td></td><td>Briefings in Bioinformatics</td><td>Oxford University Press</td><td><a href="https://dblp.org/db/journals/bib/">https://dblp.org/db/journals/bib/</a></td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>期刊</td><td>3</td><td>Cognition</td><td>Cognition：International Journal of Cognitive Science</td><td>Elsevier</td><td><a href="http://www.journals.elsevier.com/cognition/">http://www.journals.elsevier.com/cognition/</a></td></tr>
<tr><td>综合</td><td>B</td><td>期刊</td><td>4</td><td>TASAE</td><td>IEEE Transactions on Automation Science and Engineering</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tase/">https://dblp.org/db/journals/tase/</a></td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>期刊</td><td>5</td><td>TGARS</td><td>IEEE Transactions on Geoscience and Remote Sensing</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tgrs/">https://dblp.org/db/journals/tgrs/</a></td></tr>
<tr><td>综合</td><td>B</td><td>期刊</td><td>6</td><td>TITS</td><td>IEEE Transactions on Intelligent Transportation Systems</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tits/">https://dblp.org/db/journals/tits/</a></td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>期刊</td><td>7</td><td>TMI</td><td>IEEE Transactions on Medical Imaging</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tmi/">https://dblp.org/db/journals/tmi/</a></td></tr>
<tr><td>综合</td><td>B</td><td>期刊</td><td>8</td><td>TR</td><td>IEEE Transactions on Robotics</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/trob/">https://dblp.org/db/journals/trob/</a></td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>期刊</td><td>9</td><td>TCBB</td><td>IEEE-ACM Transactions on Computational Biology and Bioinformatics</td><td>IEEE/ACM</td><td><a href="https://dblp.org/db/journals/tcbb/">https://dblp.org/db/journals/tcbb/</a></td></tr>
<tr><td>综合</td><td>B</td><td>期刊</td><td>10</td><td>JCST</td><td>Journal of Computer Science and Technology</td><td>SCIENCE PRESS/Springer</td><td><a href="https://dblp.org/db/journals/jcst/">https://dblp.org/db/journals/jcst/</a></td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>期刊</td><td>11</td><td>JAMIA</td><td>Journal of the American Medical Informatics Association</td><td>BMJ Journals</td><td><a href="https://dblp.org/db/journals/jamia/">https://dblp.org/db/journals/jamia/</a></td></tr>
<tr><td>综合</td><td>B</td><td>期刊</td><td>12</td><td></td><td>PLOS Computational Biology</td><td>Public Library of Science</td><td><a href="https://dblp.org/db/journals/ploscb/">https://dblp.org/db/journals/ploscb/</a></td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>期刊</td><td>13</td><td></td><td>Science China Information Sciences</td><td>Science in China Press/Springer</td><td><a href="https://dblp.org/db/journals/chinaf/">https://dblp.org/db/journals/chinaf/</a></td></tr>
<tr><td>综合</td><td>B</td><td>期刊</td><td>14</td><td></td><td>The Computer Journal</td><td>Oxford University Press</td><td><a href="https://dblp.org/db/journals/cj/">https://dblp.org/db/journals/cj/</a></td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>期刊</td><td>15</td><td></td><td>World Wide Web Journal</td><td>Springer</td><td><a href="https://www.springer.com/journal/11280">https://www.springer.com/journal/11280</a></td></tr>
<tr class="hd"><td>综合</td><td>C</td><td>期刊</td><td>1</td><td></td><td>BMC Bioinformatics</td><td>BioMed Central</td><td><a href="https://dblp.org/db/journals/bmcbi/">https://dblp.org/db/journals/bmcbi/</a></td></tr>
<tr><td>综合</td><td>C</td><td>期刊</td><td>2</td><td></td><td>Cybernetics and Systems</td><td>Taylor &amp; Francis</td><td><a href="https://dblp.org/db/journals/cas/">https://dblp.org/db/journals/cas/</a></td></tr>
<tr class="oo"><td>综合</td><td>C</td><td>期刊</td><td>3</td><td>FCS</td><td>Frontiers of Computer Science</td><td>Higher Education Press</td><td><a href="https://dblp.org/db/journals/fcsc/">https://dblp.org/db/journals/fcsc/</a></td></tr>
<tr><td>综合</td><td>C</td><td>期刊</td><td>4</td><td></td><td>IEEE Geoscience and Remote Sensing Letters</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/lgrs/">https://dblp.org/db/journals/lgrs/</a></td></tr>
<tr class="oo"><td>综合</td><td>C</td><td>期刊</td><td>5</td><td>JBHI</td><td>IEEE Journal of Biomedical and Health Informatics</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/titb/">https://dblp.org/db/journals/titb/</a></td></tr>
<tr><td>综合</td><td>C</td><td>期刊</td><td>6</td><td>TBD</td><td>IEEE Transactions on Big Data</td><td>IEEE</td><td><a href="https://dblp.org/db/journals/tbd/">https://dblp.org/db/journals/tbd/</a></td></tr>
<tr class="oo"><td>综合</td><td>C</td><td>期刊</td><td>7</td><td></td><td>IET Intelligent Transport Systems</td><td>IET</td><td><a href="http://digital-library.theiet.org/content/journals/iet-its">http://digital-library.theiet.org/content/journals/iet-its</a></td></tr>
<tr><td>综合</td><td>C</td><td>期刊</td><td>8</td><td>JBI</td><td>Journal of Biomedical Informatics</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/jbi/">https://dblp.org/db/journals/jbi/</a></td></tr>
<tr class="oo"><td>综合</td><td>C</td><td>期刊</td><td>9</td><td></td><td>Medical Image Analysis</td><td>Elsevier</td><td><a href="https://dblp.org/db/journals/mia/">https://dblp.org/db/journals/mia/</a></td></tr>
<tr class="hd"><td>综合</td><td>A</td><td>会议</td><td>1</td><td>WWW</td><td>International World Wide Web Conferences</td><td>ACM</td><td><a href="https://dblp.org/db/conf/www/">https://dblp.org/db/conf/www/</a></td></tr>
<tr><td>综合</td><td>A</td><td>会议</td><td>2</td><td>RTSS</td><td>Real-Time Systems Symposium</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/rtss/">https://dblp.org/db/conf/rtss/</a></td></tr>
<tr class="hd"><td>综合</td><td>B</td><td>会议</td><td>1</td><td>CogSci</td><td>Cognitive Science Society Annual Conference</td><td>Psychology Press</td><td><a href="https://dblp.org/db/conf/cogsci/">https://dblp.org/db/conf/cogsci/</a></td></tr>
<tr><td>综合</td><td>B</td><td>会议</td><td>2</td><td>BIBM</td><td>IEEE International Conference on Bioinformatics and Biomedicine</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/bibm/">https://dblp.org/db/conf/bibm/</a></td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>会议</td><td>3</td><td>EMSOFT</td><td>International Conference on Embedded Software</td><td>ACM/IEEE/IFIP</td><td><a href="https://dblp.org/db/conf/emsoft/">https://dblp.org/db/conf/emsoft/</a></td></tr>
<tr><td>综合</td><td>B</td><td>会议</td><td>4</td><td>ISMB</td><td>International conference on Intelligent Systems for Molecular Biology</td><td>Oxford Journals</td><td><a href="http://www.iscb.org/about-ismb">http://www.iscb.org/about-ismb</a></td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>会议</td><td>5</td><td>RECOMB</td><td>International Conference on Research in Computational Molecular Biology</td><td>Springer</td><td><a href="https://dblp.org/db/conf/recomb/">https://dblp.org/db/conf/recomb/</a></td></tr>
<tr class="hd"><td>综合</td><td>C</td><td>会议</td><td>1</td><td>AMIA</td><td>American Medical Informatics Association Annual Symposium</td><td>AMIA</td><td><a href="https://dblp.org/db/conf/amia/">https://dblp.org/db/conf/amia/</a></td></tr>
<tr><td>综合</td><td>C</td><td>会议</td><td>2</td><td>APBC</td><td>Asia Pacific Bioinformatics Conference</td><td>BioMed Central</td><td><a href="https://dblp.org/db/conf/apbc/">https://dblp.org/db/conf/apbc/</a></td></tr>
<tr class="oo"><td>综合</td><td>C</td><td>会议</td><td>3</td><td></td><td>IEEE International Conference on Big Data</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/bigdataconf/">https://dblp.org/db/conf/bigdataconf/</a></td></tr>
<tr><td>综合</td><td>C</td><td>会议</td><td>4</td><td></td><td>IEEE International Conference on Cloud Computing</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/IEEEcloud/">https://dblp.org/db/conf/IEEEcloud/</a></td></tr>
<tr class="oo"><td>综合</td><td>C</td><td>会议</td><td>5</td><td>SMC</td><td>IEEE International Conference on Systems, Man, and Cybernetics</td><td>IEEE</td><td><a href="https://dblp.org/db/conf/smc/">https://dblp.org/db/conf/smc/</a></td></tr>
<tr><td>综合</td><td>C</td><td>会议</td><td>6</td><td>COSIT</td><td>International Conference on Spatial Information Theory</td><td>ACM</td><td><a href="https://dblp.org/db/conf/cosit/">https://dblp.org/db/conf/cosit/</a></td></tr>
<tr class="oo"><td>综合</td><td>C</td><td>会议</td><td>7</td><td>ISBRA</td><td>International Symposium on Bioinformatics Research and Applications</td><td>Springer</td><td><a href="https://dblp.org/db/conf/isbra/">https://dblp.org/db/conf/isbra/</a></td></tr>
</table>

{{< /rawhtml >}}
