**Programación de Videojuegos en Lenguajes Interpretados
Game Design Document**

- Agustín Castro De Troya(acastrod@ucm.es)
- Pablo Cerrada Vega(pablce01@ucm.es)
- Pablo Cao Calvo(pablocao@ucm.es)
- Beatriz Rubio Rodríguez(berubi03@ucm.es) 


# FIESTA PAVANA by ***Triolic Games***
 

![Imagen Triolic Games](https://raw.githubusercontent.com/AgusCDT/FiestaPavana/blob/main/assets/imagenes/otras/TRIOLIC.png)


### 1. Ficha técnica
- **Título:** Fiesta Pavana 
- **Género:** Acción
- **Target:** Casual Gamers
- **Plataforma:** PC
- **Modo de juego:** Solitario


### 2. Descripción
Fiesta Pavana es un juego donde el jugador controla una pavana (gaviota) por diferentes escenarios con temática animada. ¿El objetivo? Sortear enemigos y obstáculos para evitar la derrota y llegar lo más lejos posible.


### 3.	Jugabilidad

#### 3.1. Movimiento del personaje
El movimiento del personaje estará acotado por la pantalla y controlado por WASD. Habrá una pequeña aceleración al iniciar el movimiento. Además podremos ir en diagonal.

#### 3.2. Cámara
La cámara estará fija y será el escenario el que se desplace horizontalmente.

#### 3.3. Mecánicas del jugador
La mecánica principal es la de movimiento, teniendo además una mecánica secundaria que es la recogida de monedas a través de peces dorados.

#### 3.4. Mecánicas de escenario
La mecánica principal del escenario es un scroll lateral hacia la izquierda, moviéndose con una velocidad incremental a lo largo de la partida. El escenario irá transformándose cuando la pavana recoge un power-up, dando lugar a diferentes lugares y obstáculos:
- **Flotador:** a la pavana se le pondrá un flotador y el escenario cambia a uno sobre el mar.
- **Casco de astronauta:** le servirá a la pavana para viajar a un escenario en el espacio.
- **Camiseta hawaiana:** la vestirá la pavana en un escenario estático con temática de fiesta.
En cuanto a los obstáculos, irán apareciendo de manera aleatoria en los diferentes escenarios, como carteles en la carretera o barcos en el mar.


#### 3.5. Enemigos
Diferenciaremos obstáculos de enemigos en que estos no serán estáticos y tendrán otras características como el desplazamiento vertical o mayor velocidad de desplazamiento.
Aparecerán también en los diferentes escenarios, algunos son: tiburones bajo el mar, asteroides en el espacio o coches en la ciudad.




### 4. Diseño de nivel
#### 4.1. Imagen y explicación de los escenarios


- Tierra: escenario en el que la pavana viajará por tierra firme. Será el nivel principal y desde donde partiremos a los demás escenarios. Habrá coches, carteles de carretera, globos...


- Mar: escenario ubicado sobre el mar. Habrá barcos, peces, aves rapaces...


- Espacio exterior: nos iremos al espacio donde habrá obstáculos como planetas y asteroides además de ovnis como enemigos.


- Discoteca(Hawaii): nivel estático sin scroll donde solo habrá monedas para recolectar y todos los power-ups.


![Imagen Escenario Tierra](https://raw.githubusercontent.com/AgusCDT/FiestaPavana/blob/main/assets/escenarios/Tierra/Carretera/Carretera.jpg)



#### 4.2. Generación de escenarios
Para tener un escenario fluido generamos a la derecha de la pantalla un frame de cada nivel, es decir tendremos una colección de 4 imágenes en vertical pegadas entre sí. Para dar cierta variedad al escenario crearemos distintos frames para cada altura y escenario con detalles distintos en cada uno, después escogeremos uno al azar de entre todos los posibles para cada nivel y lo instanciamos a la derecha de la pantalla para garantizar la continuidad del escenario. Para ejemplificar esto imaginemos que tenemos 3 frames distintos para cada nivel y escenario, para cada altura escogemos al azar un frame y el resultado podría quedar de arriba a abajo: espacio nº1, atmósfera nº3, ciudad nº3x



### 5.	HUD
#### 5.1. Mockup del HUD

#### 5.2. Explicación de los elementos del HUD y su funcionamiento**

Plumas: vidas que tiene el personaje.
Record: puntuación máxima que ha alcanzado el jugador en las partidas jugadas.
Puntuación: puntuación de la partida actual.
Peces dorados: contador de peces conseguidos.



### **6. Visual**
El videojuego tiene un estilo de dibujo animado, ya que la escultura elegida proviene de un cómic y queríamos que nuestro proyecto tuviera dicho estilo. Además esta estética más familiar está enfocada a todos los públicos.

Los recursos estéticos se conseguirán mediante la página web “Flaticon” y de nuestra encargada de arte. Algunos ejemplos visuales serían:


### **7. Contenido**

#### **7.1. Entidades**

| Nombre    | Descripción | Tipo | Escenario |
|-----------|:-----------:|:----:|----------:|
|Pavana     |Es el personaje que manejamos durante el juego. Movimiento uniformemente acelerado hacia arriba, abajo, izquierda y derecha.|Protagonista|Todos|
|Halcones   |
|Ovnis      |
|Coches     |
|Islote     |
|Avioneta   |
|Carteles   |
|Barcos     |
|Asteroides |
|Globo      |
|Flotador   |
|Casco Astronauta|
|Camisa Hawaiiana|
|Peces Dorados|




#### **7.2. Tienda del juego**

En la tienda se podrá mejorar distintas características para poder obtener un mejor récord y se recompense al jugador perseverante.
Se podrán mejorar la velocidad de la pavana, el número de vidas, y la frecuencia de aparición de los power-ups a cambio de peces dorados (monedas) que se recolectan en las runs.
Al elegir una opción se pedirá una confirmación de compra para no hacer compras sin querer.


### **8. Referencias**

**Flappy Bird**
- **Género:** Acción
- **Modo de Juego:** Solitario 
- **Plataforma:** PC



**Dinosaurio de Chrome**
- **Género:** Acción
- **Modo de Juego:** Solitario
- **Plataforma:** PC


