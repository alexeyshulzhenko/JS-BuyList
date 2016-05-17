
$(function(){
    function createNewElement(title){
        var node = $('<div class="blockM prodLine" style="display: block;">'+
            '<div class="lable">'+
                '<span class="prodName">' + title + '</span></div>'+
            '<div class="calcButtons">'+
                '<button class="addButton minusButton" disabled="">'+
                '<img src="http://www.veryicon.com/icon/32/System/iOS7%20Minimal/Basic%20Minus.png"/>'+
                ' </button> '+
                '<span class="numOfProd">1</span> '+
                '<button class="addButton plusButton">'+
               '      <img src="http://icons.iconarchive.com/icons/icons8/ios7/32/User-Interface-Plus-icon.png"/>'+
               ' </button>'+
               ' </div>'+
               ' <div class="spareButtons">'+
               '  <button class="buy-button buy">Куплено</button>'+
               ' <button hidden="hidden" class="buy-button not-buy" >Не куплено</button>'+
               ' <button class="deleteBttn" title="Видалити">'+
               '     <i>X</i>'+
               ' </button></div> </div>'
        );
        
        var node2 =$( '<span class="numOfProd">'+'<span class="title">'+title+'</span> '+
            '<span class="miniOrangeCircle label count">1</span>'
        +'</span>'
        );
        
        var node3 =$( '<span class="numOfProd">'+'<span class="title">'+title+'</span> '+
            '<span class="miniOrangeCircle label count">1</span>'
        +'</span>'
        );
  
            console.log("done!");

            node.find('.buy').click(function () {

            node.find('.buy').hide();
            node.find('.calcButtons').hide();
            node.find('.not-buy').show();
            node.find('.deleteBttn').hide();
            node2.hide();
            node3.show();
        });
        
        node.find('.plusButton').click(function(){
            var old=parseInt(node.find(".numOfProd").text(),10);

            if(old>=1){
                node.find(".minusButton").removeClass("but-block");
            }
            if(old<30){
                old++;
            }

            node.find(".numOfProd").text(old);
            node2.find(".count").text(old);
            node3.find(".count").text(old);

        });

        node.find('.inusButton').click(function(){
            var old=parseInt(node.find(".numOfProd").text(),10);

            if(old<2){
                node.find(".inusButton").addClass("but-block");
                old=1;
            }

            if((old<=30)&&(old>1)){
                old--;
            }
            node.find(".numOfProd").text(old);
            node2.find(".count").text(old);
            node3.find(".count").text(old);
        });


        node.find('.not-buy').click(function () {
            node.find('.calcButtons').show();
            node.find('.buy-button').show();
            node.find('.not-buy').hide();
            node.find('.deleteBttn').show();
            node.find('.edit').show();
            node.find('.edit').attr('disabled',false);
            node2.show();
            node3.hide();
        });

        
            node.find(".deleteBttn").click(function () {
            node.remove();
            node2.remove();
            node3.remove();
        });
        
        $(".leftBox").append(node);
        $(".balance").append(node2);
        $(".stats-bought").append(node3);
    }
        
           $('.buttonAdder').click(function(){
        var input =$("#productName");
        var newElem = input.val();
        if(newElem!==""){
            input.val("");
            input.focus();
            createNewElement(newElem);

        }
    });
    
    createNewElement("Смородинка");
    createNewElement("Полуничка");
    createNewElement("Шоколадка");

 }); 

 