; (function ($) {
    $.fn.count = function (options) {
        let config = $.extend({}, options);

        return this.each(function () {
            $(this).on('click', function() {
                $('.countOne').css('display') == 'none' ? $('.countOne').animate({height: 'show'}, 400) : $('.countOne').animate({height: 'hide'}, 200);
            })
            
            $('<div/>', {
                class: "countOne"
            }).appendTo('.test')
                .css('width', 320 + 'px')
                .css('height', 144 + 'px')
                .css('position', 'absolute')
                .css('display', 'none')
                .css('border', 1 + 'px solid rgba(31, 32, 65, 0.5)')
                .css('background-color', '#fff');
        
                //Заголвки

            $('<h3/>', {
                class: "adult",
                text: "Взрослые"
            }).appendTo('.countOne');
            $('<h3/>', {
                class: "children",
                text: "Дети"
            }).appendTo('.countOne');
            $('<h3/>', {
                class: "baby",
                text: "Младенцы"
            }).appendTo('.countOne');


            //Кнопки плюс и минус


            $('<button/>', {
                class: "plus_adult",
                text: "+"
            }).appendTo('.adult')
            .css('width', 30 + 'px')
            .css('height', 30 + 'px')
            .css('padding', 0 + 'px')
            .css('border', 1 + 'px solid rgba(31, 32, 65, 0.25)')
            .css('box-sizing', 'border-box')
            .css('border-radius', 22 + 'px')
            .css('font', 'inherit')
            .css('colot', 'rgba(31, 32, 65, 0.5)')
            .css('background-color', 'transparent')
            .css('margin-left', 154 + 'px');

            $('<input/>', {
                class: "result_adult",
                type: 'text',
                value: 0
            }).appendTo('.adult')
            .css('width', 20 + 'px')
            .css('height', 15 + 'px')
            .css('margin-left', 10 + 'px')
            .css('border', 'none');

            $('<button/>', {
                class: 'minus_adult',
                text: "-"
            }).appendTo('.adult')
            .css('width', 30 + 'px')
            .css('height', 30 + 'px')
            .css('padding', 0 + 'px')
            .css('border', 1 + 'px solid rgba(31, 32, 65, 0.25)')
            .css('box-sizing', 'border-box')
            .css('border-radius', 22 + 'px')
            .css('font', 'inherit')
            .css('colot', 'rgba(31, 32, 65, 0.5)')
            .css('background-color', 'transparent');
            

            
            $('<button/>', {
                class: "plus_child",
                text: "+"
            }).appendTo('.children')
            .css('width', 30 + 'px')
            .css('height', 30 + 'px')
            .css('padding', 0 + 'px')
            .css('border', 1 + 'px solid rgba(31, 32, 65, 0.25)')
            .css('box-sizing', 'border-box')
            .css('border-radius', 22 + 'px')
            .css('font', 'inherit')
            .css('colot', 'rgba(31, 32, 65, 0.5)')
            .css('background-color', 'transparent')
            .css('margin-left', 193 + 'px');

            $('<input/>', {
                class: "result_child",
                type: 'text',
                value: 0
            }).appendTo('.children')
            .css('width', 20 + 'px')
            .css('height', 15 + 'px')
            .css('margin-left', 10 + 'px')
            .css('border', 'none');

            $('<button/>', {
                class: 'minus_child',
                text: "-"
            }).appendTo('.children')
            .css('width', 30 + 'px')
            .css('height', 30 + 'px')
            .css('padding', 0 + 'px')
            .css('border', 1 + 'px solid rgba(31, 32, 65, 0.25)')
            .css('box-sizing', 'border-box')
            .css('border-radius', 22 + 'px')
            .css('font', 'inherit')
            .css('colot', 'rgba(31, 32, 65, 0.5)')
            .css('background-color', 'transparent');

            $('<button/>', {
                class: "plus_baby",
                text: "+"
            }).appendTo('.baby')
            .css('width', 30 + 'px')
            .css('height', 30 + 'px')
            .css('padding', 0 + 'px')
            .css('border', 1 + 'px solid rgba(31, 32, 65, 0.25)')
            .css('box-sizing', 'border-box')
            .css('border-radius', 22 + 'px')
            .css('font', 'inherit')
            .css('colot', 'rgba(31, 32, 65, 0.5)')
            .css('background-color', 'transparent')
            .css('margin-left', 148 + 'px');

            $('<input/>', {
                class: "result_baby",
                type: 'text',
                value: 0
            }).appendTo('.baby')
            .css('width', 20 + 'px')
            .css('height', 15 + 'px')
            .css('margin-left', 10 + 'px')
            .css('border', 'none');

            $('<button/>', {
                class: 'minus_baby',
                text: "-"
            }).appendTo('.baby')
            .css('width', 30 + 'px')
            .css('height', 30 + 'px')
            .css('padding', 0 + 'px')
            .css('border', 1 + 'px solid rgba(31, 32, 65, 0.25)')
            .css('box-sizing', 'border-box')
            .css('border-radius', 22 + 'px')
            .css('font', 'inherit')
            .css('colot', 'rgba(31, 32, 65, 0.5)')
            .css('background-color', 'transparent');


            //Кнопки применить и очистить

            $('<input/>', {
                class: 'clear',
                type: 'button',
                value: 'Очистить'
            }).appendTo('.countOne');
            $('<input/>', {
                class: 'aplly',
                type: 'button',
                value: 'Применить'
            }).appendTo('.countOne');


            //Функционал

            //Доработать
            //Сделать так что-бы значение в резалте увеличивалось только у одного элемента
            
            //Взрослые
                let count_adult = 0;
                let count_child = 0;
                let count_baby = 0;
                $(".plus_adult").on('click', function() {   
                    count_adult++;
                    $(".result_adult").val(count_adult);
                    $('.count').val("Взрослые " + count_adult + " Дети " + count_child + " Младенцы " + count_baby);
                })
                $(".minus_adult").on('click', function() {   
                    if(count_adult > 0) {
                        count_adult--;
                }
                    $(".result_adult").val(count_adult);
                    $('.count').val("Взрослые " + count_adult + " Дети " + count_child + " Младенцы " + count_baby);
                })

              //Дети
                
                $(".plus_child").on('click', function() {   
                    count_child++;
                    $(".result_child").val(count_child);
                    $('.count').val("Взрослые " + count_adult + " Дети " + count_child + " Младенцы " + count_baby);
                })
                $(".minus_child").on('click', function() {   
                    if(count_child > 0) {
                        count_child--;
                }
                    $(".result_child").val(count_child);
                    $('.count').val("Взрослые " + count_adult + " Дети " + count_child + " Младенцы " + count_baby);
                })

                //Младенцы
                
                $(".plus_baby").on('click', function() {   
                    count_baby++;
                    $(".result_baby").val(count_baby);
                    $('.count').val("Взрослые " + count_adult + " Дети " + count_child + " Младенцы " + count_baby);
                })
                $(".minus_baby").on('click', function() {   
                    if(count_baby > 0) {
                        count_baby--;
                }
                    $(".result_baby").val(count_baby);
                    $('.count').val("Взрослые " + count_adult + " Дети " + count_child + " Младенцы " + count_baby);
                })

                //Функционал кнопок очистить и пременить
                $(".clear").on('click', function() {
                    count_adult = 0;
                    count_child = 0;
                    count_baby = 0;
                    $('.result_adult').val(0);
                    $('.result_child').val(0);
                    $('.result_baby').val(0);
                    $('.count').val("Взрослые " + 0 + "Дети " + 0 + "Младенцы " + 0);
                })

                $(".aplly").on('click', function() {
                    $(".countOne").hide();
                })
                
                
        })
    }
})(jQuery);