

# compile an opengl C application on MacOS
gcc -v -framework OpenGL -framework GLUT -o hello hello.c && ./hello