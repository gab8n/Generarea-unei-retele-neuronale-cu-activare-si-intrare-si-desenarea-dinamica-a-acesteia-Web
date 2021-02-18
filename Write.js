function writeAllData()
{
    
    for(var i=0;i<numberOfNeuronsInTheHiddenLayer0Input.value ; i++)
    {
        var inputFunction = document.getElementById("popupGlobalInputValueFirstLayer"+i );
        var activationFunction = document.getElementById("popupActivationValueFirstLayer"+i);
        var outputFunction = document.getElementById("popupOutputValueFirstLayer"+i);
        inputFunction.value = hidden0InputFunction[i];
        activationFunction.value = hidden0Activation[i];
        outputFunction.value = hidden0Activation[i];
    }
    if(numberOfLayersInput.value == 2)
    {
        for(var i=0;i<numberOfNeuronsInTheHiddenLayer1Input.value ; i++)
        {
            var inputFunction = document.getElementById("popupGlobalInputValueSecondLayer"+i);
            var activationFunction = document.getElementById("popupActivationValueSecondLayer"+i);
            var outputFunction = document.getElementById("popupOutputValueSecondLayer"+i);
            inputFunction.value = hidden1InputFunction[i];
            activationFunction.value = hidden1Activation[i];
            outputFunction.value = hidden1Activation[i];
        }
    }
    else
    if(numberOfLayersInput.value == 3)
    {
        for(var i=0;i<numberOfNeuronsInTheHiddenLayer1Input.value ; i++)
        {
            var inputFunction = document.getElementById("popupGlobalInputValueSecondLayer"+i);
            var activationFunction = document.getElementById("popupActivationValueSecondLayer"+i);
            var outputFunction = document.getElementById("popupOutputValueSecondLayer"+i);
            inputFunction.value = hidden1InputFunction[i];
            activationFunction.value = hidden1Activation[i];
            outputFunction.value = hidden1Activation[i];
        }
        for(var i=0;i<numberOfNeuronsInTheHiddenLayer2Input.value ; i++)
        {
            var inputFunction = document.getElementById("popupGlobalInputValueThirdLayer"+i);
            var activationFunction = document.getElementById("popupActivationValueThirdLayer"+i);
            var outputFunction = document.getElementById("popupOutputValueThirdLayer"+i);
            inputFunction.value = hidden2InputFunction[i];
            activationFunction.value = hidden2Activation[i];
            outputFunction.value = hidden2Activation[i];
        }
    }
    for(var i=0;i<numberOfNeuronsInTheOutputLayerInput.value ; i++)
    {
        var inputFunction = document.getElementById("popupGlobalInputValueForthLayer"+i);
        var activationFunction = document.getElementById("popupActivationValueForthLayer"+i);
        var outputFunction = document.getElementById("popupOutputValueForthLayer"+i);
        inputFunction.value = outputInputFunction[i];
        activationFunction.value = outputActivation[i];
        outputFunction.value = outputActivation[i];
    }

}