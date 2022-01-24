# ETC Calcs
Basic Webpage source of the Exposure Time calculator (ETC) for the Liverpool Telescope, adapted for limiting magnitude.


* content.html - Version 2 Calculator using Google Charts
* etc.js   - Functions loaded for linking of chained dropdowns and showhide components. Really all of the js needs farming out to this or multiple files.
* NRT_calc.html - Calculator to show the effect of different collecting areas of telescope on the Exposure Time / Limiting Magnitude
* old_calc.html - Baseline HTML calculator for the development of Version 2

## Version 2 Calculator
* Uses google charts to render a Expsoure Time vs Limiting magnitude plot
* Uses 'Chained' to link allowed instrument / binning / filter / arm  options https://appelsiini.net/projects/chained/
* This is now in the `jquery.chained.js` file and not loaded from appelsiini.net

## Deployment to Telescope webserver
Modifications for the ETC should always be made and tested locally (not on telescope)

* Clone the repository locally, make changes, test, commit and push back to github.
* On telescope webserver copy the `script.js` and `content.html` files to the correct directory (i.e. `/var/www/html/TelInst/calc`) using standard wget commands to the raw github files. First mv the active files to an old version (rollback protection, and stops wget naming content.html.1 / script.js.1)

```shell
mv content.html content_old.html
mv etc.js etc_old.js
wget https://raw.githubusercontent.com/LivTel/ETC_calcs/master/etc.js
wget https://raw.githubusercontent.com/LivTel/ETC_calcs/master/content.html
wget https://raw.githubusercontent.com/LivTel/ETC_calcs/master/jquery.chained.js
```

Once the deployment is tested and confirmed remove the old files to tidy up (they'll still be in the github repository should we need to roll back for any reason)

## Future refactoring

Refactoring should be done of the 'inline' javascript with the Spectroscopic and Imaging calculations, and moved to the etc.js file. The instrument characteristics (e.g. Pixelscale, Readnoise, Zeropoints) should be restructured in a JSON format.
