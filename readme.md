# Venti

Venti es un juego tipo blackjack mejorado, diseñado para ser jugado en consola. Es un juego liviano, fácil de entender e indie.

## Características

- **Plataforma**: Terminal (cmd/psh)
- **Peso**: Linux:49MB Win:40MB MacOS:53MB
- **Requerimientos**: Una computadora
- **Tipo de archivo**: Ejecutable (App)

## Plataformas

- **Windows**: Descarga aca https://github.com/nachoofg/venti/raw/main/venti-win.exe
- **Linux**: Descarga aca https://github.com/nachoofg/venti/raw/main/venti-linux
- **MacOS**: Descarga aca https://github.com/nachoofg/venti/raw/main/venti-macos
Sino podes descargar el source y ejecutarlo

## Cómo Jugar

El objetivo del juego es obtener una mano de cartas cuya suma sea lo más cercana posible a 21 sin pasarse. Los jugadores compiten contra el dealer (la banca). Venti incorpora varias mejoras sobre el blackjack tradicional.

### Reglas Básicas

1. **Distribución de Cartas**:
    - El jugador y el dealer reciben dos cartas al inicio.
    - Las cartas del jugador se muestran todas.
    - El dealer muestra solo una de sus cartas, ocultando la otra.

2. **Acciones del Jugador**:
    - **Pedir** (Hit): El jugador puede pedir cartas adicionales para intentar acercarse a 21.
    - **Plantar** (Stand): El jugador puede optar por no pedir más cartas y mantener su mano actual.

3. **Acciones del Dealer**:
    - Una vez que el jugador se planta, el dealer revela su segunda carta y sigue pidiendo cartas hasta que su mano alcance al menos 17 puntos.

4. **Condiciones de Victoria**:
    - Si el jugador obtiene 21 puntos con las dos primeras cartas, gana automáticamente (Blackjack).
    - Si el jugador supera los 21 puntos, pierde (Busted).
    - Si el dealer supera los 21 puntos, el jugador gana.
    - Si el jugador se planta, el dealer juega su turno y el que esté más cerca de 21 gana.

## Cosas por Hacer
* ~~Terminar el Juego Base:~~
* ~~Funcionalidad de Plantar:~~
* ~~Ocultar la Segunda Carta del Dealer:~~
* ~~Finalizar Automáticamente si el Cliente Tiene 21:~~
* ~~Actualización de Cartas del Dealer:~~
* ~~Agregarle un sleep a todas las salidas (creditos/finaliza/pierde/etc)~~
* Agregar dos modos:
	* Venti: blackack mod, incluye:
        - El que esta mas cerca de 21 gana, si uno se pasa en un turno se termina la ronda.
		- repartir aleatoriamente 2 cartas Venti, sumar una en cada turno
		- 5 rondas seguidas
		- 3 turnos
		- cartas:
			- "Decem": Agregar un 10 (k,q,j) al oponente.
			- "Quinque": Agregar un 5 al oponente.
			- "Quis": Agregar un numero aleatorio (1-11) al oponente.
			- "Suitai": Repele la ultima carta Venti llegada del oponente	.
			- "Cancel": Cancela el turno del oponente.
			- "Ardeat": Elimina todas las cartas del oponente.
	* Normal: blackjack de toda la vida

---

Gracias por jugar Venti. ¡Buena suerte!
