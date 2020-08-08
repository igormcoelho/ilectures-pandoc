all: deps
	cp -r figs/ /tmp/
	/usr/bin/pandoc -s --self-contained -V theme=beige -s \
	  -t revealjs --metadata to="revealjs" \
    --filter pandoc-katex --filter ../../libs/pandoc-plot \
		--filter ../../libs/comments-to.py \
	  2-plots.md --css katex.min.css -o index.html --slide-level 2 # --toc
	#
	#
	/usr/bin/pandoc --toc -s --self-contained -V theme:Warsaw \
	    -t beamer --metadata to="beamer" \
	    --filter pandoc-latex-color  --filter ../../libs/pandoc-plot  \
			 --filter ../../libs/comments-to.py \
			 -H header.tex \
			2-plots.md -o beamer-2-plots.pdf --slide-level 2

#			-F pandoc-crossref -H header.tex \

run:
	python3 -m http.server 8081
	#python2 -m SimpleHTTPServer 8081

deps:
	wget -nc https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css
	wget -nc https://github.com/hakimel/reveal.js/archive/master.tar.gz
	# tar -xzvf master.tar.gz && mv reveal.js-master reveal.js

install-reveal:
	wget -nc https://github.com/hakimel/reveal.js/archive/master.tar.gz
	tar -xzvf master.tar.gz && mv reveal.js-master reveal.js
