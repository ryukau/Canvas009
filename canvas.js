class Canvas {
    constructor(width, height) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext("2d");
        this.imageData = this.context.getImageData(0, 0, width, height)
        this.pixels = this.imageData.data;
        document.body.appendChild(this.canvas);
    }

    get Width() {
        return this.canvas.width;
    }

    get Height() {
        return this.canvas.height;
    }

    get currentPixels() {
        this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        this.pixels = this.imageData.data;
        return this.pixels;
    }

    set visible(isVisible) {
        if (isVisible) {
            canvas.sytle.display = "inline";
        }
        else {
            canvas.style.display = "none";
        }
    }

    clear(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    resetTransform() {
        this.context.transform(1, 0, 0, 1, 0, 0);
    }

    put() {
        this.context.putImageData(this.imageData, 0, 0);
    }

    setPixel(x, y, color) {
        var index = (y * this.canvas.width + x) * 4;
        this.pixels[index + 0] = color.r;
        this.pixels[index + 1] = color.g;
        this.pixels[index + 2] = color.b;
        this.pixels[index + 3] = color.a;
    }
}
