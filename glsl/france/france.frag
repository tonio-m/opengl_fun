#ifdef GL_ES
precision mediump float;
#endif


void main() {
    if (gl_FragCoord.x < 0.5 * 1000.0) {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    } else if ((gl_FragCoord.x > 0.5 * 1000.0) && (gl_FragCoord.x < 0.75 * 1000.0)) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    } else {
        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
    }


}