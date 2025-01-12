namespace GardenSimulator {
    export class Tomato extends PlantedField {
        constructor(_position: Vector, _size: Vector) {
            super(_position, _size, 40, 90, 30, 25, 75, 13, 25, 4);
        }

        private drawLeaf(_position: Vector, _angle: number) {
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.rotate(_angle);

            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(0, -5, 7, -3.5, 14, 0);
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(0, 5, 7, 3.5, 14, 0);
            crc2.fillStyle = "#4D9A2A";
            crc2.fill();

            crc2.restore();
        }

        draw(): void {
            super.draw();

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size.x / 100, this.size.y / 100);

            // Tomate malen
            if (this.ageInDays < this.growthDurationInDays / 3) {
                // kleine tomate
                crc2.beginPath();
                crc2.moveTo(45, 100);
                crc2.bezierCurveTo(45, 90, 50, 80, 55, 70);
                crc2.lineWidth = 1.5;
                crc2.strokeStyle = "#72B05B";
                crc2.stroke();

                this.drawLeaf(new Vector(54, 71), 3.7);
                this.drawLeaf(new Vector(55, 71), 0.1);
            } else if (this.ageInDays < this.growthDurationInDays) {
                // mittlere Tomate
                crc2.beginPath();
                crc2.moveTo(45, 100);
                crc2.bezierCurveTo(55, 45, 55, 30, 63, 20);
                crc2.lineWidth = 1.5;
                crc2.strokeStyle = "#72B05B";
                crc2.stroke();

                this.drawLeaf(new Vector(63, 20), 5.3);
                this.drawLeaf(new Vector(61, 22), 4.1);
                this.drawLeaf(new Vector(62, 23), 0.1);

                crc2.beginPath();
                crc2.moveTo(53, 50);
                crc2.bezierCurveTo(48, 45, 41, 41, 35, 35);
                crc2.stroke();

                this.drawLeaf(new Vector(35, 35), 3.9);
                this.drawLeaf(new Vector(37, 37), 5);
                this.drawLeaf(new Vector(38, 38), 2.9);

                crc2.beginPath();
                crc2.moveTo(53, 55);
                crc2.bezierCurveTo(59, 54, 66, 54, 75, 53);
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(75, 56, 4, 0, 2 * Math.PI);
                crc2.fillStyle = "#9CCF8B";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(65, 57, 4, 0, 2 * Math.PI);
                crc2.fillStyle = "#9CCF8B";
                crc2.fill();
            } else {
                // große Tomate
                crc2.beginPath();
                crc2.moveTo(45, 100);
                crc2.bezierCurveTo(55, 45, 55, 30, 63, 20);
                crc2.lineWidth = 1.5;
                crc2.strokeStyle = "#72B05B";
                crc2.stroke();

                this.drawLeaf(new Vector(63, 20), 5.3);
                this.drawLeaf(new Vector(61, 22), 4.1);
                this.drawLeaf(new Vector(62, 23), 0.1);

                crc2.beginPath();
                crc2.moveTo(53, 50);
                crc2.bezierCurveTo(48, 45, 41, 41, 35, 35);
                crc2.stroke();

                this.drawLeaf(new Vector(35, 35), 3.9);
                this.drawLeaf(new Vector(37, 37), 5);
                this.drawLeaf(new Vector(38, 38), 2.9);

                crc2.beginPath();
                crc2.moveTo(53, 55);
                crc2.bezierCurveTo(59, 54, 66, 54, 75, 53);
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(75, 58, 6, 0, 2 * Math.PI);
                crc2.fillStyle = "#CA2C00";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(62, 59, 6, 0, 2 * Math.PI);
                crc2.fillStyle = "#CA2C00";
                crc2.fill();
            }

            crc2.restore();
        }
    }
}
