
   // Test for mathematics to solve SNR for limiting magnitudes


    // Test input values
    var spsnr = 100;
    var spexpt = 100;
    var spaper = 2;
    var spseeing = 1;
    var spsky = 0;

    //values for Frodo Red VPH

    var sppixscale = 0.82;       // spatial pixel scale (arcsec)
    var spdarkcurrent = 0;       // ??
    var spreadnoise = 10;

    var slitwd = 10

    var spzp = 16.0;          // FRODO zeropoint at 7000 (from website) = 15.30.
    var spskybr = 20.8;        // sky brightness in mag/arcsec^2
    var spskyoff = 1.0;        // Used when calculating bright sky; +2 mag,+4 mag,etc.
    var spres = 5300;          // spectral resolution, lambda/delta-lambda
    var wvpixscale = 0.8;      // spectral pixel scale, in Angstrom
    var refwav = 7000;


   spinstZp = spzp -2.5*Math.log10((2*2)/(spaper*spaper))
   var spskymag = spskybr - (spskyoff * spsky);  //


   var spatialarcs = (slitwd * spseeing * 2) ;                              // area on sky, in arcsec
   var spatialarea = (slitwd * spseeing * 2) / (sppixscale * sppixscale) ;  // area on sky, in pixels
   var specpixsc   = (refwav) / (spres * wvpixscale) ;                  // spec resolution, in pixels
   var spnumberofpixels = spatialarea * specpixsc ;  // number of pixels per spat/spect resln element

   var spskyphotons  = (Math.pow(10.0,((spinstZp - spskymag)/2.5)) * (refwav/spres) * spatialarcs);

   var spa = spexpt * spexpt;
   var spb = -spsnr * spsnr * spexpt;
   var spc = -spsnr * spsnr * ((spskyphotons * spexpt) + (spdarkcurrent * spexpt * spnumberofpixels) + (spreadnoise * spreadnoise * spnumberofpixels));

   var spstarphotonsa = (-spb + Math.sqrt(spb*spb - 4*spa*spc))/(2*spa);     // solve quadratic equation (+ve)
   var spstarphotonsb = (-spb - Math.sqrt(spb*spb - 4*spa*spc))/(2*spa);     // solve quadratic equation (-ve)
   var spstarphotons = Math.max(spstarphotonsa, spstarphotonsb);

   var splimMag = -2.5 * Math.log10(spstarphotons / (refwav/spres)) + spinstZp;

   console.log(splimMag);
