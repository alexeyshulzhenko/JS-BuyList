
$(function(){
    function createNewElement(title){
        var firstOne = $('<div class="blockM prodLine" style="display: block;">'+
                '<div class="lable">'+
                '<span class="prodName"><input type="text" class="editer" disabled="disabled"  value="' + title + '"></span></div>'+
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
                ' <button  class="buy-button not-buy" >Не куплено</button>'+
                ' <button class="deleteBttn" title="Видалити">'+
                '     <i>X</i>'+
                ' </button></div> </div>'
        );
        
        var secondOne =$( '<span class="numOfProd">'+'<span class="title">'+title+'</span> '+
            '<span class="miniOrangeCircle label count">1</span>' +
            '</span>'
        );
        
        var thirdOne =$( '<span class="numOfProd bougtnList">'+'<span class="title"><del>'+title+'</del></span> '+
            '<span class="miniOrangeCircle label count">1</span>' +
            '</span>'
        );
  
            

        
        
        
            firstOne.find('.buy').click(function () {
            firstOne.find('.buy').hide();
            firstOne.find('.calcButtons').hide();
            firstOne.find('.not-buy').show();
            firstOne.find('.deleteBttn').hide();
            firstOne.find('.editer').attr('disabled',true);
            firstOne.find('.editer').css('text-decoration', 'line-through');
            secondOne.hide();
            thirdOne.show();
                
        });
        
        firstOne.find('.plusButton').click(function(){
            var coun=parseInt(firstOne.find(".numOfProd").text(),10);

            if(coun>=1){
                firstOne.find(".minusButton").attr('disabled',false);
            }
            if(coun<30){
                coun++;
            }

            firstOne.find(".numOfProd").text(coun);
            secondOne.find(".count").text(coun);
            thirdOne.find(".count").text(coun);

        });

        firstOne.find('.minusButton').click(function(){
            var coun=parseInt(firstOne.find(".numOfProd").text(),10);

            if(coun<2){
                firstOne.find(".minusButton").attr('disabled',true);
                coun=1;
            }

            if((coun<=30)&&(coun>1)){
                coun--;
            }
            firstOne.find(".numOfProd").text(coun);
            secondOne.find(".count").text(coun);
            thirdOne.find(".count").text(coun);
        });


        firstOne.find('.not-buy').click(function () {
            firstOne.find('.calcButtons').show();
            firstOne.find('.buy-button').show();
            firstOne.find('.not-buy').hide();
            firstOne.find('.deleteBttn').show();
            firstOne.find('.edit').show();
            firstOne.find('.edit').attr('disabled',false);
            firstOne.find('.editer').css('text-decoration', 'none');
            secondOne.show();
            thirdOne.hide();
        });

        
            firstOne.find(".deleteBttn").click(function () {
            firstOne.remove();
            secondOne.remove();
            thirdOne.remove();
        });
        
             firstOne.find('.prodName').click(function () {
                console.log("editStart");
                firstOne.find('.editer').attr('disabled',false);
                var before = firstOne.find('.editer').val();
                

        });
        
            firstOne.find('.editer').focusout(function() {
                 var before = firstOne.find('.editer').val();
                        secondOne.find(".title").text(before);
                        thirdOne.find(".title").text(before);
                        firstOne.find('.editer').attr('disabled',true); 
            });
        

        
        $(".leftBox").append(firstOne);
        $(".balance").append(secondOne);
        $(".stats-bought").append(thirdOne);
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
    
    createNewElement("Помідори");
    createNewElement("Печиво");
    createNewElement("Сир");

 }); 

 