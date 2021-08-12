$(()=>{
    
    const cards = $('<div class="my-cards">');    
    const buildCardsHtml = (arr) => {       
        console.log('arr',arr.cards);   
        for(let i = 0; i < 5; i++){
            const card = $('<div class="my-card">');
            const gameImg = arr.cards[i].imageUrl;
            const title = arr.cards[i].name;
            const foreignName = arr.cards[i].foreignNames[6].name;
            const itemText = arr.cards[i].foreignNames[6].text;                        
            const gameImage = $(`<img src ="${gameImg}" alt="#">`);
            const cardInfo = $('<div class="card-info">');
            const cardInfoText = `
                <h2 id="title">${title}</h2>
                <p id="foreignName">${foreignName}</p>
                <i id="itemText">${itemText}</i>
            `
            cardInfo.append(cardInfoText);
            card.append(gameImage);
            card.append(cardInfo);
            cards.append(card);
        }
        $('#v-pills-mgt').append(cards);
    }

    buildCatFactHtml = (data) => {
        let fact = $('<div class="fact mt-3">');
        let info = $('<p>');
        info = data.fact;
        fact.append(info);
        $('#v-pills-catFact').append(fact);
    }

    $('#show-btn').on('click', function() {        
        $.get('https://catfact.ninja/fact', function(data){
            buildCatFactHtml(data);    
        console.log(data);
        })
    })    

    $('#search-btn').on('click', function () {            
        $.get('https://api.magicthegathering.io/v1/cards', function (data) {
            buildCardsHtml(data);
            console.log(data);
        })
    })  


})