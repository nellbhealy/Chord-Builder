Chord Builder Written Report
Created by: Nell Becker, Anna Serenius, and Kirsten Freeman

Intended Audience:
Chord Builder is supposed to be both fun and educational for people of all ages. Our intended audience is people who want to learn more about music in an interactive way. 
This game can be played by those with visual impairments who use a screen reader (we used ChromeVox!) or those with motor impairments. 

Building and Deploying our Project: 
During production, we ran browser-sync in order to deploy our project. 

How to Begin Gameplay:
To get to our game, first navigate to nellbhealy.github.io/Chord-Builder. 
Once you're there, to start the game, press the spacebar. The staff will appear on screen, and you will be given the name of a chord, along with the four notes that make up the chord - but wait, some of the notes may be incorrect! After the notes are loaded onto the staff, each will be played in succession, and then all the notes will be played together. 
To change between the notes of the chord, press the left and right arrow keys. To change a note’s accidental, use the spacebar. 
Whenever the user returns to the root note of the chord, the chord will be played in succession, the same way it was at the beginning of the game. 
To hear the correct notes of the chord being played, press the Enter key. 
Once the user has all the notes in the chord correctly placed with the correct accidentals, the chord will be played in succession again, and then the user will be given a new chord to play.

Objective of the Game:
At the start of the game, the user is given only major (or “happy”) chords to correct. After the user has corrected all of the major chords, he/she will be given minor chords, and then diminished chords. Once you’ve corrected all the different categories of chords, you win! 

Problems Encountered:
During the process of creating this game, we encountered issues with the mp3 files. They all played the notes for different amounts of time, and started at different times (i.e. one file would start at 2 seconds in, another at 4 seconds in, etc.). So, it was a difficult task to trim these files so that they all started and stopped at the same time. 

Future Work:
If we were to keep adding onto this project, we would love to come up with a way for kids to learn notes to different songs, like "Twinkle Twinkle Little Star", "Old McDonald had a Farm", or other nursery-rhyme (or well-known) songs. For this portion of the game, there would be an easy and hard difficulty. For the easy mode, we could have the notes (and song lyrics) on a larger staff, and then highlight in red the notes in the song that are incorrect. We could have the use the exact same controls as this game, where you move between notes with the arrow keys, change note accidentals with the space bar, and hear the correct notes played by pressing enter. Additionally, for the hard mode, we would not identify the incorrect notes in red, but instead make the user listen by ear to figure out which notes are incorrect. 

Frameworks and Libraries used:
We used Phaser to implement this project. Additionally, we would like to acknowledge the University of Iowa's Electronic Music Studios. They have created an online library of piano recordings, and we are very grateful for their decision to make this collection downloadable for free. 
