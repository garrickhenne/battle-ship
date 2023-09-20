# Battle Ship

## Goal
This project will consist of building a battleship game. Freedom to create UI is up to developer.

## Battleship Rules
Each player has a 10x10 board on which the player is able to place 5 ships:

* A Carrier, which is 5 tiles long
* A Battleship, which is 4 tiles long
* A Cruiser, which is 3 tiles long
* A Submarine, which is 3 tiles long
* A Destroyer, which is 2 tiles long
Each ship can be placed either horizontally or vertically on the board, and cannot be placed partially off the board.

Each tile is denoted by a coordinate, `A-J` for columns and `1-10` for rows

* i.e. the top left corner would be at coordinate `A1`
Each player then takes turns picking a tile on the opposing player’s grid, taking a shot at that tile.

* If the tile contains a ship, the shot is a `HIT`
* If the tile does not contain a ship, the shot is a `MISS`
A ship is sunk if all the tiles for that ship have been marked as a `HIT`.

The game ends when one player has sunk all of the opposing players ships.

## Functional Requirements

### Allow player to start a new game
* This should reset the board and allow the user to place new ships onto the board.  
* Ships should be able to be rotated so they can be either *vertically* or *horizontally* placed.  
* Once the player is content with the ship positioning, they should be able to start the game.  
* _Picking a starting player at random or through an option_.

### Allow the player to take a shot on their turn only.

### Allow the player to play against an AI.

### Have a leaderboard for games against the AI.
* This should show how many games the current player has won against the AI, compared to all players.  
There is no need to have the user log in to accomplish this, just let them pick a username to use.

## Display Requirements

### Players should be able to see the other players board on their own.

Players board should show the following:
* The players ship placement
* Any shots the opposing player has made

The _opponents_ board should show the following:
* Any shots made by the player, and whether it was a `HIT` or a `MISS`

Both boards should show:
* Coordinates of the cells, up to you on how this should be displayed

### The game should show who's turn it currently is, the player or the opponent.

### Show a list of ships for each player
When a ship is destroyed, indicate this in the list of ships.

### Show a log of shots and messages to the player.
This log should show:
* All the shots taken by each player
* A message when a player sinks another ship

```
Player 1 shoots at A1: HIT
Player 2 shoots at B5: MISS
...
Player 1 shoots at A3: HIT
Player 1 has sunk a submarine!
```

## Stretch Goals

### Allow the player to save a replay of the game
You should also allow a player to load a replay and step through each turn.

### Allow the player to setup options before starting the game
* Number of ships
* Number of shots per turn
* Board size

### Allow the user to pick the difficulty of the AI player.

### Allow the player to play against another person on a different computer
This will require you to extend your server-side application which will allow for connection between players.





