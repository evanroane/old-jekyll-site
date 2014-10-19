---
layout: post
title:  "Using Media Queries to Create Print Versions of Web Pages in Jekyll"
date:   2014-10-16 2:56 pm
categories: NSS, Media Queries
---

Sometimes on a web page, you might wish to make the page's content available to its users in a printable format that excludes the style formatting from languages like CSS or SASS and specifies the font and style of the page's content. Typically, you might use CSS media queries in your style sheets, but using Jekyll presents a problem with this solution since your

In what follows, I outline the process that I used to make my resume page on this web site available for print without including graphic CSS styling on the printed page.

While I will refer to using this process for making a resume, you may use it for styling a variety of documents. This guide also includes considerations you should take into account if you are using Jekyll on your site. If you are not using Jekyll, just skip steps X-Z.

<img src="{{ site.url }}/img/blog-media-queries-post.png" />

Process:

1. Get an Idea of What You Want your Resume to Look Like

2. Take Note of the Print Styles You Have to Have

3. Create CSS classes to Match Your Print Formatting Using a Resource
W3 schools or Mozilla

4. Place Media Queries _After_ your regular CSS Code

5. CSS Media Queries for Jekyll
    _print.scss
    add "print" to main.scss

    https://developer.mozilla.org/en-US/docs/Web/CSS/Paged_Media

6. CSS Media Queries for Regular Sites

7. Use Print Preview to Test
