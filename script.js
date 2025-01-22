var star = document.querySelector(".estrela")
var satisfacao = document.querySelector("#quant")

var star1 = document.querySelector("#star1")
var star2 = document.querySelector("#star2")
var star3 = document.querySelector("#star3")
var star4 = document.querySelector("#star4")
var star5 = document.querySelector("#star5")

var contador1 = 0
var contador2 = 0
var contador3 = 0
var contador4 = 0
var contador5 = 0

star1.addEventListener('click',function(){
    contador1 += 1
    if (contador1%2 == 1){
        star1.innerHTML = "⭐"
satisfacao.innerHTML = "Péssimo"
    }else{
        star2.innerHTML = "✰"
        star3.innerHTML = "✰"
        star4.innerHTML = "✰"
        star5.innerHTML = "✰"
satisfacao.innerHTML = "Péssimo"
    }
})
star2.addEventListener('click',function(){
    contador2 += 1
    if (contador2%2 == 1){
        if(contador2 % 2 == 1){
            if (contador1 % 2 == 0){
                contador1 += 1
            }
        }
        star1.innerHTML = "⭐"
        star2.innerHTML = "⭐"
satisfacao.innerHTML = "Ruim"
    }else{
        if(contador2 % 2 == 0){
            if (contador3 % 2 == 1){
                contador3 += 1
            }
            if (contador4 % 2 == 1){
                contador4 += 1
            }
            if (contador5 % 2 == 1){
                contador5 += 1
            }
        }
        star3.innerHTML = "✰"
        star4.innerHTML = "✰"
        star5.innerHTML = "✰"
satisfacao.innerHTML = "Ruim"
        
    }
})
star3.addEventListener('click',function(){
    contador3 += 1
    if (contador3%2 == 1){
        if(contador3 % 2 == 1){
            if(contador1 % 2 == 0){
                contador1 += 1
            }
            if (contador2 % 2 == 0){
                contador2 += 1
            }
        }
        star1.innerHTML = "⭐"
        star2.innerHTML = "⭐"
        star3.innerHTML = "⭐"
satisfacao.innerHTML = "Bom"
    }else{
        if(contador3 % 2 == 0){
            if(contador4 % 2 == 1){
                contador4 += 1
            }
            if (contador5 % 2 == 1){
                contador5 += 1
            }
        }
        star4.innerHTML = "✰"
        star5.innerHTML = "✰"
satisfacao.innerHTML = "Bom"
    }
})
star4.addEventListener('click',function(){
    contador4 += 1
    if (contador4 % 2 == 1){
        if(contador4 % 2 == 1){
            if(contador1 % 2 == 0){
                contador1 += 1
            }
            if(contador2 % 2 == 0){
                contador2 += 1
            }
            if (contador3 % 2 == 0){
                contador3 += 1
            }
        }
        star1.innerHTML = "⭐"
        star2.innerHTML = "⭐"
        star3.innerHTML = "⭐"
        star4.innerHTML = "⭐"
satisfacao.innerHTML = "Ótimo"
    }else{
        if(contador4 % 2 == 0){
            if(contador5 % 2 == 1){
                contador5 += 1
            }
        }
        star5.innerHTML = "✰"
satisfacao.innerHTML = "Ótimo"
    }
})
star5.addEventListener('click',function(){
    contador5 = contador5 + 1
    if (contador5 % 2 == 1){
        if(contador5 % 2 == 1){
            if (contador1 % 2 == 0){
                contador1 += 1
            }
            if(contador2 % 2 == 0){
                contador2 += 1
            }
            if (contador3 % 2 == 0){
                contador3 += 1
            }
            if (contador4 % 2 == 0){
                contador4 += 1
            }
        }
        star1.innerHTML = "⭐"
        star2.innerHTML = "⭐"
        star3.innerHTML = "⭐"
        star4.innerHTML = "⭐"
        star5.innerHTML = "⭐"
satisfacao.innerHTML = "Maravilhoso"
    }else{
    }
})