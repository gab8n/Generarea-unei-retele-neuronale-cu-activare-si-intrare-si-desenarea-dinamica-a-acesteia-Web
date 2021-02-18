var produsInputLayerLayer2Wheigt = [];

function calculateInputFunctionLayer2()
{
    
    
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer2Input.value; j++)
    {
        
        for(var i=0; i<numberOfNeuronsInTheHiddenLayer1Input.value; i++)
        {
            
            
            
            produsInputLayerLayer2Wheigt[i] = hidden1Activation[i]*hiddenLayer2Array[j][i];
            //console.log(hiddenLayer0Array[j][i] +" i:"+i+" j:"+j);
        }
        if(layer0InputFunctionSelect.value == 1)
        {
             hidden2InputFunction[j] = Math.max.apply(null, produsInputLayerLayer2Wheigt.filter(function(n) { return !isNaN(n); }));
             //console.log("max"+hidden0InputFunction[j]);
        }
        else
        if(layer0InputFunctionSelect.value == 2)
        {
            hidden2InputFunction[j] = Math.min.apply(null, produsInputLayerLayer2Wheigt.filter(function(n) { return !isNaN(n); }));
            //console.log("min"+hidden0InputFunction[j]);
        }
        else
        if(layer0InputFunctionSelect.value == 3)
        {
            var sumaFunctiaIntrare = 0;
            for(var k=0;k< produsInputLayerLayer2Wheigt.length;k++){
                sumaFunctiaIntrare = sumaFunctiaIntrare + produsInputLayerLayer2Wheigt[k];
                console.log(produsInputLayerLayer2Wheigt[k]);
            }
            hidden2InputFunction[j] = sumaFunctiaIntrare;
            //console.log("suma" +sumaFunctiaIntrare);
        }
        else
        if(layer0InputFunctionSelect.value == 4)
        {
            var produsFunctiaIntrare = 1;
            for(var k=0;k< produsInputLayerLayer2Wheigt.length;k++){
                produsFunctiaIntrare = produsFunctiaIntrare * produsInputLayerLayer2Wheigt[k];
            }
            hidden2InputFunction[j] = produsFunctiaIntrare;
            //console.log(produsFunctiaIntrare);
        }
        console.log("Layer2Input"+hidden0InputFunction[j]);
    }
    
}

function calculareFunctiaActivareLiniaraLayer2()
{
    var layer2AlfaInput = document.getElementById("layer2AlfaInput").value;
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer2Input.value; j++)
    {
        
       
        
        if(hidden2InputFunction[j] < (-1)/layer2AlfaInput)
        {
            hidden2Activation[j] = -1;
        }
        else
        if(hidden2InputFunction[j] > 1/layer2AlfaInput)
        {
            hidden2Activation[j] = 1;
        }
        else
        {
            hidden2Activation[j] = hidden2InputFunction[j]*layer2AlfaInput;
        }
        if(Layer2SelectBinar.value ==2)
        {
            if(hidden2Activation[j]  >= 0)
            {
                hidden2Activation[j]  = 1;
            }
            else
            {
                hidden2Activation[j]  = -1;
            }
        }
        
        //functiaDeIesire();
        console.log("LiniaraLayer2 : "+ hidden2Activation[j]);
    }
    
    

}
function calculareFunctiaActivareSemnLayer2()
{
    var layer2OmegaInput = document.getElementById("layer2OmegaInput").value;
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer2Input.value; j++)
    {
        
        
        if(hidden2InputFunction[j] >= layer2OmegaInput)
        {
            hidden2Activation[j] = 1;
        }
        else
        {
            hidden2Activation[j] = -1;
        }

        
        //functiaDeIesire();
        console.log("semn Layer2: "+ hidden2Activation[j]);
    }
}
function calculareFunctiaActivareSigmoidalaLayer2()
{  
    var layer2AlfaInput = document.getElementById("layer2AlfaInput").value;
    var layer2OmegaInput = document.getElementById("layer2OmegaInput").value;
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer2Input.value; j++)
    {
        
        
        hidden2Activation[j] = 1 / (1 + Math.pow(e, layer2AlfaInput * (-1) * (hidden2InputFunction[j] - layer2OmegaInput)));
        if(Layer2SelectBinar.value ==2)
        {
            if(hidden2Activation[j] > 0.5)
            {
                hidden2Activation[j] = 1;
            }
            else
            {
                hidden2Activation[j] = 0;
            }

        }
        //functiaDeIesire();
        console.log("sigmoidalaLayer2 : "+ hidden2Activation[j]);

    }
}
function calculareFunctiaActivareTreaptaLayer2()
{
    var layer2OmegaInput = document.getElementById("layer2OmegaInput").value;
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer2Input.value; j++)
    {
        
        if(hidden2InputFunction[j] >= layer2OmegaInput)
        {
            hidden2Activation[j] = 1; 
        }
        else
        {
            hidden2Activation[j] = 0;
        }
        //functiaDeIesire();
        console.log("treaptaLayer2 : "+ hidden2Activation[j] + " hidden2InputFunction[j] : "+hidden2InputFunction[j]+" layer2OmegaInput : "+layer2OmegaInput);

    }

}
function calculareFunctiaActivareTangentaHiperbolicaLayer2()
{
    var layer2AlfaInput = document.getElementById("layer2AlfaInput").value;
    var layer2OmegaInput = document.getElementById("layer2OmegaInput").value;
    for(var j=0; j<numberOfNeuronsInTheHiddenLayer2Input.value; j++)
    {
        hidden2Activation[j] = ((Math.pow(e, layer2AlfaInput * (hidden2InputFunction[j] - layer2OmegaInput)) 
        - Math.pow(e, -layer2AlfaInput * (hidden2InputFunction[j] - layer2OmegaInput)))) / 
        ((Math.pow(e, layer2AlfaInput * (hidden2InputFunction[j] - layer2OmegaInput)) +
        Math.pow(e, -layer2AlfaInput* (hidden2InputFunction[j]-layer2OmegaInput))));
        if(Layer2SelectBinar.value ==2)
        {
            if(hidden2Activation[j]  >= 0)
            {
                hidden2Activation[j]  = 1;
            }
            else
            {
                hidden2Activation[j]  = -1;
            }
        }
        //functiaDeIesire();
        console.log("HiperbolicaLayer2 : "+ hidden2Activation[j]);
    }
}






function functiiActivareLayer2()
{
    var layer2ActivationFunctionSelect = document.getElementById("layer2ActivationFunctionSelect").value;
    if(layer2ActivationFunctionSelect == 1)
    {
        calculareFunctiaActivareLiniaraLayer2();
    }
    else
    if(layer2ActivationFunctionSelect == 2)
    {
        calculareFunctiaActivareSigmoidalaLayer2();
    }
    else
    if(layer2ActivationFunctionSelect == 3)
    {
        calculareFunctiaActivareTangentaHiperbolicaLayer2();
    }
    else
    if(layer2ActivationFunctionSelect == 4)
    {
        calculareFunctiaActivareTreaptaLayer2();
    }
    else
    if(layer2ActivationFunctionSelect == 5)
    {
        calculareFunctiaActivareSemnLayer2();
    }

}









