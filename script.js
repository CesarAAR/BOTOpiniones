window.onload=iniciar;

function iniciar(){
    const redNeuronal = new brain.NeuronalNetwork();

    const datos = [
        {
            "input":"Excelente labor... Una Ciudad con luz, será más segura... Bendiciones",
            "output":{"Positivo":1}
        },{
            "input":"El recorrido debería ser más fluido. Demasiada gente",
            "output":{"Negativo":1}  
        },{
            "input":"Todo les quedo hermoso",
            "output":{"Positivo":1}  
        },{
            "input":"Excelente horario, si bien es cierto agrada tu forma de decisiones y trabajo.",
            "output":{"Positivo":1}  
        },{
            "input":"En su cabeza sienten que somos de primer mundo cuando realmente es nefasto este señor",
            "output":{"Negativo":1}  
        },{
            "input":"Se ven muy contentos",
            "output":{"Positivo":1}  
        }
    ];

    redNeuronal.train(datos);

    let resultado = brain.likely("*Insertar frase a analizar*", redNeuronal);
    alert(resultado);
}