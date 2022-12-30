# Notes

* Initial screen should be main menu
* Player 1 (red) goes first in 1st game
  * Players alternate after 1st game
* When a player wins a game, result card is shown
* Each player has 30 secs per turn. If a player fails to make a move before their timer expires, they lose the game and the other player wins.
* When a player wins, their score should increment by 1.

* Player turn starts. Timer starts counting down from 30.
* Player clicks space
  * If space is empty, player token shows in space & board is updated.
  * If the space is not empty, nothing happens and the player should select another space.
* If the current player does not make a move before time runs out:
  * Set gameOver to true, set the other player as the winner
* Check for game over
  * If the game is over and there is a winner:
    * Set gameOver to true, set the winner to the winning player and increase the winner's score.
  * If the game is over and it is a draw:
    * Set gameOver to true, do not set a winner and do not increase anyone's score.
  * If the game is not over:
    * Update currentPlayer, reset the timer and allow next player to start their turn.
