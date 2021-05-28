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
<tr class="hd"><td>系统</td><td>A</td><td>期刊</td><td>1</td><td>TOCS</td><td>ACM Transactions on Computer Systems</td><td>ACM</td><td>https://dblp.org/db/journals/tocs/</td></tr>
<tr><td>系统</td><td>A</td><td>期刊</td><td>2</td><td>TOS</td><td>ACM Transactions on Storage</td><td>ACM</td><td>https://dblp.org/db/journals/tos/</td></tr>
<tr class="oo"><td>系统</td><td>A</td><td>期刊</td><td>3</td><td>TCAD</td><td>IEEE Transactions on Computer-Aided Design of Integrated Circuits And System</td><td>IEEE</td><td>https://dblp.org/db/journals/tcad/</td></tr>
<tr><td>系统</td><td>A</td><td>期刊</td><td>4</td><td>TC</td><td>IEEE Transactions on Computers</td><td>IEEE</td><td>https://dblp.org/db/journals/tc/</td></tr>
<tr class="oo"><td>系统</td><td>A</td><td>期刊</td><td>5</td><td>TPDS</td><td>IEEE Transactions on Parallel and Distributed Systems</td><td>IEEE</td><td>https://dblp.org/db/journals/tpds/</td></tr>
<tr class="hd"><td>系统</td><td>B</td><td>期刊</td><td>1</td><td>TACO</td><td>ACM Transactions on Architecture and Code Optimization</td><td>ACM</td><td>https://dblp.org/db/journals/taco/</td></tr>
<tr><td>系统</td><td>B</td><td>期刊</td><td>2</td><td>TAAS</td><td>ACM Transactions on Autonomous and Adaptive Systems</td><td>ACM</td><td>https://dblp.org/db/journals/taas/</td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>期刊</td><td>3</td><td>TODAES</td><td>ACM Transactions on Design Automation of Electronic Systems</td><td>ACM</td><td>https://dblp.org/db/journals/todaes/</td></tr>
<tr><td>系统</td><td>B</td><td>期刊</td><td>4</td><td>TECS</td><td>ACM Transactions on Embedded Computing Systems</td><td>ACM</td><td>https://dblp.org/db/journals/tecs/</td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>期刊</td><td>5</td><td>TRETS</td><td>ACM Transactions on Reconfigurable Technology and Systems</td><td>ACM</td><td>https://dblp.org/db/journals/trets/</td></tr>
<tr><td>系统</td><td>B</td><td>期刊</td><td>6</td><td>TVLSI</td><td>IEEE Transactions on Very Large Scale Integration (VLSI) Systems</td><td>IEEE</td><td>https://dblp.org/db/journals/tvlsi/</td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>期刊</td><td>7</td><td>JPDC</td><td>Journal of Parallel and Distributed Computing</td><td>Elsevier</td><td>https://dblp.org/db/journals/jpdc/</td></tr>
<tr><td>系统</td><td>B</td><td>期刊</td><td>8</td><td>JSA</td><td>Journal of Systems Architecture: Embedded Software Design</td><td>Elsevier</td><td>https://dblp.org/db/journals/jsa/</td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>期刊</td><td>9</td><td>PARCO</td><td>Parallel Computing</td><td>Elsevier</td><td>https://dblp.org/db/conf/parco/</td></tr>
<tr><td>系统</td><td>B</td><td>期刊</td><td>10</td><td></td><td>Performance Evaluation: An International Journal</td><td>Elsevier</td><td>http://www.journals.elsevier.com/performance-evaluation/</td></tr>
<tr class="hd"><td>系统</td><td>C</td><td>期刊</td><td>1</td><td>JETC</td><td>ACM Journal on Emerging Technologies in Computing Systems</td><td>ACM</td><td>https://dblp.org/db/journals/jetc/</td></tr>
<tr><td>系统</td><td>C</td><td>期刊</td><td>2</td><td></td><td>Concurrency and Computation: Practice and Experience</td><td>Wiley</td><td>https://dblp.org/db/journals/concurrency/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>期刊</td><td>3</td><td>DC</td><td>Distributed Computing</td><td>Springer</td><td>https://dblp.org/db/journals/dc/</td></tr>
<tr><td>系统</td><td>C</td><td>期刊</td><td>4</td><td>FGCS</td><td>Future Generation Computer Systems</td><td>Elsevier</td><td>https://dblp.org/db/journals/fgcs/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>期刊</td><td>5</td><td>TCC</td><td>IEEE Transactions on Cloud Computing</td><td>IEEE</td><td>https://dblp.org/db/journals/tcc/</td></tr>
<tr><td>系统</td><td>C</td><td>期刊</td><td>6</td><td>Integration</td><td>Integration, the VLSI Journal</td><td>Elsevier</td><td>https://dblp.org/db/journals/integration/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>期刊</td><td>7</td><td>JETTA</td><td>Journal of Electronic Testing-Theory and Applications</td><td>Springer</td><td>http://link.springer.com/journal/10836</td></tr>
<tr><td>系统</td><td>C</td><td>期刊</td><td>8</td><td>JGC</td><td>Journal of Grid computing</td><td>Springer</td><td>https://dblp.org/db/journals/grid/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>期刊</td><td>9</td><td>MICPRO</td><td>Microprocessors and Microsystems: Embedded Hardware Design</td><td>Elsevier</td><td>https://dblp.org/db/journals/mam/</td></tr>
<tr><td>系统</td><td>C</td><td>期刊</td><td>10</td><td>RTS</td><td>Real-Time Systems</td><td>Springer</td><td>https://dblp.org/db/journals/rts/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>期刊</td><td>11</td><td>TJSC</td><td>The Journal of Supercomputing</td><td>Springer</td><td>https://dblp.org/db/journals/tjs/</td></tr>
<tr class="hd"><td>系统</td><td>A</td><td>会议</td><td>1</td><td>PPoPP</td><td>ACM SIGPLAN Symposium on Principles &amp; Practice of Parallel Programming</td><td>ACM</td><td>https://dblp.org/db/conf/ppopp/</td></tr>
<tr><td>系统</td><td>A</td><td>会议</td><td>2</td><td>FAST</td><td>Conference on File and Storage Technologies</td><td>USENIX</td><td>https://dblp.org/db/conf/fast/</td></tr>
<tr class="oo"><td>系统</td><td>A</td><td>会议</td><td>3</td><td>DAC</td><td>Design Automation Conference</td><td>ACM</td><td>https://dblp.org/db/conf/dac/</td></tr>
<tr><td>系统</td><td>A</td><td>会议</td><td>4</td><td>HPCA</td><td>High Performance Computer Architecture</td><td>IEEE</td><td>https://dblp.org/db/conf/hpca/</td></tr>
<tr class="oo"><td>系统</td><td>A</td><td>会议</td><td>5</td><td>MICRO</td><td>IEEE/ACM International Symposium on Microarchitecture</td><td>IEEE/ACM</td><td>https://dblp.org/db/conf/micro/</td></tr>
<tr><td>系统</td><td>A</td><td>会议</td><td>6</td><td>SC</td><td>International Conference for High Performance Computing, Networking, Storage, and Analysis</td><td>IEEE</td><td>https://dblp.org/db/conf/sc/</td></tr>
<tr class="oo"><td>系统</td><td>A</td><td>会议</td><td>7</td><td>ASPLOS</td><td>International Conference on Architectural Support for Programming Languages and Operating Systems</td><td>ACM</td><td>https://dblp.org/db/conf/asplos/</td></tr>
<tr><td>系统</td><td>A</td><td>会议</td><td>8</td><td>ISCA</td><td>International Symposium on Computer Architecture</td><td>ACM /IEEE</td><td>https://dblp.org/db/conf/isca/</td></tr>
<tr class="oo"><td>系统</td><td>A</td><td>会议</td><td>9</td><td>USENIX ATC</td><td>USENIX Annul Technical Conference</td><td>USENIX</td><td>https://dblp.org/db/conf/usenix/</td></tr>
<tr class="hd"><td>系统</td><td>B</td><td>会议</td><td>1</td><td>SoCC</td><td>ACM Symposium on Cloud Computing</td><td>ACM</td><td>https://dblp.org/db/conf/cloud/</td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>2</td><td>SPAA</td><td>ACM Symposium on Parallelism in Algorithms and Architectures</td><td>ACM</td><td>https://dblp.org/db/conf/spaa/</td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>3</td><td>PODC</td><td>ACM Symposium on Principles of Distributed Computing</td><td>ACM</td><td>https://dblp.org/db/conf/podc/</td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>4</td><td>FPGA</td><td>ACM/SIGDA International Symposium on Field-Programmable Gate Arrays</td><td>ACM</td><td>https://dblp.org/db/conf/fpga/</td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>5</td><td>CGO</td><td>Code Generation and Optimization</td><td>IEEE/ACM</td><td>https://dblp.org/db/conf/cgo/</td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>6</td><td>DATE</td><td>Design, Automation &amp; Test in Europe</td><td>IEEE/ACM</td><td>https://dblp.org/db/conf/date/</td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>7</td><td>EuroSys</td><td>European Conference on Computer Systems</td><td>ACM</td><td>https://dblp.org/db/conf/eurosys/</td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>8</td><td>HOT CHIPS</td><td>Hot Chips: A Symposium on High Performance Chips</td><td>IEEE</td><td>http://www.hotchips.org/</td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>9</td><td>CLUSTER</td><td>IEEE International Conference on Cluster Computing</td><td>IEEE</td><td>https://dblp.org/db/conf/cluster/</td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>10</td><td>ICCD</td><td>International Conference on Computer Design</td><td>IEEE</td><td>https://dblp.org/db/conf/iccd/</td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>11</td><td>ICCAD</td><td>International Conference on Computer-Aided Design</td><td>IEEE/ACM</td><td>https://dblp.org/db/conf/iccad/</td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>12</td><td>ICDCS</td><td>International Conference on Distributed Computing Systems</td><td>IEEE</td><td>https://dblp.org/db/conf/icdcs/</td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>13</td><td>CODES+ISSS</td><td>International Conference on Hardware/Software Co-design and System Synthesis</td><td>ACM/ IEEE</td><td>https://dblp.org/db/conf/codes/</td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>14</td><td>HiPEAC</td><td>International Conference on High Performance and Embedded Architectures and Compilers</td><td>ACM</td><td>https://dblp.org/db/conf/hipeac/</td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>15</td><td>SIGMETRICS</td><td>International Conference on Measurement and Modeling of Computer Systems</td><td>ACM</td><td>https://dblp.org/db/conf/sigmetrics/</td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>16</td><td>PACT</td><td>International Conference on Parallel Architectures and Compilation Techniques</td><td>IEEE/ACM</td><td>https://dblp.org/db/conf/IEEEpact/</td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>17</td><td>ICPP</td><td>International Conference on Parallel Processing</td><td></td><td>https://dblp.org/db/conf/icpp/</td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>18</td><td>ICS</td><td>International Conference on Supercomputing</td><td>ACM</td><td>https://dblp.org/db/conf/ics/</td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>19</td><td>VEE</td><td>International Conference on Virtual Execution Environments</td><td>ACM</td><td>https://dblp.org/db/conf/vee/</td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>20</td><td>IPDPS</td><td>International Parallel &amp; Distributed Processing Symposium</td><td>IEEE</td><td>https://dblp.org/db/conf/ipps/</td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>21</td><td>Performance</td><td>International Symposium on Computer Performance Modeling, Measurements and Evaluation</td><td>ACM</td><td>https://dblp.org/db/conf/performance/</td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>22</td><td>HPDC</td><td>International Symposium on High Performance Distributed Computing</td><td>IEEE</td><td>https://dblp.org/db/conf/hpdc/</td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>23</td><td>ITC</td><td>International Test Conference</td><td>IEEE</td><td>https://dblp.org/db/conf/itc/</td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>24</td><td>LISA</td><td>Large Installation System Administration Conference</td><td>USENIX</td><td>https://dblp.org/db/conf/lisa/</td></tr>
<tr class="oo"><td>系统</td><td>B</td><td>会议</td><td>25</td><td>MSST</td><td>Mass Storage Systems and Technologies</td><td>IEEE</td><td>https://dblp.org/db/conf/mss/</td></tr>
<tr><td>系统</td><td>B</td><td>会议</td><td>26</td><td>RTAS</td><td>Real-Time and Embedded Technology and Applications Symposium</td><td>IEEE</td><td>https://dblp.org/db/conf/rtas/</td></tr>
<tr class="hd"><td>系统</td><td>C</td><td>会议</td><td>1</td><td>CF</td><td>ACM International Conference on Computing Frontiers</td><td>ACM</td><td>https://dblp.org/db/conf/cf/</td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>2</td><td>SYSTOR</td><td>ACM International Systems and Storage Conference</td><td>ACM</td><td>https://dblp.org/db/conf/systor/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>3</td><td>NOCS</td><td>ACM/IEEE International Symposium on Networks-on-Chip</td><td>ACM/IEEE</td><td>https://dblp.org/db/conf/nocs/</td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>4</td><td>ASAP</td><td>Application-Specific Systems, Architectures, and Processors</td><td>IEEE</td><td>https://dblp.org/db/conf/asap/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>5</td><td>ASP-DAC</td><td>Asia and South Pacific Design Automation Conference</td><td>ACM/IEEE</td><td>https://dblp.org/db/conf/aspdac/</td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>6</td><td>Euro-Par</td><td>European Conference on Parallel and Distributed Computing</td><td>Springer</td><td>https://dblp.org/db/conf/europar/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>7</td><td>ETS</td><td>European Test Symposium</td><td>IEEE</td><td>https://dblp.org/db/conf/ets/</td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>8</td><td>FPL</td><td>Field Programmable Logic and Applications</td><td>IEEE</td><td>https://dblp.org/db/conf/fpl/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>9</td><td>FCCM</td><td>Field-Programmable Custom Computing Machines</td><td>IEEE</td><td>https://dblp.org/db/conf/fccm/</td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>10</td><td>GLSVLSI</td><td>Great Lakes Symposium on VLSI</td><td>ACM/IEEE</td><td>https://dblp.org/db/conf/glvlsi/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>11</td><td>ATS</td><td>IEEE Asian Test Symposium</td><td>IEEE</td><td>https://dblp.org/db/conf/ats/</td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>12</td><td>HPCC</td><td>IEEE International Conference on High Performance Computing and Communications</td><td>IEEE</td><td>https://dblp.org/db/conf/hpcc/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>13</td><td>HiPC</td><td>IEEE International Conference on High Performance Computing, Data and Analytics</td><td>IEEE/ ACM</td><td>https://dblp.org/db/conf/hipc/</td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>14</td><td>MASCOTS</td><td>IEEE International Symposium on Modeling, Analysis, and Simulation of Computer and Telecommunication Systems</td><td>IEEE</td><td>https://dblp.org/db/conf/mascots/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>15</td><td>ISPA</td><td>IEEE International Symposium on Parallel and Distributed Processing with Applications</td><td>IEEE</td><td>https://dblp.org/db/conf/ispa/</td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>16</td><td>CCGRID</td><td>IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing</td><td>ACM/IEEE</td><td>https://dblp.org/db/conf/ccgrid/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>17</td><td>NPC</td><td>IFIP International Conference on Network and Parallel Computing</td><td>Springer</td><td>https://dblp.org/db/conf/npc/</td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>18</td><td>ICA3PP</td><td>International Conference on Algorithms and Architectures for Parallel Processing</td><td>IEEE</td><td>https://dblp.org/db/conf/ica3pp/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>19</td><td>CASES</td><td>International Conference on Compilers, Architectures, and Synthesis for Embedded Systems</td><td>ACM</td><td>https://dblp.org/db/conf/cases/</td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>20</td><td>FPT</td><td>International Conference on Field-Programmable Technology</td><td>IEEE</td><td>https://dblp.org/db/conf/fpt/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>21</td><td>ICPADS</td><td>International Conference on Parallel and Distributed Systems</td><td>IEEE</td><td>https://dblp.org/db/conf/icpads/</td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>22</td><td>ISCAS</td><td>International Symposium on Circuits and Systems</td><td>IEEE</td><td>https://dblp.org/db/conf/iscas/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>23</td><td>ISLPED</td><td>International Symposium on Low Power Electronics and Design</td><td>ACM/IEEE</td><td>https://dblp.org/db/conf/islped/</td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>24</td><td>ISPD</td><td>International Symposium on Physical Design</td><td>ACM</td><td>https://dblp.org/db/conf/ispd/</td></tr>
<tr class="oo"><td>系统</td><td>C</td><td>会议</td><td>25</td><td>HotI</td><td>Symposium on High-Performance Interconnects</td><td>IEEE</td><td>https://dblp.org/db/conf/hoti/</td></tr>
<tr><td>系统</td><td>C</td><td>会议</td><td>26</td><td>VTS</td><td>VLSI Test Symposium</td><td>IEEE</td><td>https://dblp.org/db/conf/vts/</td></tr>
<tr class="hd"><td>网络</td><td>A</td><td>期刊</td><td>1</td><td>JSAC</td><td>IEEE Journal of Selected Areas in Communications</td><td>IEEE</td><td>https://dblp.org/db/journals/jsac/</td></tr>
<tr><td>网络</td><td>A</td><td>期刊</td><td>2</td><td>TMC</td><td>IEEE Transactions on Mobile Computing</td><td>IEEE</td><td>https://dblp.org/db/journals/tmc/</td></tr>
<tr class="oo"><td>网络</td><td>A</td><td>期刊</td><td>3</td><td>TON</td><td>IEEE/ACM Transactions on Networking</td><td>IEEE/ACM</td><td>https://dblp.org/db/journals/ton/</td></tr>
<tr class="hd"><td>网络</td><td>B</td><td>期刊</td><td>1</td><td>TOIT</td><td>ACM Transactions on Internet Technology</td><td>ACM</td><td>https://dblp.org/db/journals/toit/</td></tr>
<tr><td>网络</td><td>B</td><td>期刊</td><td>2</td><td>TOMCCAP</td><td>ACM Transactions on Multimedia Computing, Communications and Applications</td><td>ACM</td><td>https://dblp.org/db/journals/tomccap/</td></tr>
<tr class="oo"><td>网络</td><td>B</td><td>期刊</td><td>3</td><td>TOSN</td><td>ACM Transactions on Sensor Networks</td><td>ACM</td><td>https://dblp.org/db/journals/tosn/</td></tr>
<tr><td>网络</td><td>B</td><td>期刊</td><td>4</td><td>CN</td><td>Computer Networks</td><td>Elsevier</td><td>https://dblp.org/db/journals/cn/</td></tr>
<tr class="oo"><td>网络</td><td>B</td><td>期刊</td><td>5</td><td>TCOM</td><td>IEEE Transactions on Communications</td><td>IEEE</td><td>https://dblp.org/db/journals/tcom/</td></tr>
<tr><td>网络</td><td>B</td><td>期刊</td><td>6</td><td>TWC</td><td>IEEE Transactions on Wireless Communications</td><td>IEEE</td><td>https://dblp.org/db/journals/twc/</td></tr>
<tr class="hd"><td>网络</td><td>C</td><td>期刊</td><td>1</td><td></td><td>Ad Hoc Networks</td><td>Elsevier</td><td>https://dblp.org/db/journals/adhoc/</td></tr>
<tr><td>网络</td><td>C</td><td>期刊</td><td>2</td><td>CC</td><td>Computer Communications</td><td>Elsevier</td><td>https://dblp.org/db/journals/comcom/</td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>期刊</td><td>3</td><td>TNSM</td><td>IEEE Transactions on Network and Service Management</td><td>IEEE</td><td>https://dblp.org/db/journals/tnsm/</td></tr>
<tr><td>网络</td><td>C</td><td>期刊</td><td>4</td><td></td><td>IET Communications</td><td>IET</td><td>https://dblp.org/db/journals/iet-com/</td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>期刊</td><td>5</td><td>JNCA</td><td>Journal of Network and Computer Applications</td><td>Elsevier</td><td>https://dblp.org/db/journals/jnca/</td></tr>
<tr><td>网络</td><td>C</td><td>期刊</td><td>6</td><td>MONET</td><td>Mobile Networks &amp; Applications</td><td>Springer</td><td>https://dblp.org/db/journals/monet/</td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>期刊</td><td>7</td><td></td><td>Networks</td><td>Wiley</td><td>https://dblp.org/db/journals/networks/</td></tr>
<tr><td>网络</td><td>C</td><td>期刊</td><td>8</td><td>PPNA</td><td>Peer-to-Peer Networking and Applications</td><td>Springer</td><td>https://dblp.org/db/journals/ppna/</td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>期刊</td><td>9</td><td>WCMC</td><td>Wireless Communications &amp; Mobile Computing</td><td>Wiley.</td><td>https://dblp.org/db/journals/wicomm/</td></tr>
<tr><td>网络</td><td>C</td><td>期刊</td><td>10</td><td></td><td>Wireless Networks</td><td>Springer</td><td>https://dblp.org/db/journals/winet/</td></tr>
<tr class="hd"><td>网络</td><td>A</td><td>会议</td><td>1</td><td>SIGCOMM</td><td>ACM International Conference on Applications, Technologies, Architectures, and Protocols for Computer Communication</td><td>ACM</td><td>https://dblp.org/db/conf/sigcomm/</td></tr>
<tr><td>网络</td><td>A</td><td>会议</td><td>2</td><td>MobiCom</td><td>ACM International Conference on Mobile Computing and Networking</td><td>ACM</td><td>https://dblp.org/db/conf/mobicom/</td></tr>
<tr class="oo"><td>网络</td><td>A</td><td>会议</td><td>3</td><td>INFOCOM</td><td>IEEE International Conference on Computer Communications</td><td>IEEE</td><td>https://dblp.org/db/conf/infocom/</td></tr>
<tr><td>网络</td><td>A</td><td>会议</td><td>4</td><td>NSDI</td><td>Symposium on Network System Design and Implementation</td><td>USENIX</td><td>https://dblp.org/db/conf/nsdi/</td></tr>
<tr class="hd"><td>网络</td><td>B</td><td>会议</td><td>1</td><td>SenSys</td><td>ACM Conference on Embedded Networked Sensor Systems</td><td>ACM</td><td>https://dblp.org/db/conf/sensys/</td></tr>
<tr><td>网络</td><td>B</td><td>会议</td><td>2</td><td>CoNEXT</td><td>ACM International Conference on Emerging Networking Experiments and Technologies</td><td>ACM</td><td>https://dblp.org/db/conf/conext/</td></tr>
<tr class="oo"><td>网络</td><td>B</td><td>会议</td><td>3</td><td>SECON</td><td>IEEE Communications Society Conference on Sensor and Ad Hoc Communications and Networks</td><td>IEEE</td><td>https://dblp.org/db/conf/secon/</td></tr>
<tr><td>网络</td><td>B</td><td>会议</td><td>4</td><td>IPSN</td><td>International Conference on Information Processing in Sensor Networks</td><td>IEEE/ACM</td><td>https://dblp.org/db/conf/ipsn/</td></tr>
<tr class="oo"><td>网络</td><td>B</td><td>会议</td><td>5</td><td>MobiSys</td><td>International Conference on Mobile Systems, Applications, and Services</td><td>ACM</td><td>https://dblp.org/db/conf/mobisys/</td></tr>
<tr><td>网络</td><td>B</td><td>会议</td><td>6</td><td>ICNP</td><td>International Conference on Network Protocols</td><td>IEEE</td><td>https://dblp.org/db/conf/icnp/</td></tr>
<tr class="oo"><td>网络</td><td>B</td><td>会议</td><td>7</td><td>MobiHoc</td><td>International Symposium on Mobile Ad Hoc Networking and Computing</td><td>ACM/IEEE</td><td>https://dblp.org/db/conf/mobihoc/</td></tr>
<tr><td>网络</td><td>B</td><td>会议</td><td>8</td><td>NOSSDAV</td><td>International Workshop on Network and Operating System Support for Digital Audio and Video</td><td>ACM</td><td>https://dblp.org/db/conf/nossdav/</td></tr>
<tr class="oo"><td>网络</td><td>B</td><td>会议</td><td>9</td><td>IWQoS</td><td>International Workshop on Quality of Service</td><td>IEEE</td><td>https://dblp.org/db/conf/iwqos/</td></tr>
<tr><td>网络</td><td>B</td><td>会议</td><td>10</td><td>IMC</td><td>Internet Measurement Conference</td><td>ACM/USENIX</td><td>https://dblp.org/db/conf/imc/</td></tr>
<tr class="hd"><td>网络</td><td>C</td><td>会议</td><td>1</td><td>ANCS</td><td>Architectures for Networking and Communications Systems</td><td>ACM/IEE E</td><td>https://dblp.org/db/conf/ancs/</td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>2</td><td>APNOMS</td><td>Asia-Pacific Network Operations and Management Symposium</td><td>IFIP/IEEE</td><td>https://dblp.org/db/conf/apnoms/</td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>3</td><td>FORTE</td><td>Formal Techniques for Networked and Distributed Systems</td><td>Springer</td><td>https://dblp.org/db/conf/forte/</td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>4</td><td>LCN</td><td>IEEE Conference on Local Computer Networks</td><td>IEEE</td><td>https://dblp.org/db/conf/lcn/</td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>5</td><td>GLOBECO M</td><td>IEEE Global Communications Conference</td><td>IEEE</td><td>https://dblp.org/db/conf/globecom/</td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>6</td><td>ICC</td><td>IEEE International Conference on Communications</td><td>IEEE</td><td>https://dblp.org/db/conf/icc/</td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>7</td><td>ICCCN</td><td>IEEE International Conference on Computer Communications and Networks</td><td>IEEE</td><td>https://dblp.org/db/conf/icccn/</td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>8</td><td>MASS</td><td>IEEE International Conference on Mobile Ad-hoc and Sensor Systems</td><td>IEEE</td><td>https://dblp.org/db/conf/mass/</td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>9</td><td>P2P</td><td>IEEE International Conference on Peer-to-Peer Computing</td><td>IEEE</td><td>https://dblp.org/db/conf/p2p/</td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>10</td><td>IPCCC</td><td>IEEE International Performance Computing and Communications Conference</td><td>IEEE</td><td>https://dblp.org/db/conf/ipccc/</td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>11</td><td>WoWMoM</td><td>IEEE International Symposium on a World of Wireless, Mobile and Multimedia Networks</td><td>IEEE</td><td>https://dblp.org/db/conf/wowmom/</td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>12</td><td>ISCC</td><td>IEEE Symposium on Computers and Communications</td><td>IEEE</td><td>https://dblp.org/db/conf/iscc/</td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>13</td><td>WCNC</td><td>IEEE Wireless Communications &amp; Networking Conference</td><td>IEEE</td><td>https://dblp.org/db/conf/wcnc/</td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>14</td><td>Networking</td><td>IFIP International Conferences on Networking</td><td>IFIP</td><td>https://dblp.org/db/conf/networking/</td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>15</td><td>IM</td><td>IFIP/IEEE International Symposium on Integrated Network Management</td><td>IFIP/IEEE</td><td>https://dblp.org/db/conf/im/</td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>16</td><td>MSN</td><td>International Conference on Mobile Ad-hoc and Sensor Networks</td><td>IEEE</td><td>https://dblp.org/db/conf/msn/</td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>17</td><td>MSWiM</td><td>International Conference on Modeling, Analysis and Simulation of Wireless and Mobile Systems</td><td>ACM</td><td>https://dblp.org/db/conf/mswim/</td></tr>
<tr><td>网络</td><td>C</td><td>会议</td><td>18</td><td>WASA</td><td>International Conference on Wireless Algorithms, Systems, and Applications</td><td>Springer</td><td>https://dblp.org/db/conf/wasa/</td></tr>
<tr class="oo"><td>网络</td><td>C</td><td>会议</td><td>19</td><td>HotNets</td><td>The Workshop on Hot Topics in Networks</td><td>ACM</td><td>https://dblp.org/db/conf/hotnets/</td></tr>
<tr class="hd"><td>安全</td><td>A</td><td>期刊</td><td>1</td><td>TDSC</td><td>IEEE Transactions on Dependable and Secure Computing</td><td>IEEE</td><td>https://dblp.org/db/journals/tdsc/</td></tr>
<tr><td>安全</td><td>A</td><td>期刊</td><td>2</td><td>TIFS</td><td>IEEE Transactions on Information Forensics and Security</td><td>IEEE</td><td>https://dblp.org/db/journals/tifs/</td></tr>
<tr class="oo"><td>安全</td><td>A</td><td>期刊</td><td>3</td><td></td><td>Journal of Cryptology</td><td>Springer</td><td>https://dblp.org/db/journals/joc/</td></tr>
<tr class="hd"><td>安全</td><td>B</td><td>期刊</td><td>1</td><td>TOPS</td><td>ACM Transactions on Privacy and Security</td><td>ACM</td><td>https://tops.acm.org/</td></tr>
<tr><td>安全</td><td>B</td><td>期刊</td><td>2</td><td></td><td>Computers &amp; Security</td><td>Elsevier</td><td>https://dblp.org/db/journals/compsec/</td></tr>
<tr class="oo"><td>安全</td><td>B</td><td>期刊</td><td>3</td><td></td><td>Designs, Codes and Cryptography</td><td>Springer</td><td>https://dblp.org/db/journals/dcc/</td></tr>
<tr><td>安全</td><td>B</td><td>期刊</td><td>4</td><td>JCS</td><td>Journal of Computer Security</td><td>IOS Press</td><td>https://dblp.org/db/journals/jcs/</td></tr>
<tr class="hd"><td>安全</td><td>C</td><td>期刊</td><td>1</td><td>CLSR</td><td>Computer Law and Security Review</td><td>Elsevier</td><td>http://www.journals.elsevier.com/computer-law-and- security-review/</td></tr>
<tr><td>安全</td><td>C</td><td>期刊</td><td>2</td><td></td><td>EURASIP Journal on Information Security</td><td>Springer</td><td>https://dblp.org/db/journals/ejisec/</td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>期刊</td><td>3</td><td></td><td>IET Information Security</td><td>IET</td><td>https://dblp.org/db/journals/iet-ifs/</td></tr>
<tr><td>安全</td><td>C</td><td>期刊</td><td>4</td><td>IMCS</td><td>Information Management &amp; Computer Security</td><td>Emerald</td><td>https://dblp.org/db/journals/imcs/</td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>期刊</td><td>5</td><td>IJICS</td><td>International Journal of Information and Computer Security</td><td>Inderscience</td><td>https://dblp.org/db/journals/ijics/</td></tr>
<tr><td>安全</td><td>C</td><td>期刊</td><td>6</td><td>IJISP</td><td>International Journal of Information Security and Privacy</td><td>Idea Group Inc</td><td>https://dblp.org/db/journals/ijisp/</td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>期刊</td><td>7</td><td>JISA</td><td>Journal of Information Security and Application</td><td>Elsevier</td><td>https://dblp.org/db/journals/istr/</td></tr>
<tr><td>安全</td><td>C</td><td>期刊</td><td>8</td><td>SCN</td><td>Security and Communication Networks</td><td>Wiley</td><td>https://dblp.org/db/journals/scn/</td></tr>
<tr class="hd"><td>安全</td><td>A</td><td>会议</td><td>1</td><td>CCS</td><td>ACM Conference on Computer and Communications Security</td><td>ACM</td><td>https://dblp.org/db/conf/ccs/</td></tr>
<tr><td>安全</td><td>A</td><td>会议</td><td>2</td><td>EUROCRYPT</td><td>European Cryptology Conference</td><td>Springer</td><td>https://dblp.org/db/conf/eurocrypt/</td></tr>
<tr class="oo"><td>安全</td><td>A</td><td>会议</td><td>3</td><td>S&amp;P</td><td>IEEE Symposium on Security and Privacy</td><td>IEEE</td><td>https://dblp.org/db/conf/sp/</td></tr>
<tr><td>安全</td><td>A</td><td>会议</td><td>4</td><td>CRYPTO</td><td>International Cryptology Conference</td><td>Springer</td><td>https://dblp.org/db/conf/crypto/</td></tr>
<tr class="oo"><td>安全</td><td>A</td><td>会议</td><td>5</td><td>USENIX Security</td><td>Usenix Security Symposium</td><td>USENIX Association</td><td>https://dblp.org/db/conf/uss/</td></tr>
<tr class="hd"><td>安全</td><td>B</td><td>会议</td><td>1</td><td>ACSAC</td><td>Annual Computer Security Applications Conference</td><td>IEEE</td><td>https://dblp.org/db/conf/acsac/</td></tr>
<tr><td>安全</td><td>B</td><td>会议</td><td>2</td><td>ASIACRYPT</td><td>Annual International Conference on the Theory and Application of Cryptology and Information Security</td><td>Springer</td><td>https://dblp.org/db/conf/asiacrypt/</td></tr>
<tr class="oo"><td>安全</td><td>B</td><td>会议</td><td>3</td><td>ESORICS</td><td>European Symposium on Research in Computer Security</td><td>Springer</td><td>https://dblp.org/db/conf/esorics/</td></tr>
<tr><td>安全</td><td>B</td><td>会议</td><td>4</td><td>FSE</td><td>Fast Software Encryption</td><td>Springer</td><td>https://dblp.org/db/conf/fse/</td></tr>
<tr class="oo"><td>安全</td><td>B</td><td>会议</td><td>5</td><td>CSFW</td><td>IEEE Computer Security Foundations Workshop</td><td>IEEE</td><td>https://dblp.org/db/conf/csfw/</td></tr>
<tr><td>安全</td><td>B</td><td>会议</td><td>6</td><td>SRDS</td><td>IEEE International Symposium on Reliable Distributed Systems</td><td>IEEE</td><td>https://dblp.org/db/conf/srds/</td></tr>
<tr class="oo"><td>安全</td><td>B</td><td>会议</td><td>7</td><td>CHES</td><td>International Conference on Cryptographic Hardware and Embedded Systems</td><td>Springer</td><td>https://dblp.org/db/conf/ches/</td></tr>
<tr><td>安全</td><td>B</td><td>会议</td><td>8</td><td>DSN</td><td>International Conference on Dependable Systems and Networks</td><td>IEEE/IFIP</td><td>https://dblp.org/db/conf/dsn/</td></tr>
<tr class="oo"><td>安全</td><td>B</td><td>会议</td><td>9</td><td>RAID</td><td>International Symposium on Recent Advances in Intrusion Detection</td><td>Springer</td><td>https://dblp.org/db/conf/raid/</td></tr>
<tr><td>安全</td><td>B</td><td>会议</td><td>10</td><td>PKC</td><td>International Workshop on Practice and Theory in Public Key Cryptography</td><td>Springer</td><td>https://dblp.org/db/conf/pkc/</td></tr>
<tr class="oo"><td>安全</td><td>B</td><td>会议</td><td>11</td><td>NDSS</td><td>ISOC Network and Distributed System Security Symposium</td><td>ISOC</td><td>https://dblp.org/db/conf/ndss/</td></tr>
<tr><td>安全</td><td>B</td><td>会议</td><td>12</td><td>TCC</td><td>Theory of Cryptography Conference</td><td>Springer</td><td>https://dblp.org/db/conf/tcc/</td></tr>
<tr class="hd"><td>安全</td><td>C</td><td>会议</td><td>1</td><td>WiSec</td><td>ACM Conference on Security and Privacy in Wireless and Mobile Networks</td><td>ACM</td><td>https://dblp.org/db/conf/wisec/</td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>2</td><td>SACMAT</td><td>ACM Symposium on Access Control Models and Technologies</td><td>ACM</td><td>https://dblp.org/db/conf/sacmat/</td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>3</td><td>DRM</td><td>ACM Workshop on Digital Rights Management</td><td>ACM</td><td>https://dblp.org/db/conf/drm/</td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>4</td><td>IH&amp;MMSec</td><td>ACM Workshop on Information Hiding and Multimedia Security</td><td>ACM</td><td>https://dblp.org/db/conf/ih/</td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>5</td><td>ACNS</td><td>Applied Cryptography and Network Security</td><td>Springer</td><td>https://dblp.org/db/conf/acns/</td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>6</td><td>AsiaCCS</td><td>Asia Conference on Computer and Communications Security</td><td>ACM</td><td>https://dblp.org/db/conf/ccs/</td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>7</td><td>ACISP</td><td>Australasia Conference on Information Security and Privacy</td><td>Springer</td><td>https://dblp.org/db/conf/acisp/</td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>8</td><td>CT-RSA</td><td>Cryptographer's Track at RSA Conference</td><td>Springer</td><td>https://dblp.org/db/conf/ctrsa/</td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>9</td><td>DIMVA</td><td>Detection of Intrusions and Malware &amp; Vulnerability Assessment</td><td></td><td>https://dblp.org/db/conf/dimva/</td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>10</td><td>DFRWS</td><td>Digital Forensic Research Workshop</td><td>Elsevier</td><td>https://dblp.org/db/conf/dfrws/</td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>11</td><td>FC</td><td>Financial Cryptography and Data Security</td><td>Springer</td><td>https://dblp.org/db/conf/fc/</td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>12</td><td>TrustCom</td><td>IEEE International Conference on Trust, Security and Privacy in Computing and Communications</td><td>IEEE</td><td>https://dblp.org/db/conf/trustcom/</td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>13</td><td>SEC</td><td>IFIP International Information Security Conference</td><td>Springer</td><td>https://dblp.org/db/conf/sec/</td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>14</td><td>IFIP WG 11.9</td><td>IFIP WG 11.9 International Conference on Digital Forensics</td><td>Springer</td><td>*http://www.ifip119.org/Conferences/</td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>15</td><td>ISC</td><td>Information Security Conference</td><td>Springer</td><td>https://dblp.org/db/conf/isw/</td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>16</td><td>ICDF2C</td><td>International Conference on Digital Forensics &amp; Cyber Crime</td><td>Springer</td><td>https://dblp.org/db/conf/icdf2c/</td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>17</td><td>ICICS</td><td>International Conference on Information and Communications Security</td><td>Springer</td><td>https://dblp.org/db/conf/icics/</td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>18</td><td>SecureComm</td><td>International Conference on Security and Privacy in Communication Networks</td><td>ACM</td><td>https://dblp.org/db/conf/securecomm/</td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>19</td><td>NSPW</td><td>New Security Paradigms Workshop</td><td>ACM</td><td>https://dblp.org/db/conf/nspw/</td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>20</td><td>PAM</td><td>Passive and Active Measurement Conference</td><td>Springer</td><td>https://dblp.org/db/conf/pam/</td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>21</td><td>PETS</td><td>Privacy Enhancing Technologies Symposium</td><td>Springer</td><td>https://dblp.org/db/conf/pet/</td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>22</td><td>SAC</td><td>Selected Areas in Cryptography</td><td>Springer</td><td>https://dblp.org/db/conf/sacrypt/</td></tr>
<tr class="oo"><td>安全</td><td>C</td><td>会议</td><td>23</td><td>SOUPS</td><td>Symposium On Usable Privacy and Security</td><td>USENIX</td><td>https://dblp.org/db/conf/soups/</td></tr>
<tr><td>安全</td><td>C</td><td>会议</td><td>24</td><td>HotSec</td><td>USENIX Workshop on Hot Topics in Security</td><td>USENIX</td><td>*http://www.usenix.org/events/</td></tr>
<tr class="hd"><td>软工</td><td>A</td><td>期刊</td><td>1</td><td>TOPLAS</td><td>ACM Transactions on Programming Languages &amp; Systems</td><td>ACM</td><td>https://dblp.org/db/journals/toplas/</td></tr>
<tr><td>软工</td><td>A</td><td>期刊</td><td>2</td><td>TOSEM</td><td>ACM Transactions on Software Engineering and Methodology</td><td>ACM</td><td>https://dblp.org/db/journals/tosem/</td></tr>
<tr class="oo"><td>软工</td><td>A</td><td>期刊</td><td>3</td><td>TSE</td><td>IEEE Transactions on Software Engineering</td><td>IEEE</td><td>https://dblp.org/db/journals/tse/</td></tr>
<tr class="hd"><td>软工</td><td>B</td><td>期刊</td><td>1</td><td>ASE</td><td>Automated Software Engineering</td><td>Springer</td><td>https://dblp.org/db/journals/ase/</td></tr>
<tr><td>软工</td><td>B</td><td>期刊</td><td>2</td><td>ESE</td><td>Empirical Software Engineering</td><td>Springer</td><td>https://dblp.org/db/journals/ese/</td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>期刊</td><td>3</td><td>TSC</td><td>IEEE Transactions on Service Computing</td><td>IEEE</td><td>https://dblp.org/db/journals/tsc/</td></tr>
<tr><td>软工</td><td>B</td><td>期刊</td><td>4</td><td>IETS</td><td>IET Software</td><td>IET</td><td>https://dblp.org/db/journals/iet-sen/</td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>期刊</td><td>5</td><td>IST</td><td>Information and Software Technology</td><td>Elsevier</td><td>https://dblp.org/db/journals/infsof/</td></tr>
<tr><td>软工</td><td>B</td><td>期刊</td><td>6</td><td>JFP</td><td>Journal of Functional Programming</td><td>Cambridge University Press</td><td>https://dblp.org/db/journals/jfp/</td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>期刊</td><td>7</td><td></td><td>Journal of Software: Evolution and Process</td><td>Wiley</td><td>https://dblp.org/db/journals/smr/</td></tr>
<tr><td>软工</td><td>B</td><td>期刊</td><td>8</td><td>JSS</td><td>Journal of Systems and Software</td><td>Elsevier</td><td>https://dblp.org/db/journals/jss/</td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>期刊</td><td>9</td><td>RE</td><td>Requirements Engineering</td><td>Springer</td><td>https://dblp.org/db/journals/re/</td></tr>
<tr><td>软工</td><td>B</td><td>期刊</td><td>10</td><td>SCP</td><td>Science of Computer Programming</td><td>Elsevier</td><td>https://dblp.org/db/journals/scp/</td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>期刊</td><td>11</td><td>SoSyM</td><td>Software and System Modeling</td><td>Springer</td><td>https://dblp.org/db/journals/sosym/</td></tr>
<tr><td>软工</td><td>B</td><td>期刊</td><td>12</td><td>STVR</td><td>Software Testing, Verification and Reliability</td><td>Wiley</td><td>https://dblp.org/db/journals/stvr/</td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>期刊</td><td>13</td><td>SPE</td><td>Software: Practice and Experience</td><td>Wiley</td><td>https://dblp.org/db/journals/spe/</td></tr>
<tr class="hd"><td>软工</td><td>C</td><td>期刊</td><td>1</td><td>CL</td><td>Computer Languages, Systems and Structures</td><td>Elsevier</td><td>https://dblp.org/db/journals/cl/</td></tr>
<tr><td>软工</td><td>C</td><td>期刊</td><td>2</td><td>IJSEKE</td><td>International Journal on Software Engineering and Knowledge Engineering</td><td>World Scientific</td><td>https://dblp.org/db/journals/ijseke/</td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>期刊</td><td>3</td><td>STTT</td><td>International Journal on Software Tools for Technology Transfer</td><td>Springer</td><td>https://dblp.org/db/journals/sttt/</td></tr>
<tr><td>软工</td><td>C</td><td>期刊</td><td>4</td><td>JLAP</td><td>Journal of Logic and Algebraic Programming</td><td>Elsevier</td><td>https://dblp.org/db/journals/jlp/jlap.html/</td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>期刊</td><td>5</td><td>JWE</td><td>Journal of Web Engineering</td><td>Rinton Press</td><td>https://dblp.org/db/journals/jwe/</td></tr>
<tr><td>软工</td><td>C</td><td>期刊</td><td>6</td><td>SOCA</td><td>Service Oriented Computing and Applications</td><td>Springer</td><td>https://dblp.org/db/journals/soca/</td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>期刊</td><td>7</td><td>SQJ</td><td>Software Quality Journal</td><td>Springer</td><td>https://dblp.org/db/journals/sqj/</td></tr>
<tr><td>软工</td><td>C</td><td>期刊</td><td>8</td><td>TPLP</td><td>Theory and Practice of Logic Programming</td><td>Cambridge University Press</td><td>https://dblp.org/db/journals/tplp/</td></tr>
<tr class="hd"><td>软工</td><td>A</td><td>会议</td><td>1</td><td>PLDI</td><td>ACM SIGPLAN Conference on Programming Language Design &amp; Implementation</td><td>ACM</td><td>https://dblp.org/db/conf/pldi/</td></tr>
<tr><td>软工</td><td>A</td><td>会议</td><td>2</td><td>POPL</td><td>ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages</td><td>ACM</td><td>https://dblp.org/db/conf/popl/</td></tr>
<tr class="oo"><td>软工</td><td>A</td><td>会议</td><td>3</td><td>FSE/ESEC</td><td>ACM SIGSOFT Symposium on the Foundation of Software Engineering/ European Software Engineering Conference</td><td>ACM</td><td>https://dblp.org/db/conf/sigsoft/</td></tr>
<tr><td>软工</td><td>A</td><td>会议</td><td>4</td><td>SOSP</td><td>ACM Symposium on Operating Systems Principles</td><td>ACM</td><td>https://dblp.org/db/conf/sosp/</td></tr>
<tr class="oo"><td>软工</td><td>A</td><td>会议</td><td>5</td><td>OOPSLA</td><td>Conference on Object-Oriented Programming Systems, Languages, and Applications</td><td>ACM</td><td>https://dblp.org/db/conf/oopsla/</td></tr>
<tr><td>软工</td><td>A</td><td>会议</td><td>6</td><td>ASE</td><td>International Conference on Automated Software Engineering</td><td>IEEE/ACM</td><td>https://dblp.org/db/conf/kbse/</td></tr>
<tr class="oo"><td>软工</td><td>A</td><td>会议</td><td>7</td><td>ICSE</td><td>International Conference on Software Engineering</td><td>ACM/IEEE</td><td>https://dblp.org/db/conf/icse/</td></tr>
<tr><td>软工</td><td>A</td><td>会议</td><td>8</td><td>ISSTA</td><td>International Symposium on Software Testing and Analysis</td><td>ACM</td><td>https://dblp.org/db/conf/issta/</td></tr>
<tr class="oo"><td>软工</td><td>A</td><td>会议</td><td>9</td><td>OSDI</td><td>USENIX Symposium on Operating Systems Design and Implementations</td><td>USENIX</td><td>https://dblp.org/db/conf/osdi/</td></tr>
<tr class="hd"><td>软工</td><td>B</td><td>会议</td><td>1</td><td>ECOOP</td><td>European Conference on Object-Oriented Programming</td><td>AITO</td><td>https://dblp.org/db/conf/ecoop/</td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>2</td><td>ETAPS</td><td>European Joint Conferences on Theory and Practice of Software</td><td>Springer</td><td>https://dblp.org/db/conf/etaps/</td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>3</td><td>ICPC</td><td>IEEE International Conference on Program Comprehension</td><td>IEEE</td><td>https://dblp.org/db/conf/iwpc/</td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>4</td><td>RE</td><td>IEEE International Requirements Engineering Conference</td><td>IEEE</td><td>https://dblp.org/db/conf/re/</td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>5</td><td>CAiSE</td><td>International Conference on Advanced Information Systems Engineering</td><td>Springer</td><td>https://dblp.org/db/conf/caise/</td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>6</td><td>ICFP</td><td>International Conference on Function Programming</td><td>ACM</td><td>https://dblp.org/db/conf/icfp/</td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>7</td><td>LCTES</td><td>International Conference on Languages, Compilers and Tools for Embedded Systems</td><td>ACM</td><td>https://dblp.org/db/conf/lctrts/</td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>8</td><td>MoDELS</td><td>International Conference on Model Driven Engineering Languages and Systems</td><td>ACM, IEEE</td><td>https://dblp.org/db/conf/models/</td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>9</td><td>CP</td><td>International Conference on Principles and Practice of Constraint Programming</td><td>Springer</td><td>https://dblp.org/db/conf/cp/</td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>10</td><td>ICSOC</td><td>International Conference on Service Oriented Computing</td><td>Springer</td><td>https://dblp.org/db/conf/icsoc/</td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>11</td><td>SANER</td><td>International Conference on Software Analysis, Evolution, and Reengineering</td><td>IEEE</td><td>https://dblp.org/db/conf/wcre/</td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>12</td><td>ICSME</td><td>International Conference on Software Maintenance and Evolution</td><td>IEEE</td><td>https://dblp.org/db/conf/icsm/</td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>13</td><td>VMCAI</td><td>International Conference on Verification, Model Checking, and Abstract Interpretation</td><td>Springer</td><td>https://dblp.org/db/conf/vmcai/</td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>14</td><td>ICWS</td><td>International Conference on Web Services （Research Track）</td><td>IEEE</td><td>https://dblp.org/db/conf/icws/</td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>15</td><td>Middleware</td><td>International Middleware Conference</td><td>ACM/IFIP/ USENIX</td><td>https://dblp.org/db/conf/middleware/</td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>16</td><td>SAS</td><td>International Static Analysis Symposium</td><td>Springer</td><td>https://dblp.org/db/conf/sas/</td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>17</td><td>ESEM</td><td>International Symposium on Empirical Software Engineering and Measurement</td><td>ACM/IEEE</td><td>https://dblp.org/db/conf/esem/</td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>18</td><td>FM</td><td>International Symposium on Formal Methods</td><td>FME</td><td>https://dblp.org/db/conf/fm/</td></tr>
<tr class="oo"><td>软工</td><td>B</td><td>会议</td><td>19</td><td>ISSRE</td><td>International Symposium on Software Reliability Engineering</td><td>IEEE</td><td>https://dblp.org/db/conf/issre/</td></tr>
<tr><td>软工</td><td>B</td><td>会议</td><td>20</td><td>HotOS</td><td>USENIX Workshop on Hot Topics in Operating Systems</td><td>USENIX</td><td>https://dblp.org/db/conf/hotos/</td></tr>
<tr class="hd"><td>软工</td><td>C</td><td>会议</td><td>1</td><td>PEPM</td><td>ACM SIGPLAN Workshop on Partial Evaluation and Program Manipulation</td><td>ACM</td><td>https://dblp.org/db/conf/pepm/</td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>2</td><td>PASTE</td><td>ACMSIGPLAN-SIGSOFT Workshop on Program Analysis for Software Tools and Engineering</td><td>ACM</td><td>https://dblp.org/db/conf/paste/</td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>3</td><td>APLAS</td><td>Asian Symposium on Programming Languages and Systems</td><td>Springer</td><td>https://dblp.org/db/conf/aplas/</td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>4</td><td>APSEC</td><td>Asia-Pacific Software Engineering Conference</td><td>IEEE</td><td>https://dblp.org/db/conf/apsec/</td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>5</td><td>EASE</td><td>Evaluation and Assessment in Software Engineering</td><td>ACM</td><td>https://dblp.org/db/conf/ease/</td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>6</td><td>ICECCS</td><td>IEEE International Conference on Engineering of Complex Computer Systems</td><td>IEEE</td><td>https://dblp.org/db/conf/iceccs/</td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>7</td><td>ICST</td><td>IEEE International Conference on Software Testing, Verification and Validation</td><td>IEEE</td><td>https://dblp.org/db/conf/icst/</td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>8</td><td>ISPASS</td><td>IEEE International Symposium on Performance Analysis of Systems and Software</td><td>IEEE</td><td>https://dblp.org/db/conf/ispass/</td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>9</td><td>SCAM</td><td>IEEE International Working Conference on Source Code Analysis and Manipulation</td><td>IEEE</td><td>https://dblp.org/db/conf/scam/</td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>10</td><td>COMPSAC</td><td>International Computer Software and Applications Conference</td><td>IEEE</td><td>https://dblp.org/db/conf/compsac/</td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>11</td><td>ICFEM</td><td>International Conference on Formal Engineering Methods</td><td>Springer</td><td>https://dblp.org/db/conf/icfem/</td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>12</td><td>TOOLS</td><td>International Conference on Objects, Models, Components, Patterns</td><td>Springer</td><td>https://dblp.org/db/conf/tools/</td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>13</td><td>SCC</td><td>International Conference on Service Computing</td><td>IEEE</td><td>https://dblp.org/db/conf/IEEEscc/</td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>14</td><td>ICSSP</td><td>International Conference on Software and System Process</td><td>ACM</td><td>https://dblp.org/db/conf/ispw/</td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>15</td><td>SEKE</td><td>International Conference on Software Engineering and Knowledge Engineering</td><td>KSI</td><td>https://dblp.org/db/conf/seke/</td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>16</td><td>QRS</td><td>International Conference on Software Quality, Reliability and Security</td><td>IEEE</td><td>https://dblp.org/db/conf/qrs/</td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>17</td><td>ICSR</td><td>International Conference on Software Reuse</td><td>Springer</td><td>https://dblp.org/db/conf/icsr/</td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>18</td><td>ICWE</td><td>International Conference on Web Engineering</td><td>Springer</td><td>https://dblp.org/db/conf/icwe/</td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>19</td><td>SPIN</td><td>International SPIN Workshop on Model Checking Software</td><td>Springer</td><td>https://dblp.org/db/conf/spin/</td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>20</td><td>ATVA</td><td>International Symposium on Automated Technology for Verification and Analysis</td><td>Springer</td><td>https://dblp.org/db/conf/atva/</td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>21</td><td>LOPSTR</td><td>International Symposium on Logic-based Program Synthesis and Transformation</td><td>Springer</td><td>https://dblp.org/db/conf/lopstr/</td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>22</td><td>TASE</td><td>International Symposium on Theoretical Aspects of Software Engineering</td><td>IEEE</td><td>https://dblp.org/db/conf/tase/</td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>23</td><td>MSR</td><td>Mining Software Repositories</td><td>IEEE/ACM</td><td>https://dblp.org/db/conf/msr/</td></tr>
<tr><td>软工</td><td>C</td><td>会议</td><td>24</td><td>REFSQ</td><td>Requirements Engineering: Foundation for Software Quality</td><td>Springer</td><td>https://dblp.org/db/conf/refsq/</td></tr>
<tr class="oo"><td>软工</td><td>C</td><td>会议</td><td>25</td><td>WICSA</td><td>Working IEEE/IFIP Conference on Software Architecture</td><td>IEEE</td><td>https://dblp.org/db/conf/wicsa/</td></tr>
<tr class="hd"><td>数据库</td><td>A</td><td>期刊</td><td>1</td><td>TODS</td><td>ACM Transactions on Database Systems</td><td>ACM</td><td>https://dblp.org/db/journals/tods/</td></tr>
<tr><td>数据库</td><td>A</td><td>期刊</td><td>2</td><td>TOIS</td><td>ACM Transactions on Information Systems</td><td>ACM</td><td>https://dblp.org/db/journals/tois/</td></tr>
<tr class="oo"><td>数据库</td><td>A</td><td>期刊</td><td>3</td><td>TKDE</td><td>IEEE Transactions on Knowledge and Data Engineering</td><td>IEEE</td><td>https://dblp.org/db/journals/tkde/</td></tr>
<tr><td>数据库</td><td>A</td><td>期刊</td><td>4</td><td>VLDBJ</td><td>The VLDB Journal</td><td>Springer</td><td>https://dblp.org/db/journals/vldb/</td></tr>
<tr class="hd"><td>数据库</td><td>B</td><td>期刊</td><td>1</td><td>TKDD</td><td>ACM Transactions on Knowledge Discovery from Data</td><td>ACM</td><td>https://dblp.org/db/journals/tkdd/</td></tr>
<tr><td>数据库</td><td>B</td><td>期刊</td><td>2</td><td>TWEB</td><td>ACM Transactions on the Web</td><td>ACM</td><td>https://dblp.org/db/journals/tweb/</td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>期刊</td><td>3</td><td>AEI</td><td>Advanced Engineering Informatics</td><td>Elsevier</td><td>https://dblp.org/db/journals/aei/</td></tr>
<tr><td>数据库</td><td>B</td><td>期刊</td><td>4</td><td>DKE</td><td>Data and Knowledge Engineering</td><td>Elsevier</td><td>https://dblp.org/db/journals/dke/</td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>期刊</td><td>5</td><td>DMKD</td><td>Data Mining and Knowledge Discovery</td><td>Springer</td><td>https://dblp.org/db/journals/datamine/</td></tr>
<tr><td>数据库</td><td>B</td><td>期刊</td><td>6</td><td>EJIS</td><td>European Journal of Information Systems</td><td>Springer</td><td>https://dblp.org/db/journals/ejis/</td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>期刊</td><td>7</td><td></td><td>GeoInformatica</td><td>Springer</td><td>https://dblp.org/db/journals/geoinformatica/</td></tr>
<tr><td>数据库</td><td>B</td><td>期刊</td><td>8</td><td>IPM</td><td>Information Processing and Management</td><td>Elsevier</td><td>https://dblp.org/db/journals/ipm/</td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>期刊</td><td>9</td><td></td><td>Information Sciences</td><td>Elsevier</td><td>https://dblp.org/db/journals/isci/</td></tr>
<tr><td>数据库</td><td>B</td><td>期刊</td><td>10</td><td>IS</td><td>Information Systems</td><td>Elsevier</td><td>https://dblp.org/db/journals/is/</td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>期刊</td><td>11</td><td>JASIST</td><td>Journal of the American Society for Information Science and Technology</td><td>American Society for Information Science and Technology</td><td>https://dblp.org/db/journals/jasis/</td></tr>
<tr><td>数据库</td><td>B</td><td>期刊</td><td>12</td><td>JWS</td><td>Journal of Web Semantics</td><td>Elsevier</td><td>https://dblp.org/db/journals/ws/</td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>期刊</td><td>13</td><td>KAIS</td><td>Knowledge and Information Systems</td><td>Springer</td><td>https://dblp.org/db/journals/kais/</td></tr>
<tr class="hd"><td>数据库</td><td>C</td><td>期刊</td><td>1</td><td>DPD</td><td>Distributed and Parallel Databases</td><td>Springer</td><td>https://dblp.org/db/journals/dpd/</td></tr>
<tr><td>数据库</td><td>C</td><td>期刊</td><td>2</td><td>I&amp;M</td><td>Information and Management</td><td>Elsevier</td><td>https://dblp.org/db/journals/iam/</td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>期刊</td><td>3</td><td>IPL</td><td>Information Processing Letters</td><td>Elsevier</td><td>https://dblp.org/db/journals/ipl/</td></tr>
<tr><td>数据库</td><td>C</td><td>期刊</td><td>4</td><td>IR</td><td>Information Retrieval Journal</td><td>Springer</td><td>https://dblp.org/db/journals/ir/</td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>期刊</td><td>5</td><td>IJCIS</td><td>International Journal of Cooperative Information Systems</td><td>World Scientific</td><td>https://dblp.org/db/journals/ijcis/</td></tr>
<tr><td>数据库</td><td>C</td><td>期刊</td><td>6</td><td>IJGIS</td><td>International Journal of Geographical Information Science</td><td>Taylor &amp; Francis</td><td>https://dblp.org/db/journals/gis/</td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>期刊</td><td>7</td><td>IJIS</td><td>International Journal of Intelligent Systems</td><td>Wiley</td><td>https://dblp.org/db/journals/ijis/</td></tr>
<tr><td>数据库</td><td>C</td><td>期刊</td><td>8</td><td>IJKM</td><td>International Journal of Knowledge Management</td><td>IGI</td><td>https://dblp.org/db/journals/ijkm/</td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>期刊</td><td>9</td><td>IJSWIS</td><td>International Journal on Semantic Web and Information Systems</td><td>IGI</td><td>https://dblp.org/db/journals/ijswis/</td></tr>
<tr><td>数据库</td><td>C</td><td>期刊</td><td>10</td><td>JCIS</td><td>Journal of Computer Information Systems</td><td>IACIS</td><td>https://dblp.org/db/journals/jcis/</td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>期刊</td><td>11</td><td>JDM</td><td>Journal of Database Management</td><td>IGI-Global</td><td>https://dblp.org/db/journals/jdm/</td></tr>
<tr><td>数据库</td><td>C</td><td>期刊</td><td>12</td><td>JGITM</td><td>Journal of Global Information Technology Management</td><td>Ivy League Publishing</td><td>http://www.tandfonline.com/loi/ugit20#.Vnv35pN97rI</td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>期刊</td><td>13</td><td>JIIS</td><td>Journal of Intelligent Information Systems</td><td>Springer</td><td>https://dblp.org/db/journals/jiis/</td></tr>
<tr><td>数据库</td><td>C</td><td>期刊</td><td>14</td><td>JSIS</td><td>Journal of Strategic Information Systems</td><td>Elsevier</td><td>https://dblp.org/db/journals/jsis/</td></tr>
<tr class="hd"><td>数据库</td><td>A</td><td>会议</td><td>1</td><td>SIGMOD</td><td>ACM Conference on Management of Data</td><td>ACM</td><td>https://dblp.org/db/conf/sigmod/</td></tr>
<tr><td>数据库</td><td>A</td><td>会议</td><td>2</td><td>SIGKDD</td><td>ACM Knowledge Discovery and Data Mining</td><td>ACM</td><td>https://dblp.org/db/conf/kdd/</td></tr>
<tr class="oo"><td>数据库</td><td>A</td><td>会议</td><td>3</td><td>ICDE</td><td>IEEE International Conference on Data Engineering</td><td>IEEE</td><td>https://dblp.org/db/conf/icde/</td></tr>
<tr><td>数据库</td><td>A</td><td>会议</td><td>4</td><td>SIGIR</td><td>International Conference on Research on Development in Information Retrieval</td><td>ACM</td><td>https://dblp.org/db/conf/sigir/</td></tr>
<tr class="oo"><td>数据库</td><td>A</td><td>会议</td><td>5</td><td>VLDB</td><td>International Conference on Very Large Data Bases</td><td>Morgan Kaufmann/ACM</td><td>https://dblp.org/db/conf/vldb/</td></tr>
<tr class="hd"><td>数据库</td><td>B</td><td>会议</td><td>1</td><td>CIKM</td><td>ACM International Conference on Information and Knowledge Management</td><td>ACM</td><td>https://dblp.org/db/conf/cikm/</td></tr>
<tr><td>数据库</td><td>B</td><td>会议</td><td>2</td><td>WSDM</td><td>ACM International Conference on Web Search and Data Mining</td><td>ACM</td><td>https://dblp.org/db/conf/wsdm/</td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>会议</td><td>3</td><td>PODS</td><td>ACM Symposium on Principles of Database Systems</td><td>ACM</td><td>https://dblp.org/db/conf/pods/</td></tr>
<tr><td>数据库</td><td>B</td><td>会议</td><td>4</td><td>DASFAA</td><td>Database Systems for Advanced Applications</td><td>Springer</td><td>https://dblp.org/db/conf/dasfaa/</td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>会议</td><td>5</td><td>ECML-PKDD</td><td>European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases</td><td>Springer</td><td>https://dblp.org/db/conf/ecml/ https://dblp.org/db/conf/pkdd/</td></tr>
<tr><td>数据库</td><td>B</td><td>会议</td><td>6</td><td>ISWC</td><td>IEEE International Semantic Web Conference</td><td>IEEE</td><td>https://dblp.org/db/conf/semweb/</td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>会议</td><td>7</td><td>ICDM</td><td>International Conference on Data Mining</td><td>IEEE</td><td>https://dblp.org/db/conf/icdm/</td></tr>
<tr><td>数据库</td><td>B</td><td>会议</td><td>8</td><td>ICDT</td><td>International Conference on Database Theory</td><td>Springer</td><td>https://dblp.org/db/conf/icdt/</td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>会议</td><td>9</td><td>EDBT</td><td>International Conference on Extending DB Technology</td><td>Springer</td><td>https://dblp.org/db/conf/edbt/</td></tr>
<tr><td>数据库</td><td>B</td><td>会议</td><td>10</td><td>CIDR</td><td>International Conference on Innovative Data Systems Research</td><td>Online Proceeding</td><td>https://dblp.org/db/conf/cidr/</td></tr>
<tr class="oo"><td>数据库</td><td>B</td><td>会议</td><td>11</td><td>SDM</td><td>SIAM International Conference on Data Mining</td><td>SIAM</td><td>https://dblp.org/db/conf/sdm/</td></tr>
<tr class="hd"><td>数据库</td><td>C</td><td>会议</td><td>1</td><td>APWeb</td><td>Asia Pacific Web Conference</td><td>Springer</td><td>https://dblp.org/db/conf/apweb/</td></tr>
<tr><td>数据库</td><td>C</td><td>会议</td><td>2</td><td>DEXA</td><td>Database and Expert System Applications</td><td>Springer</td><td>https://dblp.org/db/conf/dexa/</td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>会议</td><td>3</td><td>ECIR</td><td>European Conference on IR Research</td><td>Springer</td><td>https://dblp.org/db/conf/ecir/</td></tr>
<tr><td>数据库</td><td>C</td><td>会议</td><td>4</td><td>ESWC</td><td>Extended Semantic Web Conference</td><td>Springer</td><td>https://dblp.org/db/conf/esws/</td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>会议</td><td>5</td><td>WebDB</td><td>International ACM Workshop on Web and Databases</td><td>ACM</td><td>https://dblp.org/db/conf/webdb/</td></tr>
<tr><td>数据库</td><td>C</td><td>会议</td><td>6</td><td>ER</td><td>International Conference on Conceptual Modeling</td><td>Springer</td><td>https://dblp.org/db/conf/er/</td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>会议</td><td>7</td><td>MDM</td><td>International Conference on Mobile Data Management</td><td>IEEE</td><td>https://dblp.org/db/conf/mdm/</td></tr>
<tr><td>数据库</td><td>C</td><td>会议</td><td>8</td><td>SSDBM</td><td>International Conference on Scientific and Statistical DB Management</td><td>IEEE</td><td>https://dblp.org/db/conf/ssdbm/</td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>会议</td><td>9</td><td>WAIM</td><td>International Conference on Web Age Information Management</td><td>Springer</td><td>https://dblp.org/db/conf/waim/</td></tr>
<tr><td>数据库</td><td>C</td><td>会议</td><td>10</td><td>SSTD</td><td>International Symposium on Spatial and Temporal Databases</td><td>Springer</td><td>https://dblp.org/db/conf/ssd/</td></tr>
<tr class="oo"><td>数据库</td><td>C</td><td>会议</td><td>11</td><td>PAKDD</td><td>Pacific-Asia Conference on Knowledge Discovery and Data Mining</td><td>Springer</td><td>https://dblp.org/db/conf/pakdd/</td></tr>
<tr><td>数据库</td><td>C</td><td>会议</td><td>12</td><td>WISE</td><td>Web Information Systems Engineering</td><td>Springer</td><td>https://dblp.org/db/conf/wise/</td></tr>
<tr class="hd"><td>理论</td><td>A</td><td>期刊</td><td>1</td><td>TIT</td><td>IEEE Transactions on Information Theory</td><td>IEEE</td><td>https://dblp.org/db/journals/tit/</td></tr>
<tr><td>理论</td><td>A</td><td>期刊</td><td>2</td><td>IANDC</td><td>Information and Computation</td><td>Elsevier</td><td>https://dblp.org/db/journals/iandc/</td></tr>
<tr class="oo"><td>理论</td><td>A</td><td>期刊</td><td>3</td><td>SICOMP</td><td>SIAM Journal on Computing</td><td>SIAM</td><td>https://dblp.org/db/journals/siamcomp/</td></tr>
<tr class="hd"><td>理论</td><td>B</td><td>期刊</td><td>1</td><td>TALG</td><td>ACM Transactions on Algorithms</td><td>ACM</td><td>https://dblp.org/db/journals/talg/</td></tr>
<tr><td>理论</td><td>B</td><td>期刊</td><td>2</td><td>TOCL</td><td>ACM Transactions on Computational Logic</td><td>ACM</td><td>https://dblp.org/db/journals/tocl/</td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>期刊</td><td>3</td><td>TOMS</td><td>ACM Transactions on Mathematical Software</td><td>ACM</td><td>https://dblp.org/db/journals/toms/</td></tr>
<tr><td>理论</td><td>B</td><td>期刊</td><td>4</td><td>Algorithmica</td><td>Algorithmica</td><td>Springer</td><td>https://dblp.org/db/journals/algorithmica/</td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>期刊</td><td>5</td><td>CC</td><td>Computational Complexity</td><td>Springer</td><td>https://dblp.org/db/journals/cc/</td></tr>
<tr><td>理论</td><td>B</td><td>期刊</td><td>6</td><td>FAC</td><td>Formal Aspects of Computing</td><td>Springer</td><td>https://dblp.org/db/journals/fac/</td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>期刊</td><td>7</td><td>FMSD</td><td>Formal Methods in System Design</td><td>Springer</td><td>https://dblp.org/db/journals/fmsd/</td></tr>
<tr><td>理论</td><td>B</td><td>期刊</td><td>8</td><td>INFORMS</td><td>INFORMS Journal on Computing</td><td>INFORMS</td><td>https://dblp.org/db/journals/informs/</td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>期刊</td><td>9</td><td>JCSS</td><td>Journal of Computer and System Sciences</td><td>Elsevier</td><td>https://dblp.org/db/journals/jcss/</td></tr>
<tr><td>理论</td><td>B</td><td>期刊</td><td>10</td><td>JGO</td><td>Journal of Global Optimization</td><td>Springer</td><td>https://dblp.org/db/journals/jgo/</td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>期刊</td><td>11</td><td>JSC</td><td>Journal of Symbolic Computation</td><td>Elsevier</td><td>https://dblp.org/db/journals/jsc/</td></tr>
<tr><td>理论</td><td>B</td><td>期刊</td><td>12</td><td>MSCS</td><td>Mathematical Structures in Computer Science</td><td>Cambridge University Press</td><td>https://dblp.org/db/journals/mscs/</td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>期刊</td><td>13</td><td>TCS</td><td>Theoretical Computer Science</td><td>Elsevier</td><td>https://dblp.org/db/journals/tcs/</td></tr>
<tr class="hd"><td>理论</td><td>C</td><td>期刊</td><td>1</td><td>ACTA</td><td>Acta Informatica</td><td>Springer</td><td>https://dblp.org/db/journals/acta/</td></tr>
<tr><td>理论</td><td>C</td><td>期刊</td><td>2</td><td>APAL</td><td>Annals of Pure and Applied Logic</td><td>Elsevier</td><td>https://dblp.org/db/journals/apal/</td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>期刊</td><td>3</td><td>DAM</td><td>Discrete Applied Mathematics</td><td>Elsevier</td><td>https://dblp.org/db/journals/dam/</td></tr>
<tr><td>理论</td><td>C</td><td>期刊</td><td>4</td><td>FUIN</td><td>Fundamenta Informaticae</td><td>IOS Press</td><td>https://dblp.org/db/journals/fuin/</td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>期刊</td><td>5</td><td>LISP</td><td>Higher-Order and Symbolic Computation</td><td>Springer</td><td>https://dblp.org/db/journals/lisp/</td></tr>
<tr><td>理论</td><td>C</td><td>期刊</td><td>6</td><td>IPL</td><td>Information Processing Letters</td><td>Elsevier</td><td>https://dblp.org/db/journals/ipl/</td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>期刊</td><td>7</td><td>JCOMPLEXITY</td><td>Journal of Complexity</td><td>Elsevier</td><td>https://dblp.org/db/journals/jc/</td></tr>
<tr><td>理论</td><td>C</td><td>期刊</td><td>8</td><td>LOGCOM</td><td>Journal of Logic and Computation</td><td>Oxford University Press</td><td>https://dblp.org/db/journals/logcom/</td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>期刊</td><td>9</td><td>JSL</td><td>Journal of Symbolic Logic</td><td>Association for Symbolic Logic</td><td>https://dblp.org/db/journals/jsyml/</td></tr>
<tr><td>理论</td><td>C</td><td>期刊</td><td>10</td><td>LMCS</td><td>Logical Methods in Computer Science</td><td>LMCS</td><td>https://dblp.org/db/journals/lmcs/</td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>期刊</td><td>11</td><td>SIDMA</td><td>SIAM Journal on Discrete Mathematics</td><td>SIAM</td><td>https://dblp.org/db/journals/siamdm/</td></tr>
<tr><td>理论</td><td>C</td><td>期刊</td><td>12</td><td></td><td>Theory of Computing Systems</td><td>Springer</td><td>https://dblp.org/db/journals/mst/</td></tr>
<tr class="hd"><td>理论</td><td>A</td><td>会议</td><td>1</td><td>STOC</td><td>ACM Symposium on the Theory of Computing</td><td>ACM</td><td>https://dblp.org/db/conf/stoc/</td></tr>
<tr><td>理论</td><td>A</td><td>会议</td><td>2</td><td>SODA</td><td>ACM-SIAM Symposium on Discrete Algorithms</td><td>SIAM</td><td>https://dblp.org/db/conf/soda/</td></tr>
<tr class="oo"><td>理论</td><td>A</td><td>会议</td><td>3</td><td>CAV</td><td>Computer Aided Verification</td><td>Springer</td><td>https://dblp.org/db/conf/cav/</td></tr>
<tr><td>理论</td><td>A</td><td>会议</td><td>4</td><td>FOCS</td><td>IEEE Annual Symposium on Foundations of Computer Science</td><td>IEEE</td><td>https://dblp.org/db/conf/focs/</td></tr>
<tr class="oo"><td>理论</td><td>A</td><td>会议</td><td>5</td><td>LICS</td><td>IEEE Symposium on Logic in Computer Science</td><td>IEEE</td><td>https://dblp.org/db/conf/lics/</td></tr>
<tr class="hd"><td>理论</td><td>B</td><td>会议</td><td>1</td><td>SoCG</td><td>ACM Symposium on Computational Geometry</td><td>ACM</td><td>https://dblp.org/db/conf/compgeom/</td></tr>
<tr><td>理论</td><td>B</td><td>会议</td><td>2</td><td>ESA</td><td>European Symposium on Algorithms</td><td>Springer</td><td>https://dblp.org/db/conf/esa/</td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>会议</td><td>3</td><td>CCC</td><td>IEEE Conference on Computational Complexity</td><td>IEEE</td><td>https://dblp.org/db/conf/coco/</td></tr>
<tr><td>理论</td><td>B</td><td>会议</td><td>4</td><td>ICALP</td><td>International Colloquium on Automata, Languages and Programming</td><td>Springer</td><td>https://dblp.org/db/conf/icalp/</td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>会议</td><td>5</td><td>CADE/IJCAR</td><td>International Conference on Automated Deduction/International Joint Conference on Automated Reasoning</td><td>Springer</td><td>https://dblp.org/db/conf/cade/</td></tr>
<tr><td>理论</td><td>B</td><td>会议</td><td>6</td><td>CONCUR</td><td>International Conference on Concurrency Theory</td><td>Springer</td><td>https://dblp.org/db/conf/concur/</td></tr>
<tr class="oo"><td>理论</td><td>B</td><td>会议</td><td>7</td><td>HSCC</td><td>International Conference on Hybrid Systems: Computation and Control</td><td>Springer and ACM</td><td>https://dblp.org/db/conf/hybrid/</td></tr>
<tr><td>理论</td><td>B</td><td>会议</td><td>8</td><td>SAT</td><td>Theory and Applications of Satisfiability Testing</td><td>Springer</td><td>https://dblp.org/db/conf/sat/</td></tr>
<tr class="hd"><td>理论</td><td>C</td><td>会议</td><td>1</td><td>CSL</td><td>Computer Science Logic</td><td>Springer</td><td>https://dblp.org/db/conf/csl/</td></tr>
<tr><td>理论</td><td>C</td><td>会议</td><td>2</td><td>FMCAD</td><td>Formal Methods in Computer-Aided Design</td><td>ACM</td><td>https://dblp.org/db/conf/fmcad/</td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>会议</td><td>3</td><td>FSTTCS</td><td>Foundations of Software Technology and Theoretical Computer Science</td><td>Indian Association for Research in Computing Science</td><td>https://dblp.org/db/conf/fsttcs/</td></tr>
<tr><td>理论</td><td>C</td><td>会议</td><td>4</td><td>DSAA</td><td>IEEE International Conference on Data Science and Advanced Analytics</td><td>IEEE</td><td>https://dblp.org/db/conf/dsaa/</td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>会议</td><td>5</td><td>ICTAC</td><td>International Colloquium on Theoretical Aspects of Computing</td><td>Springer</td><td>https://dblp.org/db/conf/ictac/</td></tr>
<tr><td>理论</td><td>C</td><td>会议</td><td>6</td><td>IPCO</td><td>International Conference on Integer Programming and Combinatorial Optimization</td><td>Springer</td><td>https://dblp.org/db/conf/ipco/</td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>会议</td><td>7</td><td>RTA</td><td>International Conference on Rewriting Techniques and Applications</td><td>Springer</td><td>https://dblp.org/db/conf/rta/</td></tr>
<tr><td>理论</td><td>C</td><td>会议</td><td>8</td><td>ISAAC</td><td>International Symposium on Algorithms and Computation</td><td>Springer</td><td>https://dblp.org/db/conf/isaac/</td></tr>
<tr class="oo"><td>理论</td><td>C</td><td>会议</td><td>9</td><td>MFCS</td><td>Mathematical Foundations of Computer Science</td><td>Springer</td><td>https://dblp.org/db/conf/mfcs/</td></tr>
<tr><td>理论</td><td>C</td><td>会议</td><td>10</td><td>STACS</td><td>Symposium on Theoretical Aspects of Computer Science</td><td>Springer</td><td>https://dblp.org/db/conf/stacs/</td></tr>
<tr class="hd"><td>多媒体</td><td>A</td><td>期刊</td><td>1</td><td>TOG</td><td>ACM Transactions on Graphics</td><td>ACM</td><td>https://dblp.org/db/journals/tog/</td></tr>
<tr><td>多媒体</td><td>A</td><td>期刊</td><td>2</td><td>TIP</td><td>IEEE Transactions on Image Processing</td><td>IEEE</td><td>https://dblp.org/db/journals/tip/</td></tr>
<tr class="oo"><td>多媒体</td><td>A</td><td>期刊</td><td>3</td><td>TVCG</td><td>IEEE Transactions on Visualization and Computer Graphics</td><td>IEEE</td><td>https://dblp.org/db/journals/tvcg/</td></tr>
<tr class="hd"><td>多媒体</td><td>B</td><td>期刊</td><td>1</td><td>TOMCCAP</td><td>ACM Transactions on Multimedia Computing, Communications and Application</td><td>ACM</td><td>https://dblp.org/db/journals/tomccap/</td></tr>
<tr><td>多媒体</td><td>B</td><td>期刊</td><td>2</td><td>CAGD</td><td>Computer Aided Geometric Design</td><td>Elsevier</td><td>https://dblp.org/db/journals/cagd/</td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>期刊</td><td>3</td><td>CGF</td><td>Computer Graphics Forum</td><td>Wiley</td><td>https://dblp.org/db/journals/cgf/</td></tr>
<tr><td>多媒体</td><td>B</td><td>期刊</td><td>4</td><td>CAD</td><td>Computer-Aided Design</td><td>Elsevier</td><td>https://dblp.org/db/journals/cad/</td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>期刊</td><td>5</td><td>GM</td><td>Graphical Models</td><td>Elsevier</td><td>https://dblp.org/db/journals/cvgip/</td></tr>
<tr><td>多媒体</td><td>B</td><td>期刊</td><td>6</td><td>TCSVT</td><td>IEEE Transactions on Circuits and Systems for Video Technology</td><td>IEEE</td><td>https://dblp.org/db/journals/tcsv/</td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>期刊</td><td>7</td><td>TMM</td><td>IEEE Transactions on Multimedia</td><td>IEEE</td><td>https://dblp.org/db/journals/tmm/</td></tr>
<tr><td>多媒体</td><td>B</td><td>期刊</td><td>8</td><td>JASA</td><td>Journal of The Acoustical Society of America</td><td>AIP</td><td>http://scitation.aip.org/content/asa/journal/jasa</td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>期刊</td><td>9</td><td>SIIMS</td><td>SIAM Journal on Imaging Sciences</td><td>SIAM</td><td>https://dblp.org/db/journals/siamis/</td></tr>
<tr><td>多媒体</td><td>B</td><td>期刊</td><td>10</td><td>Speech Com</td><td>Speech Communication</td><td>Elsevier</td><td>https://dblp.org/db/journals/speech/</td></tr>
<tr class="hd"><td>多媒体</td><td>C</td><td>期刊</td><td>1</td><td>CGTA</td><td>Computational Geometry: Theory and Applications</td><td>Elsevier</td><td>https://dblp.org/db/journals/comgeo/</td></tr>
<tr><td>多媒体</td><td>C</td><td>期刊</td><td>2</td><td>CAVW</td><td>Computer Animation and Virtual Worlds</td><td>Wiley</td><td>http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)1546 -427X</td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>期刊</td><td>3</td><td>C&amp;G</td><td>Computers &amp; Graphics</td><td>Elsevier</td><td>https://dblp.org/db/journals/cg/</td></tr>
<tr><td>多媒体</td><td>C</td><td>期刊</td><td>4</td><td>DCG</td><td>Discrete &amp; Computational Geometry</td><td>Springer</td><td>https://dblp.org/db/journals/dcg/</td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>期刊</td><td>5</td><td>SPL</td><td>IEEE Signal Processing Letters</td><td>IEEE</td><td>https://dblp.org/db/journals/spl/</td></tr>
<tr><td>多媒体</td><td>C</td><td>期刊</td><td>6</td><td>IET-IPR</td><td>IET Image Processing</td><td>IET</td><td>https://dblp.org/db/journals/iet-ipr/</td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>期刊</td><td>7</td><td>JVCIR</td><td>Journal of Visual Communication and Image Representation</td><td>Elsevier</td><td>https://dblp.org/db/journals/jvcir/</td></tr>
<tr><td>多媒体</td><td>C</td><td>期刊</td><td>8</td><td>MS</td><td>Multimedia Systems</td><td>Springer</td><td>https://dblp.org/db/journals/mms/</td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>期刊</td><td>9</td><td>MTA</td><td>Multimedia Tools and Applications</td><td>Springer</td><td>https://dblp.org/db/journals/mta/</td></tr>
<tr><td>多媒体</td><td>C</td><td>期刊</td><td>10</td><td></td><td>Signal Processing</td><td>Elsevier</td><td>https://dblp.org/db/journals/sigpro/</td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>期刊</td><td>11</td><td>SPIC</td><td>Signal Processing: Image Communication</td><td>Elsevier</td><td>https://dblp.org/db/journals/spic/</td></tr>
<tr><td>多媒体</td><td>C</td><td>期刊</td><td>12</td><td>TVC</td><td>The Visual Computer</td><td>Springer</td><td>https://dblp.org/db/journals/vc/</td></tr>
<tr class="hd"><td>多媒体</td><td>A</td><td>会议</td><td>1</td><td>ACM MM</td><td>ACM International Conference on Multimedia</td><td>ACM</td><td>https://dblp.org/db/conf/mm/</td></tr>
<tr><td>多媒体</td><td>A</td><td>会议</td><td>2</td><td>SIGGRAPH</td><td>ACM SIGGRAPH Annual Conference</td><td>ACM</td><td>https://dblp.org/db/conf/siggraph/</td></tr>
<tr class="oo"><td>多媒体</td><td>A</td><td>会议</td><td>3</td><td>VR</td><td>IEEE Virtual Reality</td><td>IEEE</td><td>https://dblp.org/db/conf/vr/</td></tr>
<tr><td>多媒体</td><td>A</td><td>会议</td><td>4</td><td>IEEE VIS</td><td>IEEE Visualization Conference</td><td>IEEE</td><td>https://dblp.org/db/conf/visualization/</td></tr>
<tr class="hd"><td>多媒体</td><td>B</td><td>会议</td><td>1</td><td>ICMR</td><td>ACM SIGMM International Conference on Multimedia Retrieval</td><td>ACM</td><td>https://dblp.org/db/conf/mir/</td></tr>
<tr><td>多媒体</td><td>B</td><td>会议</td><td>2</td><td>SI3D</td><td>ACM Symposium on Interactive 3D Graphics</td><td>ACM</td><td>https://dblp.org/db/conf/si3d/</td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>会议</td><td>3</td><td>SCA</td><td>ACM/Eurographics Symposium on Computer Animation</td><td>ACM</td><td>https://dblp.org/db/conf/sca/</td></tr>
<tr><td>多媒体</td><td>B</td><td>会议</td><td>4</td><td>DCC</td><td>Data Compression Conference</td><td>IEEE</td><td>https://dblp.org/db/conf/dcc/</td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>会议</td><td>5</td><td>EG</td><td>Eurographics</td><td>Wiley/ Blackwell</td><td>https://dblp.org/db/conf/eurographics/</td></tr>
<tr><td>多媒体</td><td>B</td><td>会议</td><td>6</td><td>EuroVis</td><td>Eurographics Conference on Visualization</td><td>ACM</td><td>https://dblp.org/db/conf/vissym/</td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>会议</td><td>7</td><td>SGP</td><td>Eurographics Symposium on Geometry Processing</td><td>Wiley/Blackwell</td><td>https://dblp.org/db/conf/sgp/</td></tr>
<tr><td>多媒体</td><td>B</td><td>会议</td><td>8</td><td>EGSR</td><td>Eurographics Symposium on Rendering</td><td>Wiley/Blackwell</td><td>https://dblp.org/db/conf/rt/</td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>会议</td><td>9</td><td>ICASSP</td><td>IEEE International Conference on Acoustics, Speech and SP</td><td>IEEE</td><td>https://dblp.org/db/conf/icassp/</td></tr>
<tr><td>多媒体</td><td>B</td><td>会议</td><td>10</td><td>ICME</td><td>IEEE International Conference on Multimedia &amp; Expo</td><td>IEEE</td><td>https://dblp.org/db/conf/icmcs/</td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>会议</td><td>11</td><td>ISMAR</td><td>International Symposium on Mixed and Augmented Reality</td><td>IEEE/ACM</td><td>https://dblp.org/db/conf/ismar/</td></tr>
<tr><td>多媒体</td><td>B</td><td>会议</td><td>12</td><td>PG</td><td>Pacific Graphics: The Pacific Conference on Computer Graphics and Applications</td><td>Wiley/Blackwell</td><td>https://dblp.org/db/conf/pg/</td></tr>
<tr class="oo"><td>多媒体</td><td>B</td><td>会议</td><td>13</td><td>SPM</td><td>Symposium on Solid and Physical Modeling</td><td>SMA/Elsevier</td><td>https://dblp.org/db/conf/sma/</td></tr>
<tr class="hd"><td>多媒体</td><td>C</td><td>会议</td><td>1</td><td></td><td>ACM Symposium on Virtual Reality Software and Technology</td><td>ACM</td><td>https://dblp.org/db/conf/vrst/</td></tr>
<tr><td>多媒体</td><td>C</td><td>会议</td><td>2</td><td>CASA</td><td>Computer Animation and Social Agents</td><td>Wiley</td><td>https://dblp.org/db/conf/ca/</td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>会议</td><td>3</td><td>CGI</td><td>Computer Graphics International</td><td>Springer</td><td>https://dblp.org/db/conf/cgi/</td></tr>
<tr><td>多媒体</td><td>C</td><td>会议</td><td>4</td><td>INTERSPEECH</td><td>Conference of the International Speech Communication Association</td><td></td><td>https://dblp.org/db/conf/interspeech/</td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>会议</td><td>5</td><td>GMP</td><td>Geometric Modeling and Processing</td><td>Elsevier</td><td>https://dblp.org/db/conf/gmp/</td></tr>
<tr><td>多媒体</td><td>C</td><td>会议</td><td>6</td><td>PacificVis</td><td>IEEE Pacific Visualization Symposium</td><td>IEEE</td><td>https://dblp.org/db/conf/apvis/</td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>会议</td><td>7</td><td>3DV</td><td>International Conference on 3D Vision</td><td>IEEE</td><td>https://dblp.org/db/conf/3dim/</td></tr>
<tr><td>多媒体</td><td>C</td><td>会议</td><td>8</td><td>CAD/Graphics</td><td>International Conference on Computer-Aided Design and Computer Graphics</td><td>IEEE</td><td>https://dblp.org/db/conf/cadgraphics/</td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>会议</td><td>9</td><td>ICIP</td><td>International Conference on Image Processing</td><td>IEEE</td><td>https://dblp.org/db/conf/icip/</td></tr>
<tr><td>多媒体</td><td>C</td><td>会议</td><td>10</td><td>MMM</td><td>International Conference on Multimedia Modeling</td><td>Springer</td><td>https://dblp.org/db/conf/mmm/</td></tr>
<tr class="oo"><td>多媒体</td><td>C</td><td>会议</td><td>11</td><td>PCM</td><td>Pacific-Rim Conference on Multimedia</td><td>Springer</td><td>https://dblp.org/db/conf/pcm/</td></tr>
<tr><td>多媒体</td><td>C</td><td>会议</td><td>12</td><td>SMI</td><td>Shape Modeling International</td><td>IEEE</td><td>https://dblp.org/db/conf/smi/</td></tr>
<tr class="hd"><td>AI</td><td>A</td><td>期刊</td><td>1</td><td>AI</td><td>Artificial Intelligence</td><td>Elsevier</td><td>https://dblp.org/db/journals/ai/</td></tr>
<tr><td>AI</td><td>A</td><td>期刊</td><td>2</td><td>TPAMI</td><td>IEEE Trans on Pattern Analysis and Machine Intelligence</td><td>IEEE</td><td>https://dblp.org/db/journals/pami/</td></tr>
<tr class="oo"><td>AI</td><td>A</td><td>期刊</td><td>3</td><td>IJCV</td><td>International Journal of Computer Vision</td><td>Springer</td><td>https://dblp.org/db/journals/ijcv/</td></tr>
<tr><td>AI</td><td>A</td><td>期刊</td><td>4</td><td>JMLR</td><td>Journal of Machine Learning Research</td><td>MIT Press</td><td>https://dblp.org/db/journals/jmlr/</td></tr>
<tr class="hd"><td>AI</td><td>B</td><td>期刊</td><td>1</td><td>TAP</td><td>ACM Transactions on Applied Perception</td><td>ACM</td><td>https://dblp.org/db/journals/tap/</td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>2</td><td>TSLP</td><td>ACM Transactions on Speech and Language Processing</td><td>ACM</td><td>https://dblp.org/db/journals/tslp/</td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>3</td><td>AAMAS</td><td>Autonomous Agents and Multi-Agent Systems</td><td>Springer</td><td>https://dblp.org/db/journals/aamas/</td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>4</td><td></td><td>Computational Linguistics</td><td>MIT Press</td><td>https://dblp.org/db/journals/coling/</td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>5</td><td>CVIU</td><td>Computer Vision and Image Understanding</td><td>Elsevier</td><td>https://dblp.org/db/journals/cviu/</td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>6</td><td>DKE</td><td>Data and Knowledge Engineering</td><td>Elsevier</td><td>https://dblp.org/db/journals/dke/</td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>7</td><td></td><td>Evolutionary Computation</td><td>MIT Press</td><td>https://dblp.org/db/journals/ec/</td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>8</td><td>TAC</td><td>IEEE Transactions on Affective Computing</td><td>IEEE</td><td>https://dblp.org/db/journals/taffco/</td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>9</td><td>TASLP</td><td>IEEE Transactions on Audio, Speech, and Language Processing</td><td>IEEE</td><td>https://dblp.org/db/journals/taslp/</td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>10</td><td></td><td>IEEE Transactions on Cybernetics</td><td>IEEE</td><td>https://dblp.org/db/journals/tcyb/</td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>11</td><td>TEC</td><td>IEEE Transactions on Evolutionary Computation</td><td>IEEE</td><td>https://dblp.org/db/journals/tec/</td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>12</td><td>TFS</td><td>IEEE Transactions on Fuzzy Systems</td><td>IEEE</td><td>https://dblp.org/db/journals/tfs/</td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>13</td><td>TNNLS</td><td>IEEE Transactions on Neural Networks and learning systems</td><td>IEEE</td><td>https://dblp.org/db/journals/tnn/</td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>14</td><td>IJAR</td><td>International Journal of Approximate Reasoning</td><td>Elsevier</td><td>https://dblp.org/db/journals/ijar/</td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>15</td><td>JAIR</td><td>Journal of Artificial Intelligence Research</td><td>AAAI</td><td>https://dblp.org/db/journals/jair/</td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>16</td><td></td><td>Journal of Automated Reasoning</td><td>Springer</td><td>https://dblp.org/db/journals/jar/</td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>17</td><td>JSLHR</td><td>Journal of Speech, Language, and Hearing Research</td><td>American Speech- Language Hearing Association</td><td>http://jslhr.pubs.asha.org/</td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>18</td><td></td><td>Machine Learning</td><td>Springer</td><td>https://dblp.org/db/journals/ml/</td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>19</td><td></td><td>Neural Computation</td><td>MIT Press</td><td>https://dblp.org/db/journals/neco/</td></tr>
<tr><td>AI</td><td>B</td><td>期刊</td><td>20</td><td></td><td>Neural Networks</td><td>Elsevier</td><td>https://dblp.org/db/journals/nn/</td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>期刊</td><td>21</td><td>PR</td><td>Pattern Recognition</td><td>Elsevier</td><td>https://dblp.org/db/conf/par/</td></tr>
<tr class="hd"><td>AI</td><td>C</td><td>期刊</td><td>1</td><td>TALLIP</td><td>ACM Transactions on Asian and Low- Resource Language Information Processing</td><td>ACM</td><td>https://dblp.org/db/journals/talip/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>2</td><td></td><td>Applied Intelligence</td><td>Springer</td><td>https://dblp.org/db/journals/apin/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>3</td><td>AIM</td><td>Artificial Intelligence in Medicine</td><td>Elsevier</td><td>https://dblp.org/db/journals/artmed/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>4</td><td></td><td>Artificial Life</td><td>MIT Press</td><td>https://dblp.org/db/journals/alife/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>5</td><td></td><td>Computational Intelligence</td><td>Wiley</td><td>https://dblp.org/db/journals/ci/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>6</td><td></td><td>Computer Speech and Language</td><td>Elsevier</td><td>https://dblp.org/db/journals/csl/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>7</td><td></td><td>Connection Science</td><td>Taylor &amp; Francis</td><td>https://dblp.org/db/journals/connection/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>8</td><td>DSS</td><td>Decision Support Systems</td><td>Elsevier</td><td>https://dblp.org/db/journals/dss/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>9</td><td>EAAI</td><td>Engineering Applications of Artificial Intelligence</td><td>Elsevier</td><td>https://dblp.org/db/journals/eaai/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>10</td><td></td><td>Expert Systems</td><td>Blackwell/Wiley</td><td>https://dblp.org/db/journals/es/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>11</td><td>ESWA</td><td>Expert Systems with Applications</td><td>Elsevier</td><td>https://dblp.org/db/journals/eswa/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>12</td><td></td><td>Fuzzy Sets and Systems</td><td>Elsevier</td><td>https://dblp.org/db/journals/fss/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>13</td><td>TG</td><td>IEEE Transactions on Games</td><td>IEEE</td><td>https://dblp.org/db/journals/tciaig/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>14</td><td>IET-CVI</td><td>IET Computer Vision</td><td>IET</td><td>http://digital-library.theiet.org/content/journals/iet-cvi</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>15</td><td></td><td>IET Signal Processing</td><td>IET</td><td>* http://digital-library.theiet.org/content/journals/iet-spr</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>16</td><td>IVC</td><td>Image and Vision Computing</td><td>Elsevier</td><td>https://dblp.org/db/journals/ivc/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>17</td><td>IDA</td><td>Intelligent Data Analysis</td><td>IOS Press</td><td>https://dblp.org/db/journals/ida/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>18</td><td>IJCIA</td><td>International Journal of Computational Intelligence and Applications</td><td>World Scientific</td><td>https://dblp.org/db/journals/ijcia/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>19</td><td>IJIS</td><td>International Journal of Intelligent Systems</td><td>Wiley</td><td>https://dblp.org/db/journals/ijis/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>20</td><td>IJNS</td><td>International Journal of Neural Systems</td><td>World Scientific</td><td>https://dblp.org/db/journals/ijns/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>21</td><td>IJPRAI</td><td>International Journal of Pattern Recognition and Artificial Intelligence</td><td>World Scientific</td><td>https://dblp.org/db/journals/ijprai/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>22</td><td>IJUFKS</td><td>International Journal of Uncertainty, Fuzziness and Knowledge-Based System</td><td>World Scientific</td><td>https://dblp.org/db/journals/ijufks/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>23</td><td>IJDAR</td><td>International Journal on Document Analysis and Recognition</td><td>Springer</td><td>https://dblp.org/db/journals/ijdar/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>24</td><td>JETAI</td><td>Journal of Experimental and Theoretical Artificial Intelligence</td><td>Taylor &amp; Francis</td><td>https://dblp.org/db/journals/jetai/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>25</td><td>KBS</td><td>Knowledge-Based Systems</td><td>Elsevier</td><td>https://dblp.org/db/journals/kbs/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>26</td><td></td><td>Machine Translation</td><td>Springer</td><td>https://dblp.org/db/journals/mt/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>27</td><td></td><td>Machine Vision and Applications</td><td>Springer</td><td>https://dblp.org/db/journals/mva/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>28</td><td></td><td>Natural Computing</td><td>Springer</td><td>https://dblp.org/db/journals/nc/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>29</td><td>NLE</td><td>Natural Language Engineering</td><td>Cambridge University Press</td><td>https://dblp.org/db/journals/nle/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>30</td><td>NCA</td><td>Neural Computing &amp; Applications</td><td>Springer</td><td>https://dblp.org/db/journals/nca/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>31</td><td>NPL</td><td>Neural Processing Letters</td><td>Springer</td><td>https://dblp.org/db/journals/npl/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>32</td><td></td><td>Neurocomputing</td><td>Elsevier</td><td>https://dblp.org/db/journals/ijon/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>33</td><td>PAA</td><td>Pattern Analysis and Applications</td><td>Springer</td><td>https://dblp.org/db/journals/paa/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>34</td><td>PRL</td><td>Pattern Recognition Letters</td><td>Elsevier</td><td>https://dblp.org/db/journals/prl/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>期刊</td><td>35</td><td></td><td>Soft Computing</td><td>Springer</td><td>https://dblp.org/db/journals/soco/</td></tr>
<tr><td>AI</td><td>C</td><td>期刊</td><td>36</td><td>WI</td><td>Web Intelligence</td><td>IOS Press</td><td>https://dblp.org/db/journals/wias/</td></tr>
<tr class="hd"><td>AI</td><td>A</td><td>会议</td><td>1</td><td>AAAI</td><td>AAAI Conference on Artificial Intelligence</td><td>AAAI</td><td>https://dblp.org/db/conf/aaai/</td></tr>
<tr><td>AI</td><td>A</td><td>会议</td><td>2</td><td>NeurIPS</td><td>Annual Conference on Neural Information Processing Systems</td><td>MIT Press</td><td>https://dblp.org/db/conf/nips/</td></tr>
<tr class="oo"><td>AI</td><td>A</td><td>会议</td><td>3</td><td>ACL</td><td>Annual Meeting of the Association for Computational Linguistics</td><td>ACL</td><td>https://dblp.org/db/conf/acl/</td></tr>
<tr><td>AI</td><td>A</td><td>会议</td><td>4</td><td>CVPR</td><td>IEEE Conference on Computer Vision and Pattern Recognition</td><td>IEEE</td><td>https://dblp.org/db/conf/cvpr/</td></tr>
<tr class="oo"><td>AI</td><td>A</td><td>会议</td><td>5</td><td>ICCV</td><td>International Conference on Computer Vision</td><td>IEEE</td><td>https://dblp.org/db/conf/iccv/</td></tr>
<tr><td>AI</td><td>A</td><td>会议</td><td>6</td><td>ICML</td><td>International Conference on Machine Learning</td><td>ACM</td><td>https://dblp.org/db/conf/icml/</td></tr>
<tr class="oo"><td>AI</td><td>A</td><td>会议</td><td>7</td><td>IJCAI</td><td>International Joint Conference on Artificial Intelligence</td><td>Morgan Kaufmann</td><td>https://dblp.org/db/conf/ijcai/</td></tr>
<tr class="hd"><td>AI</td><td>B</td><td>会议</td><td>1</td><td>COLT</td><td>Annual Conference on Computational Learning Theory</td><td>Springer</td><td>https://dblp.org/db/conf/colt/</td></tr>
<tr><td>AI</td><td>B</td><td>会议</td><td>2</td><td>EMNLP</td><td>Conference on Empirical Methods in Natural Language Processing</td><td>ACL</td><td>https://dblp.org/db/conf/emnlp/</td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>会议</td><td>3</td><td>ECAI</td><td>European Conference on Artificial Intelligence</td><td>IOS Press</td><td>https://dblp.org/db/conf/ecai/</td></tr>
<tr><td>AI</td><td>B</td><td>会议</td><td>4</td><td>ECCV</td><td>European Conference on Computer Vision</td><td>Springer</td><td>https://dblp.org/db/conf/eccv/</td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>会议</td><td>5</td><td>ICRA</td><td>IEEE International Conference on Robotics and Automation</td><td>IEEE</td><td>https://dblp.org/db/conf/icra/</td></tr>
<tr><td>AI</td><td>B</td><td>会议</td><td>6</td><td>ICAPS</td><td>International Conference on Automated Planning and Scheduling</td><td>AAAI</td><td>https://dblp.org/db/conf/aips/</td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>会议</td><td>7</td><td>ICCBR</td><td>International Conference on Case-Based Reasoning and Development</td><td>Springer</td><td>https://dblp.org/db/conf/iccbr/</td></tr>
<tr><td>AI</td><td>B</td><td>会议</td><td>8</td><td>COLING</td><td>International Conference on Computational Linguistics</td><td>ACM</td><td>https://dblp.org/db/conf/coling/</td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>会议</td><td>9</td><td>KR</td><td>International Conference on Principles of Knowledge Representation and Reasoning</td><td>Morgan Kaufmann</td><td>https://dblp.org/db/conf/kr/</td></tr>
<tr><td>AI</td><td>B</td><td>会议</td><td>10</td><td>UAI</td><td>International Conference on Uncertainty in Artificial Intelligence</td><td>AUAI</td><td>https://dblp.org/db/conf/uai/</td></tr>
<tr class="oo"><td>AI</td><td>B</td><td>会议</td><td>11</td><td>AAMAS</td><td>International Joint Conference on Autonomous Agents and Multiagent Systems</td><td>Springer</td><td>https://dblp.org/db/conf/atal/</td></tr>
<tr><td>AI</td><td>B</td><td>会议</td><td>12</td><td>PPSN</td><td>Parallel Problem Solving from Nature</td><td>Springer</td><td>https://dblp.org/db/conf/ppsn/</td></tr>
<tr class="hd"><td>AI</td><td>C</td><td>会议</td><td>1</td><td>AISTATS</td><td>Artificial Intelligence and Statistics</td><td>JMLR</td><td>https://dblp.org/db/conf/aistats/</td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>2</td><td>ACCV</td><td>Asian Conference on Computer Vision</td><td>Springer</td><td>https://dblp.org/db/conf/accv/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>3</td><td>ACML</td><td>Asian Conference on Machine Learning</td><td>JMLR</td><td>https://dblp.org/db/conf/acml/</td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>4</td><td>BMVC</td><td>British Machine Vision Conference</td><td>British Machine Vision Association</td><td>https://dblp.org/db/conf/bmvc/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>5</td><td>NLPCC</td><td>CCF International Conference on Natural Language Processing and Chinese Computing</td><td>Springer</td><td>https://dblp.org/db/conf/nlpcc/</td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>6</td><td>CoNLL</td><td>Conference on Computational Natural Language Learning</td><td>Association for Computational Linguistics</td><td>https://dblp.org/db/conf/conll/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>7</td><td>GECCO</td><td>Genetic and Evolutionary Computation Conference</td><td>ACM</td><td>https://dblp.org/db/conf/gecco/</td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>8</td><td>ICTAI</td><td>IEEE International Conference on Tools with Artificial Intelligence</td><td>IEEE</td><td>https://dblp.org/db/conf/ictai/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>9</td><td>IROS</td><td>IEEE\RSJ International Conference on Intelligent Robots and Systems</td><td>IEEE</td><td>https://dblp.org/db/conf/iros/</td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>10</td><td>ALT</td><td>International Conference on Algorithmic Learning Theory</td><td>Springer</td><td>https://dblp.org/db/conf/alt/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>11</td><td>ICANN</td><td>International Conference on Artificial Neural Networks</td><td>Springer</td><td>https://dblp.org/db/conf/icann/</td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>12</td><td>FG</td><td>International Conference on Automatic Face and Gesture Recognition</td><td>IEEE</td><td>https://dblp.org/db/conf/fgr/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>13</td><td>ICDAR</td><td>International Conference on Document Analysis and Recognition</td><td>IEEE</td><td>https://dblp.org/db/conf/icdar/</td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>14</td><td>ILP</td><td>International Conference on Inductive Logic Programming</td><td>Springer</td><td>https://dblp.org/db/conf/ilp/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>15</td><td>KSEM</td><td>International conference on Knowledge Science, Engineering and Management</td><td>Springer</td><td>https://dblp.org/db/conf/ksem/</td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>16</td><td>ICONIP</td><td>International Conference on Neural Information Processing</td><td>Springer</td><td>https://dblp.org/db/conf/iconip/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>17</td><td>ICPR</td><td>International Conference on Pattern Recognition</td><td>IEEE</td><td>https://dblp.org/db/conf/icpr/</td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>18</td><td>ICB</td><td>International Joint Conference on Biometrics</td><td>IEEE</td><td>https://dblp.org/db/conf/icb/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>19</td><td>IJCNN</td><td>International Joint Conference on Neural Networks</td><td>IEEE</td><td>https://dblp.org/db/conf/ijcnn/</td></tr>
<tr><td>AI</td><td>C</td><td>会议</td><td>20</td><td>PRICAI</td><td>Pacific Rim International Conference on Artificial Intelligence</td><td>Springer</td><td>https://dblp.org/db/conf/pricai/</td></tr>
<tr class="oo"><td>AI</td><td>C</td><td>会议</td><td>21</td><td>NAACL</td><td>The Annual Conference of the North American Chapter of the Association for Computational Linguistics</td><td>NAACL</td><td>https://dblp.org/db/conf/naacl/</td></tr>
<tr class="hd"><td>交互</td><td>A</td><td>期刊</td><td>1</td><td>TOCHI</td><td>ACM Transactions on Computer-Human Interaction</td><td>ACM</td><td>https://dblp.org/db/journals/tochi/</td></tr>
<tr><td>交互</td><td>A</td><td>期刊</td><td>2</td><td>IJHCS</td><td>International Journal of Human Computer Studies</td><td>Elsevier</td><td>https://dblp.org/db/journals/ijmms/</td></tr>
<tr class="hd"><td>交互</td><td>B</td><td>期刊</td><td>1</td><td>CSCW</td><td>Computer Supported Cooperative Work</td><td>Springer</td><td>https://dblp.org/db/journals/cscw/</td></tr>
<tr><td>交互</td><td>B</td><td>期刊</td><td>2</td><td>HCI</td><td>Human Computer Interaction</td><td>Taylor &amp; Francis</td><td>https://dblp.org/db/journals/hhci/</td></tr>
<tr class="oo"><td>交互</td><td>B</td><td>期刊</td><td>3</td><td></td><td>IEEE Transactions on Human-Machine Systems</td><td>IEEE</td><td>https://dblp.org/db/journals/thms/</td></tr>
<tr><td>交互</td><td>B</td><td>期刊</td><td>4</td><td>IWC</td><td>Interacting with Computers</td><td>Oxford University Press</td><td>https://dblp.org/db/journals/iwc/</td></tr>
<tr class="oo"><td>交互</td><td>B</td><td>期刊</td><td>5</td><td>IJHCI</td><td>International Journal of Human-Computer Interaction</td><td>Taylor &amp; Francis</td><td>https://dblp.org/db/journals/ijhci/</td></tr>
<tr><td>交互</td><td>B</td><td>期刊</td><td>6</td><td>UMUAI</td><td>User Modeling and User-Adapted Interaction</td><td>Springer</td><td>https://dblp.org/db/journals/umuai/</td></tr>
<tr class="hd"><td>交互</td><td>C</td><td>期刊</td><td>1</td><td>BIT</td><td>Behaviour &amp; Information Technology</td><td>Taylor &amp; Francis</td><td>https://dblp.org/db/journals/behaviourIT/</td></tr>
<tr><td>交互</td><td>C</td><td>期刊</td><td>2</td><td>PUC</td><td>Personal and Ubiquitous Computing</td><td>Springer</td><td>https://dblp.org/db/journals/puc/</td></tr>
<tr class="oo"><td>交互</td><td>C</td><td>期刊</td><td>3</td><td>PMC</td><td>Pervasive and Mobile Computing</td><td>Elsevier</td><td>https://dblp.org/db/journals/percom/</td></tr>
<tr class="hd"><td>交互</td><td>A</td><td>会议</td><td>1</td><td>CSCW</td><td>ACM Conference on Computer Supported Cooperative Work and Social Computing</td><td>ACM</td><td>https://dblp.org/db/conf/cscw/</td></tr>
<tr><td>交互</td><td>A</td><td>会议</td><td>2</td><td>CHI</td><td>ACM Conference on Human Factors in Computing Systems</td><td>ACM</td><td>https://dblp.org/db/conf/chi/</td></tr>
<tr class="oo"><td>交互</td><td>A</td><td>会议</td><td>3</td><td>UbiComp</td><td>ACM International Conference on Ubiquitous Computing</td><td>ACM</td><td>https://dblp.org/db/conf/huc/</td></tr>
<tr class="hd"><td>交互</td><td>B</td><td>会议</td><td>1</td><td>GROUP</td><td>ACM Conference on Supporting Group Work</td><td>ACM</td><td>https://dblp.org/db/conf/group/</td></tr>
<tr><td>交互</td><td>B</td><td>会议</td><td>2</td><td>IUI</td><td>ACM International Conference on Intelligent User Interfaces</td><td>ACM</td><td>https://dblp.org/db/conf/iui/</td></tr>
<tr class="oo"><td>交互</td><td>B</td><td>会议</td><td>3</td><td>ITS</td><td>ACM International Conference on Interactive Tabletops and Surfaces</td><td>ACM</td><td>https://dblp.org/db/conf/tabletop/</td></tr>
<tr><td>交互</td><td>B</td><td>会议</td><td>4</td><td>UIST</td><td>ACM Symposium on User Interface Software and Technology</td><td>ACM</td><td>https://dblp.org/db/conf/uist/</td></tr>
<tr class="oo"><td>交互</td><td>B</td><td>会议</td><td>5</td><td>ECSCW</td><td>European Conference on Computer Supported Cooperative Work</td><td>Springer</td><td>https://dblp.org/db/conf/ecscw/</td></tr>
<tr><td>交互</td><td>B</td><td>会议</td><td>6</td><td>PERCOM</td><td>IEEE International Conference on Pervasive Computing and Communications</td><td>IEEE</td><td>https://dblp.org/db/conf/percom/</td></tr>
<tr class="oo"><td>交互</td><td>B</td><td>会议</td><td>7</td><td>MobileHCI</td><td>International Conference on Human Computer Interaction with Mobile Devices and Services</td><td>ACM</td><td>https://dblp.org/db/conf/mhci/</td></tr>
<tr class="hd"><td>交互</td><td>C</td><td>会议</td><td>1</td><td>DIS</td><td>ACM Conference on Designing Interactive Systems</td><td>ACM</td><td>https://dblp.org/db/conf/ACMdis/</td></tr>
<tr><td>交互</td><td>C</td><td>会议</td><td>2</td><td>ICMI</td><td>ACM International Conference on Multimodal Interaction</td><td>ACM</td><td>https://dblp.org/db/conf/icmi/</td></tr>
<tr class="oo"><td>交互</td><td>C</td><td>会议</td><td>3</td><td>ASSETS</td><td>ACM SIGACCESS Conference on Computers and Accessibility</td><td>ACM</td><td>https://dblp.org/db/conf/assets/</td></tr>
<tr><td>交互</td><td>C</td><td>会议</td><td>4</td><td>GI</td><td>Graphics Interface conference</td><td>ACM</td><td>https://dblp.org/db/conf/graphicsinterface/</td></tr>
<tr class="oo"><td>交互</td><td>C</td><td>会议</td><td>5</td><td>UIC</td><td>IEEE International Conference on Ubiquitous Intelligence and Computing</td><td>IEEE</td><td>https://dblp.org/db/conf/uic/</td></tr>
<tr><td>交互</td><td>C</td><td>会议</td><td>6</td><td></td><td>IEEE World Haptics Conference</td><td>IEEE</td><td>https://dblp.org/db/conf/haptics/</td></tr>
<tr class="oo"><td>交互</td><td>C</td><td>会议</td><td>7</td><td>INTERACT</td><td>IFIP TC13 Conference on Human-Computer Interaction</td><td>IFIP</td><td>https://dblp.org/db/conf/interact/</td></tr>
<tr><td>交互</td><td>C</td><td>会议</td><td>8</td><td>IDC</td><td>Interaction Design and Children</td><td>ACM</td><td>https://dblp.org/db/conf/acmidc/</td></tr>
<tr class="oo"><td>交互</td><td>C</td><td>会议</td><td>9</td><td>CollaborateCom</td><td>International Conference on Collaborative Computing: Networking, Applications and Worksharing</td><td>Springer</td><td>http://collaboratecom.org</td></tr>
<tr><td>交互</td><td>C</td><td>会议</td><td>10</td><td>CSCWD</td><td>International Conference on Computer Supported Cooperative Work in Design</td><td>Springer</td><td>https://dblp.org/db/conf/cscwd/</td></tr>
<tr class="oo"><td>交互</td><td>C</td><td>会议</td><td>11</td><td>CoopIS</td><td>International Conference on Cooperative Information Systems</td><td>Springer</td><td>https://dblp.org/db/conf/coopis/</td></tr>
<tr><td>交互</td><td>C</td><td>会议</td><td>12</td><td>MobiQuitous</td><td>International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services</td><td>Springer</td><td>https://dblp.org/db/conf/mobiquitous/</td></tr>
<tr class="oo"><td>交互</td><td>C</td><td>会议</td><td>13</td><td>AVI</td><td>International Working Conference on Advanced Visual Interfaces</td><td>ACM</td><td>https://dblp.org/db/conf/avi/</td></tr>
<tr class="hd"><td>综合</td><td>A</td><td>期刊</td><td>1</td><td>JACM</td><td>Journal of the ACM</td><td>ACM</td><td>https://dblp.org/db/journals/jacm/</td></tr>
<tr><td>综合</td><td>A</td><td>期刊</td><td>2</td><td>Proc. IEEE</td><td>Proceedings of the IEEE</td><td>IEEE</td><td>https://dblp.org/db/journals/pieee/</td></tr>
<tr class="hd"><td>综合</td><td>B</td><td>期刊</td><td>1</td><td></td><td>Bioinformatics</td><td>Oxford University Press</td><td>https://dblp.org/db/journals/bioinformatics/</td></tr>
<tr><td>综合</td><td>B</td><td>期刊</td><td>2</td><td></td><td>Briefings in Bioinformatics</td><td>Oxford University Press</td><td>https://dblp.org/db/journals/bib/</td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>期刊</td><td>3</td><td>Cognition</td><td>Cognition：International Journal of Cognitive Science</td><td>Elsevier</td><td>http://www.journals.elsevier.com/cognition/</td></tr>
<tr><td>综合</td><td>B</td><td>期刊</td><td>4</td><td>TASAE</td><td>IEEE Transactions on Automation Science and Engineering</td><td>IEEE</td><td>https://dblp.org/db/journals/tase/</td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>期刊</td><td>5</td><td>TGARS</td><td>IEEE Transactions on Geoscience and Remote Sensing</td><td>IEEE</td><td>https://dblp.org/db/journals/tgrs/</td></tr>
<tr><td>综合</td><td>B</td><td>期刊</td><td>6</td><td>TITS</td><td>IEEE Transactions on Intelligent Transportation Systems</td><td>IEEE</td><td>https://dblp.org/db/journals/tits/</td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>期刊</td><td>7</td><td>TMI</td><td>IEEE Transactions on Medical Imaging</td><td>IEEE</td><td>https://dblp.org/db/journals/tmi/</td></tr>
<tr><td>综合</td><td>B</td><td>期刊</td><td>8</td><td>TR</td><td>IEEE Transactions on Robotics</td><td>IEEE</td><td>https://dblp.org/db/journals/trob/</td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>期刊</td><td>9</td><td>TCBB</td><td>IEEE-ACM Transactions on Computational Biology and Bioinformatics</td><td>IEEE/ACM</td><td>https://dblp.org/db/journals/tcbb/</td></tr>
<tr><td>综合</td><td>B</td><td>期刊</td><td>10</td><td>JCST</td><td>Journal of Computer Science and Technology</td><td>SCIENCE PRESS/Springer</td><td>https://dblp.org/db/journals/jcst/</td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>期刊</td><td>11</td><td>JAMIA</td><td>Journal of the American Medical Informatics Association</td><td>BMJ Journals</td><td>https://dblp.org/db/journals/jamia/</td></tr>
<tr><td>综合</td><td>B</td><td>期刊</td><td>12</td><td></td><td>PLOS Computational Biology</td><td>Public Library of Science</td><td>https://dblp.org/db/journals/ploscb/</td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>期刊</td><td>13</td><td></td><td>Science China Information Sciences</td><td>Science in China Press/Springer</td><td>https://dblp.org/db/journals/chinaf/</td></tr>
<tr><td>综合</td><td>B</td><td>期刊</td><td>14</td><td></td><td>The Computer Journal</td><td>Oxford University Press</td><td>https://dblp.org/db/journals/cj/</td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>期刊</td><td>15</td><td></td><td>World Wide Web Journal</td><td>Springer</td><td>https://www.springer.com/journal/11280</td></tr>
<tr class="hd"><td>综合</td><td>C</td><td>期刊</td><td>1</td><td></td><td>BMC Bioinformatics</td><td>BioMed Central</td><td>https://dblp.org/db/journals/bmcbi/</td></tr>
<tr><td>综合</td><td>C</td><td>期刊</td><td>2</td><td></td><td>Cybernetics and Systems</td><td>Taylor &amp; Francis</td><td>https://dblp.org/db/journals/cas/</td></tr>
<tr class="oo"><td>综合</td><td>C</td><td>期刊</td><td>3</td><td>FCS</td><td>Frontiers of Computer Science</td><td>Higher Education Press</td><td>https://dblp.org/db/journals/fcsc/</td></tr>
<tr><td>综合</td><td>C</td><td>期刊</td><td>4</td><td></td><td>IEEE Geoscience and Remote Sensing Letters</td><td>IEEE</td><td>https://dblp.org/db/journals/lgrs/</td></tr>
<tr class="oo"><td>综合</td><td>C</td><td>期刊</td><td>5</td><td>JBHI</td><td>IEEE Journal of Biomedical and Health Informatics</td><td>IEEE</td><td>https://dblp.org/db/journals/titb/</td></tr>
<tr><td>综合</td><td>C</td><td>期刊</td><td>6</td><td>TBD</td><td>IEEE Transactions on Big Data</td><td>IEEE</td><td>https://dblp.org/db/journals/tbd/</td></tr>
<tr class="oo"><td>综合</td><td>C</td><td>期刊</td><td>7</td><td></td><td>IET Intelligent Transport Systems</td><td>IET</td><td>http://digital-library.theiet.org/content/journals/iet-its</td></tr>
<tr><td>综合</td><td>C</td><td>期刊</td><td>8</td><td>JBI</td><td>Journal of Biomedical Informatics</td><td>Elsevier</td><td>https://dblp.org/db/journals/jbi/</td></tr>
<tr class="oo"><td>综合</td><td>C</td><td>期刊</td><td>9</td><td></td><td>Medical Image Analysis</td><td>Elsevier</td><td>https://dblp.org/db/journals/mia/</td></tr>
<tr class="hd"><td>综合</td><td>A</td><td>会议</td><td>1</td><td>WWW</td><td>International World Wide Web Conferences</td><td>ACM</td><td>https://dblp.org/db/conf/www/</td></tr>
<tr><td>综合</td><td>A</td><td>会议</td><td>2</td><td>RTSS</td><td>Real-Time Systems Symposium</td><td>IEEE</td><td>https://dblp.org/db/conf/rtss/</td></tr>
<tr class="hd"><td>综合</td><td>B</td><td>会议</td><td>1</td><td>CogSci</td><td>Cognitive Science Society Annual Conference</td><td>Psychology Press</td><td>https://dblp.org/db/conf/cogsci/</td></tr>
<tr><td>综合</td><td>B</td><td>会议</td><td>2</td><td>BIBM</td><td>IEEE International Conference on Bioinformatics and Biomedicine</td><td>IEEE</td><td>https://dblp.org/db/conf/bibm/</td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>会议</td><td>3</td><td>EMSOFT</td><td>International Conference on Embedded Software</td><td>ACM/IEEE/IFIP</td><td>https://dblp.org/db/conf/emsoft/</td></tr>
<tr><td>综合</td><td>B</td><td>会议</td><td>4</td><td>ISMB</td><td>International conference on Intelligent Systems for Molecular Biology</td><td>Oxford Journals</td><td>http://www.iscb.org/about-ismb</td></tr>
<tr class="oo"><td>综合</td><td>B</td><td>会议</td><td>5</td><td>RECOMB</td><td>International Conference on Research in Computational Molecular Biology</td><td>Springer</td><td>https://dblp.org/db/conf/recomb/</td></tr>
<tr class="hd"><td>综合</td><td>C</td><td>会议</td><td>1</td><td>AMIA</td><td>American Medical Informatics Association Annual Symposium</td><td>AMIA</td><td>https://dblp.org/db/conf/amia/</td></tr>
<tr><td>综合</td><td>C</td><td>会议</td><td>2</td><td>APBC</td><td>Asia Pacific Bioinformatics Conference</td><td>BioMed Central</td><td>https://dblp.org/db/conf/apbc/</td></tr>
<tr class="oo"><td>综合</td><td>C</td><td>会议</td><td>3</td><td></td><td>IEEE International Conference on Big Data</td><td>IEEE</td><td>https://dblp.org/db/conf/bigdataconf/</td></tr>
<tr><td>综合</td><td>C</td><td>会议</td><td>4</td><td></td><td>IEEE International Conference on Cloud Computing</td><td>IEEE</td><td>https://dblp.org/db/conf/IEEEcloud/</td></tr>
<tr class="oo"><td>综合</td><td>C</td><td>会议</td><td>5</td><td>SMC</td><td>IEEE International Conference on Systems, Man, and Cybernetics</td><td>IEEE</td><td>https://dblp.org/db/conf/smc/</td></tr>
<tr><td>综合</td><td>C</td><td>会议</td><td>6</td><td>COSIT</td><td>International Conference on Spatial Information Theory</td><td>ACM</td><td>https://dblp.org/db/conf/cosit/</td></tr>
<tr class="oo"><td>综合</td><td>C</td><td>会议</td><td>7</td><td>ISBRA</td><td>International Symposium on Bioinformatics Research and Applications</td><td>Springer</td><td>https://dblp.org/db/conf/isbra/</td></tr>
</table>

{{< /rawhtml >}}
