**Programación de Videojuegos en Lenguajes Interpretados
Architecture**

# FIESTA PAVANA by ***Triolic Games***

![Imagen Arquitectura](https://raw.githubusercontent.com/AgusCDT/FiestaPavana/main/assets/imagenes/otras/UML.png)

## Descripción ***(se irá desarrollando)***
- **Game:** Se encarga de la configuración del juego dentro de la página web. Llama a las 3 escenas principales (Menu, Shop y el GameLoop).
- **Menu:** Carga la imagen de fondo y llama a los scripts ShopButton y PlayButton.
- **Shop:** Gestiona las características de la Pavana pudiendo subirlas a cambio de monedas. También llama al script MenuButton.
- **ShopButton:** Carga la escena de Shop.
- **MenuButton:** Carga la escena de Menu.
- **PlayButton:** Carga la escena de Tierra, es decir, inicia el bucle de juego.
- **Gameloop:** Carga la Pavana y el movimiento del escenario (parallax).
- **Pavana:** Gestiona el movimiento de la pavana.
- **Parallax:** Gestiona el movimiento del escenario.
