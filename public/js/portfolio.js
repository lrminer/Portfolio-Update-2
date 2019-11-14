$.get("/api/portfolio").then(function(data) {
  console.log(data);

  // data.forEach((item)=>{
  //     console.log(item);
  //     $('div#display').append(item.title);

  // })

  for (let i = 0; i < data.length; i++) {
    const link = $("<li>")
      .addClass("nav-item")
      .append(
        $("<a>")
          .addClass("nav-link")
          .text(data[i].title)
          .attr("href", "#" + data[i].title)
      );
    $("#link-list").append(link);
  }

  // not going to be able to do a normal loop here because we need to add the empty columns as well.
  // we need to, on every other iteration, create two empty div.col elements to keep spacing :)
  for (let i = 0; i < data.length; i++) {
    const col = $("<div>").addClass("col p-0");
    const h4 = $("<h4>")
      .addClass("card-title")
      .text(data[i].title);
    const p = $("<p>")
      .addClass("card-text")
      .text(data[i].description);
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

    const aGHRepo = $("<p>").append(
      $("<a>")
        .addClass("text-white")
        .attr("href", data[i].links.github)
        .text("GitHub Repository")
    );
    // const aGHRepo = $('<a>').attr('href', "http://localhost:2000").text("GitHub Repository");
    if (data[i].links.deployed) {
      var aDeploy = $("<p>").append(
        $("<a>")
          .addClass("text-white")
          .attr("href", data[i].links.deployed)
          .text("Website")
      );
    } else {
      var aDeploy = $("<p>").append(
        $("<a>")
          .addClass("text-white")
          .attr("href", data[i].links.deployed)
      );
    }

    const imageDiv = $("<div>").addClass(
      "d-flex flex-column align-items-center"
    );

    data[i].images.forEach(imageSrc => {
      const image = $("<img>")
        .attr("src", imageSrc)
        .addClass("portfolio-image");
      imageDiv.append(image);
    });

    const cardBody = $("<div>")
      .attr("id", data[i].title)
      .addClass("card-body d-flex flex-column align-items-center")
      .append(h4, p, aDeploy, aGHRepo, imageDiv);
    const card = $("<div>")
      .addClass("card text-white bg-primary collapsable mt-5")
      .append(cardBody);
    col.append(card);
    $("div#display").append(col);
    const w100 = $("<div>").addClass("w-100");
    if ((i + 1) % 2) {
      const fillercol1 = $("<div>").addClass("col");
      const fillercol2 = $("<div>").addClass("col");
      $("div#display").append(fillercol1, w100, fillercol2);
    } else {
      $("div#display").append(w100);
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

  const technicalSkillsList = [
    { tech: "JavaScript", image: "./images/javascript.png" },
    { tech: "html", image: "./images/html.png" },
    { tech: "css", image: "./images/css.png" },
    { tech: "node", image: "./images/node.png" },
    { tech: "react", image: "./images/react.png" },
    { tech: "mongodb", image: "./images/mongodb.jpg" },
    { tech: "socketio", image: "./images/socketio.png" },
    { tech: "mysql", image: "./images/mysql.jpg" },
    // { tech: "JavaScript", image: "./images/javascript.png" }
  ];

  for (let i = 0; i < technicalSkillsList.length; i++) {
    const div = $("<div>")
      .addClass("technical-skill-div col d-flex flex-column align-items-center")
      .append(
        $("<h6>").text(technicalSkillsList[i].tech),
        $("<img>").attr("src", technicalSkillsList[i].image).addClass('tech-image')
      );

    $("#technical-skills").append(div);
  }
});
