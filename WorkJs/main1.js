/**
 * Created by rsubudhi on 3/20/2017.
 */

var array = ['try1','try2','try3','try4','try5','try6','try7','try8','try9','try10','try11','try12','try13','try14','try15','try16','try17','try18','try19','try20','try21','try22','try23','try24','try25','try26','try27','try28','try29','try30','try31','try32'];

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
        liContainer.style.display = 'none';
        mainUlContailer.appendChild(liContainer);
        listArr.push(liContainer);
    }

    function setPage(key) {

        if(key =='DOWN'){
            currentTop = currentTop+numberItemToshow;
        }else if(key =='UP'){
            currentTop = currentTop-(numberItemToshow);
        }else{
            currentTop = 0;
        }

        if(currentTop >= listArr.length){
            currentTop = 0;
        }else if (currentTop < 0){
            currentTop = listArr.length - numberItemToshow;
        }
      //  alert('>>>> '+currentTop);
        for(var i = 0;i<listArr.length;i++){
            var listContainer = listArr[i];
            listContainer.style.display = 'none';
            // alert('test');
        }
        //alert('curr Top'+currentTop);
        for(var i = currentTop;i<(currentTop+(numberItemToshow));i++){
            var divContainer = listArr[i];
            divContainer.style.display = 'inline-block';
        }
      //  alert('currentTop'+currentTop);

    }

    mainContainer.style.display = "block";
    function keydownhandler(event){
        //  alert(event.keyCode);
        switch (event.keyCode){
            case 37:
            //right
            case 38:
                //up
                setPage('UP');
                break;
            case 39:
                break;
            case 40:
                setPage('DOWN');
                //down
                break;
            case 41:
                //right
                break;
            default:


        }

    }
    setPage();
    document.addEventListener('keydown',keydownhandler,false);
}