/*
You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane. Multiple points can have the same coordinates.

You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle centered at (xj, yj) with a radius of rj.

For each query queries[j], compute the number of points inside the jth circle. Points on the border of the circle are considered inside.

Return an array answer, where answer[j] is the answer to the jth query.

Constraints:

    1 <= points.length <= 500
    points[i].length == 2
    0 <= x​​​​​​i, y​​​​​​i <= 500
    1 <= queries.length <= 500
    queries[j].length == 3
    0 <= xj, yj <= 500
    1 <= rj <= 500
    All coordinates are integers.

*/

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    let matches = [];
    for(let i = 0; i < queries.length; i++){
        count = 0;
        let circle = queries[i];
        let centerX = circle[0];
        let centerY = circle[1];
        let radius = circle[2];
        for(let j = 0; j < points.length; j++){
            let pointX = points[j][0];
            let pointY = points[j][1];

            if(Math.abs(pointX - centerX) ** 2 + Math.abs(pointY - centerY) ** 2 <= radius ** 2) {
                count++
            }
        }
        matches.push(count);
    }
    return matches;

};

/*
circle [2,3,1];
What points fit in it?
[3,3]
[2,4]
[1,3]
[2,2]

So math wise need to add and subtract the radius to each x and y seperately

[x + radius, y]
[x - radius, y]
[x, y + radius]
[x, y - radius]

if(x - radius < pointX < x + radius) {
    if(pointY < y) {
        match++;
        continue;
    }
}

if(y - radius < pointY < y + radius) {
    if(pointX < x) {
        match++;
    }
}

[1,1,2]
[3,2] <- outside
[3,1]
[1,3]
[-1, 1]
[1, -1]

centerX - pointX + centerY - pointY <= radius

NOTE: needed the distance between two points formula here. That is what I missed. It is
Math.sqrt((x2-x1)**2+(y2-y1)**2)
*/