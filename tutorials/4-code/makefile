all: deps
	/usr/bin/pandoc -s --self-contained -V theme=beige -s \
	  -t revealjs --metadata to="revealjs" \
    --filter pandoc-katex --filter ../../libs/pandoc-plot \
		--filter ../../libs/comments-to.py -F pandoc-source-exec \
	  4-code.md --css katex.min.css -o index.html --slide-level 2 # --toc
	#
	#
	/usr/bin/pandoc --toc -s --self-contained -V theme:Warsaw \
	    -t beamer --metadata to="beamer" \
	    --filter pandoc-latex-color  --filter ../../libs/pandoc-plot  \
			 --filter ../../libs/comments-to.py -F pandoc-source-exec \
			-F pandoc-crossref -H header.tex \
			4-code.md -o beamer-4-code.pdf --slide-level 2

run:
	python3 -m http.server 8081
	#python2 -m SimpleHTTPServer 8081

deps:
	wget -nc https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css
	wget -nc https://github.com/hakimel/reveal.js/archive/master.tar.gz
	# tar -xzvf master.tar.gz && mv reveal.js-master reveal.js

install-pandoc-exec:
	# which is better? which is from 'panflute'?
	python3 -m pip install pandoc-source-exec     # all codes?
	python3 -m pip install filter_pandoc_run_py   # only python I guess
	# https://github.com/caiofcm/filter_pandoc_run_py

install-reveal:
	wget -nc https://github.com/hakimel/reveal.js/archive/master.tar.gz
	tar -xzvf master.tar.gz && mv reveal.js-master reveal.js

install-ace:
	wget -nc https://github.com/ajaxorg/ace-builds/archive/v1.4.11.zip
	unzip v1.4.11.zip && mv ace-builds-1.4.11/ ace-builds
