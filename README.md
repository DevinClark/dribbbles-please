# Dribbbles Please
_A project by Devin Clark_

You're probably thinking "Why should I use this plugin? There are hundreds of Dribbble plugins out there." This is a simple plugin, by design. No fancy stuff. That's exactly what I wanted when I built it, something lean. So… yeah… Use it if you want. Add issues (or even better Pull Requests) if I did something weird or buggy. It happens.

## Getting Started

1. Define a variable `DRIBBBLE_USERNAME` with the username you wish to fetch shots for.
2. Call the `dribbblesPlease` method on the jQuery object you wish to put the shots in and pass it the number of shots you want.
3. ???
4. PROFIT!

**TL;DR**

    var DRIBBBLE_USERNAME = "simplebits";
    $("#js-dribbbles").dribbblesPlease(5);
    
## Dependency
* [jQuery](http://jquery.com)