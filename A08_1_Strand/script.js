var BeachSceneAnja;
(function (BeachSceneAnja) {
    window.addEventListener("load", handleLoad);
    var canvas;
    var crc2;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        drawSky({ x: 0, y: 0 });
        drawSun({ x: 400, y: 195 });
        drawSea({ x: 0, y: 200 });
        drawBeach({ x: 0, y: 300 });
        drawCloud({ x: 600, y: 125 }, { x: 150, y: 75 });
        drawCloud({ x: 200, y: 145 }, { x: 120, y: 65 });
        drawBush({ x: 60, y: 500 }, { x: 120, y: 100 });
        drawBush({ x: 720, y: 600 }, { x: 180, y: 80 });
        drawBoat({ x: 150, y: 160 }, { x: 1, y: 1 }, "#f3c4cf");
        drawBoat({ x: 600, y: 150 }, { x: 0.5, y: 0.5 }, "#CCBBEE");
        drawTowel2({ x: 300, y: 400 });
        drawPerson({ x: 300, y: 410 }, 'shirt', "#8800FF");
        drawPerson({ x: 410, y: 420 }, 'skirt', '#C4FAF8');
        drawSwimmer({ x: 300, y: 220 }, { x: 0.5, y: 0.5 });
        drawSwimmer({ x: 400, y: 290 }, { x: 1, y: 1 });
        drawSurfBoard({ x: 540, y: 290 });
        drawSurfer({ x: 500, y: 200 });
        drawTowel1({ x: 500, y: 400 });
        drawTowel3({ x: 200, y: 400 });
        drawMoewe({ x: 100, y: 400 });
    }
    function drawSky(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 200);
        crc2.lineTo(800, 200);
        crc2.lineTo(800, 0);
        crc2.closePath();
        var gradient = crc2.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "#0047ab");
        gradient.addColorStop(.5, "#0088FF");
        gradient.addColorStop(1, "#C6E6FB");
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawSea(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 300);
        crc2.lineTo(800, 300);
        crc2.lineTo(800, 0);
        crc2.closePath();
        var gradient = crc2.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "#7bb5d8");
        gradient.addColorStop(.5, "#3976a3");
        gradient.addColorStop(1, "#2bb8c3");
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawBeach(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.bezierCurveTo(200, 100, 600, 130, 800, 40);
        crc2.lineTo(800, 300);
        crc2.lineTo(0, 300);
        crc2.closePath();
        crc2.fillStyle = "#fbdea4";
        crc2.fill();
        crc2.restore();
    }
    function drawSun(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 0, 150, 0, 2 * Math.PI);
        var gradient = crc2.createRadialGradient(0, 0, 75, 0, 0, 150);
        gradient.addColorStop(0, "rgba(255,166,70, 0.75)");
        gradient.addColorStop(1, "rgba(255,166,70, 0)");
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.beginPath();
        crc2.arc(0, 0, 75, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffa646";
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        var nParticles = 90;
        var radiusParticle = 20;
        var particle = new Path2D();
        var gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (var drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            var x = (Math.random() - 0.5) * _size.x;
            var y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawBush(_position, _size) {
        var nParticles = 90;
        var radiusParticle = 20;
        var particle = new Path2D();
        var gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "#183812");
        gradient.addColorStop(1, "#407029");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (var drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            var x = (Math.random() - 0.5) * _size.x;
            var y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawBoat(_position, _scale, _boatColor) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.scale(_scale.x, _scale.y);
        crc2.beginPath();
        crc2.moveTo(0, 75);
        crc2.bezierCurveTo(25, 130, 75, 130, 100, 75);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _boatColor;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(50, 25);
        crc2.lineTo(75, 50);
        crc2.lineTo(50, 50);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#fffff0";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(50, 75);
        crc2.lineTo(50, 25);
        crc2.strokeStyle = "#5b3a29";
        crc2.stroke();
        crc2.restore();
    }
    function drawPerson(_position, _clothes, _color) {
        // Hände
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(12.5, 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(62.5, 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        // Füße
        crc2.beginPath();
        crc2.arc(30, 88, 5.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(45, 88, 5.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        //shirt/skirt
        crc2.beginPath();
        crc2.moveTo(37.5, 20);
        crc2.lineTo(12.5, 37.5);
        crc2.lineTo(15, 45);
        crc2.lineTo(25, 42);
        if (_clothes === 'shirt') {
            crc2.lineTo(22, 57);
            crc2.lineTo(53, 57);
        }
        else {
            crc2.lineTo(20, 87.5);
            crc2.lineTo(55, 87.5);
        }
        crc2.lineTo(50, 42);
        crc2.lineTo(60, 45);
        crc2.lineTo(62.5, 37.5);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
        if (_clothes === 'shirt') {
            // hose
            crc2.beginPath();
            crc2.moveTo(25, 57);
            crc2.lineTo(27, 87.5);
            crc2.lineTo(35, 87.5);
            crc2.lineTo(36, 63);
            crc2.lineTo(39, 63);
            crc2.lineTo(40, 87.5);
            crc2.lineTo(48, 87.5);
            crc2.lineTo(50, 57);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#343F51";
            crc2.fill();
        }
        // Kopf
        crc2.beginPath();
        crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.restore();
    }
    function drawSwimmer(_position, _scale) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.scale(_scale.x, _scale.y);
        crc2.beginPath();
        crc2.moveTo(37.5, 20);
        crc2.lineTo(12.5, 37.5);
        crc2.lineTo(15, 45);
        crc2.lineTo(25, 42);
        crc2.lineTo(25, 57);
        crc2.lineTo(50, 57);
        crc2.lineTo(50, 42);
        crc2.lineTo(60, 45);
        crc2.lineTo(62.5, 37.5);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(12.5, 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(62.5, 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.restore();
    }
    function drawSurfer(_position) {
        //Kopf
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        //Körper
        //linker Arm
        crc2.beginPath();
        crc2.moveTo(37.5, 20);
        crc2.lineTo(12.5, 37.5);
        crc2.lineTo(15, 45);
        crc2.lineTo(25, 42);
        crc2.lineTo(25, 57);
        crc2.lineTo(50, 57);
        crc2.lineTo(50, 42);
        crc2.lineTo(60, 45);
        crc2.lineTo(62.5, 37.5);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(12.5, 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(62.5, 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        //Badehose
        crc2.beginPath();
        crc2.moveTo(25, 57);
        crc2.lineTo(27, 75);
        crc2.lineTo(35, 75);
        crc2.lineTo(36, 63);
        crc2.lineTo(39, 63);
        crc2.lineTo(40, 75);
        crc2.lineTo(48, 75);
        crc2.lineTo(50, 57);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#E71837";
        crc2.fill();
        //Bein links
        crc2.beginPath();
        crc2.moveTo(28, 75);
        crc2.lineTo(28, 90);
        crc2.lineTo(34, 90);
        crc2.lineTo(34, 75);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        //Bein rechts
        crc2.beginPath();
        crc2.moveTo(46.5, 75);
        crc2.lineTo(46.5, 90);
        crc2.lineTo(40, 90);
        crc2.lineTo(40, 75);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        //Füße
        crc2.beginPath();
        crc2.arc(30, 88, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(45, 88, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.restore();
    }
    //Surfboard
    function drawSurfBoard(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.ellipse(0, 0, 25, 60, Math.PI / 3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FFFF99";
        crc2.fill();
        crc2.restore();
    }
    //Handtuch
    function drawTowel1(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(50, 0);
        crc2.lineTo(125, 75);
        crc2.lineTo(50, 75);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FEA95E";
        crc2.fill();
        crc2.restore();
    }
    function drawTowel2(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(75, 0);
        crc2.lineTo(125, 0);
        crc2.lineTo(125, 75);
        crc2.lineTo(50, 75);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#CFF0CC";
        crc2.fill();
        crc2.restore();
    }
    function drawTowel3(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(75, 0);
        crc2.lineTo(125, 0);
        crc2.lineTo(75, 75);
        crc2.lineTo(0, 75);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FBCCD1";
        crc2.fill();
        crc2.restore();
    }
    function drawMoewe(_position) {
        crc2.beginPath();
        crc2.moveTo(650, 100);
        crc2.quadraticCurveTo(685, 75, 700, 100);
        crc2.moveTo(700, 100);
        crc2.quadraticCurveTo(720, 75, 750, 100);
        crc2.moveTo(750, 100);
        crc2.quadraticCurveTo(720, 86, 700, 100);
        crc2.moveTo(700, 100);
        crc2.quadraticCurveTo(685, 86, 650, 100);
        crc2.strokeStyle = "#000000";
        crc2.fillStyle = "#FFFFFF";
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        // crc2.moveTo(_position.x, _position.y);
        crc2.arc(_position.x + 600, _position.y - 300, 8, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
})(BeachSceneAnja || (BeachSceneAnja = {}));
//# sourceMappingURL=script.js.map