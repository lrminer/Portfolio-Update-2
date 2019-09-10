$.get('/api/portfolio').then(function (data) {
    console.log(data);

    // data.forEach((item)=>{
    //     console.log(item);
    //     $('div#display').append(item.title);

    // })

    // not going to be able to do a normal loop here because we need to add the empty columns as well.
    // we need to, on every other iteration, create two empty div.col elements to keep spacing :)
    for (let i = 0; i < data.length; i++) {
        const col = $('<div>').addClass('col p-0');
        const h4 = $('<h4>').addClass('card-title').text(data[i].title);
        const p = $('<p>').addClass('card-text').text(data[i].description);
        // const p = $('<p>').addClass('card-text').text(`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        // Libero maiores
        // odit ea rem, minima tenetur. Dolore in consequuntur doloribus numquam
        // accusantium non
        // molestiae sed aliquam, ducimus quam aliquid voluptatum ipsum? Lorem ipsum dolor
        // sit amet,
        // consectetur adipisicing elit. Deserunt, nam rerum dolores quaerat cum fugiat a?
        // Soluta,
        // vitae eveniet molestiae voluptate eius praesentium, rerum accusamus sed eaque,
        // accusantium
        // odit ipsam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
        // dolorem alias
        // dicta dolores odit dolor maxime animi? Modi voluptates necessitatibus, molestias
        // voluptatem
        // a reprehenderit et excepturi sequi placeat, quasi nesciunt.`);

        const aGHRepo = $('<p>').append($('<a>').addClass('text-white').attr('href', data[i].links.github).text("GitHub Repository"));
        // const aGHRepo = $('<a>').attr('href', "http://localhost:2000").text("GitHub Repository");
        const aDeploy = $('<p>').append($('<a>').addClass('text-white').attr('href', data[i].links.deployed).text("Website"));
        const cardBody = $('<div>').addClass('card-body').append(h4, p, aDeploy, aGHRepo);
        const card = $('<div>').addClass('card text-white bg-primary').append(cardBody);
        col.append(card);
        $('div#display').append(col);
        const w100 = $('<div>').addClass('w-100');
        if ((i + 1) % 2) {
            const fillercol1 = $('<div>').addClass('col');
            const fillercol2 = $('<div>').addClass('col');
            $('div#display').append(fillercol1, w100, fillercol2);
        } else {
            $('div#display').append(w100);
        }

    }



    // data.forEach((item) => {
    //     const col = $('<div>').addClass('col p-0');
    //     const h4 = $('<h4>').addClass('card-title').text(item.title);
    //     // const p = $('<p>').addClass('card-text').text(item.description)
    //     const p = $('<p>').addClass('card-text').text(`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //     Libero maiores
    //     odit ea rem, minima tenetur. Dolore in consequuntur doloribus numquam
    //     accusantium non
    //     molestiae sed aliquam, ducimus quam aliquid voluptatum ipsum? Lorem ipsum dolor
    //     sit amet,
    //     consectetur adipisicing elit. Deserunt, nam rerum dolores quaerat cum fugiat a?
    //     Soluta,
    //     vitae eveniet molestiae voluptate eius praesentium, rerum accusamus sed eaque,
    //     accusantium
    //     odit ipsam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
    //     dolorem alias
    //     dicta dolores odit dolor maxime animi? Modi voluptates necessitatibus, molestias
    //     voluptatem
    //     a reprehenderit et excepturi sequi placeat, quasi nesciunt.`);
    //     const cardBody = $('<div>').addClass('card-body').append(h4, p);
    //     const card = $('<div>').addClass('card text-white bg-primary').append(cardBody);
    //     col.append(card);
    //     $('div#display').append(col);
    // });
})