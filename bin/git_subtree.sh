#!/bin/bash
# ================================================================================
# 
#   Project Name:
#     sXMLBook
# 
#   License:
#     Copyright (C) 2008-15 K.Sonohara
#     Code released under [Mozilla Public License, version 2.0]
#       https://github.com/ksonohara/mikan_js/blob/master/LICENSE
# 
#   Module Name:
#     Git Command.
# 
# ================================================================================
if [ "_$1" = "_add" ] ; then
  echo "add"
  # js
  git remote add -f js https://github.com/ksonohara/mikan_js_js.git
  git subtree add --prefix=js/ --squash js master

  # css
  git remote add -f css https://github.com/ksonohara/mikan_js_css.git
  git subtree add --prefix=css/ --squash css master

  # fonts
  git remote add -f fonts https://github.com/ksonohara/mikan_js_fonts.git
  git subtree add --prefix=fonts/ --squash fonts master

  # xslt
  git remote add -f xslt https://github.com/ksonohara/sxmlbook_xlst.git
  git subtree add --prefix=xslt/ --squash xslt master
elif [ "_$1" = "_push" ] ; then
  echo "push"
  # js
  git subtree push --prefix=js/ --squash js master

  # css
  git subtree push --prefix=css/ --squash css master

  # fonts
  git subtree push --prefix=fonts/ --squash fonts master

  # xslt
  git subtree push --prefix=xslt/ --squash xslt master
else
  echo "pull"
  # js
  git subtree pull --prefix=js --squash js master

  # css
  git subtree pull --prefix=css --squash css master

  # fonts
  git subtree pull --prefix=fonts --squash fonts master

  # xslt
  git subtree pull --prefix=xslt --squash xslt master
fi

