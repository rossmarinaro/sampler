

module.exports = {__html: `
<svg xml:space="preserve" width="161px" height="120">
<!--  
     Copyright (c)  2005 Lauri Kaila.
     Permission is granted to copy, distribute and/or modify this document
     under the terms of the GNU Free Documentation License, Version 1.2
     or any later version published by the Free Software Foundation;
     with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
     A copy of the license is included in the section entitled "GNU
     Free Documentation License".
     
     
     
     Intented to create a keyboard where key widths are
     accurately in position. 
     
     See http://www.mathpages.com/home/kmath043.htm
     for the math.
     
     This keyboard has following properties (x=octave width).
     1. All white keys have equal width in front (W=x/7).
     2. All black keys have equal width (B=x/12).
     3. The narrow part of white keys C, D and E is W - B*2/3
     4. The narrow part of white keys F, G, A, and B is W - B*3/4
     
 -->
<!--  White keys   -->

<rect id="key1" data="white" class="key" style="fill:white;stroke:black" x="0" y="0" width="23" height="120"/>
<rect id="key2" data="white" class="key" style="fill:white;stroke:black" x="23" y="0" width="23" height="120"/>
<rect id="key3" data="white" class="key" style="fill:white;stroke:black" x="46" y="0" width="23" height="120"/>
<rect id="key4" data="white" class="key" style="fill:white;stroke:black" x="69" y="0" width="23" height="120"/>
<rect id="key5" data="white" class="key" style="fill:white;stroke:black" x="92" y="0" width="23" height="120"/>
<rect id="key6" data="white" class="key" style="fill:white;stroke:black" x="115" y="0" width="23" height="120"/>
<rect id="key7" data="white" class="key" style="fill:white;stroke:black" x="138" y="0" width="23" height="120"/>

<!--  Black keys (overlap with the white keys)  -->

<rect id="key8" data="black" class="key" style="fill:black;stroke:black" x="14.33333" y="0" width="13" height="80"/>
<rect id="key9" data="black" class="key" style="fill:black;stroke:black" x="41.66666" y="0" width="13" height="80"/>
<rect id="key10" data="black" class="key" style="fill:black;stroke:black" x="82.25" y="0" width="13" height="80"/>
<rect id="key11" data="black" class="key" style="fill:black;stroke:black" x="108.25" y="0" width="13" height="80"/>
<rect id="key12" data="black" class="key" style="fill:black;stroke:black" x="134.75" y="0" width="13" height="80"/>
</svg>
`}
