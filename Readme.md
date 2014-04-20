# Pure Theme for SilverStripe
_(Note: Still in active development - not finished)_

This project uses templates for page types used by the New Zealand Common Web Platform, but substitutes bootstrap for the Pure CSS framework (http://stage.purecss.io/). Compass, Custom css and thirdparty tools are used to bridge the gap. 

It is intended that most colours will be editable from a global variables file. Because of this, some duplication of css will occur. However, the overall size of the compiled CSS is significantly smaller than that produced by CWP's bootstrap.

Accessibility is being taken into account, but otherwise the theme uses the pure defaults with minor tweaking to fit into the cwp template environment.

## Purpose
This theme is intended as a starting point for development, rather than a theme to be used out of the box. Design modifications have been kept to a minimum. Hopefully this should mean you spend less time taking out design features you don't want, and have more time to spend on adding your own themes.

There are a couple of fonts supplied, but they are intended to act as examples only. It should be easy enough to replace both (hint - they are defined in sass/components/_fonts.scss and referenced in sass/var/_globals.scss). 


## Browser support
* Firefox, Chrome
* IE8 and above (intended - but not yet tested)
* Android, iPhone, iPad (intended - but not yet tested)

## Progress

### Done
* All pages work with pure grid
* Generic Page
* Homepage

### TODO

* EventsHolderPage
* NewsHolderPage
* EventsPage
* NewsPage
* Registry Page
* SitemapPage
* Search Results Page
* UserForms
* Browser testing

## How to use
Coming soon

## Screenshot
_HomePage (work in progress)_

![Home page screen shot](https://github.com/adrexia/silverstripe-pure/blob/master/images/pure-wip.png "Home page screen shot")
