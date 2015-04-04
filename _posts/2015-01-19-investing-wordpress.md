---
layout: post
title: Investing in WordPress
date: 2015-01-19 18:20:00.000000000 +02:00
categories: []
tags: []
status: publish
type: post
published: true
---

Yes, thank you. I know <a href="http://wordpress.org">WordPress</a> is <a href="https://wordpress.org/news/2003/05/wordpress-now-available/">11 years old</a>. I know it's not that rare that someone finds a gaping hole in WordPress<sup id="fnref:security"><a href="#fn:security" rel="footnote">1</a></sup>. I know PHP isn't exactly the new hotness (especially 5.2.4, which WP still uses). To be totally honest, I used to be a big believer in custom-built software, that is, building admin-UIs and APIs from scratch using Grails or Node or what have you.

While that still remains the case in some projects, the pragmatic in me has raised it's head and I decided to take a look in these pre-built CMS systems, such as WordPress. Of course there are others too, the big players being <a href="https://www.drupal.org/">Drupal</a> and <a href="http://www.joomla.org/">Joomla</a>. I ended up in WordPress. Why?

- <strong>It's simple.</strong> I somewhat understand how WordPress works. The default database schema has eleven or so tables, each of those with clear reason for it's existance.
- <strong>No click-click-configuring required.</strong> Although many WP sites are "built" by uploading WP to a server, copying a theme over and then clicking in the admin UI to install and configure plugins to create custom post types and custom fields, it's totally possible to have all of the customization done in code. Required plugins can be installed and activated automatically with <a href="http://wp-cli.org/">wp-cli</a> or <a href="https://getcomposer.org/">Composer</a>.
- <strong>It's easy to update.</strong> I don't have any real 1st-hand experience, but from what I've heard, updating a Drupal installation ain't so easy as updating a WP site. Though of course one should never do that in production.
</ul>
So that's my thought process. We've been building a couple of WP sites with my colleagues in our little <a href="http://alupark.fi">evenings-and-weekends-sidebusiness</a>, and plan on continuing to do so. I'm also planning on bringing the good best practices from "regular software building" over to the WP world and blogging away whilst doing so. Already prototyping a little MVVM-kinda thing with WP themes...

<div class="footnotes">
<hr />
<ol>
<li id="fn:security">
To to be honest, more often than not the security problems seem to occur in shitty plugins.&#160;<a href="#fnref:security" rev="footnote">&#8617;</a>
</ol>

