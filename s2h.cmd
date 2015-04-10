@echo off

call config.cmd
python sxmlbook2html.py sxmlbook.xml xslt/bootstrap/sxmlbook.xsl sxmlbook.html
pause