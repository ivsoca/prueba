
fetch('https://valorant-api.com/v1/agents')  // Utilizar el endpoint correcto
    .then(res => res.json())
    .then(data => {
        console.log(data);  // Manejar la respuesta de la API

        const agents = data.data;

        // Crear un contenedor flex para los agentes
        const container = document.createElement('div');
        container.classList.add('agent-container');
        
        // Agregar el contenedor al body
        document.body.appendChild(container)


        // Iterar sobre los agentes y crear elementos article dentro del contenedor
        agents.forEach(agent =>{
            
            const agentDiv = document.createElement('article');
            agentDiv.classList.add('agent-container');
            
            agentDiv.innerHTML = `
            <div class="card">
            <div class="face front">
                <h2>${agent.displayName}</h2>
                <img src="${agent.displayIcon}" />               
              </div>
            <div class="face back">
                <p>Abilitie (Q): ${agent.abilities[0].displayName}<p>
                <p>Abilitie (E): ${agent.abilities[1].displayName}<p>
                <p>Abilitie (C): ${agent.abilities[2].displayName}<p>
                <p>Abilitie (X): ${agent.abilities[3 ].displayName}<p>
              </div>
            <div>
            `;
            container.appendChild(agentDiv);
            console.log("Nombre agente:", agent.displayName);
        })
    })
    .catch(error => {
        console.log('ERROR', error);  // Manejar errores
    });


    //probando




    
// fetch('https://valorant-api.com/v1/agents')  // Utilizar el endpoint correcto
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);  // Manejar la respuesta de la API

//         const agents = data.data;

//         // Crear un contenedor flex para los agentes
//         const container = document.createElement('div');
//         container.classList.add('agent-container');
        
//         // Agregar el contenedor al body
//         document.body.appendChild(container)


//         // Iterar sobre los agentes y crear elementos article dentro del contenedor
//         agents.forEach(agent =>{
            
//             const agentDiv = document.createElement('article');
//             agentDiv.classList.add('agent-container');
            
//             agentDiv.innerHTML = `
//             <div class="info-agents">
//             <div>
//                 <img src="${agent.displayIcon}" />
//             </div>
//             <h2>${agent.displayName}</h2>
//             <p>Tipo: ${agent.role.displayName}</p>
//             <div>
//             `;
//             container.appendChild(agentDiv);
//             console.log("Nombre agente:", agent.displayName);
//         })
//     })
//     .catch(error => {
//         console.log('ERROR', error);  // Manejar errores
//     });