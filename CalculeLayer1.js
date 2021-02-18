
var produsInputLayerLayer1Wheigt = [];

function calculateInputFunctionLayer1()
{
    
    
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer1Input.value; j++)
    {
        
        for(var i=0; i<numberOfNeuronsInTheHiddenLayer0Input.value; i++)
        {
            
            
            
            produsInputLayerLayer1Wheigt[i] = hidden0Activation[i]*hiddenLayer1Array[j][i];
            //console.log(hiddenLayer0Array[j][i] +" i:"+i+" j:"+j);
        }
        if(layer1InputFunctionSelect.value == 1)
        {
            hidden1InputFunction[j] = Math.max.apply(null, produsInputLayerLayer1Wheigt.filter(function(n) { return !isNaN(n); }));
             //console.log("max"+hidden0InputFunction[j]);
        }
        else
        if(layer1InputFunctionSelect.value == 2)
        {
            hidden1InputFunction[j] = Math.min.apply(null, produsInputLayerLayer1Wheigt.filter(function(n) { return !isNaN(n); }));
            //console.log("min"+hidden0InputFunction[j]);
        }
        else
        if(layer1InputFunctionSelect.value == 3)
        {
            var sumaFunctiaIntrare = 0;
            for(var k=0;k< produsInputLayerLayer1Wheigt.length;k++){
                sumaFunctiaIntrare = sumaFunctiaIntrare + produsInputLayerLayer1Wheigt[k];
                console.log(produsInputLayerLayer1Wheigt[k]);
            }
            hidden1InputFunction[j] = sumaFunctiaIntrare;
            //console.log("suma" +sumaFunctiaIntrare);
        }
        else
        if(layer1InputFunctionSelect.value == 4)
        {
            var produsFunctiaIntrare = 1;
            for(var k=0;k< produsInputLayerLayer1Wheigt.length;k++){
                produsFunctiaIntrare = produsFunctiaIntrare * produsInputLayerLayer1Wheigt[k];
            }
            hidden1InputFunction[j] = produsFunctiaIntrare;
            //console.log(produsFunctiaIntrare);
        }
        console.log( "LAyer1Input: "+hidden1InputFunction[j]);
    }
    
}

function calculareFunctiaActivareLiniaraLayer1()
{
    var layer1AlfaInput = document.getElementById("layer1AlfaInput").value;
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer1Input.value; j++)
    {
        
       
        
        if(hidden1InputFunction[j] < (-1)/layer1AlfaInput)
        {
            hidden1Activation[j] = -1;
        }
        else
        if(hidden1InputFunction[j] > 1/layer1AlfaInput)
        {
            hidden1Activation[j] = 1;
        }
        else
        {
            hidden1Activation[j] = hidden1InputFunction[j]*layer1AlfaInput;
        }
        if(Layer1SelectBinar.value ==2)
        {
            if(hidden1Activation[j]  >= 0)
            {
                hidden1Activation[j]  = 1;
            }
            else
            {
                hidden1Activation[j]  = -1;
            }
        }
        
        //functiaDeIesire();
        console.log("LiniaraLayer1: "+ hidden1Activation[j]+ "alfa : "+layer1AlfaInput);
    }
    
    

}
function calculareFunctiaActivareSemnLayer1()
{
    var layer1OmegaInput = document.getElementById("layer1OmegaInput").value;
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer1Input.value; j++)
    {
        
        
        if(hidden1InputFunction[j] >= layer1OmegaInput)
        {
            hidden1Activation[j] = 1;
        }
        else
        {
            hidden1Activation[j] = -1;
        }

        
        //functiaDeIesire();
        console.log("semnLayer1 : "+ hidden1Activation[j]);
    }
}
function calculareFunctiaActivareSigmoidalaLayer1()
{  
    var layer1AlfaInput = document.getElementById("layer1AlfaInput").value;
    var layer1OmegaInput = document.getElementById("layer1OmegaInput").value;
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer1Input.value; j++)
    {
        
        
        hidden1Activation[j] = 1 / (1 + Math.pow(e, layer1AlfaInput * (-1) * (hidden1InputFunction[j] - layer1OmegaInput)));
        if(Layer1SelectBinar.value ==2)
        {
            if(hidden1Activation[j] > 0.5)
            {
                hidden1Activation[j] = 1;
            }
            else
            {
                hidden1Activation[j] = 0;
            }

        }
        
        //functiaDeIesire();
        console.log("sigmoidalaLayer1: "+ hidden1Activation[j]);

    }
}
function calculareFunctiaActivareTreaptaLayer1()
{
    var layer1OmegaInput = document.getElementById("layer1OmegaInput").value;
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer1Input.value; j++)
    {
        
        if(hidden1InputFunction[j] >= layer1OmegaInput)
        {
            hidden1Activation[j] = 1; 
        }
        else
        {
            hidden1Activation[j] = 0;
        }
        //functiaDeIesire();
        console.log("treaptaLAyer1 : "+ hidden1Activation[j] + " hidden1InputFunction[j] : "+hidden1InputFunction[j]+" layer1OmegaInput : "+layer1OmegaInput);

    }

}
function calculareFunctiaActivareTangentaHiperbolicaLayer1()
{
    var layer1AlfaInput = document.getElementById("layer1AlfaInput").value;
    var layer1OmegaInput = document.getElementById("layer1OmegaInput").value;
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer1Input.value; j++)
    {
        hidden1Activation[j] = ((Math.pow(e, layer1AlfaInput * (hidden1InputFunction[j] - layer1OmegaInput)) 
        - Math.pow(e, -layer1AlfaInput * (hidden1InputFunction[j] - layer1OmegaInput)))) / 
        ((Math.pow(e, layer1AlfaInput * (hidden1InputFunction[j] - layer1OmegaInput)) +
        Math.pow(e, -layer1AlfaInput* (hidden1InputFunction[j]-layer1OmegaInput))));
        if(Layer1SelectBinar.value ==2)
        {
            if(hidden1Activation[j]  >= 0)
            {
                hidden1Activation[j]  = 1;
            }
            else
            {
                hidden1Activation[j]  = -1;
            }
        }
        //functiaDeIesire();
        console.log("HiperbolicaLayer1 : "+ hidden1Activation[j]);
    }
}






function functiiActivareLayer1()
{
    var layer1ActivationFunctionSelect = document.getElementById("layer1ActivationFunctionSelect").value;
    if(layer1ActivationFunctionSelect == 1)
    {
        calculareFunctiaActivareLiniaraLayer1();
    }
    else
    if(layer1ActivationFunctionSelect == 2)
    {
        calculareFunctiaActivareSigmoidalaLayer1();
    }
    else
    if(layer1ActivationFunctionSelect == 3)
    {
        calculareFunctiaActivareTangentaHiperbolicaLayer1();
    }
    else
    if(layer1ActivationFunctionSelect == 4)
    {
        calculareFunctiaActivareTreaptaLayer1();
    }
    else
    if(layer1ActivationFunctionSelect == 5)
    {
        calculareFunctiaActivareSemnLayer1();
    }

}









