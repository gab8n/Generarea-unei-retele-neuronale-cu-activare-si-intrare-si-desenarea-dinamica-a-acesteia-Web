var produsInputLayerOutputWheigt = [];

function calculateInputFunctionOutput()
{
    
    
    for(var j=0; j<numberOfNeuronsInTheOutputLayerInput.value; j++)
    {
        if(numberOfLayersInput.value == 1)
        {
        
            for(var i=0; i<numberOfNeuronsInTheHiddenLayer0Input.value; i++)
            {
                produsInputLayerOutputWheigt[i] = hidden0Activation[i]*outputLayerArray[j][i];
                //console.log(hiddenLayer0Array[j][i] +" i:"+i+" j:"+j);
            }
        }
        else
        if(numberOfLayersInput.value == 2)
        {
            for(var i=0; i<numberOfNeuronsInTheHiddenLayer1Input.value; i++)
            {
                produsInputLayerOutputWheigt[i] = hidden1Activation[i]*outputLayerArray[j][i];
                //console.log(hiddenLayer0Array[j][i] +" i:"+i+" j:"+j);
            }
        }
        else
        if(numberOfLayersInput.value == 3)
        {
            for(var i=0; i<numberOfNeuronsInTheHiddenLayer2Input.value; i++)
            {
                produsInputLayerOutputWheigt[i] = hidden2Activation[i]*outputLayerArray[j][i];
                //console.log(hiddenLayer0Array[j][i] +" i:"+i+" j:"+j);
            }
        }
        if(outputInputFunctionSelect.value == 1)
        {
            outputInputFunction[j] = Math.max.apply(null, produsInputLayerOutputWheigt.filter(function(n) { return !isNaN(n); }));
             //console.log("max"+hidden0InputFunction[j]);
        }
        else
        if(outputInputFunctionSelect.value == 2)
        {
            outputInputFunction[j] = Math.min.apply(null, produsInputLayerOutputWheigt.filter(function(n) { return !isNaN(n); }));
            //console.log("min"+hidden0InputFunction[j]);
        }
        else
        if(outputInputFunctionSelect.value == 3)
        {
            var sumaFunctiaIntrare = 0;
            for(var k=0;k< produsInputLayerOutputWheigt.length;k++){
                sumaFunctiaIntrare = sumaFunctiaIntrare + produsInputLayerOutputWheigt[k];
                //console.log(produsInputLayerOutputWheigt[k]);
            }
            outputInputFunction[j] = sumaFunctiaIntrare;
            //console.log("suma" +sumaFunctiaIntrare);
        }
        else
        if(outputInputFunctionSelect.value == 4)
        {
            var produsFunctiaIntrare = 1;
            for(var k=0;k< produsInputLayerOutputWheigt.length;k++){
                produsFunctiaIntrare = produsFunctiaIntrare * produsInputLayerOutputWheigt[k];
            }
            outputInputFunction[j] = produsFunctiaIntrare;
            //console.log(produsFunctiaIntrare);
        }
        console.log("OutputInputFunction : "+outputInputFunction[j]);
    }
    
}

function calculareFunctiaActivareLiniaraOutput()
{

    var outputAlfaInput = document.getElementById("outputAlfaInput").value;
    for(var j=0; j<numberOfNeuronsInTheOutputLayerInput.value; j++)
    {
        
       
        
        if(outputInputFunction[j] < (-1)/outputAlfaInput)
        {
            outputActivation[j] = -1;
        }
        else
        if(outputInputFunction[j] > 1/outputAlfaInput)
        {
            outputActivation[j] = 1;
        }
        else
        {
            outputActivation[j] = outputInputFunction[j]*outputAlfaInput;
        }

        if(OutputSelectBinar.value ==2)
        {
            if(outputActivation[j]  >= 0)
            {
                outputActivation[j]  = 1;
            }
            else
            {
                outputActivation[j]  = -1;
            }
        }
        
        //functiaDeIesire();
        console.log("LiniaraOutput: "+ outputActivation[j]);
    }
    
    

}
function calculareFunctiaActivareSemnOutput()
{
    var outputOmegaInput = document.getElementById("outputOmegaInput").value;
    for(var j=0; j<numberOfNeuronsInTheOutputLayerInput.value; j++)
    {
        
        
        if(outputInputFunction[j] >= outputOmegaInput)
        {
            outputActivation[j] = 1;
        }
        else
        {
            outputActivation[j] = -1;
        }

        
        //functiaDeIesire();
        console.log("semnOutput: "+ outputActivation[j]);
    }
}
function calculareFunctiaActivareSigmoidalaOutput()
{  
    var outputAlfaInput = document.getElementById("outputAlfaInput").value;
    var outputOmegaInput = document.getElementById("outputOmegaInput").value;
    for(var j=0; j<numberOfNeuronsInTheOutputLayerInput.value; j++)
    {
        
        
        outputActivation[j] = 1 / (1 + Math.pow(e, outputAlfaInput * (-1) * (outputInputFunction[j] - outputOmegaInput)));
        if(OutputSelectBinar.value ==2)
        {
            if(outputActivation[j] > 0.5)
            {
                outputActivation[j] = 1;
            }
            else
            {
                outputActivation[j] = 0;
            }

        }
        
        //functiaDeIesire();
        console.log("sigmoidalaOutput: "+ outputActivation[j]);

    }
}
function calculareFunctiaActivareTreaptaOutput()
{
    
    var outputOmegaInput = document.getElementById("outputOmegaInput").value;
    for(var j=0; j<numberOfNeuronsInTheOutputLayerInput.value; j++)
    {
        
        if(outputInputFunction[j] >= outputOmegaInput)
        {
            outputActivation[j] = 1; 
        }
        else
        {
            outputActivation[j] = 0;
        }
        //functiaDeIesire();
        console.log("treaptaOutput: "+ outputActivation[j] + " outputInputFunction[j] : "+outputInputFunction[j]+" outputOmegaInput : "+outputOmegaInput);

    }

}
function calculareFunctiaActivareTangentaHiperbolicaOutput()
{
    

    var outputAlfaInput = document.getElementById("outputAlfaInput").value;
    var outputOmegaInput = document.getElementById("outputOmegaInput").value;
    for(var j=0; j<numberOfNeuronsInTheOutputLayerInput.value; j++)
    {
        outputActivation[j] = ((Math.pow(e, outputAlfaInput * (outputInputFunction[j] - outputOmegaInput)) 
        - Math.pow(e, -outputAlfaInput * (outputInputFunction[j] - outputOmegaInput)))) / 
        ((Math.pow(e, outputAlfaInput * (outputInputFunction[j] - outputOmegaInput)) +
        Math.pow(e, -outputAlfaInput* (outputInputFunction[j]-outputOmegaInput))));

        if(OutputSelectBinar.value ==2)
        {
            if(outputActivation[j]  >= 0)
            {
                outputActivation[j]  = 1;
            }
            else
            {
                outputActivation[j]  = -1;
            }
        }
        //functiaDeIesire();
        console.log("HiperbolicaOutput: "+ outputActivation[j]);
    }
}






function functiiActivareOutput()
{
    var outputActivationFunctionSelect = document.getElementById("outputActivationFunctionSelect").value;
    if(outputActivationFunctionSelect == 1)
    {
        calculareFunctiaActivareLiniaraOutput();
    }
    else
    if(outputActivationFunctionSelect == 2)
    {
        calculareFunctiaActivareSigmoidalaOutput();
    }
    else
    if(outputActivationFunctionSelect == 3)
    {
        calculareFunctiaActivareTangentaHiperbolicaOutput();
    }
    else
    if(outputActivationFunctionSelect == 4)
    {
        calculareFunctiaActivareTreaptaOutput();
    }
    else
    if(outputActivationFunctionSelect == 5)
    {
        calculareFunctiaActivareSemnOutput();
    }

}









