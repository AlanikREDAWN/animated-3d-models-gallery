const ws = new Zdog.Illustration({
    element: ".person",
    zoom: 10,
    resize: true,
    dragRotate: true
})

const head = new Zdog.Shape({
    addTo: ws,
    stroke: 12,
    color: "gold",
})

const eye = new Zdog.Ellipse({
    addTo: head,
    diameter: 2,
    quarters: 2,
    translate: { x: -2, y: 1, z: 4.5 },
    rotate: { z: 230 },
    color: "eggplant",
    stroke: 0.5,
    backface: false,
})

ws.updateRenderGraph()

function animateModel() {
    // ws.rotate.y += 0.01
    // ws.rotate.x += 0.01
    ws.updateRenderGraph()
    requestAnimationFrame(animateModel)
}

animateModel()