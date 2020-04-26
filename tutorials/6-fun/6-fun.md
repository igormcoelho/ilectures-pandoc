---
author: Igor M. Coelho
title: Demonstration Beamer/Reveal
date: April 26, 2020
transition: cube
fontsize: 10
header-includes:
- <link rel="stylesheet" type="text/css" href="general.css">
- <link rel="stylesheet" type="text/css" href="reveal-beamer.css">
- <link rel="stylesheet" type="text/css" href="cslider.css">
- <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
- <script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript"></script>
- <link rel="stylesheet" type="text/css" media="screen" href="ace.css">
- <script src="./ace-builds/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
-  <script defer src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
- <script defer src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.2.2/bootstrap.min.js"></script>
- <link href="//fonts.googleapis.com/css?family=Finger+Paint" id="link-webfont" rel="stylesheet">
- <script src="https://raw.githubusercontent.com/timdream/wordcloud2.js/gh-pages/src/wordcloud2.js"></script>

---

# Part 6: Fun

--------

## Love

<!-- BEGIN COMMENT FOR beamer -->

<canvas id="myheart" style="height:300px;"></canvas>

<!-- END COMMENT FOR beamer -->

<!-- BEGIN COMMENT -->

```javascript {cmd=true hide=true}
if (!WordCloud.isSupported) {
  alert("No wordcloud");
}
var cvs = document.getElementById('myheart');
// https://github.com/timdream/wordcloud2.js/blob/gh-pages/API.md
var options = {
  list : [  
            ['foo', 3],
            ['bar', 3]
         ],
  gridSize: 18,
  shape : 'cardioid',
  weightFactor: 3,
  fontFamily: 'Finger Paint, cursive, sans-serif',
  color: '#f0f0c0',
  hover: window.drawBox,
  click: function(item) {
    alert(item[0] + ': ' + item[1]);
  },
  backgroundColor: '#001f00'
};
WordCloud(cvs, options);
```

<!-- END COMMENT -->

<!-- BEGIN COMMENT FOR revealjs -->

\small

\vspace{-0.5cm}

\textcolor{crimson}{\heartpar{Lorem ipsum dolor sit amet, consectetuer
    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
    veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
    dolor in hendrerit in vulputate velit esse molestie consequat, vel
    illum dolore eu feugiat nulla facilisis at vero eros et accumsan
    et iusto odio dignissim qui blandit praesent luptatum zzril
    delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
    dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat
    volutpat.}}

<!-- END COMMENT FOR revealjs -->

<!-- BEGIN COMMENT FOR beamer -->

This is supposed to be a heart ('cardioid') made with [wordcloud2.js](https://github.com/timdream/wordcloud2.js).

<button id="mycanvasbtn">MakeCloud</button>

<script src="https://raw.githubusercontent.com/timdream/wordcloud2.js/gh-pages/src/wordcloud2.js"></script>

<script>
function makecloud() {
if (!WordCloud.isSupported) {
  alert("No wordcloud");
}
var cvs = document.getElementById('myheart');
// https://github.com/timdream/wordcloud2.js/blob/gh-pages/API.md
var options = {
  list : [  
            ['foo', 3],
            ['bar', 3],
            ['abc', 3],
            ['cde', 3],
            ['efg', 3],
            ['hij', 3],
            ['lmn', 3],
            ['foo', 3],
            ['bar', 3],
            ['abc', 3],
            ['cde', 3],
            ['efg', 3],
            ['hij', 3],
            ['lmn', 3],
            ['foo', 3],
            ['bar', 3],
            ['abc', 3],
            ['cde', 3],
            ['efg', 3],
            ['hij', 3],
            ['lmn', 3],
            ['bar', 3],
            ['abc', 3],
            ['cde', 3],
            ['efg', 3],
            ['hij', 3],
            ['lmn', 3],
            ['foo', 3],
            ['bar', 3],
            ['abc', 3],
            ['cde', 3],
            ['efg', 3],
            ['hij', 3],
            ['lmn', 3],
            ['bar', 3],
            ['abc', 3],
            ['cde', 3],
            ['efg', 3],
            ['hij', 3],
            ['lmn', 3],
            ['foo', 3],
            ['bar', 3],
            ['abc', 3],
            ['cde', 3],
            ['efg', 3],
            ['hij', 3],
            ['lmn', 3]
         ],
  gridSize: 15,
  shape : 'cardioid',
  ellipticity : 1,  
  weightFactor: 3,
  fontFamily: 'Finger Paint, cursive, sans-serif',
  color: '#DC143C',
  hover: window.drawBox,
  click: function(item) {
    alert(item[0] + ': ' + item[1]);
  },
  backgroundColor: '#f0f0c0'
};
WordCloud(cvs, options);
}
document.getElementById('mycanvasbtn').onclick = makecloud;
</script>

<!-- END COMMENT FOR beamer -->


----------

## Thanks

Made with <span latex-color="crimson" style="color:crimson;">❤</span> (during a pandemic!).
