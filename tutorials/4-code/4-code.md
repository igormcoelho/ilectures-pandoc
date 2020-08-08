---
author: Igor M. Coelho
title: Demonstration Beamer/Reveal
date: April 29, 2020
transition: linear
fontsize: 10
header-includes:
- <link rel="stylesheet" type="text/css" href="general.css">
- <link rel="stylesheet" type="text/css" href="reveal-beamer.css">
- <link rel="stylesheet" type="text/css" href="cslider.css">
- <link rel="stylesheet" type="text/css" href="ace.css">
- <script src="./ace-builds/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
---

# Part 4: Code

--------

## Code Embedding

Traditional code embedding can be done as in markdown or `beamer` listings. An interesting aspect is to have the code *actually executed*, and its output appended here.

One example of code in Python (not executed):
```{.python}
print("Hello World")
```

This is how it's done:
```
\```{.python}
print("Hello World")
\```
```

--------

## Configuring highlighters

Command `pandoc --list-highlight-styles` (or just `eval "$(pandoc --bash-completion)"` to enable bash completion) will display options: _pygments, tango, espresso, zenburn, kate, monochrome, breezedark, haddock_

You can visually compare them here: https://www.garrickadenbuie.com/blog/pandoc-syntax-highlighting-examples

An interesting project for active code execution is [codebraid](https://github.com/gpoore/codebraid) for: _Python 3.5+, Julia, Rust, R, Bash, JavaScript, and SageMath_.

--------

## Fenced code blocks

`fenced_code_blocks` and `backtick_code_blocks` enable code highlight on pandoc.

`fenced_code_attributes` can add more attributes to them.

See Manual: https://pandoc.org/MANUAL.html#fenced-code-blocks

`pandoc --list-highlight-languages` will list languages (a lot!)

--------

## Active Code

To have code executed, you will need the plugin `pandoc-source-exec` from `panflute` pack (install as easy as `python3 -m pip install pandoc-source-exec`).
On Pandoc, we can use `.exec` property (also `hide=true` and `.hide`).
An specific command can be given, such as: `cmd='codes/run_python2.sh'`.

This approach is nice because it integrates nicely with `markdown-preview-enhanced` on Atom, where you can see results on real time.


-------

## Example of Active Code (Python3)


```
\```{.python .exec cmd='codes/run_python3.sh'}
...
\```
```

Expected output is:
```
Hello
World2
```

### Real test

```{.python .exec cmd='codes/run_python3.sh'}
print("Hello")
x=2
if x > 1:
  print("World"+str(x))
```


-------

## Example of Active Code hidden (Python2)


```
\```{.python .exec cmd='codes/run_python2.sh'
                        hide=true .hide output_label=''}
print 'Hello'
\```
```

### Real test

```{.python .exec cmd='codes/run_python2.sh' hide=true .hide output_label=''}
print 'Hello'
```


--------

## Example of Active Code from file (Python3)

This is one of the most interesting approaches, just load script `codes/example.py` and execute it:


\footnotesize

```
\```{.python .exec cmd='codes/run_python3.sh' args="codes/example.py"
                                      hide=true .hide output_label=''}
\```
```

File `example.py` contains:
```{.python}
print("Example Hello World")
```

### Real test

```{.python .exec cmd='codes/run_python3.sh' args="codes/example.py" hide=true .hide output_label=''}
```

-------

## Example of C++ Active Code

This is where we wanted to arrive on `codes/example.cpp`:

\footnotesize

```
\```{.cpp .exec cmd='codes/run_cpp.sh' args="codes/example.cpp"
                                  hide=true .hide output_label=''}
\```
```

File `example.cpp` contains:
```{.cpp}
#include<iostream>
int main() {
  std::cout << "Hello World C++" << std::endl;
  return 0;
}
```

### Real test

```{.cpp .exec cmd='codes/run_cpp.sh' args="codes/example.cpp" hide=true .hide output_label=''}
```

--------

## Pseudocode with LaTeX

LaTeX requires installation of `pdf2svg` for both `markdown-preview-enhanced` plugin and `run_latex.sh`.

```{.latex .exec void=true .hide hide=true cmd='codes/run_latex.sh' args="figs/pseudo1.svg" output_label=''}
\documentclass{standalone}
\usepackage[ruled,vlined,linesnumbered]{algorithm2e}
\begin{document}
\pagestyle{empty}
\begin{algorithm}[H]
\caption{Test Algo}
\end{algorithm}
\end{document}
```

![Algo](./figs/pseudo1.svg){width=100%}

\footnotesize

```
\```{.latex .exec .hide hide=true cmd='codes/run_latex.sh'
          void=true  args="figs/pseudo1.svg" output_label=''}
\documentclass{standalone}
\usepackage[ruled,vlined,linesnumbered]{algorithm2e}
\begin{document}
\pagestyle{empty}
\begin{algorithm}[H]
\caption{Test Algo}
\end{algorithm}
\end{document}
\```
```

--------

## Complete test of algorithm

```{.latex .exec void=true .hide hide=true cmd='codes/run_latex.sh' args="figs/pseudo.svg" output_label=''}
\documentclass{standalone}
\usepackage[ruled,vlined,linesnumbered]{algorithm2e}
%
%\renewcommand{\thealgorithm}{}
\renewcommand{\thealgocf}{}  % no number on algorithm2e
%
\begin{document}
\pagestyle{empty}
%
\begin{algorithm}[H]
\DontPrintSemicolon
\SetAlgoLined
\KwResult{Write here the result}
\SetKwInOut{Input}{Input}\SetKwInOut{Output}{Output}
\Input{Write here the input}
\Output{Write here the output}
\BlankLine
\While{While condition}{
    instructions\;
    \eIf{condition}{
        instructions1\;
        instructions2\;
    }{
        instructions3\;
    }
}
\caption{While loop with If/Else condition}
\end{algorithm}
\end{document}
```

![Algo](./figs/pseudo.svg){width=100%}

--------

## Ace Editor (on Atom)

For `markdown-preview-enhanced`, we can see Ace Editor (also on `revealjs`):

<!-- BEGIN COMMENT -->

```javascript {cmd=true}
var editor = ace.edit("ace-editor1");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
```
<!-- END COMMENT -->

<!-- BEGIN COMMENT TO beamer -->

<div id="ace-editor1" style="height: 200px; background-color:#191919;">
var x = 1;
alert(x);
</div>

<script>
var editor = ace.edit("ace-editor1");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
</script>

Unfortunately, it doesn't execute code, for lacking a stable backend.

<!-- END COMMENT TO beamer -->

# Finish

## Try more code types

Feel free to try other code types.

Ideally, we should be able to execute online code, but currently we lack a stable backend to integrate here (and a proper reward system to keep it up).

### Learning more
Please contribute with us if you find more nice things!
