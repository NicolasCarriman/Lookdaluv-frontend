window.addEventListener('wheel', scroll);

let text_1 = document.getElementById("text_1");
let text_2 = document.getElementById("text_2");
let text_3 = document.getElementById("text_3");
let text_4 = document.getElementById("text_4");
let text_5 = document.getElementById("text_5");
let text_6 = document.getElementById("text_6");

let title = document.getElementById("title-id");

let logo = document.getElementById("logo");

$(title).css({'top': 350});

let elements = [
    [text_1, logo],
    [text_2, logo],
    [text_3, logo],
    [text_4, logo],
    [text_5, logo],
    [text_6, logo],
];

for (let group of elements){
     for (let index of group){
        $(index).css({'opacity': 0});
    } 
};

let position = 0;
let transition_delay = 1000;
let scroll_disabled = false;
let counter = 0;

function scroll (e){
    
    if (counter == 0){
        $(title).animate({
            'top': 50,
        }, 500);
        counter = counter + 1;
    }

    if (scroll_disabled){
        return;
    }

    if (position == 0 || position == -1){
        scrollFirstStep(e);
    } else if (position == elements.length){
        scrollLastStep(e);
    } else {
        scrollStep(e);
    }

    scroll_disabled = true
    setTimeout(function(){scroll_disabled = false;}, 800);
}

function scrollFirstStep (e){
    if (position == -1){
            
        for (let content in elements[position]){
            $(elements[position][content]).animate({
                'opacity': 0,
            }, transition_delay);
        }

        position = 0;

    }else{
        if (Math.sign(e.deltaY) == -1){

            for (let content in elements[position]){
                $(elements[position][content]).animate({
                    'opacity': 1,
                }, transition_delay);
            }
    
            for (let content in elements[position]){
                $(elements[position+1][content]).animate({
                    'opacity': 0,
                }, transition_delay);
            }
            position = position + 1;
        }
    }
}

function scrollStep(e){

    if (Math.sign(e.deltaY) == -1){

        for (let content in elements[position]){
            $(elements[position-1][content]).animate({
                'opacity': 0,
            }, transition_delay);
        }

        for (let content in elements[position]){
            $(elements[position][content]).animate({
                'opacity': 1,
            }, transition_delay);
        }

        for (let content in elements[position]){
            try {
                let hide_next = elements[position+1][content];
                $(hide_next).animate({
                    'opacity': 0,
                }, transition_delay);
            } catch (error){

            }
        }

        position = position + 1;

    } else {

        for (let content in elements[position]){
            $(elements[position-1][content]).animate({
                'opacity': 0,
            }, transition_delay);
        }

        for (let content in elements[position]){
            $(elements[position][content]).animate({
                'opacity': 0,
            }, transition_delay);
        }

        for (let content in elements[position]){
            try {
                let hide_next = elements[position-2][content];
                $(hide_next).animate({
                    'opacity': 1,
                }, transition_delay);
            } catch (error){

            }
        }

        position = position - 1;
    }
}

function scrollLastStep(e){
    if (Math.sign(e.deltaY) == 1){
        for (let content in elements[elements.length-1]){
            $(elements[position-1][content]).animate({
                'opacity': 0,
            }, transition_delay);
        }

        for (let content in elements[elements.length-2]){
            try {
                let hide_next = elements[position-2][content];
                $(hide_next).animate({
                    'opacity': 1,
                }, transition_delay);
            } catch (error){

            }
        }
        position = position - 1;
    }

}