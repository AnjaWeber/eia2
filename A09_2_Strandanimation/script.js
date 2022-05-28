var BeachSceneAnimationAnja;
(function (BeachSceneAnimationAnja) {
    window.addEventListener("load", handleLoad);
    var canvas;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        BeachSceneAnimationAnja.crc2 = canvas.getContext("2d");
        var sky = new BeachSceneAnimationAnja.Sky(new BeachSceneAnimationAnja.Vector(0, 0));
        var sun = new BeachSceneAnimationAnja.Sun(new BeachSceneAnimationAnja.Vector(400, 195));
        var sea = new BeachSceneAnimationAnja.Sea(new BeachSceneAnimationAnja.Vector(0, 200));
        var beach = new BeachSceneAnimationAnja.Beach(new BeachSceneAnimationAnja.Vector(0, 300));
        var cloud1 = new BeachSceneAnimationAnja.Cloud(new BeachSceneAnimationAnja.Vector(600, 125), new BeachSceneAnimationAnja.Vector(150, 75));
        var cloud2 = new BeachSceneAnimationAnja.Cloud(new BeachSceneAnimationAnja.Vector(200, 145), new BeachSceneAnimationAnja.Vector(120, 65));
        var boat1 = new BeachSceneAnimationAnja.Boat(new BeachSceneAnimationAnja.Vector(250, 180), new BeachSceneAnimationAnja.Vector(-1, 1), "#f3c4cf");
        var boat2 = new BeachSceneAnimationAnja.Boat(new BeachSceneAnimationAnja.Vector(400, 155), new BeachSceneAnimationAnja.Vector(0.5, 0.5), "#CCBBEE");
        var person1 = new BeachSceneAnimationAnja.Person(new BeachSceneAnimationAnja.Vector(300, 410), "shirt", "#8800FF");
        var person2 = new BeachSceneAnimationAnja.Person(new BeachSceneAnimationAnja.Vector(410, 420), "skirt", "#C4FAF8");
        var swimmer1 = new BeachSceneAnimationAnja.Swimmer(new BeachSceneAnimationAnja.Vector(300, 220), new BeachSceneAnimationAnja.Vector(0.5, 0.5));
        var swimmer2 = new BeachSceneAnimationAnja.Swimmer(new BeachSceneAnimationAnja.Vector(400, 290), new BeachSceneAnimationAnja.Vector(1, 1));
        var surfboard = new BeachSceneAnimationAnja.Surfboard(new BeachSceneAnimationAnja.Vector(540, 290));
        var surfer = new BeachSceneAnimationAnja.Surfer(new BeachSceneAnimationAnja.Vector(500, 200));
        var moewe1 = new BeachSceneAnimationAnja.Moewe(new BeachSceneAnimationAnja.Vector(650, 100), new BeachSceneAnimationAnja.Vector(1, 1));
        var moewe2 = new BeachSceneAnimationAnja.Moewe(new BeachSceneAnimationAnja.Vector(600, 400), new BeachSceneAnimationAnja.Vector(1.5, 1.5));
        var moewe3 = new BeachSceneAnimationAnja.Moewe(new BeachSceneAnimationAnja.Vector(600, 75), new BeachSceneAnimationAnja.Vector(0.5, 0.5));
        var moewe4 = new BeachSceneAnimationAnja.Moewe(new BeachSceneAnimationAnja.Vector(700, 60), new BeachSceneAnimationAnja.Vector(0.7, 0.7));
        var moewe5 = new BeachSceneAnimationAnja.Moewe(new BeachSceneAnimationAnja.Vector(100, 75), new BeachSceneAnimationAnja.Vector(0.8, 0.8));
        var palmtree1 = new BeachSceneAnimationAnja.PalmTree(new BeachSceneAnimationAnja.Vector(700, 200), new BeachSceneAnimationAnja.Vector(1, 1));
        var palmtree2 = new BeachSceneAnimationAnja.PalmTree(new BeachSceneAnimationAnja.Vector(160, 170), new BeachSceneAnimationAnja.Vector(-0.8, 0.9));
        var bush1 = new BeachSceneAnimationAnja.Bush(new BeachSceneAnimationAnja.Vector(60, 500), new BeachSceneAnimationAnja.Vector(120, 100));
        var bush2 = new BeachSceneAnimationAnja.Bush(new BeachSceneAnimationAnja.Vector(720, 600), new BeachSceneAnimationAnja.Vector(180, 80));
        var moewe6 = new BeachSceneAnimationAnja.Moewe(new BeachSceneAnimationAnja.Vector(490, 550), new BeachSceneAnimationAnja.Vector(1.8, 1.8));
        setInterval(function () {
            sky.draw();
            sun.draw();
            sea.draw();
            beach.draw();
            cloud1.draw();
            cloud1.move(0.02);
            cloud2.draw();
            cloud2.move(0.015);
            swimmer1.draw();
            boat1.draw();
            boat1.move(0.025);
            boat2.draw();
            boat2.move(-0.01);
            person1.draw();
            person2.draw();
            swimmer2.draw();
            surfboard.draw();
            surfer.draw();
            palmtree1.draw();
            palmtree2.draw();
            bush1.draw();
            bush2.draw();
            moewe1.draw();
            moewe1.move(0.02);
            moewe2.draw();
            moewe2.move(0.03);
            moewe3.draw();
            moewe3.move(0.04);
            moewe4.draw();
            moewe4.move(0.05);
            moewe5.draw();
            moewe5.move(0.05);
            moewe6.draw();
            moewe6.move(0.02);
        }, 20);
    }
})(BeachSceneAnimationAnja || (BeachSceneAnimationAnja = {}));
//# sourceMappingURL=script.js.map