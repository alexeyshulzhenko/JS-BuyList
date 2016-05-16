var numProd = 1;
var firstPart = ('<div class="blockM prodLine" style="display: block;"><div class="lable"><span class="prodName">');
var secondPart = ('</span></div><div class="calcButtons"><button class="addButton minusButton" disabled="true"><img src="http://www.veryicon.com/icon/32/System/iOS7%20Minimal/Basic%20Minus.png"/></button> <span class="numOfProd">1</span> <button class="addButton plusButton"><img src="http://icons.iconarchive.com/icons/icons8/ios7/32/User-Interface-Plus-icon.png"/></button></div> <div class="spareButtons">                    <button class="buy-button">Куплено</button>                      <button class="deleteBttn" title="Видалити">                            <i>X</i>                       </button>               </div>               </div> ');
$(document).ready(function(){
    $(".buttonAdder").click(function(){
                $(".leftBox").append(firstPart + $('#productName').val() + secondPart);
        });
});