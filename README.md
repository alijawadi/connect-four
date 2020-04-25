#  Connect Four Challenge!

##### How To Run
All you need is having **nodejs** installed on your machine and running ``node app`` on the project directory.

### Problem
My biggest problem on this challenge was keeping track of the filled circles of each user.

### Solution
What I did was creating a two dimensional array based on the number of cols and rows. Then marked them all as free and when a player was clicking on a circle 

I wood use the class value of the circle to detected the row and the data-x value of the circle's column to detect the column and this way I had the values to detect my circle in the two dimensional array and mark it with the color of the user.

Now I had all the values I need to track the winner, I had to check the array in 3 direction but sometimes I had a bug on the diagonal direction detection, so I made two diagonal direction and there were 4 directions at all. I checked the back and forth this way:

```
horizontal: [  
 back: [0, -1], forth:[0, 1]  
]
```
[Check Out the Related Code](https://github.com/alijawadi/connect-four/master/public/index#L305-L317)

If there was four array elements in a row marked the same color  in any of this directions, the winner is detected.

---
There were some other minor problems which I consider not to mention due to my lack of time I'm really in a hurry right now, sorry.


### Reasoning behind technical choices

The App was so simple I was thinking of using a a simple html formatted file and drag it on the browser. 
But I didn't know where you're going to run it so I used node to have server level security when developing it instead of using local file system: ```file://```
The rest of the app was so simple I didn't need to create multiple files for assets.

If I had more time I would use more beautiful alerts, implement the DRY principle instead of using multiple SVGs, and more functionalities like resetting the game.