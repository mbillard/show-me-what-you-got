// Copyright 2017 Michel Billard. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.openUrlInBackgroundTab) {
    chrome.tabs.create({url: message.url, active: false, selected: false});
  }
  return true;
});
