import React, { Component } from 'react';



// https://www.youtube.com/watch?v=BfDUva8MvKw

export default class Canvas extends Component {
    constructor(props) {
        //Look up super props
        super(props);
        this.state = {
            hexSize: 30
        }
    }


    componentWillMount() {
        this.setState({
            canvasSize: { canvasWidth: 800, canvasHeight: 600 }
        })
    }

    componentDidMount() {
        const { canvasWidth, canvasHeight } = this.state.canvasSize;
        this.canvasHex.width = canvasWidth
        this.canvasHex.height = canvasHeight;
        this.drawHexes();
        // this.drawHex(this.canvasHex, { x: 50, y: 50 })
    }

    drawHexes() {
        for (let r = 0; r <= 10; r++) {
            for (let q = 0; q <= 10; q++) {
                console.log(r, q)
                let center = this.hexToPixel(this.hex(q, r));
                this.drawHex(this.canvasHex, center);
                this.drawHexCoordinates(this.canvasHex, center, this.hex(q, r));
            }
        }
    }

    drawHex(canvasID, center) {
        for (let i = 0; i <= 5; i++) {
            let start = this.hexCornerCoords(center, i)
            let end = this.hexCornerCoords(center, i + 1);
            this.drawLine(canvasID, { x: start.x, y: start.y }, { x: end.x, y: end.y })
           
        }
    }

    hexCornerCoords = (center, i) => {
        let angle_deg = 60 * i - 30;
        let angle_rad = Math.PI / 180 * angle_deg;
        let x = center.x + this.state.hexSize * Math.cos(angle_rad);
        let y = center.y + this.state.hexSize * Math.sin(angle_rad);
        return this.Point(x, y)
    }

    hexToPixel = (h) => {
       let x = this.state.hexSize * Math.sqrt(3) * (h.q + h.r/2);
       let y = this.state.hexSize * 3/2 * h.r;
        return this.Point(x, y)
    }

    Point(x, y) {
        return { x: x, y: y }
    }

    hex(q, r) {
        return { q: q, r: r }
    }

    drawLine(canvasID, start, end) {
        const ctx = canvasID.getContext("2d")
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
        ctx.closePath();
    }

    drawHexCoordinates(canvasID, center, h) {
        const ctx = canvasID.getContext("2d");
        ctx.fillText(h.q, center.x-15, center.y );
        ctx.fillText(h.r, center.x+15, center.y)
    }

    render() {
        return (
            <div>
                <canvas ref={canvasHex => this.canvasHex = canvasHex}>

                </canvas>
            </div>
        )
    }

}

// hex_corner = (center, size) => {

// }
