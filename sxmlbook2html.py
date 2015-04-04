#!/usr/bin/python
# -*- coding: utf-8 -*-

import sys
import libxml2
import libxslt

styledoc = libxml2.parseFile(sys.argv[2])
style = libxslt.parseStylesheetDoc(styledoc)
doc = libxml2.parseFile(sys.argv[1])
result = style.applyStylesheet(doc, None)
style.saveResultToFilename(sys.argv[3], result, 0)
style.freeStylesheet()
doc.freeDoc()
result.freeDoc()

