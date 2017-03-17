// Copyright 2017 Michel Billard. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var openAllLinks = function(openComments) {
  if (openComments == undefined) {
    openComments = false;
  }

  var posts = document.querySelectorAll(".linklisting .link .entry");
  for(var i = 0; i < posts.length; i++) {
    var post = posts[i];
    chrome.runtime.sendMessage({openUrlInBackgroundTab: true, url: post.querySelector(".title a").href});
    if (openComments) {
      chrome.runtime.sendMessage({openUrlInBackgroundTab: true, url: post.querySelector("a.comments").href});
    }
  };
}

var linksContainer = document.createElement("div");
linksContainer.className += "spacer";

var openLinksLink = document.createElement("a");
openLinksLink.href = "javascript:void(0);";
openLinksLink.appendChild(document.createTextNode("Open all links"));
openLinksLink.onclick = function(e) { openAllLinks(false); }

var openLinksAndCommentsLink = document.createElement("a");
openLinksAndCommentsLink.href = "javascript:void(0);";
openLinksAndCommentsLink.appendChild(document.createTextNode("Open all links & comments"));
openLinksAndCommentsLink.onclick = function(e) { openAllLinks(true); }

linksContainer.appendChild(openLinksLink);
linksContainer.appendChild(document.createTextNode(" "));
linksContainer.appendChild(openLinksAndCommentsLink);

var mainContent = document.querySelector(".content[role=main]");
mainContent.appendChild(linksContainer);
