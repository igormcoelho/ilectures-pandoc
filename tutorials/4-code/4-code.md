---
author: Igor M. Coelho
title: Demonstration Beamer/Reveal
date: April 29, 2020
transition: cube
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

## Active Code

To have code executed, you will need the plugin `pandoc-source-exec` from `panflute` pack (install as easy as `python3 -m pip install pandoc-source-exec`).
On Pandoc, we can use `.exec` property (also `hide=true` and `hide_code=true`).
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
                        hide=true hide_code=true}
print 'Hello'
\```
```

### Real test

```{.python .exec cmd='codes/run_python2.sh' hide=true hide_code=true }
print 'Hello'
```


--------

## Example of Active Code from file (Python3)

This is one of the most interesting approaches, just load script `codes/example.py` and execute it:


\footnotesize

```
\```{.python .exec cmd='codes/run_python3.sh' args="codes/example.py"
                                              hide=true hide_code=true}
\```
```

File `example.py` contains:
```{.python}
print("Example Hello World")
```

### Real test

```{.python .exec cmd='codes/run_python3.sh' args="codes/example.py" hide=true hide_code=true }
```

-------

## Example of C++ Active Code

This is where we wanted to arrive on `codes/example.cpp`:

\footnotesize

```
\```{.cpp .exec cmd='codes/run_cpp.sh' args="codes/example.cpp"
                                          hide=true hide_code=true}
\```
```

File `example.cpp` contains:
```{.cpp}
#include<iostream>
int main() {
  std::cout << "Hello World" << std::endl;
  return 0;
}
```

### Real test

```{.cpp .exec cmd='codes/run_cpp.sh' args="codes/example.cpp" hide=true hide_code=true }
```

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
