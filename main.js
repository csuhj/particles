var ctx;
var size;
var dragFactor;
var gravity;
var floor;
var ceiling;

var particles;
var addNewParticles;
var particleSourcePoint;

function main() {
    ctx = getContext("canvas");
    size = getWidthAndHeight("canvas");
    floor = size.height;
    ceiling = 0;
    dragFactor = 0.03;
    gravity = 0.3;
    addNewParticles = false;
    particleSourcePoint = {x: size.width / 2, y: size.height / 2 };

    particles = new Array()
    for (var i=0; i<100; i++) {
        particles.push(createParticle(particleSourcePoint));
    }

    window.requestAnimationFrame(drawFrame);
}

function toggleAddNewParticles() {
    addNewParticles = !addNewParticles;
}

function mouseMove(e) {
    particleSourcePoint = getMouseEventPositionRelativeToElement(e);
}

function drawFrame() {
    ctx.clearRect(0, 0, size.width, size.height);

    for (var i=0; i<particles.length; i++) {
        var particle = particles[i];

        drawParticle(ctx, particle);
        particle.move();
        
        if (!particle.isInRectangle(0, 0, size.width, size.height + 20)) {
            particles.splice(i, 1);
        }
    }

    if (addNewParticles) {
        particles.push(createParticle(particleSourcePoint));
    }

    window.requestAnimationFrame(drawFrame);
}

function createParticle(point) {
    var velX = getRandom(-10, 10);
    var velY = getRandom(-10, 10);
    var hue = getRandomInteger(0, 360)
    return new Particle(point.x, point.y, velX, velY, hue);
}

function drawParticle(ctx, particle) {
    ctx.fillStyle = 'hsl('+particle.hue+', 100%, 50%)';
    ctx.fillRect(particle.x, particle.y, 5, 5);
}