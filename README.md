---
author: Igor M. Coelho
title: ilectures-pandoc
---

# Interactive Lectures on Pandoc

This is a tutorial exploring nice possibilities for Pandoc over interactive lectures.

This is still under construction. See avaiable topics:

- [0 - Setup](tutorials/0-setup/0-setup.md) (pandoc markdown) - [PDF](tutorials/0-setup/beamer-0-setup.pdf)
- [1 - Basics](tutorials/1-basics/1-basics.md) (pandoc markdown) - [PDF](tutorials/1-basics/beamer-1-basics.pdf)
- [2 - plots](tutorials/2-plots/2-plots.md) (pandoc markdown) - [PDF](tutorials/2-plots/beamer-2-plots.pdf)

...


## Installation instructions

We provide some installation instructions on tutorials, specially on: [0 - Setup](tutorials/0-setup/0-setup.md).

Currently, we consider the following packages:

- `pandoc 2.9.2`: [Pandoc Website](https://pandoc.org)
- `Atom 1.45.0`: [Atom.io Website](https://atom.io)
- Atom plugin `markdown-preview-enhanced 0.17.8`: [MPE Website](https://shd101wyy.github.io/markdown-preview-enhanced)
- Extras:
  * Anaconda3 `conda 4.8.3` for plots (including `plotly`): [Conda3 Download](https://www.anaconda.com/distribution/)


Some more installation instructions for Pandoc and Reveal.js can be found on:

- [Pandoc Manual](https://pandoc.org/MANUAL.html)
- [Pandoc Wiki: integration with reveal.js](https://github.com/jgm/pandoc/wiki/Using-pandoc-to-produce-reveal.js-slides)

## Limitations

Some current limitations are listed here.

### Extended Tables

Pandoc currently (04/2020) does not support Extended Tables (multi-columns and multi-rows), such as in MultiMarkdown format. Some issues:

- [https://github.com/jgm/pandoc/issues/1024](https://github.com/jgm/pandoc/issues/1024)
- [https://stackoverflow.com/questions/30528217/table-layouts-for-use-with-pandoc](https://stackoverflow.com/questions/30528217/table-layouts-for-use-with-pandoc)
- [https://stackoverflow.com/questions/39329602/multimarkdown-tables-with-pandoc](https://stackoverflow.com/questions/39329602/multimarkdown-tables-with-pandoc)

The current solution seems to do the table in HTML or LaTeX. To do both simultaneously, you can use our filter [comments-to.py](libs/comments-to.py) (implemented via [pandocfilters](https://github.com/jgm/pandocfilters) on python).

### Incremental items on Reveal.js

When using double-columns together with incremental lists, these may be buggy on reveal.js (not displaying after button press). In these cases, avoid `-i` incremental option.

If necessary to do incremental items, it's better to use `fenced_div` surrounding it:

```
::: {.incremental}

- item1
- item2

:::
```

Beware that incremental lists seems to be broken for `beamer` (you can use `comments-to.py` filter switches).

-------

MIT License - 2020
