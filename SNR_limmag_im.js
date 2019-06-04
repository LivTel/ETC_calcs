
   // Test for mathematics to solve SNR for limiting magnitudes


    // Test input values
    var snr = 100;
    var expt = 300;
    var aper = 2;
    var seeing = 1.0;
    var sky = 2;

    //values for IO:O 2 x2 bin, Sloan r
    var pixscale = 0.15;
    var darkcurrent = 0;
    var readnoise = 10;
    var bin = 2;
    var zp = 25.39;
    var skybr = 20.4;
    var skyoff = 1.0;



   zp += -2.5*Math.log10((2*2)/(aper*aper));
   skymag = skybr - (skyoff * sky);

	var areaofdisk  = (seeing * 2 * seeing * 2);                         // area in arcsec
	var numberofpixels = areaofdisk / (pixscale * pixscale * bin * bin); // area in pixels
	var skyphotons  = Math.pow(10.0,((zp - skymag)/2.5)) * areaofdisk;   // within aperture
																		 //  - must multiply by areaofdisk since skymag
																		 //    in mag/arcsec2
	var a = expt * expt;
	var b = -snr * snr * expt;
	var c = -snr * snr * ((skyphotons * expt) + (darkcurrent * expt * numberofpixels) + (readnoise * readnoise * numberofpixels));
	var starphotonsa = (-b + Math.sqrt(b*b - 4*a*c))/(2*a);     // solve quadratic equation (+ve)
	var starphotonsb = (-b - Math.sqrt(b*b - 4*a*c))/(2*a);     // solve quadratic equation (-ve)
	var starphotons = Math.max(starphotonsa, starphotonsb);
   var mag = -2.5 * Math.log10(starphotons) + zp;
   console.log(mag);
