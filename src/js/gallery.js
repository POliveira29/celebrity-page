// Gallery
/*$(document).ready(function() {
    $(".js-gallery").lightGallery({
        cssEasing: 'ease',
        slideEndAnimatoin: true,
        download: false,
        counter: false,
        enableSwipe: true,
    }); 
});*/

// Gallery Mosaic
$(document).ready(function () {
  $("#js-gallery").unitegallery({
    gallery_theme: "tiles",
    gallery_width:"100%",

    //tiles options:
    tiles_col_width: 250,
    tiles_align: "center",
    tiles_space_between_cols: 3,
    tiles_exact_width: false,
    tiles_space_between_cols: 3,
    tiles_space_between_cols_mobile: 3,
    tiles_include_padding: true,
    tiles_min_columns: 2,
    tiles_max_columns: 0,
    tiles_set_initial_height: true,
    tiles_enable_transition: true,
    tile_enable_icons: false,

    //Lightbox
    lightbox_show_numbers: false
  });
});

  
  

