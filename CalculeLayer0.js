var produsInputLayerLayer0Wheigt = [];

function calculateInputFunctionLayer0()
{
    
    
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer0Input.value; j++)
    {
        
        for(var i=0; i<numberOfNeuronsInTheInputLayerInput.value; i++)
        {
            
            
            
            produsInputLayerLayer0Wheigt[i] = inputLayerArray[i]*hiddenLayer0Array[j][i];
            //console.log(hiddenLayer0Array[j][i] +" i:"+i+" j:"+j);
        }
        if(layer0InputFunctionSelect.value == 1)
        {
             hidden0InputFunction[j] = Math.max.apply(null, produsInputLayerLayer0Wheigt.filter(function(n) { return !isNaN(n); }));
             //console.log("max"+hidden0InputFunction[j]);
        }
        else
        if(layer0InputFunctionSelect.value == 2)
        {
            hidden0InputFunction[j] = Math.min.apply(null, produsInputLayerLayer0Wheigt.filter(function(n) { return !isNaN(n); }));
            //console.log("min"+hidden0InputFunction[j]);
        }
        else
        if(layer0InputFunctionSelect.value == 3)
        {
            var sumaFunctiaIntrare = 0;
            for(var k=0;k< produsInputLayerLayer0Wheigt.length;k++){
                sumaFunctiaIntrare = sumaFunctiaIntrare + produsInputLayerLayer0Wheigt[k];
                console.log(produsInputLayerLayer0Wheigt[k]);
            }
            hidden0InputFunction[j] = sumaFunctiaIntrare;
            //console.log("suma" +sumaFunctiaIntrare);
        }
        else
        if(layer0InputFunctionSelect.value == 4)
        {
            var produsFunctiaIntrare = 1;
            for(var k=0;k< produsInputLayerLayer0Wheigt.length;k++){
                produsFunctiaIntrare = produsFunctiaIntrare * produsInputLayerLayer0Wheigt[k];
            }
            hidden0InputFunction[j] = produsFunctiaIntrare;
            //console.log(produsFunctiaIntrare);
        }
        console.log( "hidden0Input: "+hidden0InputFunction[j]);
    }
    
}

function calculareFunctiaActivareLiniaraLayer0()
{
    var layer0AlfaInput = document.getElementById("layer0AlfaInput").value;
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer0Input.value; j++)
    {
        
       
        
        if(hidden0InputFunction[j] < (-1)/layer0AlfaInput)
        {
            hidden0Activation[j] = -1;
        }
        else
        if(hidden0InputFunction[j] > 1/layer0AlfaInput)
        {
            hidden0Activation[j] = 1;
        }
        else
        {
            hidden0Activation[j] = hidden0InputFunction[j]*layer0AlfaInput;
        }
        if(Layer0SelectBinar.value ==2)
        {
            if(hidden0Activation[j]  >= 0)
            {
                hidden0Activation[j]  = 1;
            }
            else
            {
                hidden0Activation[j]  = -1;
            }
        }
        //functiaDeIesire();
        console.log("LiniaraLayer0 : "+ hidden0Activation[j]);
    }
    
    

}
function calculareFunctiaActivareSemnLayer0()
{
    var layer0OmegaInput = document.getElementById("layer0OmegaInput").value;
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer0Input.value; j++)
    {
        
        
        if(hidden0InputFunction[j] >= layer0OmegaInput)
        {
            hidden0Activation[j] = 1;
        }
        else
        {
            hidden0Activation[j] = -1;
        }

        
        //functiaDeIesire();
        console.log("semnLayer0 : "+ hidden0Activation[j]);
    }
}
function calculareFunctiaActivareSigmoidalaLayer0()
{  
    var layer0AlfaInput = document.getElementById("layer0AlfaInput").value;
    var layer0OmegaInput = document.getElementById("layer0OmegaInput").value;
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer0Input.value; j++)
    {
        
        
        hidden0Activation[j] = 1 / (1 + Math.pow(e, layer0AlfaInput * (-1) * (hidden0InputFunction[j] - layer0OmegaInput)));
        if(Layer0SelectBinar.value ==2)
        {
            if(hidden0Activation[j] > 0.5)
            {
                hidden0Activation[j] = 1;
            }
            else
            {
                hidden0Activation[j] = 0;
            }

        }
        
        //functiaDeIesire();
        console.log("sigmoidalaLayer0 : "+ hidden0Activation[j]);

    }
}
function calculareFunctiaActivareTreaptaLayer0()
{
    var layer0OmegaInput = document.getElementById("layer0OmegaInput").value;
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer0Input.value; j++)
    {
        
        if(hidden0InputFunction[j] >= layer0OmegaInput)
        {
            hidden0Activation[j] = 1; 
        }
        else
        {
            hidden0Activation[j] = 0;
        }
        //functiaDeIesire();
        console.log("treaptaLayer0 : "+ hidden0Activation[j] + " hidden0InputFunction[j] : "+hidden0InputFunction[j]+" layer0OmegaInput : "+layer0OmegaInput);

    }

}
function calculareFunctiaActivareTangentaHiperbolicaLayer0()
{
    var layer0AlfaInput = document.getElementById("layer0AlfaInput").value;
    var layer0OmegaInput = document.getElementById("layer0OmegaInput").value;
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer0Input.value; j++)
    {
        hidden0Activation[j] = ((Math.pow(e, layer0AlfaInput * (hidden0InputFunction[j] - layer0OmegaInput)) 
        - Math.pow(e, -layer0AlfaInput * (hidden0InputFunction[j] - layer0OmegaInput)))) / 
        ((Math.pow(e, layer0AlfaInput * (hidden0InputFunction[j] - layer0OmegaInput)) +
        Math.pow(e, -layer0AlfaInput* (hidden0InputFunction[j]-layer0OmegaInput))));
        if(Layer0SelectBinar.value ==2)
        {
            if(hidden0Activation[j]  >= 0)
            {
                hidden0Activation[j]  = 1;
            }
            else
            {
                hidden0Activation[j]  = -1;
            }
        }
        //functiaDeIesire();
        console.log("HiperbolicaLayer0 : "+ hidden0Activation[j]);
    }
}






function functiiActivareLayer0()
{
    var layer0ActivationFunctionSelect = document.getElementById("layer0ActivationFunctionSelect").value;
    if(layer0ActivationFunctionSelect == 1)
    {
        calculareFunctiaActivareLiniaraLayer0();
    }
    else
    if(layer0ActivationFunctionSelect == 2)
    {
        calculareFunctiaActivareSigmoidalaLayer0();
    }
    else
    if(layer0ActivationFunctionSelect == 3)
    {
        calculareFunctiaActivareTangentaHiperbolicaLayer0();
    }
    else
    if(layer0ActivationFunctionSelect == 4)
    {
        calculareFunctiaActivareTreaptaLayer0();
    }
    else
    if(layer0ActivationFunctionSelect == 5)
    {
        calculareFunctiaActivareSemnLayer0();
    }

}









