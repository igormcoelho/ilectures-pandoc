all: deps
	/usr/bin/pandoc  -V theme=beige -s -i -t revealjs \
	--mathjax \
	0-setup.md -o index-mathjax.html --slide-level 2 # --toc
	#
	/usr/bin/pandoc -s --self-contained -V theme=beige -s -i -t revealjs \
        --filter pandoc-katex --css katex.min.css \
	0-setup.md -o index.html --slide-level 2 # --toc
	#
	/usr/bin/pandoc -s --self-contained -V theme:Warsaw -t beamer \
	    --filter pandoc-latex-color -F pandoc-crossref -H header.tex \
			0-setup.md -o beamer-0-setup.pdf --slide-level 2

run:
	python3 -m http.server 8081
	#python2 -m SimpleHTTPServer 8081

deps:
	wget -nc https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css
	wget -nc https://github.com/hakimel/reveal.js/archive/master.tar.gz
	# tar -xzvf master.tar.gz && mv reveal.js-master reveal.js
