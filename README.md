# _Super Galactic Age Calculator_

#### _An application that determines a user’s age based on a planet’s solar years. , Feb 2020_

#### By _**Benjamin Thom**_

## Description

_A user inputs their age in earth years and the application will display the following:_

* The user's age in Mercury years. (A Mercury year is .24 Earth years or approximatley 88 Earth days)
* The user's age in Venus years. (A Venus year is .62 Earth years or approximatley 225 Earth days)
* The user's age in Mars years. (A Mars year is 1.88 Earth years or approximatley 687 Earth days)
* The user's age in Jupiter years. (A Jupiter year is 11.86 Earth years or approximatley 12 Earth days)
* The application also determines how many years a user has left to live on each planet…
* If a user has already surpassed the average life expectancy, the application will display the number of years they have lived past the life expectancy.

## Project Specifications

| Behavior | Input | Output |
|---|:---:|:---:|
|User inputs their date of birth as a number |29|29|
|Return age in Mercury's Earth years|29|120|
|Return age in Venus's Earth years|29|47|
|Return age in Mars's Earth years|29|15|
|Return age in Jupiter's Earth years|29|2|
Return the number of years the user has to live based on U.S. 2020 average lifespan ```78.93``` in Earth years|29|49|
|Return the number of years the user has to live based on U.S. 2020 average lifespan ```78.93``` in Mercury's Earth years|29|207|
|Return the number of years the user has to live based on U.S. 2020 average lifespan ```78.93``` in Venus's Earth years|29|80|
|Return the number of years the user has to live based on U.S. 2020 average lifespan ```78.93``` in Mars's Earth years|29|26|
|Return the number of years the user has to live based on U.S. 2020 average lifespan ```78.93``` in Jupiter's Earth years|29|4|
|If a user's age surpasses the global average lifespan ```78.93``` it will convert the amount of years they have lived over the average to Earth years|82|-4|
|If a user's age surpasses the global average lifespan ```78.93``` it will convert the amount of years they have lived over the average to Mercury's Earth years|82|-13|
|If a user's age surpasses the global average lifespan ```78.93``` it will convert the amount of years they have lived over the average to Venus's Earth years|82|-4|
|If a user's age surpasses the global average lifespan ```78.93``` it will convert the amount of years they have lived over the average to Mars's Earth years|82|-1|
|If a user's age surpasses the global average lifespan ```78.93``` it will convert the amount of years they have lived over the average to Jupiter's Earth years|82|0|


## Setup/Installation Requirements

_In Terminal:_

* Navigate to where you want this application to be saved, i.e.:
```cd desktop```
* Clone the file from GitHub with HTTPS
```git clone https://github.com/benjamin-thompdx/Epicodus_Super-Galactic-Age-Calculator.git```
* Open file in your preferred text editor
* On Mac: ```open -a {your text editor} Epicodus_Super-Galactic-Age-Calculator```
* On Windows: ```Epicodus_Super-Galactic-Age-Calculator```

_Download Manually:_

* Navigate to https://github.com/benjamin-thompdx/Epicodus_Super-Galactic-Age-Calculator.
* Click green "Clone or Download" button.
* Click "Download ZIP".
* Click downloaded file to unzip.
* Open folder called "galactic-age-calculator".
* Right click "index.html" and select your preferred browser or text editor.

_Note For Editors:_ 
* Once cloned/downloaded, to run and make changes, in the terminal simply run **$ npm install** to download necessary dependencies. Then run **$ npm run build** to create your own dist folder with a bundle.js file.

## Known Bugs

_No known bugs at this time._

## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/benjamin-thompdx/Epicodus_Super-Galactic-Age-Calculator/issues) here on GitHub._

## Technologies Used

* Javascript
* jQuery
* Webpack
* Node.js
* Jest

### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_Benjamin Thom_**