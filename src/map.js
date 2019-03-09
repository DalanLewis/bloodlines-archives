import React, { Component, } from 'react';


class View extends Component {

    state = {
        gameMapWorld: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            0, 1, 1, 1, 1, 0, 1, 1, 1, 0,
            0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
            0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ]
    }

    ctx = null;
    tileW = 40; tileH = 40;
    mapW = 10; mapH = 10;

    currentSecond = 0; frameCount = 0; framesLastSecond = 0;

    // try keeping the game world in state

    buildGameWorld = () => {

    }

    windowOnLoad = () => {
        this.ctx = document.getElementById('game').getContext('2d');
        requestAnimationFrame(this.drawGame);
        this.ctx.font = 'bold 10pt sans-serif';
    }

    drawGame = () => {
        if (this.ctx == null) { return; }
        let sec = Math.floor(Date.now() / 1800);
        if (sec !== this.currentSecond) {
            this.currentSecond = sec;
            this.framesLastSecond = this.frameCount;
            this.frameCount = 1;
        }

        //investigate the switch statement

        else { this.frameCount++; }
        for (let x = 0; x < this.mapW; x++) { let y = 0 }
        switch (this.y) {
            case 0:
                (this.state.gameMapWorld([(this.y * this.mapW) + this.x]))
                this.ctx.fillStyle = '#999999';


                break;

            default:
                this.ctx.fillStyle = '#eeeeee';

        }
    }
    ctxfillStyle = '#ff0000';
    // ctxfillText({ {this.framesLastSecond}, 10, 20});

    requestAnimationFrame() {


    }
    render = () => {
        return (
            <div>
                <body>
                    <canvas id="game" width="400" height="400">{this.drawGame()}</canvas>
                </body>
            </div>
        )
    }

}


export default View