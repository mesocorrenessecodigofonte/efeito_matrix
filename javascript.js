//crie uma tag canvas com id matrix
var c = document.getElementById("matrix");
var ctx = c.getContext("2d");

// Faz o <canvas> ficar em tela cheia
c.height = window.innerHeight;
c.width = window.innerWidth;

// Caracteres codigo do matrix
var codigo = "12345678901357924680189127489715781891289257895718917892389757856570120789128972567890123078948957891728935708912589126394871293856192374019238041238058289123894789127589712891092384012734659648978566871200123874168923655650270917230491823642501227304712395612036951092384712089365123568074129034712938651092374109237426512093741920347120935681230930741209374";
// Converte a string em um array de caracteres únicos
codigo = codigo.split("");

var font_size = 10;
var columns = c.width/font_size; // Número de colunas do efeito (largura do <canvas> / tamanho da fonte)
// Um array cai - por coluna
var drops = [];
// A variável x representa a coordenada X
// Coordenada da queda 1=y (repete-se em cada inicialização)
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

// Escrevendo os caracteres
function draw()
{
    // Fundo preto no <canvas>
    // Fundo translucido para mostrar o efeito dos caracteres
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    
    ctx.fillStyle = "#0F0"; // Texto verde
    ctx.font = font_size + "px arial";
    // Loop entre as quedas de caracteres
    for(var i = 0; i < drops.length; i++)
    {
        // Escreve um caractere chinês aleatório
        var text = codigo[Math.floor(Math.random()*codigo.length)];
        // x = i*tamanho_da_fonte || y = valor das quedas[i]*tamanho_da_fonte
        ctx.fillText(text, i*font_size, drops[i]*font_size);
        
        // Manda a queda de volta ao topo depois de atravessar toda a tela
        // Randomizando o reset para as quedas se espalharem verticalmente na tela
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
        
        // Incrementando a coordenada Y
        drops[i]++;
    }
}

setInterval(draw, 33);