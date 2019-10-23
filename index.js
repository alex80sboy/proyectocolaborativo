$('.gallery img').on('click', function(){
    let imageAddres = $(this).attr('scr');
    $('.showroom img').attr('scr', imageAddres);
    $('.showroom img').removeClass('hidden');
    $('.showroom img').addClass('hidden');
})