let creareReteaNeuronalaButton = document.getElementById("creareReteaNeuronalaButton");
let Layer0Button = document.getElementById('Layer0Button');
let Layer1Button = document.getElementById('Layer1Button');
let Layer2Button = document.getElementById('Layer2Button');
let OutputButton = document.getElementById('OutputButton');
let confirmCreateNeuronalNetworkButton = document.getElementById('confirmCreateNeuronalNetworkButton');
let numnerOfNeuronsInTheHiddenLayer1Window = document.getElementById("numnerOfNeuronsInTheHiddenLayer1Window");
let numnerOfNeuronsInTheHiddenLayer2Window = document.getElementById('numnerOfNeuronsInTheHiddenLayer2Window');
let numberOfNeuronsInTheInputLayerInput = document.getElementById("numberOfNeuronsInTheInputLayerInput");
let numberOfNeuronsInTheOutputLayerInput = document.getElementById("numberOfNeuronsInTheOutputLayerInput");
let numberOfLayersInput = document.getElementById("numberOfLayersInput");
let numberOfNeuronsInTheHiddenLayer0Input = document.getElementById("numberOfNeuronsInTheHiddenLayer0Input");
let numberOfNeuronsInTheHiddenLayer1Input = document.getElementById("numberOfNeuronsInTheHiddenLayer1Input");
let numberOfNeuronsInTheHiddenLayer2Input = document.getElementById("numberOfNeuronsInTheHiddenLayer2Input");
let layer0InputFunctionSelect = document.getElementById("layer0InputFunctionSelect");
var outputInputFunctionSelect = document.getElementById("outputInputFunctionSelect");
var OutputSelectBinar = document.getElementById("OutputSelectBinar");
var Layer2SelectBinar = document.getElementById("Layer2SelectBinar");
var Layer1SelectBinar = document.getElementById("Layer1SelectBinar");
var Layer0SelectBinar = document.getElementById("Layer0SelectBinar");


let neuronalNetworkDrawing = document.getElementById("neuronalNetworkDrawing");
let column1 = document.getElementById("column1");
let column2 = document.getElementById("column2");
let column3 = document.getElementById("column3");
let column4 = document.getElementById("column4");
let column5 = document.getElementById("column5");
let verifyCreatedNetwork = false;

const e =2.71;

var inputLayerArray = [];
var hiddenLayer0Array = [];
var hiddenLayer1Array = [];
var hiddenLayer2Array = [];
var outputLayerArray = [];
var hidden0Activation = [];
var hidden1Activation = [];
var hidden2Activation = [];
var outputActivation = [];
var hidden0InputFunction = [];
var hidden1InputFunction = [];
var hidden2InputFunction = [];
var outputInputFunction = [];
var hidden0OutputFunction = [];
var hidden1OutputFunction = [];
var hidden2OutputFunction = [];
var outputOutputFunction = [];







function drawFunction(x, y, text, margin_top, _column, _color, _numberOfNeuron)
{
    var inputLayerButton = document.createElement("p");
    inputLayerButton.innerHTML = text;
    inputLayerButton.style.width = x; 
    inputLayerButton.style.height = y;
    inputLayerButton.setAttribute('class', 'neurons');
    inputLayerButton.style.backgroundColor = _color;
    inputLayerButton.style.flexFlow = "left";

    var _wrapper = document.createElement("div");
    _wrapper.setAttribute("class", "wrapper");
    _wrapper.style.marginTop = margin_top;
    

    var _trigger = document.createElement("div");
    _trigger.setAttribute("class", "trigger");
    

    var _content = document.createElement("div");
    _content.setAttribute("class", "contentPopup");
    
    if(_column.id == "column1")
    {
        var _popupInput = document.createElement("input");
        _popupInput.style.width = "55px";
        _popupInput.style.float = "right";
        _popupInput.setAttribute("type", "number");
        _popupInput.defaultValue = 0;
        _popupInput.value = 0;
        _popupInput.step = 0.01;
        inputLayerArray[_numberOfNeuron] = 0;
        _popupInput.oninput = function(){
            inputLayerArray[_numberOfNeuron] = this.value;
        }
        var _popupInputText = document.createElement("div");
        _popupInputText.innerText = text;
        _popupInputText.style.marginRight = "10px";
        _popupInputText.style.font = " 700 0.9rem 'Roboto Slab', sans-serif";
        _popupInputText.style.color = "#5c5c5cea";
        _popupInputText.style.marginTop = "2px";
        _popupInputText.style.float = "left";
        

        _content.appendChild(_popupInputText);
        _content.appendChild(_popupInput);
        
        
    }
    else 
    if(_column.id == "column2" || _column.id == "column3" || _column.id == "column4" ||_column.id == "column5")
    {

        const neuronPositionsC1 = document.getElementById("column1").getElementsByTagName('p');
        const neuronPositionsC2 = document.getElementById("column2").getElementsByTagName('p');
        const neuronPositionsC3 = document.getElementById("column3").getElementsByTagName('p');
        const neuronPositionsC4 = document.getElementById("column4").getElementsByTagName('p');
        const neuronPositionsC5 = document.getElementById("column5").getElementsByTagName('p');

        var _popupTopSideInfo = document.createElement("div");
        var _popupBottomSideWeight = document.createElement("div");
        _popupBottomSideWeight.style.height = "80px";
        
        _popupBottomSideWeight.style.overflow = "auto";


        var _popupGlobalInputValueWindow = document.createElement("div");
        _popupGlobalInputValueWindow.setAttribute("class", "popupLayerWindow")
        var _popupGlobalInputValueText = document.createElement("div");
        _popupGlobalInputValueText.innerText = "Global Input Value";
        _popupGlobalInputValueText.setAttribute("class", "popupLayerText");
        var _popupGlobalInputValueInput = document.createElement("input");
        _popupGlobalInputValueInput.setAttribute("class", "popupLayerInput");
        _popupGlobalInputValueInput.readOnly = true;
        if(_column.id == "column2")
        {
            _popupGlobalInputValueInput.id = "popupGlobalInputValueFirstLayer"+_numberOfNeuron;
        }
        else
        if(_column.id == "column3")
        {
            _popupGlobalInputValueInput.id = "popupGlobalInputValueSecondLayer"+_numberOfNeuron;
        }
        else
        if(_column.id == "column4")
        {
            _popupGlobalInputValueInput.id= "popupGlobalInputValueThirdLayer"+_numberOfNeuron;
        }
        else
        if(_column.id == "column5")
        {
            _popupGlobalInputValueInput.id= "popupGlobalInputValueForthLayer"+_numberOfNeuron;
        }

        _popupGlobalInputValueWindow.appendChild(_popupGlobalInputValueText);
        _popupGlobalInputValueWindow.appendChild(_popupGlobalInputValueInput);

        var _popupActivationValueWindow = document.createElement("div");
        _popupActivationValueWindow.setAttribute("class", "popupLayerWindow");
        var _popupActivationValueText = document.createElement("div");
        _popupActivationValueText.innerText = "Activation Value";
        _popupActivationValueText.setAttribute("class", "popupLayerText");
        var _popupActivationValueInput = document.createElement("input");
        _popupActivationValueInput.setAttribute("class", "popupLayerInput");
        _popupActivationValueInput.readOnly = true;
        if(_column.id == "column2")
        {
            _popupActivationValueInput.id = "popupActivationValueFirstLayer"+_numberOfNeuron;
        }
        else
        if(_column.id == "column3")
        {
            _popupActivationValueInput.id= "popupActivationValueSecondLayer"+_numberOfNeuron;
        }
        else
        if(_column.id == "column4")
        {
            _popupActivationValueInput.id= "popupActivationValueThirdLayer"+_numberOfNeuron;
        }
        else
        if(_column.id == "column5")
        {
            _popupActivationValueInput.id= "popupActivationValueForthLayer"+_numberOfNeuron;
        }
        _popupActivationValueWindow.appendChild(_popupActivationValueText);
        _popupActivationValueWindow.appendChild(_popupActivationValueInput);

        var _popupOutputValueWindow = document.createElement("div");
        _popupOutputValueWindow.setAttribute("class", "popupLayerWindow");
        var _popupOutputValueText = document.createElement("div");
        _popupOutputValueText.innerText = "Output Value";
        _popupOutputValueText.setAttribute("class", "popupLayerText");
        var _popupOutputValueInput = document.createElement("input");
        _popupOutputValueInput.setAttribute("class", "popupLayerInput");
        _popupOutputValueInput.readOnly = true;
        if(_column.id == "column2")
        {
            _popupOutputValueInput.id= "popupOutputValueFirstLayer"+_numberOfNeuron;
        }
        else
        if(_column.id == "column3")
        {
            _popupOutputValueInput.id= "popupOutputValueSecondLayer"+_numberOfNeuron;
        }
        else
        if(_column.id == "column4")
        {
            _popupOutputValueInput.id= "popupOutputValueThirdLayer"+_numberOfNeuron;
        }
        else
        if(_column.id == "column5")
        {
            _popupOutputValueInput.id= "popupOutputValueForthLayer"+_numberOfNeuron;
        }
        _popupOutputValueWindow.appendChild(_popupOutputValueText);
        _popupOutputValueWindow.appendChild(_popupOutputValueInput);

        var _popupTopSideBottomSideBorder = document.createElement("div");
        _popupTopSideBottomSideBorder.style.width = "95%";
        _popupTopSideBottomSideBorder.style.borderBottom = "2px solid  rgba(33, 197, 197, 0.438)";
        _popupTopSideBottomSideBorder.style.marginLeft = "5px";
        _popupTopSideBottomSideBorder.style.marginBottom = "7px";

        if(numberOfLayersInput.value == 1)
        {
            if(_column.id == "column2")
            {
                for(var  m=0; m< neuronPositionsC1.length; m++ )
                {
                    //console.log(" neuronPositionsC1.length"+ neuronPositionsC1.length);
                    var _popupWeightwindow = document.createElement("div");
                    _popupWeightwindow.style.height = "30px";
                    _popupWeightwindow.style.width = "110px";
                    _popupWeightwindow.style.marginRight = "";
                    _popupWeightwindow.style.marginLeft = "55px";

                    
                    var _popupWeightText = document.createElement("div");
                    _popupWeightText.innerText = "W"+m;
                    _popupWeightText.style.font = " 700 0.9rem 'Roboto Slab', sans-serif";
                    _popupWeightText.style.float = "left";
                    _popupWeightText.style.color = "#5c5c5cea";
                    _popupWeightText.style.marginTop = "2px"
                    _popupWeightText.style.marginRight = "10px";

                    var _popupWeightInput = document.createElement("input");
                    _popupWeightInput.type =  "number";
                    _popupWeightInput.style.float = "left";
                    _popupWeightInput.style.width = "55px";
                    _popupWeightInput.defaultValue = 0;
                    _popupWeightInput.value = 0;
                    _popupWeightInput.step = 0.01;
                    _popupWeightInput.id = m;
                    hiddenLayer0Array[_numberOfNeuron] = new Array(2);
                    hiddenLayer0Array[_numberOfNeuron][parseInt( this.id)] = "0";
                    _popupWeightInput.oninput = function(){
                        
                        hiddenLayer0Array[_numberOfNeuron][parseInt( this.id)] = this.value;
                        StartWork();

                    }
                    
                    _popupWeightwindow.appendChild(_popupWeightText);
                    _popupWeightwindow.appendChild(_popupWeightInput);
                    _popupBottomSideWeight.appendChild(_popupWeightwindow);
                    

                }
                
            }
            else
            if(_column.id == "column5")
            {
                for(var  l=0; l< neuronPositionsC2.length; l++ )
                {
                    var _popupWeightwindow = document.createElement("div");
                    _popupWeightwindow.style.height = "30px";
                    _popupWeightwindow.style.width = "110px";
                    _popupWeightwindow.style.marginRight = "";
                    _popupWeightwindow.style.marginLeft = "55px";

                    
                    var _popupWeightText = document.createElement("div");
                    _popupWeightText.innerText = "W"+l;
                    _popupWeightText.style.font = " 700 0.9rem 'Roboto Slab', sans-serif";
                    _popupWeightText.style.float = "left";
                    _popupWeightText.style.color = "#5c5c5cea";
                    _popupWeightText.style.marginTop = "2px"
                    _popupWeightText.style.marginRight = "10px";

                    var _popupWeightInput = document.createElement("input");
                    _popupWeightInput.type =  "number";
                    _popupWeightInput.style.float = "left";
                    _popupWeightInput.style.width = "55px";
                    _popupWeightInput.defaultValue = 0;
                    _popupWeightInput.value = 0;
                    _popupWeightInput.step = 0.01;
                    _popupWeightInput.id = l;
                    outputLayerArray[_numberOfNeuron] = new Array(2);
                    outputLayerArray[_numberOfNeuron][parseInt( this.id)] = 0;
                    _popupWeightInput.oninput = function(){
                        
                        outputLayerArray[_numberOfNeuron][parseInt( this.id)] = this.value;
                        StartWork();

                    }


                    _popupWeightwindow.appendChild(_popupWeightText);
                    _popupWeightwindow.appendChild(_popupWeightInput);
                    _popupBottomSideWeight.appendChild(_popupWeightwindow);

                }
            }
                
            
        }
        else
        if(numberOfLayersInput.value == 2)
        {
            if(_column.id == "column2")
            {
                for(var l=0; l< neuronPositionsC1.length; l++ )
                {
                    var _popupWeightwindow = document.createElement("div");
                    _popupWeightwindow.style.height = "30px";
                    _popupWeightwindow.style.width = "110px";
                    _popupWeightwindow.style.marginRight = "";
                    _popupWeightwindow.style.marginLeft = "55px";

                    
                    var _popupWeightText = document.createElement("div");
                    _popupWeightText.innerText = "W"+l;
                    _popupWeightText.style.font = " 700 0.9rem 'Roboto Slab', sans-serif";
                    _popupWeightText.style.float = "left";
                    _popupWeightText.style.color = "#5c5c5cea";
                    _popupWeightText.style.marginTop = "2px"
                    _popupWeightText.style.marginRight = "10px";

                    var _popupWeightInput = document.createElement("input");
                    _popupWeightInput.type =  "number";
                    _popupWeightInput.style.float = "left";
                    _popupWeightInput.style.width = "55px";
                    _popupWeightInput.defaultValue = 0;
                    _popupWeightInput.value = 0;
                    _popupWeightInput.step = 0.01;
                    _popupWeightInput.id = l;
                    hiddenLayer0Array[_numberOfNeuron] = new Array(2);
                    hiddenLayer0Array[_numberOfNeuron][parseInt( this.id)] = 0;
                    _popupWeightInput.oninput = function(){
                        
                        hiddenLayer0Array[_numberOfNeuron][parseInt( this.id)] = this.value;
                        StartWork();

                    }

                    _popupWeightwindow.appendChild(_popupWeightText);
                    _popupWeightwindow.appendChild(_popupWeightInput);
                    _popupBottomSideWeight.appendChild(_popupWeightwindow);

                }
            }
            else
            if(_column.id == "column3")
            {
                for( var  l=0; l< neuronPositionsC2.length; l++ )
                {
                    var _popupWeightwindow = document.createElement("div");
                    _popupWeightwindow.style.height = "30px";
                    _popupWeightwindow.style.width = "110px";
                    _popupWeightwindow.style.marginRight = "";
                    _popupWeightwindow.style.marginLeft = "55px";

                    
                    var _popupWeightText = document.createElement("div");
                    _popupWeightText.innerText = "W"+l;
                    _popupWeightText.style.font = " 700 0.9rem 'Roboto Slab', sans-serif";
                    _popupWeightText.style.float = "left";
                    _popupWeightText.style.color = "#5c5c5cea";
                    _popupWeightText.style.marginTop = "2px"
                    _popupWeightText.style.marginRight = "10px";

                    var _popupWeightInput = document.createElement("input");
                    _popupWeightInput.type =  "number";
                    _popupWeightInput.style.float = "left";
                    _popupWeightInput.style.width = "55px";
                    _popupWeightInput.defaultValue = 0;
                    _popupWeightInput.value = 0;
                    _popupWeightInput.step = 0.01;
                    _popupWeightInput.id = l;
                    hiddenLayer1Array[_numberOfNeuron]=new Array(2);
                    hiddenLayer1Array[_numberOfNeuron][parseInt( this.id)] = 0;
                    _popupWeightInput.oninput = function(){
                        
                        hiddenLayer1Array[_numberOfNeuron][parseInt( this.id)] = this.value;
                        StartWork();

                    }

                    _popupWeightwindow.appendChild(_popupWeightText);
                    _popupWeightwindow.appendChild(_popupWeightInput);
                    _popupBottomSideWeight.appendChild(_popupWeightwindow);

                }
            }
            else
            if(_column.id == "column5")
            {
                for(var l=0; l< neuronPositionsC3.length; l++ )
                {
                    var _popupWeightwindow = document.createElement("div");
                    _popupWeightwindow.style.height = "30px";
                    _popupWeightwindow.style.width = "110px";
                    _popupWeightwindow.style.marginRight = "";
                    _popupWeightwindow.style.marginLeft = "55px";

                    
                    var _popupWeightText = document.createElement("div");
                    _popupWeightText.innerText = "W"+l;
                    _popupWeightText.style.font = " 700 0.9rem 'Roboto Slab', sans-serif";
                    _popupWeightText.style.float = "left";
                    _popupWeightText.style.color = "#5c5c5cea";
                    _popupWeightText.style.marginTop = "2px"
                    _popupWeightText.style.marginRight = "10px";

                    var _popupWeightInput = document.createElement("input");
                    _popupWeightInput.type =  "number";
                    _popupWeightInput.style.float = "left";
                    _popupWeightInput.style.width = "55px";
                    _popupWeightInput.defaultValue = 0;
                    _popupWeightInput.value = 0;
                    _popupWeightInput.step = 0.01;
                    _popupWeightInput.id = l;
                    outputLayerArray[_numberOfNeuron] = new Array(2);
                    outputLayerArray[_numberOfNeuron][parseInt( this.id)] = 0;
                    _popupWeightInput.oninput = function(){
                        
                        outputLayerArray[_numberOfNeuron][parseInt( this.id)] = this.value;
                        StartWork();

                    }

                    _popupWeightwindow.appendChild(_popupWeightText);
                    _popupWeightwindow.appendChild(_popupWeightInput);
                    _popupBottomSideWeight.appendChild(_popupWeightwindow);

                }
            }
                
            
        }
        else
        if(numberOfLayersInput.value == 3)
        {
            if(_column.id == "column2")
            {
                for( var l=0; l< neuronPositionsC1.length; l++ )
                {
                    var _popupWeightwindow = document.createElement("div");
                    _popupWeightwindow.style.height = "30px";
                    _popupWeightwindow.style.width = "110px";
                    _popupWeightwindow.style.marginRight = "";
                    _popupWeightwindow.style.marginLeft = "55px";

                    
                    var _popupWeightText = document.createElement("div");
                    _popupWeightText.innerText = "W"+l;
                    _popupWeightText.style.font = " 700 0.9rem 'Roboto Slab', sans-serif";
                    _popupWeightText.style.float = "left";
                    _popupWeightText.style.color = "#5c5c5cea";
                    _popupWeightText.style.marginTop = "2px"
                    _popupWeightText.style.marginRight = "10px";

                    var _popupWeightInput = document.createElement("input");
                    _popupWeightInput.type =  "number";
                    _popupWeightInput.style.float = "left";
                    _popupWeightInput.style.width = "55px";
                    _popupWeightInput.defaultValue = 0;
                    _popupWeightInput.value = 0;
                    _popupWeightInput.step = 0.01;
                    _popupWeightInput.id = l;
                    hiddenLayer0Array[_numberOfNeuron] = new Array(2);
                    hiddenLayer0Array[_numberOfNeuron][parseInt( this.id)] = 0;
                    _popupWeightInput.oninput = function(){
                        
                        hiddenLayer0Array[_numberOfNeuron][parseInt( this.id)] = this.value;
                        StartWork();

                    }

                    _popupWeightwindow.appendChild(_popupWeightText);
                    _popupWeightwindow.appendChild(_popupWeightInput);
                    _popupBottomSideWeight.appendChild(_popupWeightwindow);

                }
            }
            else
            if(_column.id == "column3")
            {
                for(var l=0; l< neuronPositionsC2.length; l++ )
                {
                    var _popupWeightwindow = document.createElement("div");
                    _popupWeightwindow.style.height = "30px";
                    _popupWeightwindow.style.width = "110px";
                    _popupWeightwindow.style.marginRight = "";
                    _popupWeightwindow.style.marginLeft = "55px";

                    
                    var _popupWeightText = document.createElement("div");
                    _popupWeightText.innerText = "W"+l;
                    _popupWeightText.style.font = " 700 0.9rem 'Roboto Slab', sans-serif";
                    _popupWeightText.style.float = "left";
                    _popupWeightText.style.color = "#5c5c5cea";
                    _popupWeightText.style.marginTop = "2px"
                    _popupWeightText.style.marginRight = "10px";

                    var _popupWeightInput = document.createElement("input");
                    _popupWeightInput.type =  "number";
                    _popupWeightInput.style.float = "left";
                    _popupWeightInput.style.width = "55px";
                    _popupWeightInput.defaultValue = 0;
                    _popupWeightInput.value = 0;
                    _popupWeightInput.step = 0.01;
                    _popupWeightInput.id = l;
                    hiddenLayer1Array[_numberOfNeuron] = new Array(2);
                    hiddenLayer1Array[_numberOfNeuron][parseInt( this.id)] = 0;
                    _popupWeightInput.oninput = function(){
                        
                        hiddenLayer1Array[_numberOfNeuron][parseInt( this.id)] = this.value;
                        StartWork();

                    }

                    _popupWeightwindow.appendChild(_popupWeightText);
                    _popupWeightwindow.appendChild(_popupWeightInput);
                    _popupBottomSideWeight.appendChild(_popupWeightwindow);

                }
            }
            else
            if(_column.id == "column4")
            {
                for(var l=0; l< neuronPositionsC3.length; l++ )
                {
                    var _popupWeightwindow = document.createElement("div");
                    _popupWeightwindow.style.height = "30px";
                    _popupWeightwindow.style.width = "110px";
                    _popupWeightwindow.style.marginRight = "";
                    _popupWeightwindow.style.marginLeft = "55px";

                    
                    var _popupWeightText = document.createElement("div");
                    _popupWeightText.innerText = "W"+l;
                    _popupWeightText.style.font = " 700 0.9rem 'Roboto Slab', sans-serif";
                    _popupWeightText.style.float = "left";
                    _popupWeightText.style.color = "#5c5c5cea";
                    _popupWeightText.style.marginTop = "2px"
                    _popupWeightText.style.marginRight = "10px";

                    var _popupWeightInput = document.createElement("input");
                    _popupWeightInput.type =  "number";
                    _popupWeightInput.style.float = "left";
                    _popupWeightInput.style.width = "55px";
                    _popupWeightInput.defaultValue = 0;
                    _popupWeightInput.value = 0;
                    _popupWeightInput.step = 0.01;
                    _popupWeightInput.id = l;
                    hiddenLayer2Array[_numberOfNeuron] = new Array(2);
                    hiddenLayer2Array[_numberOfNeuron][parseInt( this.id)] = 0;
                    _popupWeightInput.oninput = function(){
                        
                        hiddenLayer2Array[_numberOfNeuron][parseInt( this.id)] = this.value;
                        StartWork();

                    }

                    _popupWeightwindow.appendChild(_popupWeightText);
                    _popupWeightwindow.appendChild(_popupWeightInput);
                    _popupBottomSideWeight.appendChild(_popupWeightwindow);

                }
            }
            else
            if(_column.id == "column5")
            {
                for(var l=0; l< neuronPositionsC4.length; l++ )
                {
                    var _popupWeightwindow = document.createElement("div");
                    _popupWeightwindow.style.height = "30px";
                    _popupWeightwindow.style.width = "110px";
                    _popupWeightwindow.style.marginRight = "";
                    _popupWeightwindow.style.marginLeft = "55px";

                    
                    var _popupWeightText = document.createElement("div");
                    _popupWeightText.innerText = "W"+l;
                    _popupWeightText.style.font = " 700 0.9rem 'Roboto Slab', sans-serif";
                    _popupWeightText.style.float = "left";
                    _popupWeightText.style.color = "#5c5c5cea";
                    _popupWeightText.style.marginTop = "2px"
                    _popupWeightText.style.marginRight = "10px";

                    var _popupWeightInput = document.createElement("input");
                    _popupWeightInput.type =  "number";
                    _popupWeightInput.style.float = "left";
                    _popupWeightInput.style.width = "55px";
                    _popupWeightInput.defaultValue = 0;
                    _popupWeightInput.value = 0;
                    _popupWeightInput.step = 0.01;
                    _popupWeightInput.id = l;
                    outputLayerArray[_numberOfNeuron] =new Array(2);
                    outputLayerArray[_numberOfNeuron][parseInt( this.id)] = 0;
                    _popupWeightInput.oninput = function(){
                        
                       
                        outputLayerArray[_numberOfNeuron][parseInt( this.id)] = this.value;
                        StartWork();

                        
                    }

                    _popupWeightwindow.appendChild(_popupWeightText);
                    _popupWeightwindow.appendChild(_popupWeightInput);
                    _popupBottomSideWeight.appendChild(_popupWeightwindow);
                    console.log("working");

                }
            }
                
            
        }

        
       
        


        _popupTopSideInfo.appendChild(_popupGlobalInputValueWindow);
        _popupTopSideInfo.appendChild(_popupActivationValueWindow);
        _popupTopSideInfo.appendChild(_popupOutputValueWindow);

        _content.appendChild(_popupTopSideInfo);
        _content.appendChild(_popupTopSideBottomSideBorder);
        _content.appendChild(_popupBottomSideWeight);
        

    }
    

    
    _trigger.appendChild(inputLayerButton);
    _wrapper.appendChild(_trigger);
    _wrapper.appendChild(_content);

    _column.appendChild(_wrapper);
       
}


function drawNetworkFunction()
{
    
    
   
        for(var j=0;j<numberOfNeuronsInTheInputLayerInput.value;j++)
        {
            drawFunction("50px", "50px", "IN"+j, neuronalNetworkDrawing.offsetHeight/(parseInt(numberOfNeuronsInTheInputLayerInput.value)+2)+"px", column1, "green", j);
        }

        for(var i=0;i<numberOfLayersInput.value;i++)
        {
            if(i==0)
            {
                for(var j=0;j<numberOfNeuronsInTheHiddenLayer0Input.value;j++)
                {
                    drawFunction("50px", "50px", "H"+i+"N"+j,neuronalNetworkDrawing.offsetHeight/(parseInt(numberOfNeuronsInTheHiddenLayer0Input.value)+2)+"px",column2, "gray", j);
                }
            }
            else
            if(i == 1)
            {
                for(var k=0;k<numberOfNeuronsInTheHiddenLayer1Input.value;k++)
                {
                    drawFunction("50px", "50px", "H"+i+"N"+k,neuronalNetworkDrawing.offsetHeight/(parseInt(numberOfNeuronsInTheHiddenLayer1Input.value)+2)+"px",column3, "gray", k);
                }
            }
            else
            if(i == 2)
            {
                for(var j=0;j<numberOfNeuronsInTheHiddenLayer2Input.value;j++)
                {
                    drawFunction("50px", "50px", "H"+i+"N"+j,neuronalNetworkDrawing.offsetHeight/(parseInt(numberOfNeuronsInTheHiddenLayer2Input.value)+2)+"px",column4, "gray", j);
                }
            }
            
        }
        for(var j=0;j<numberOfNeuronsInTheOutputLayerInput.value;j++)
        {
            drawFunction("50px", "50px", "oN"+j, neuronalNetworkDrawing.offsetHeight/(parseInt(numberOfNeuronsInTheOutputLayerInput.value)+2)+"px", column5, "green", j);
        }
    

}
function drawLines()
{
    const neuronPositionsC1 = document.getElementById("column1").getElementsByTagName('p');
    const neuronPositionsC2 = document.getElementById("column2").getElementsByTagName('p');
    const neuronPositionsC3 = document.getElementById("column3").getElementsByTagName('p');
    const neuronPositionsC4 = document.getElementById("column4").getElementsByTagName('p');
    const neuronPositionsC5 = document.getElementById("column5").getElementsByTagName('p');

    var svgPanel = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svgPanel.style.position = "absolute";
    svgPanel.style.top = "0";
    svgPanel.style.left = "0";
    svgPanel.style.width = "100%";
    svgPanel.style.height = "100%";
    svgPanel.style.pointerEvents = "none";
    svgPanel.style.overflow = "visible";
    svgPanel.style.zIndex = "-1";
    
    for( i=0; i< neuronPositionsC1.length; i++ )
    {
        var neuronPositionC1 = neuronPositionsC1[i];
        var x1 = neuronPositionC1.offsetLeft+55;
        var y1 = neuronPositionC1.offsetTop+25;
        for( j=0; j< neuronPositionsC2.length; j++ )
        {
            var neuronPositionC2 = neuronPositionsC2[j];
            var x2 = neuronPositionC2.offsetLeft-5;
            var y2 = neuronPositionC2.offsetTop+25;
            var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.style.strokeWidth = "2px";
            line.style.stroke = "rgb(0 0 0 / 18%)";
            line.setAttribute('x1',x1);
            line.setAttribute('y1',y1);
            line.setAttribute('x2',x2);
            line.setAttribute('y2',y2);
            
            
            svgPanel.appendChild(line);
            
        }
        
    }
    if(numberOfLayersInput.value == 1)
    {
        for( i=0; i< neuronPositionsC2.length; i++ )
        {
            var neuronPositionC2 = neuronPositionsC2[i];
            var x1 = neuronPositionC2.offsetLeft+55;
            var y1 = neuronPositionC2.offsetTop+25;
            for( j=0; j< neuronPositionsC5.length; j++ )
            {
                var neuronPositionC5 = neuronPositionsC5[j];
                var x2 = neuronPositionC5.offsetLeft-5;
                var y2 = neuronPositionC5.offsetTop+25;
                var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.style.strokeWidth = "2px";
                line.style.stroke = "rgb(0 0 0 / 18%)";
                line.setAttribute('x1',x1);
                line.setAttribute('y1',y1);
                line.setAttribute('x2',x2);
                line.setAttribute('y2',y2);
                
                
                svgPanel.appendChild(line);
                
            }
            
        }
    }
    else
    if(numberOfLayersInput.value == 2)
    {
        for( i=0; i< neuronPositionsC2.length; i++ )
        {
            var neuronPositionC2 = neuronPositionsC2[i];
            var x1 = neuronPositionC2.offsetLeft+55;
            var y1 = neuronPositionC2.offsetTop+25;
            for( j=0; j< neuronPositionsC3.length; j++ )
            {
                var neuronPositionC3 = neuronPositionsC3[j];
                var x2 = neuronPositionC3.offsetLeft-5;
                var y2 = neuronPositionC3.offsetTop+25;
                var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.style.strokeWidth = "2px";
                line.style.stroke = "rgb(0 0 0 / 18%)";
                line.setAttribute('x1',x1);
                line.setAttribute('y1',y1);
                line.setAttribute('x2',x2);
                line.setAttribute('y2',y2);
                
                
                svgPanel.appendChild(line);
                
            }
            
        }
        for( i=0; i< neuronPositionsC3.length; i++ )
        {
            var neuronPositionC3 = neuronPositionsC3[i];
            var x1 = neuronPositionC3.offsetLeft+55;
            var y1 = neuronPositionC3.offsetTop+25;
            for( j=0; j< neuronPositionsC5.length; j++ )
            {
                var neuronPositionC5 = neuronPositionsC5[j];
                var x2 = neuronPositionC5.offsetLeft-5;
                var y2 = neuronPositionC5.offsetTop+25;
                var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.style.strokeWidth = "2px";
                line.style.stroke = "rgb(0 0 0 / 18%)";
                line.setAttribute('x1',x1);
                line.setAttribute('y1',y1);
                line.setAttribute('x2',x2);
                line.setAttribute('y2',y2);
                
                
                svgPanel.appendChild(line);
                
            }
            
        }
    }
    else
    if(numberOfLayersInput.value == 3)
    {
        for( i=0; i< neuronPositionsC2.length; i++ )
        {
            var neuronPositionC2 = neuronPositionsC2[i];
            var x1 = neuronPositionC2.offsetLeft+55;
            var y1 = neuronPositionC2.offsetTop+25;
            for( j=0; j< neuronPositionsC3.length; j++ )
            {
                var neuronPositionC3 = neuronPositionsC3[j];
                var x2 = neuronPositionC3.offsetLeft-5;
                var y2 = neuronPositionC3.offsetTop+25;
                var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.style.strokeWidth = "2px";
                line.style.stroke = "rgb(0 0 0 / 18%)";
                line.setAttribute('x1',x1);
                line.setAttribute('y1',y1);
                line.setAttribute('x2',x2);
                line.setAttribute('y2',y2);
                
                
                svgPanel.appendChild(line);
                
            }
            
        }
        for( i=0; i< neuronPositionsC3.length; i++ )
        {
            var neuronPositionC3 = neuronPositionsC3[i];
            var x1 = neuronPositionC3.offsetLeft+55;
            var y1 = neuronPositionC3.offsetTop+25;
            for( j=0; j< neuronPositionsC4.length; j++ )
            {
                var neuronPositionC4 = neuronPositionsC4[j];
                var x2 = neuronPositionC4.offsetLeft-5;
                var y2 = neuronPositionC4.offsetTop+25;
                var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.style.strokeWidth = "2px";
                line.style.stroke = "rgb(0 0 0 / 18%)";
                line.setAttribute('x1',x1);
                line.setAttribute('y1',y1);
                line.setAttribute('x2',x2);
                line.setAttribute('y2',y2);
                
                
                svgPanel.appendChild(line);
                
            }
            
        }
        for( i=0; i< neuronPositionsC4.length; i++ )
        {
            var neuronPositionC4 = neuronPositionsC4[i];
            var x1 = neuronPositionC4.offsetLeft+55;
            var y1 = neuronPositionC4.offsetTop+25;
            for( j=0; j< neuronPositionsC5.length; j++ )
            {
                var neuronPositionC5 = neuronPositionsC5[j];
                var x2 = neuronPositionC5.offsetLeft-5;
                var y2 = neuronPositionC5.offsetTop+25;
                var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.style.strokeWidth = "2px";
                line.style.stroke = "rgb(0 0 0 / 18%)";
                line.setAttribute('x1',x1);
                line.setAttribute('y1',y1);
                line.setAttribute('x2',x2);
                line.setAttribute('y2',y2);
                
                
                svgPanel.appendChild(line);
                
            }
            
        }
    }


    
    
    
    
    document.body.appendChild(svgPanel);
    
    
	
}


function StartWork()
{
    calculateInputFunctionLayer0();
    functiiActivareLayer0();
    if(numberOfLayersInput.value == 2)
    {
        calculateInputFunctionLayer1();
        functiiActivareLayer1();

    }
    else
    if(numberOfLayersInput.value == 3)
    {
        calculateInputFunctionLayer1();
        functiiActivareLayer1();
        calculateInputFunctionLayer2();
        functiiActivareLayer2();

    }
    calculateInputFunctionOutput();
    functiiActivareOutput();
    writeAllData();
    
    

}
confirmCreateNeuronalNetworkButton.onclick = function(){
    drawNetworkFunction(); 
    drawLines();
    modal.style.display = "none";
    verifyCreatedNetwork = true;

}
numberOfLayersInput.oninput = function(){
    if(numberOfLayersInput.value == 1)
    {
        numnerOfNeuronsInTheHiddenLayer1Window.style.display = "none";
        numnerOfNeuronsInTheHiddenLayer2Window.style.display = "none";
        Layer1Button.style.display = "none";
        Layer2Button.style.display = "none";
        column3.style.display = "none";
        column4.style.display = "none";
    }
    else
    if(numberOfLayersInput.value == 2)
    {
        numnerOfNeuronsInTheHiddenLayer1Window.style.display = "block";
        numnerOfNeuronsInTheHiddenLayer2Window.style.display = "none";
        Layer1Button.style.display = "block";
        Layer2Button.style.display = "none";
        column3.style.display = "flex";
        column4.style.display = "none";
    }
    else
    if(numberOfLayersInput.value == 3)
    {
        numnerOfNeuronsInTheHiddenLayer1Window.style.display = "block";
        numnerOfNeuronsInTheHiddenLayer2Window.style.display = "block";
        Layer1Button.style.display = "block";
        Layer2Button.style.display = "block";
        column3.style.display = "flex";
        column4.style.display = "flex";
        
    }
}







