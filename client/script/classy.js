

function getDistance(p1, p2) {
    var dLat, dLon, deg2rad, a;

    deg2rad = function(deg) {
        return deg * (Math.PI / 180);
    };

    dLat = deg2rad(p2[0] - p1[0]);
    dLon = deg2rad(p2[1] - p1[1]);
    a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(p1[0])) * Math.cos(deg2rad(p2[0])) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    return 3960 * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}
