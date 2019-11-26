# ETC Calcs
Basic Webpage source of the Exposure Time calculator (ETC) for the Liverpool Telescope, adapted for limiting magnitude.


* content.html - Version 2 Calculator using Google Charts
* script.js   - Functions loaded for linking of chained dropdowns and showhide components. Really all of the js needs farming out to this or multiple files.
* NRT_calc.html - Calculator to show the effect of different collecting areas of telescope on the Exposure Time / Limiting Magnitude
* old_calc.html - Baseline HTML calculator for the development of Version 2

## Version 2 Calculator
* Uses google charts to render a Expsoure Time vs Limiting magnitude plot
* Uses 'Chained' to link allowed instrument / binning / filter / arm  options https://appelsiini.net/projects/chained/

## Deployment to Telescope webserver
Modifications for the ETC should always be made and tested locally (not on telescope)

* Clone the repository locally, make changes, test, commit and push back to github.
* On telescope webserver copy the `script.js` and `content.html` files to the correct directory (i.e. `/var/www/html/TelInst/calc`) using standard wget commands.
