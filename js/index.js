(function (){
    var myEpay = document.getElementsByClassName('myEpay')[0]
    var down_node = document.getElementsByClassName('down')[0]
    var timer = null
    var aini_timer = null
    var i = document.getElementById('i')

    myEpay.onmouseenter = function (){
        clearTimeout(timer)
        myEpay.className = 'leftBtn  myEpay root'
        down_node.style.display = 'block'
        clearTimeout(aini_timer)
        aini_timer = setTimeout(function (){
            down_node.className = 'down h'
            i.style.transform = 'rotate(180deg)'
        },100)
    }

    myEpay.onmouseleave = function (){
        clearTimeout(aini_timer)
        aini_timer = setTimeout(function (){
            clearTimeout(timer)
            down_node.calssName = 'down'
            i.style.transform = 'rotate(0deg)'
            timer = setTimeout(function (){
                myEpay.className = 'leftBtn myEpay'
                down_node.style.display = 'none'
            },300)
        },100)
    }

    down_node.onmouseenter = function (){
        clearTimeout(timer)
        myEpay.className = 'leftBtn myEpay root'
        down_node.style.display = 'block'
        clearTimeout(aini_timer)
        aini_timer = setTimeout(function (){
            down_node.className = 'down h'
            i.style.transform = 'rotate(180deg)'
        },100)
    }

    down_node.onmouseleave = function(){
        clearTimeout(aini_timer)
        aini_timer = setTimeout(function(){
            clearTimeout(timer)
            down_node.className = 'down'
            i.style.transform = 'rotate(0deg)'
            timer = setTimeout(function(){
                myEpay.className = 'leftBtn  myEpay';
                down_node.style.display = 'none';
            },300)
        },100)
    }
})()