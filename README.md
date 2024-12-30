# This is TProger's site fast copy
dist folder must be deployed to tproger_netlify

# vue_fast_test stuff
'use strict'
em rem
A simplification is use <a> if the URL changes and <button> if the URL does not change
https://webref.ru/html/attr/itemtype

<img src="https://media.tproger.ru/uploads/2017/02/600x266_flex_1.gif" style="aspect-ratio:auto;object-fit:fill;object-position:50% 50%;" loading="lazy" decoding="async" width="0" height="0">

https://stackoverflow.com/questions/2011289/how-to-use-svg-files-in-a-webpage
position: sticky
https://web-standards.ru/articles/position-sticky/
псевдо-классы от псевдо-элементы
https://goo.su/wze8vg
https://doka.guide/css/grid-auto-flow/
Контейнерные запросы
https://fruntend.com/posts/polnoe-rukovodstvo-po-container-queries-v-css
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;

Адаптивные изображения <picture> srcset
https://htmlacademy.ru/blog/html/adaptive-srcset

<b> and <i> are explicit - they specify bold and italic respectively.<strong> and <em> are semantic - they specify that the enclosed text should be "strong" or "emphasised" in some way, usually bold and italic, but allow for the actual styling to be controlled via CSS. Hence these are preferred in modern web pages.
Тег <mark> помечает текст как выделенный. Такой текст ничем не отличается от обычного, но его вид может быть изменен с помощью стилей. В браузере Chrome и Firefox фоновый цвет текста внутри <mark> выделяется желтым цветом.

rel="nofollow"
hyphens: auto;
no-prefetch
@media (prefers-color-scheme: light)

Про перенос в длинных текстах
https://www.tune-it.ru/web/leksa/blog/-/blogs/ukrosaem-dlinnyj-tekst-sredstvami-html-i-css

Update prewview of the site in social medea
https://answers.tilda.cc/ru/a/links-preview-update/

CSS Modules
https://frontender.info/css-modules-part-1-need/
Настройка реакта и вебпака для сисс модулей:
https://habr.com/ru/articles/335244/

БЭМ, SMACSS и другие методологии написания CSS
https://habr.com/ru/articles/256109/

Разметка для site preview и ботов-поисковиков
https://ogp.me/
https://pr-cy.ru/news/p/5333-kak-vnedrit-mikrorazmetku-informatsii-na-sayte-i-chto-eto-daet
Scrollbar styling
https://htmlbook.ru/blog/polzovatelskie-skrollbary-v-webkit
https://habr.com/ru/articles/674244/
https://ishadeed.com/article/custom-scrollbars-css/
TypeScript in Vue
https://vuejs.org/guide/typescript/overview
TypeScript object may be null   Not null assertion
https://stackoverflow.com/questions/28900077/why-is-event-target-not-element-in-typescript
https://ru.stackoverflow.com/questions/1494724/%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83-e-target-value-%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D1%82-undefined
https://stackoverflow.com/questions/52491832/how-to-use-document-getelementbyid-method-in-typescript
css modules
https://www.netguru.com/blog/vue.js-scoped-styles-vs-css-modules
Vuex
https://www.youtube.com/watch?v=cmzeczmgMW4
Как измерить скорость загрузки сайта и увеличить ее. Lighthouse TTFB
https://sendpulse.com/ru/blog/website-loading-speed#:~:text=%D0%98%D0%B4%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%20LCP%20%E2%80%94%20%D0%B4%D0%BE%202,%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%20FID%20%E2%80%94%20%D0%B4%D0%BE%20100%20%D0%BC%D0%B8%D0%BB%D0%B8%D1%81%D0%B5%D0%BA%D1%83%D0%BD%D0%B4.
Скелетная загрузка
https://dzen.ru/a/YuenQOW_EWE_YNdR

# Доделать

# Starting project
index.html
App.vue
vue.config.js

icons from: https://makeappicon.com/
android/mipmap-xxxhdpi/ic_launcher.png
	192x192.png
android/playstore-icon.png
	512x512.png
ios\AppIcon.appiconset\Icon-App-76x76@2x.png
	152x152.png
android\mipmap-xxhdpi\ic_launcher.png
	144x144.png

https://convertio.co/png-svg/ Сделал черно-белое
svg, 32 и 16 - надо генерить
https://www.iloveimg.com/resize-image/resize-png
png: 512, 192, 152, 144, 32, 16
.jshintrc
deploy.cmd
https://github.com/ilyapaliy?tab=repositories new repository
https://app.netlify.com/teams/ilyapaliy/overview Add new site

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
<!-- npm run build -->
./deploy
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
