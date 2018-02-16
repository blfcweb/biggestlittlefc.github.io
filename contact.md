---
title: "Contact BLFC"
status: LIVE
---

{::options parse_block_html="true" /}

<div class="one_half">
<ul id="contact-social">
{% for item in site.social %}
<li><a class="fa fa-{{ item.slug }}" href="{{ item.url }}" target="_blank">{{ item.name }}</a></li>
{% endfor %}
</ul>
</div>
<div class="one_half">
<iframe id="contact-iframe" src="https://api.goblfc.org/contact.php?iframe=true"></iframe>
</div>

<div class="clear"></div>