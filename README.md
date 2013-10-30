Asteroids
=========

A Javascript game based on the classic of the same name. It implements collision detection and bouncing amongst the 
asteroids, score-keeping, displaying multiple lives, variable speeds and targets fracturing into smaller asteroids upon 
a successful hits. The sprites for the various game components are taken from outside images. The bounce mechanic 
implements a collision-check which looks one-step ahead for each moving-object. Otherwise, the program runs the risk of 
drawing overlapping moving objects and then running the collision-check (and subsequent bounce). This results in static 
objects, as they are perpetually bouncing off one another. This implementation avoids that issue.
