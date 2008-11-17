# Dripping Clock

Dripping Clock is a simple Dashboard widget that displays the current date and
time in a somewhat abstract manner.

## How do I install it?

Simply double-click the Dripping Clock.wdgt file. Note that the extension may
be hidden.

This is meant to be used in Dashboard’s developer mode. If you’re not sure how
to get there, Mac OS X Hints [has a brief guide][moh] 

 [moh]: http://www.macosxhints.com/article.php?story=20050422172929402

## What do the different bars mean?

In order from left to right:
 * second
 * minute
 * hour
 * day of month
 * month
 * day of year

## The bars don’t fit into my display correctly!

So far as I’m aware, Dashboard widgets are not able to change their display
size to dynamically fill the screen. (Please correct me if I’m wrong!)

I use it on an older MacBook, so I’ve set the bars to a height of 800 pixels.
If your display is larger, you can fix it by swapping out the ‘800’ in the
following two files located inside the .wdgt:

 * Info.plist
 * style.css

## Areas for improvement
 * The icon isn’t so hot. I’ll try to upload the .psd file for others to play
with.
 * My JavaScript is almost certainly inefficient or wrong in some way.
