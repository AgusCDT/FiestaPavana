**Programación de Videojuegos en Lenguajes Interpretados
Architecture**

# FIESTA PAVANA by ***Triolic Games*** 

**A modo de leyenda:** 
- Naranja: Game 
- Rosa: Escenas 
- Azul: Componentes
- Verde: Clases hijas(en este caso de Button y Enemies) 


![Imagen Arquitectura](https://raw.githubusercontent.com/AgusCDT/FiestaPavana/main/assets/imagenes/otras/UML.png)

## Descripción
- **Game:** Se encarga de la configuración del juego dentro de la página web. Llama a las 4 escenas principales (Menu, Tierra, Shop y GameOver).
- **Menu:** Primera escena del juego donde iniciamos la carga de datos en la nube, además de los botones de PLAY y SHOP.
- **Tierra:** Carga la Pavana, el paralaje del escenario, la posibilidad de aparición de enemigos, pups(objetos de cambio de escenario) y peces dorados(monedas) según el escenario en el que estemos. Tendremos un HUD que contendrá las vidas de la Pavana, un score de la run actual, un highscore(máxima puntuación obtenida en runs anteriores) y un contador de peces dorados.
- **Shop:** Gestiona las características de la Pavana pudiendo subirlas a cambio de monedas, incluyendo la compra de 'objetos escenario'. Mediante el botón MENU podemos volver a la anterior escena.
- **GameOver:** Escena cargada al morir. Podemos volver al Menu mediante el botón MENU.
- **Button:** Clase padre de todos los botones. Utilizamos botones en todas las escenas excepto la de Tierra.
- **Pavana:** Gestiona el movimiento de la pavana, así como su colisión. Tendrá vidas y un highscore, que se comparará con el score actual para ver si se supera el récord.
- **Parallax:** Gestiona el movimiento del escenario.
- **Transition:** Gestiona la transición entre escenarios mediante fadein/fadeout.
- **Enemies:** Tiene las características generales de cualquier tipo de enemigo.
- **Pups:** Gestiona los objetos que cambian el escenario.
- **Goldenfish:** Gestiona las monedas que podremos conseguir durante las runs.
- **Enemies**: Clase padre de la que heredan todos los enemies. Contiene características comunes a todos.
- **Cloud**: Contiene los métodos para gestionar el guardado en local.
