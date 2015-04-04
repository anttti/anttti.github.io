---
layout: post
title: Actually useful Caps Lock key
date: 2014-07-11 16:56:00.000000000 +03:00
categories:
- highlight
- highlighted
tags: []
status: publish
type: post
published: true
---

I hit the Escape key plenty of times a day. Vim, Irssi, cancelling dialogs… Reaching out to the top left corner can get quite annoying. An easy fix for this is mapping the otherwise almost useless Caps Lock key to work as Escape. This can be quite easily achieved by first mapping Caps Lock to Control and then mapping Control to act as Escape. Here’s how to do that in OS X 10.9:

## Step 1.

Map Caps Lock to Control First, open System Preferences and Keyboard settings. Open the Modifier Keys -popup by hitting this button:
![Modifier Keys -popup]({{ site.baseurl }}/assets/tumblr_inline_n8k3xrU3rC1qzhtsq.png)

## Step 2.

Install Karabiner To map Control to Escape, install
[Karabiner](https://pqrs.org/osx/karabiner/) (ex-KeyRemap4MacBook). Karabiner can be used to configure a bunch of stuff, but we’re interested in…

## Step 3.

Configure Control_L to act as Escape On the Change Key -tab, type
<code>send escape</code> to the search box: ![Search box]({{ site.baseurl }}/assets/tumblr_inline_n8k3ycDagY1qzhtsq.png)

The option we’re after is <code>Control_L to Control_L (+ When you type Control_L only, send Escape)</code>. Enable it and voilà, your caps lock should now work as Escape when tapped! As an added bonus, it doubles as more easily accessible Control key when it’s held down and used in a keyboard shortcut with another key(s). If you wonder why your keyboard repeat rate seems different after installing Karabiner, it’s because Karabiner overrides OS X’s Key Repeat settings. You can fix this by adjusting the key repeat settings in Karabiner’s Key Repeat tab.
