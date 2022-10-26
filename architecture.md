**Programación de Videojuegos en Lenguajes Interpretados
Architecture**

# FIESTA PAVANA by ***Triolic Games***

![Imagen Arquitectura](https://raw.githubusercontent.com/AgusCDT/FiestaPavana/main/assets/imagenes/otras/UML.png)

## Descripción ***(se irá desarrollando)***
- **Game:** Se encarga de la configuración del juego dentro de la página web. Llama a las 3 escenas principales (Menu, Shop y el GameLoop).
- **Menu:** Carga la imagen de fondo y llama a los scripts ShopButton y PlayButton.
- **Shop:** Gestiona las características de la Pavana pudiendo subirlas a cambio de monedas, incluyendo la compra de 'objetos escenario'. También llama al script MenuButton.
- **ShopButton:** Carga la escena de Shop.
- **MenuButton:** Carga la escena de Menu.
- **PlayButton:** Carga la escena de Tierra, es decir, inicia el bucle de juego.
- **Tierra:** Carga la Pavana, el movimiento del escenario (parallax) y la posibilidad de aparición de enemigos en el escenario. Tendrá un score, que será la puntuación de la run actual.
- **Pavana:** Gestiona el movimiento de la pavana. Tendrá vidas y un highscore, que se comparará con el score actual para ver si se supera el récord.
- **Parallax:** Gestiona el movimiento del escenario.
- **Enemies:** Tienes las características generales de cualquier tipo de enemigo.
- **StaticEnemy**: Hereda de la clase Enemies, será el enemigo estandar, solo cambiará el aspecto y la hitbox, y el lugar de aparición.
- **MovingEnemy**: Hereda de la clase Enemies, serán enemigos en movimiento y dependiendo del escenario tendrá un comportamiento u otro.
