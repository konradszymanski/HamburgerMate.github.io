# HamburgerMate.github.io
Examples of hamburger menus for everyone

[link to menus!](https://konradszymanski.github.io/HamburgerMate.github.io)

## INSTRUCTION

- Copy the HTML code and change name to the name of hamburger: 
```
 <div class="hamburger-menu" id="hamburger">
        <div class="line name1"></div>
        <div class="line name2"></div>
        <div class="line name3"></div>
 </div>
```
- Copy JS code and add to your script:
```
  document.querySelectorAll('.hamburger-menu').forEach(hamburger => {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle("rotHmb");
    })
  })
  ```
  - Find the right class and add to your styles:
  ```
  /* rotate */

.rotHmb .line-1 { transform: rotateZ(-405deg) translate(-9px, 9px); } .rotHmb .line-2 { opacity: 0; } .rotHmb .line-3 { transform: rotateZ(405deg) translate(-7px, -7px); }
```
```
/* rotate2 */

.rotHmb .rotate21 { transform: rotateZ(90deg) translate(12px, 12px); } .rotHmb .rotate22 { opacity: 1; transform: rotateZ(450deg) translate(0px, 0px); } .rotHmb .rotate23 { transform: rotateZ(90deg) translate(-12px, -12px); }
```
```
/* triangle */

.rotHmb .triangle1 { transform: rotateZ(58deg) translate(5px, 15px); } .rotHmb .triangle2 { opacity: 1; transform: rotateZ(360deg) translate(0px, -15px); } .rotHmb .triangle3 { transform: rotateZ(-58deg) translate(15px, 2px); }

```
```
/* middleDown */

.rotHmb .middleDown1 { transform: rotateZ(90deg) translate(14px, 12px); } .rotHmb .middleDown2 { opacity: 1; transform: rotateZ(450deg) translate(10px,0px); } .rotHmb .middleDown3 { transform: rotateZ(-90deg) translate(9px, 12px); }
```
```
/* widthReduce */

.rotHmb .widthReduce1 { width: 80%; } .rotHmb .widthReduce2 { opacity: 1; width: 60%; } .rotHmb .widthReduce3 { width: 40%; }
```
```
/* widthVertical */

.rotHmb .widthVertical1 { width: 80%; transform: rotateZ(90deg) translate(10px, -12px); } .rotHmb .widthVertical2 { opacity: 1; width: 60%; transform: rotateZ(450deg) translate(-5px, 0px); } .rotHmb .widthVertical3 { width: 40%; transform: rotateZ(90deg) translate(-21px, 12px); }
```
