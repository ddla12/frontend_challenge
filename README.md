# `frontend_challenge`

This is a pseudo-clone of the items page of [Chicks Gold Inc](https://chicksgold.com/items). It is made with Aurelia.js with typescript (that was unnecesary though because I'm not even using it).

## Tools

Regarding the design choices there's not much to say, it's a clone. I use [modern normalize](https://github.com/sindresorhus/modern-normalize) to reset styles, and the font [Roboto](https://fonts.google.com/specimen/Roboto) because I think it's the one that the original page use.

The CSS convention I use is [ecss](https://ecss.info/en/). Some icons are taken from [Heroicons](https://heroicons.com/). It's worth mentioning I think that both **Heroicons** and **modern normalize** are entities in the TailwindCSS ecosystem. Personally I don't like [Tailwind](https://github.com/tailwindlabs/tailwindcss) but its ecosistem has always cutting on edge technologies.

The background image and the card image are assets of League of Legends

## Style

I never like to populate HTML with classes. I think CSS selectors are enough for most of the job and using lots of classes make HTML noisy. I like to keep HTML maintainable and semantic as possible. The tree should define the behavior, the elements itself are nothing. There are special cases like `header` and `footer` which doesn't need any more explanations about what they do.

I try not to write a lot of `@media` queries, that's why I like to use relative units such as `rem` and `em`, and `auto-fit` grids. Flex is another story, I prefer using `flex-column` than wrap because it ensures that each element takes 100% width.