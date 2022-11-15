function creategame(player1, hour, player2){
    return `
    <li>
            <img src="./assets/icon-${player1}.svg" alt="icon ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="icon ${player2}">
    </li> 
    `
}
let delay = -0.4;
function creatcard(group, date, day, games) {
    delay = delay + 0.4
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h3> ${group}</h3>
    <h2> ${date} <span>${day}</span></h2>
    <ul>
        ${games}
    </ul>
</div>
    
    `
}


document.querySelector("#cards").innerHTML = 


    creatcard("Grupo G","24/11","Quinta", 
    creategame('suica', '07:00', 'camaroes') + 
    creategame('brazil', '16:00', 'serbia')) +

    creatcard('Grupo G','28/11','Segunda', 
    creategame('camaroes', '07:00', 'serbia') + 
    creategame('brazil', '13:00', 'suica')
    )+
    creatcard('Grupo G','02/12','Sexta', creategame('camaroes', '16:00', 'brazil') +
    creategame('serbia', '16:00', 'suica')
    )


