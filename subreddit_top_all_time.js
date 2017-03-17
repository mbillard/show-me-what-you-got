// Copyright 2017 Michel Billard. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var subredditPath = document.querySelector(".redditname a").href;

// Create the new menu option
var openAllNode = document.createElement("li");
var openAllLink = document.createElement("a");
openAllLink.href = subredditPath + "top?t=all";
openAllLink.className += "choice";
openAllLink.appendChild(document.createTextNode("SHOW ME WHAT YOU GOT"));
openAllNode.appendChild(openAllLink);

// Add the menu option to the menu
var tabmenu = document.querySelector("#header .tabmenu");
var topLink = tabmenu.querySelector("li:first-child");
tabmenu.insertBefore(openAllNode, topLink.nextSibling);
