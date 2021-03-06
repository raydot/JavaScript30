# JavaScript30

My notes on the ones I've finished. All of my finished work is in the START file, for obvious reasons.

## 01 JavaScript Drum Kit

Good intro! `document.querySelector` with `data-` attributes for element selection. Using [HTMLMediaElement.play()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play) to play sounds. Using [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) to add and remove CSS classes from elements.

## 02 CSS + JS Clock

Should have built this one in JS a long time ago. CSS `transform: rotate`, `transform-origin` which changes where the div rotates from. Also `transition` and `transition-timing-function` to handle the "tick" of the clock.

## 03 Playing with CSS Variables and JS

The CSS variables is not so interesting, but using them to change values live during JS sure is! Interesting combination of selectors and actionListeners that gets the job done. Wes is a master of `data-` selectors. TODO: scope the variables within the CSS and tighten up the listeners so they don't respond to movement anywhere near the input elements.

## 04 Array Cardio Day 1

Should be called "Functional Programming Day 1." Wes takes us through exercises that require filter, map, sort and reduce to complete. Also a clever use of `document.querySelector()` and `document.querySelectorAll()` to rip data from a Wikipedia page. And how have I gone this long without knowing about `console.table()` ???

## 05 Flex Panel Gallery

Gentle reminder: YOUR FLEX SKILLS ARE WEAK!

## 06 Type Ahead

Rip a large piece of geography data into a searchble table with population added. Kind of a combo of several things we've done so far.

## 07 Array Cardio Day 2

Well, I did all of these without watching the video, so good for me. I did not know the part about splicing (not slicing) an array back together with the spread operator, that was truly a pro tip.

## 08 Fun with HTML5 Canvas

Basic HTML5 Canvas drawing operations. Nothing earth-shattering but builds a fun little widget.

## 09 14 Must Know Dev Tools Tricks

Not so much Dev Tools Tricks after the first one. Then it's `console.log()` tricks! `console.assert()`, `console.warn()`, `console.clear()`, `console.time()`, etc., etc.

## 10 Hold Shift to Check Multiple Checkboxes

Tricky one! A nifty bit of code allowing us to hold shift to select multiple check boxes. A logic puzzle.

## 11 Custom HTML5 Video Player

Fun to build a web player from the ground up. Just like we used to do back in the day in Director!
This one would have been good to know when I was still teaching. Building a fairly decent set of video player controls for HTML5 video. Lots of clever tricks used.

![](https://javascript30.com/images/JS3-social-share.png)

## 12 Key Sequence Detection

Boring, key detection algo. Could have been part of a longer module, but they can't all be zingers.

## 13 Slide in on Scroll

Fun use of scrolling events to create a bit of animation in the browser with sliding images. Again, reminds me of Director!

## 14 Object and Arrays - Reference VS Copy

Useful reminder of when objects and arrays make copies vs. references.

## 15 LocalStorage and Event Delegation

HALFWAY! The `localStorage` stuff was pretty straightforward, but the event delegation stuff was very interesting. Combining the two we get a list that is updatable and storable. Event listeners rule! TODO: Make buttons that say "clear," "check all" and "uncheck all" and get them to work.

## 16 CSS Text Shadow Mouse Move Effect

Simple fun one! How to use the offset to create a fun shadow effect based on mouse movement.

## 17 Sorting Band Names Without Articles

Shows how to use `sort`, `regex`, and `map` to take a list of band names and sort it without -- wait for it! -- articles. Cool trick.

## 18 Adding Up Times With Reduce

`map`, `reduce` and some nifty math tricks used to take all of the individual times in a 58 video playlist and output them as one big total time.

## 19 Unreal Webcam Fun

The way Wes describes to access the video player is [deprecated](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject), but fixed in my code. Sadly this has nothing to do with the Unreal game engine!

Super cool lesson though. Wes shows us how to create video filters. I did not realize JS was fast enough to do real-time image filtering...goes to show what I know. Also cool because it shows how to access the camera, and probably forms the basis of my stop-motion animation engine.

## 20 Native Speech Recognition

Speech recognition in the browser! Now I can spy on my neighbors!

## 21 Geolocation

How to get Geolocation working with JS and an iPhone. I did not know the iPhone can simulate location, like you're walking around or driving around somewhere, great feature!

## 22 Links

Not a problem I've ever tried to solve but another great reason to know your selectors and know them cold.

## 23 Speech Synthesis

Used to be you had to insert another board into your computer if you wanted speech synthesis, now it runs right in the browser! A very fun and interesting demo of how to do it.

## 24 Sticky Nav

How to build the sticky nav! Every web dev's dream. Todo: the logo does not animate when the navigation is restored. A few things didn't go the way Wes suggested.

## 25 Event Capture, Propagation, Bubbling and Once

Wes takes us through the basics of events propagation.

## 26 Stripe Follow Along Dropdown

Finishing what we started in #24. Looks pretty cool! Todo: why does the animation require the change of both display and opacity?

## 27 Click and Drag to Scroll

Mouse events! Use them to build a sliding carousel. My elephant walk code is weak.

## 28 Video Speed Controller UI

We build a video speed controller UI. A pretty decent exercise in tying a few things together but I think could have come earlier in the series. C'est la vie.

## 29 Countdown Clock

Countdown clock with quick time select buttons and the ability to enter custom times. Covers a lot about both using timers and data portability from one format to another. Cool! Hard to believe there's only one lesson left!

## 30 Wack-a-Mole

Great finish, combining a few different things we learned in the course! Ducky. Great course, glad I did it. TODO: Buff the game, create high score list for localstorage, create game levels, etc...

--

Original Repo README:

# JavaScript30

Starter Files + Completed solutions for the JavaScript 30 Day Challenge.

Grab the course at [https://JavaScript30.com](https://JavaScript30.com)

## Community #JavaScript30 Content

Feel free to submit a PR adding a link to your own recaps, guides or reviews!

- [Arjun Khode’s blog](http://thesagittariusme.blogspot.com/search/label/JS30) about summaries for each day, including fixed glitches, bugs and extra features
- [Nitish Dayal's Text Guides](https://github.com/nitishdayal/JavaScript30) are great for those who like reading over watching
- [Meredith Underell's](http://meredithunderell.com/tag/javascript30/) Quick Lessons Learned
- [Rowan Weismiller's](http://rowanweismiller.com/blog/javascript-30/) Recaps + Lessons Learned
- [Thorsten Frommen](https://tfrommen.de/tag/javascript-30/) shares how he solved the exercises before viewing the answers
- [Soyaine 写的中文指南](https://github.com/soyaine/JavaScript30)包含了过程记录和难点解释
- [Ayo Isaiah's](https://freshman.tech/archive/#javascript30) Recaps and Lessons Learned
- [Adriana Rios](https://stpcollabr8nlstn.github.io/JavaScript30/) shares her alternative solutions
- [Michael Einsohn](http://30daysofjs.michaeleinsohn.com) publishes each challenge after watching the video once
- [Mike Ekkel](https://medium.com/@mike_ekkel/javascript-30-a-30-day-vanilla-js-challenge-6a733fc9f62c#.9frjtaje9)
- [Yusef Habib](https://github.com/yhabib/JavaScript30) lessons and tricks learned, and a [gh-page](https://yhabib.github.io/JavaScript30/) to see working all the mini-projects.
- [Amelie Yeh](https://github.com/amelieyeh/JS30) 30 lessons notes with things I've learned, and those important recaps. and directly view my demos [here](https://amelieyeh.github.io/JS30/) 🇹🇼😄
- [Winar](https://github.com/winar-jin/JavaScript30-Challenge)的 JavaScript30 天挑战，记录练习过程，重难点和其他的解决方案。🎨
- [Rayhatron](https://rayhatron.github.io/blog/) - walkthroughs, recaps and lessons learned.
- [Andrei Dobra](https://github.com/andreidbr/JS30) Full repo with lessons learned and a [gh-page](https://andreidbr.github.io/JS30/) with all the exercises.
- [从零到壹全栈部落](https://github.com/liyuechun/JavaScript30-liyuechun),春哥发起的从零到壹全栈部落，旨在带领大家一起学习，一起输出，文档化，代码化，中文视频化，全栈部落口号：输出是最好的学习方式。
- [Usmaan Ali's](https://github.com/usyyy/javascript/blob/master/JavaScript30/analysis.md) summary of the technical skills learned from each project. He's also posting them as separate blog posts [here](https://medium.com/@usyyy)
- [Axel](https://github.com/afuh/js30)'s lessons learned and a [showcase](https://afuh.github.io/js30/) with the projects.
- [Chris](https://github.com/dwatow/JavaScript30) 中文實戰，目標描述、過程紀錄。
- [Muhammad D. Ramadhan's](https://miayam.github.io) blog. He shamlesly mixed his personal life with 30 day JavaScript challenge so as to increase his learning retention. He also summarised the challenge on [one single page](https://miayam.github.io/js30). Do not read his blog!
- [Lee Keitel's Blog](https://blog.keitel.xyz/categories/javascript30/) includes summaries of each lesson, what I learned from each one, and my thoughts about the topic taught and using them in the future.
- [Dustin Hsiao](https://github.com/dustinhsiao21/Javascript30-dustin) 包含了各篇介紹、 效果 Demo、各篇詳解及記錄過程，附上部分延伸閱讀及[gh-page](https://dustinhsiao21.github.io/Javascript30-dustin/)。
- [GuaHsu](https://github.com/guahsu/JavaScript30) - 紀錄各篇練習過程與心得，並嘗試擴充部分練習，也做了一個包含全部練習的[介紹站](http://guahsu.io/JavaScript30/)🇹🇼
- [Daniela](https://github.com/misslild)'s completed challenges on [GitHub Pages](https://misslild.github.io/WesBos-30day-Coding-challenge/) and [Codepen](https://codepen.io/collection/DapZeP/) :raised_hands: :muscle: :+1:
- [Dmitrii Pashutskii's](https://github.com/guar47) code of all challenges on [GitHub with Pages](https://github.com/guar47/javascript30Summary) and review [blog posts](https://blog.dpashutskii.com/tag/javascript30/)
- [Abid Hasan's](https://github.com/sabidhasan/javascript-30) completion of all challenges. This was awesome!! Learned so much! :+1:
- [Yusong Notes](https://sky172839465.github.io/course/js30) Records Yusong JS 30 days note and demo :star2:
- [Ding's Implementation](https://github.com/Ding-Fan/javascript30) code and online demo
- [Herminio Torres](https://github.com/herminiotorres/JavaScript30) lessons and tricks learned, and a [gh-page](https://herminiotorres.github.io/JavaScript30/) to see working all the mini-projects.
- [Dmytro Borysovskyi](https://github.com/dimabory) says many thanks to for the course to Wes 🤝 It was incredible challenge 👌 The full repository with code available [here](https://github.com/dimabory/dimabory.github.io/tree/gh-pages/src/components/JavaScript30Days) and demos can be reached by the link to [gh-pages](https://dimabory.github.io/#/js30days) 👍👍👍
- [Kizito](https://github.com/akhilome/)'s follow along [repo](https://github.com/akhilome/js30) with [completed challenges](https://akhilome.github.io/js30) and [notes](https://akhilome.github.io/js30/notes).
- [VannTile](https://github.com/vanntile)'s [repository](https://github.com/vanntile/JavaScript30) and [GitHub Pages showcase](https://vanntile.github.io/JavaScript30/). Thank you for a great ⌨️ experience.
- [Alex Kim](https://github.com/Alex-K1m/js30-challenge) completed all the challenges. You can check them out at [github pages](https://alex-k1m.github.io/js30-challenge/).
- [Mikhail Thomas](https://github.com/seckela) created [JS30++](https://github.com/seckela/js30plusplus) to add another level of challenge ontop of this already great course.
- [Ramon Morcillo](https://github.com/reymon359/JavaScript30) finished this awesome challenge!. You can see the showcase of his implementations on [this link](https://reymon359.github.io/JavaScript30/).
- [Santiago Escobar](https://github.com/sescobar99)'s [repository](https://github.com/sescobar99/javascript30-challenge) and [GitHub Pages showcase](https://sescobar99.github.io/javascript30-challenge/).
- [Harry Xie](https://github.com/a90100/JavaScript30) 紀錄 30 天的練習筆記在 [此連結](https://github.com/a90100/JavaScript30).
- [ Van Ribeiro's ](https://vanribeiro-30daysofjavascript.netlify.app/) about demos and recaps. On [GitHub Repo](https://github.com/vanribeiro/30days-Of-JavaScript) there's a summary about what was learned and researched.
- [Mugilan](https://github.com/Mugilan-Codes) is currently doing this challenge. Check out his [Repo](https://github.com/Mugilan-Codes/javascript-30) and the [Live Demo](https://mugilan-codes.github.io/javascript-30/).
- [Eshan Vohra](https://github.com/eshanvohra) is currently doing this challenge. Check out my repo [here](https://github.com/eshanvohra/JavaScript30).
- [RegusAl](https://github.com/RegusAl) is currently doing this challenge. Check out my repo [here](https://github.com/RegusAl/JavaScript30).
- [Ayush Gupta's](https://javascript30.ayushgupta.tech/) implementation of JavaScript30 challenge with some add-ons & updated design.
- [filipkowal](https://github.com/filipkowal/JS30-05-Flex-Panels-Deactivate) Fix to flex panels (5th day) so the panels deactivate when clicked on another one.
- [Mo. Saif's](https://github.com/MoSaif00)note on lessons learned and a [gh-pages showcase](https://mosaif00.github.io/30-Days-JavaScript-Challenge/) for the projects.
- [Stiaannel's](https://stiaannel.co.za/my-projects/javascript30) implementation of the Javascript30 challenge, with small design changes and a couple of extra features.

## Alternative Implementations

Here are some links of people who have done the tutorials, but in a different language or framework:

- [Thomas Mattacchione](https://github.com/tkjone/clojurescript-30) JavaScript 30 written in ClojureScript
- [Dave Follett's](https://github.com/davefollett) blog series, [A New Vue on #JavaScript30](https://davefollett.io/categories/a-new-vue-on-javascript30/), where he explores re-implementing #JavaScript30 projects using [Vue](https://vuejs.org).
- [Akinjide Bankole](https://github.com/akinjide/JS30days) used Node.js with [Jade](http://jadelang.net) to solve the exercises
- [Adrien Poly](https://github.com/adrienpoly/javascript30-stimulus) a modest attempt to convert Drum Kit, Video Player, Local Tapas, TypeHead to [Stimulus JS](https://stimulusjs.org/) framework in a Rails App.
- [Bogdan Lazar](https://github.com/tricinel/TypeScript30) all the JavaScript 30 written in [TypeScript](https://www.typescriptlang.org/)
- [Will Wager](https://github.com/wwags33/JavaScript30) another [TypeScript](https://www.typescriptlang.org/) implementation!
- [marcoSven](https://github.com/marcoSven) solution suggestion for [10 - Hold Shift and Check Checkboxes](https://github.com/marcoSven/JavaScript30/blob/master/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/index-FINISHED.html)
- [ALMaclaine](https://github.com/almaclaine) Javascript 30 written in [Dart 2.0](https://github.com/ALMaclaine/Dart30).

## A note on Pull Requests

These are meant to be 1:1 copies of what is done in the video. If you found a better / different way to do things, great, but I will be keeping them the same as the videos.

The starter files + solutions will be updated if/when the videos are updated.

Thanks!
