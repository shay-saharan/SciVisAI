---
title: Home
layout: home
nav_order: 1
---

<picture>
	<source media="(max-width: 40rem)" srcset="HomeHeader_Mobile.png">
	<img src="HomeHeader.png" alt="SciVisAI Header">
</picture>

**Scientific and medical visualization professionals are navigating a rapidly evolving AI landscape. This resource hub provides field-specific guidance to help practitioners, educators, and students navigate AI responsibly in their practice.**

## Who Is This For

#### Professionals
For practicing medical illustrators and science visualization professionals, this resource offers workflow guidance grounded in real production contexts, case studies, and information to help navigate copyright, attribution, accuracy, and responsible use.

#### Students
If you’re entering the field, this resource provides a grounded, critical understanding of how AI intersects with scientific and medical visualization, exploring both its possibilities and its limitations.

#### Educators
This resource provides information and materials to support the integration of AI topics into your teaching, including discussions around responsible use, professional practice, case studies, and pedagogical resources developed specifically for biomedical communications and scientific illustration programs.

## Why This Matters Now
AI tools are already reshaping scientific and medical visualization workflows. Practitioners are experimenting with generative tools. Publishers are establishing new disclosure requirements. Institutions are developing policies around AI attribution and use. And many of the software tools we use every day now have AI features built into them.

Whether you’re skeptical about AI or enthusiastically experimenting, these developments raise questions that are difficult to navigate in isolation. We need space for open dialogue, critical reflection, and collaboration across our community. SciVisAI is one way to help create that space.

## How Should We Be Thinking About AI in Our Field?

More specifically, what should shape our decisions about whether, when, and how to use AI?

There isn’t one answer. The decisions we make about AI are shaped by many interconnected considerations: the scientific integrity of our work, our responsibilities to audiences and clients, the creative judgment we bring to our practice, the rights and contributions of others, and the broader professional, social, and environmental consequences of these technologies.

### Explore the Landscape

The interactive below maps some of the key considerations shaping AI in scientific and medical visualization. Explore the different areas, follow the connections between them, and consider how these questions might influence your own practice. There are no simple answers or universal rules. The aim is to make the landscape easier to navigate, surface important tensions, and encourage more informed conversations about the choices we make.

{% include landscape.html %}

*Visualized by [Emily Huang](https://www.emilyhuang.ca/), in collaboration with SciVisAI.*

<details style="border: 1px solid #d5e5e0; border-radius: 8px; padding: 1rem; margin: 1.5rem 0;">
<summary><strong style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">Explore six areas shaping AI in our field</strong></summary>
<p>Each topic below raises questions about using AI in scientific and medical visualization.</p>
{% assign landscape_stops = site.data.landscape.stops | sort: "number" %}
<div class="ls-list">
{%- for stop in landscape_stops %}
<div class="ls-row">
<img class="ls-row-img" src="{{ stop.image | relative_url }}" alt="">
<div class="ls-row-body">
<div class="ls-title" role="heading" aria-level="4">{{ stop.title | escape }}</div>
<p class="ls-sub">{{ stop.subtitle | escape }}</p>
<p class="ls-text">{{ stop.text | escape }}</p>
</div>
</div>
{%- endfor %}
</div>
</details>

<div style="display: flex; align-items: center; gap: 1.5rem; border: 1px solid #d5e5e0; border-radius: 12px; padding: 1.25rem; margin: 1.5rem 0; width: 100%; box-sizing: border-box; background-color: #E6F4EE;">
<img src="{{ '/Assets/postericon.png' | relative_url }}" alt="" aria-hidden="true" style="flex: 0 0 7rem; width: 7rem; height: 7rem; border-radius: 50%; object-fit: cover;">
<div><strong style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">Downloadable Poster</strong><br>A downloadable version of the landscape will be available here soon.<br><button type="button" class="btn" disabled aria-disabled="true" style="margin-top: 0.75rem; cursor: not-allowed; opacity: 0.6;">Download poster (coming soon)</button></div>
</div>

## Beyond Individual Considerations

Thinking about AI requires multidimensionality. Decisions that support one goal can introduce new challenges elsewhere, revealing tensions between efficiency, accuracy, creative control, professional responsibility, and other values.

For example, does making image production faster necessarily make it better? What might be gained in efficiency, and what might be lost in scientific integrity or creative control? A system might expand access to visualization tools while relying on training data created without artists’ consent. Using AI to support student work might introduce new possibilities for experimentation, but what happens to the visual and scientific expertise students need to develop for themselves? These are not simply technical questions. They touch on the values, responsibilities, and professional knowledge that shape scientific and medical visualization.

It is also important to recognize that AI is not a single, uniform technology. Different systems are developed using different datasets, methods, and infrastructures, and have different implications for copyright, labour, privacy, and the environment. The consequences of using AI depend not only on what we do with these tools, but also on how they are built and who benefits from them.

AI technology is developing rapidly, and its longer-term implications remain uncertain. Some questions will evolve as the technology does; others, concerning scientific accuracy, human judgment, authorship, and responsibility, will remain central to our work. We believe there will continue to be an important role for human scientific communicators. How that role evolves, however, is something we have an opportunity to shape together.

SciVisAI is an evolving resource and an ongoing community effort. We invite practitioners, educators, students, and researchers to explore, question, contribute, and help shape the conversation.

## Contributing

This resource hub grows stronger with community participation. We welcome technical experiments and case studies, tool reviews and workflow documentation, teaching materials and pedagogical insights, and feedback on existing content.

## About This Project

This resource hub is led by [Shehryar (Shay) Saharan](mailto:s.saharan@utoronto.ca), [Derek Ng](mailto:d.ng@utoronto.ca), and [Nick Woolridge](mailto:n.woolridge@utoronto.ca) at [Biomedical Communications, University of Toronto](https://bmc.med.utoronto.ca/).

Collaborators: Grace Gibson, Joseph Henein, Emily Huang, Sania Khurshid, Winter Kraemer, Tristy Liu, Sandy Marshall, and Kelsey Zhao.

<img src="Logo_BMC.png" alt="Biomedical Communications, University of Toronto logo" style="width: 100%; max-width: 250px; height: auto;">

## Information Hierarchy

- [Foundations](foundations/)
- [Responsible Use](responsible-use/)
- [AI in Practice](ai-in-practice/)
- [Technology Guides](technology-guides/)
- [How to Contribute](how-to-contribute/)

## How to Use This Resource

This site is organized to support different entry points into AI for scientific and medical visualization.

### Suggested Paths

- Start with [Understanding AI](foundations/understanding-ai/) for foundational concepts.
- Visit [Technology Guides](technology-guides/) for practical setup and workflows.
- Review [Responsible Use](responsible-use/) before production use.
