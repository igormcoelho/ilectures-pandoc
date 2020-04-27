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
-  <script defer src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
- <script src="./quiz.js"></script>
- <script src="./quiz-ds.js"></script>

---

# Part 5: Quiz

------

## Test your skills

We can use Pandoc to build an interactive quiz.
The "interactive" part will work only on `revealjs`, not on `beamer` PDF.

Try a little bit to verify your knowledge on Pandoc :)

<!-- BEGIN COMMENT -->

<script src="http://localhost:8081/quiz.js"></script>
<script src="http://localhost:8081/quiz-ds.js"></script>

<!-- END COMMENT -->

------

## Test your skills (Q1)

### Q1. What are the pandoc elements for checkboxes?

<!-- BEGIN COMMENT -->

```javascript {cmd=true}
setup_quiz(quiz_ds('q1'));
```

<!-- END COMMENT -->

::: {#quiz-div-ds-q1}
- [ ] fenced_divs
- [ ] check_list
- [ ] task_lists
- [ ] code_chunks
:::

<!-- BEGIN COMMENT TO beamer -->

<button id="quiz-btn-r-ds-q1">Refresh</button>
<button id="quiz-btn-h-ds-q1">Hint</button>
<button id="quiz-btn-s-ds-q1">Solution</button>

<script>
setup_quiz(quiz_ds('q1'));
</script>

<!-- END COMMENT TO beamer -->

<!-- BEGIN COMMENT TO revealjs -->

See `revealjs` version for interactive testing (not available for `beamer`).

<!-- END COMMENT TO revealjs -->

--------

## Test your skills (Q2)

### Q2. On `slide-level` number `2`, what are `#` and `##`?

<!-- BEGIN COMMENT -->

```javascript {cmd=true}
setup_quiz(quiz_ds('q2'));
```

<!-- END COMMENT -->

::: {#quiz-div-ds-q2}
- [ ] frame, box
- [ ] section, subsection
- [ ] subsection, frame
- [ ] section, frame
:::

<!-- BEGIN COMMENT TO beamer -->

<button id="quiz-btn-r-ds-q2">Refresh</button>
<button id="quiz-btn-h-ds-q2">Hint</button>
<button id="quiz-btn-s-ds-q2">Solution</button>

<script>
setup_quiz(quiz_ds('q2'));
</script>

<!-- END COMMENT TO beamer -->

<!-- BEGIN COMMENT TO revealjs -->

See `revealjs` version for interactive testing (not available for `beamer`).

<!-- END COMMENT TO revealjs -->

--------

# Finish

## Try to create your own

Feel free to create more questions and answers.

### Learning more
Please contribute with us if you find more nice things!
