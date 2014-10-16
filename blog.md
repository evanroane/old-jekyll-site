---
layout: page
title: Blog
permalink: /blog/
---

If you are interested in what is on my mind lately, this is a good place to look.

In the coming months I will primarily be reflecting on my experience at Nashville Software School. However, I also post about a variety of topics including food, exercise, and whatever I'm reading at the moment.

<h1 class="page-heading">Posts</h1>

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
    </li>
  {% endfor %}
</ul>

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
