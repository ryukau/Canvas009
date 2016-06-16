var canvas = new Canvas(512, 512)

animate()

function animate() {
    updateCanvas()
    requestAnimationFrame(animate)
}

function updateCanvas() {
    var now = Date.now(),
        t = Math.abs(Math.sin(now * 0.000066) * 256) % 256,
        tr = (256 / t),
        ratio = 0.5 + 0.5 * Math.sin(now * 0.00002),
        x0 = canvas.Width / 2,
        y0 = canvas.Height / 2,
        x, y, xc, yc, s, dx, dy, xx, yy, brightness

    for (y = 0; y < canvas.Height; ++y) {
        yc = Math.abs(y - y0)
        for (x = 0; x < canvas.Width; ++x) {
            xc = Math.abs(x - x0)
            s = xc*xc + y*y
            dx = Math.sqrt(Math.abs(s - yc)) * 80
            dy = Math.sqrt(Math.abs(s - xc)) * 80
            xx = interp(xc, dx, ratio)
            yy = interp(yc, dy, ratio)
            a = (xx ^ yy) % t
            brightness = a //Math.sqrt(Math.abs(a*a - yc*yc))
            canvas.setPixel(x, y, brightnessToColor(brightness * tr))
        }
    }
    canvas.put()
}

function brightnessToColor(brightness) {
    return {
        r: 185 - brightness * 0.13,
        g: 134 - brightness * 0.38,
        b: 104 - brightness * 0.86,
        a: 255
    }
}

function interp(a, b, r) {
    return (1 - r) * a + r * b;
}
