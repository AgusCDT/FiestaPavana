**Programación de Videojuegos en Lenguajes Interpretados
Game Design Document**

Agustín Castro De Troya, Pablo Cerrada Vega, 
Pablo Cao Calvo, Beatriz Rubio Rodríguez
Grupo 11
acastrod@ucm.es pablce01@ucm.es pablocao@ucm.es berubi03@ucm.es


# FIESTA PAVANA by ***Triolic Games***
 

![Imagen Triolic Games](https://raw.githubusercontent.com/PabloCerrada/TriolicGames/main/assets/imagenes/TRIOLIC.png)


## ÍNDICE

### 1. Ficha técnica
- **Título:** Fiesta Pavana 
- **Género:** Acción
- **Target:** Casual Gamers
- **Plataforma:** PC
- **Modo de juego:**  Solitario


### 2. Descripción
Fiesta Pavana es un juego donde el jugador controla una pavana (gaviota) por diferentes escenarios con temática animada. ¿El objetivo? Sortear enemigos y obstáculos para evitar la derrota y llegar lo más lejos posible.


### 3.	Jugabilidad
#### 3.1. Movimiento del personaje
El movimiento del personaje estará acotado por la pantalla y controlado por WASD. Habrá una pequeña aceleración al iniciar el movimiento.

#### 3.2. Cámara
La cámara estará fija y será el escenario el que se desplace horizontal o verticalmente.

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


- Tierra


- Mar


- Espacio exterior


- Discoteca(Hawaii)



#### 4.2. Descripción de partida típica



#### 4.3. Generación de escenarios
Para tener un escenario fluido generamos a la derecha de la pantalla un frame de cada nivel, es decir tendremos una colección de 4 imágenes en vertical pegadas entre sí. Para dar cierta variedad al escenario crearemos distintos frames para cada altura y escenario con detalles distintos en cada uno, después escogeremos uno al azar de entre todos los posibles para cada nivel y lo instanciamos a la derecha de la pantalla para garantizar la continuidad del escenario. Para ejemplificar esto imaginemos que tenemos 3 frames distintos para cada nivel y escenario, para cada altura escogemos al azar un frame y el resultado podría quedar de arriba a abajo: espacio nº1, atmósfera nº3, ciudad nº3x



### 5.	HUD
#### 5.1. Mockup del HUD
#### 5.2. Explicación de los elementos del HUD y su funcionamiento**

Plumas: vidas que tiene el personaje.
Record: puntuación máxima que ha alcanzado el jugador en las partidas jugadas.
Puntuación: puntuación de la partida actual.
Peces dorados: contador de peces conseguidos.



### **6. Visual**


### **7. Contenido**

| Nombre    | Descripción | Tipo | Escenario |
|-----------|:-----------:|:----:|----------:|
|Pavana     |
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

#### **7.1. Pavana y enemigos**


- **Pavana:** es el personaje que manejamos durante el juego. Movimiento uniformemente acelerado hacia arriba, abajo, izquierda y derecha.


- **Halcones:** aves un poco más grandes que las gaviotas que realizan un movimiento vertical. Las encontramos en el mar.


- **Ovnis:** naves que hacen un movimiento vertical. Los encontramos en el espacio.


- **Coches:** vehículos que van a una velocidad mayor que el escenario. Los encontramos en las carreteras y ciudades.




#### **7.2. Obstáculos**


- **Islote:** montículo de tierra con diferentes estructuras. Aparece en el mar y habrá que esquivarlo por arriba.


- **Avioneta:** aparece en el escenario marítimo, en el cielo. 


- **Carteles de carretera:** aparece tanto en la ciudad como en la carretera. Los habrá de distintos tipos y tamaños.


- **Barcos:** aparece en el escenario marítimo, sobre el mar. Habrá que pasarlo por arriba.


- **Asteroides:** obstáculo que contará con una animación de rodadura. Aparece en el espacio.


- **Globo aerostático:** aparece en la ciudad/carretera, en el cielo.




#### **7.3. Objetos**


- **Flotador:** lo encontraremos en la ciudad/carretera o en la discoteca. Provoca el cambio al escenario marítimo.


- **Casco de astronauta:** lo encontramos en la ciudad/carretera, en el mar o en la discoteca. Con esto iremos al escenario en el espacio.


- **Camiseta Hawaiana:** lo encontramos en cualquier escenario con una baja probabilidad. Cambia al escenario de la discoteca.


- **Peces Dorados:** bonificaciones que aparecen en cualquier escenario y con los que el jugador podrá comprar elementos en la tienda.


#### **7.4. Tienda del juego**

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


