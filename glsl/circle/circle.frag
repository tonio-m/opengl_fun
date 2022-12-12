#ifdef GL_ES
precision mediump float;
#endif

// get most important uniforms
uniform vec2 u_resolution;
uniform vec2 u_mouse;


float circleshape(vec2 position, float radius) {
    // the step function returns 1.0 if the first argument is greater than the second
    return step(length(position), radius);
}

void main() {
    vec2 position = gl_FragCoord.xy / u_resolution;

    float circle = circleshape(position - 0.5, 0.2);

    vec3 color = vec3(circle);

    gl_FragColor = vec4(color, 1.0);
}