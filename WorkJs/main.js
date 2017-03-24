/**
 * Created by rsubudhi on 3/20/2017.
 */

var array = ['try1','try2','try3','try4','try5','try6','try7','try8','try9','try10','try11','try12','try13','try14','try15','try16'];

function applicationLoad(){

    var mainContainer = document.getElementById("mainContainer");
    var mainUlContailer = document.createElement('ul');
    mainUlContailer.className = 'ulContainer';
    mainContainer.appendChild(mainUlContailer);
    currentTop = 0;
    numberItemToshow = 8;
    var listArr = [];
    for(var i = 0;i<array.length;i++) {
        var liContainer = document.createElement('li');
        liContainer.className = 'liContainer';
        liContainer.innerText = array[i];
        liContainer.style.display = 'inline-block';
        mainUlContailer.appendChild(liContainer);
        //listArr.push(liContainer);
    }

   /* function setPage() {

        if(currentTop != 0){
            for(var i = currentTop;i<(currentTop+(numberItemToshow-1));i++){
                var listContainer = listArr[i];
                liContainer.style.display = 'none';
            }
        }

        currentTop = currentTop+

        for(var i = currentTop;i<(currentTop+(numberItemToshow-1));i++){
            var listContainer = listArr[i];
            liContainer.style.display = 'inline';
        }
    }
*/


    mainContainer.style.display = "block";
    function keydownhandler(event){
        alert(event.keyCode);
        switch (event.keyCode){
            case 37:
                //right
            case 38:
                 //up
                    break;
            case 39:
                   break;
            case 40:
                //down
                    break;
            case 41:
                //right
                    break;
             default:


        }

    }
    document.addEventListener('keydown',keydownhandler,false);
}