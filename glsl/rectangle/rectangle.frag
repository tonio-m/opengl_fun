#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


// draw rectangle
float rect(vec2 pixelPosition, vec2 size, vec2 transform) {
    // the step function returns 1.0 if the first argument is greater than the second
    // it can be intepreted as "if pixelPosition.x is greater than transform.x, return 1.0"
    float lower_boundaries = step(transform.x, pixelPosition.x) * step(transform.y, pixelPosition.y);
    float upper_boundaries = step(pixelPosition.x,transform.x + size.x) * step(pixelPosition.y,transform.y + size.y);
    return lower_boundaries * upper_boundaries;
}

void main() {
    // gl_FragCoord is a special variable that holds the pixel coordinate
    vec2 position = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    float rectangle = rect(position, vec2(0.3, 0.5), vec2(0.25,0.25));

    color = vec3(rectangle);

    gl_FragColor = vec4(color, 1.0);
}