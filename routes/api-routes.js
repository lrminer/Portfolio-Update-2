module.exports = function (app) {
    app.get('/api/portfolio', (req, res) => {

        // put portfolio data here

        // const portfolioItems = [{
        //     h1: 'Pokemon Node',
        //     p: 'Snippet about piece',
        //     img: '<img>',
        //     src: "http://via.placeholder.com/200x200",
        //     ghpage: "https://github.com/lrminer/Nodemon",
        //     deployed: "https://github.com/lrminer/Nodemon"
        // }, {
        //     h1: 'Trivia Game',
        //     p: 'Snippet about piece',
        //     img: '<img>',
        //     src: "http://via.placeholder.com/200x200",
        //     ghpage: "https://github.com/lrminer/TriviaGame",
        //     deployed: "https://lrminer.github.io/TriviaGame/"
        // }, {
        //     h1: 'Translate-A-Tweet App',
        //     p: 'Project 1',
        //     img: '<img>',
        //     src: "http://via.placeholder.com/200x200",
        //     ghpage: "https://github.com/lrminer/translate-tweet-app",
        //     deployed: "https://lrminer.github.io/translate-tweet-app/"
        // }, {
        //     h1: 'Word Guess Game',
        //     p: 'Snippet about piece',
        //     img: '<img>',
        //     src: "http://via.placeholder.com/200x200",
        //     ghpage: "https://github.com/lrminer/Word-Guess-Game",
        //     deployed: "https://lrminer.github.io/Word-Guess-Game/"
        // }, {
        //     h1: 'Crystal Game',
        //     p: 'Snippet about piece',
        //     img: '<img>',
        //     src: "http://via.placeholder.com/200x200",
        //     ghpage: "https://github.com/lrminer/Unit-4-Game",
        //     deployed: "https://lrminer.github.io/Unit-4-Game/"
        // }]

        data = [{
            title: 'Tweet Translator',
            description: 'Project 1 for Georgia Tech Full Stack Web Development Bootcamp. Utilizes the Twitter and Google Translate APIs to send translated messages to twitter. Look me up on Twitter @consoleLogdog to see if it works!',
            technologies: [],
            links: {
                github: "https://github.com/lrminer/translate-tweet-app",
                deployed: "https://cryptic-island-17961.herokuapp.com/"
            }
        }, {
            title: 'Budget App',
            description: `Budgeting application designed to provide users with feedback on how they spend in relation to other demographics. Application designed around a relational database model. Users can create profiles and submit budgets with categorized spending amounts. Budgets within the database can be queried and compared against the user's personal budgets to provide valuable insight to how they spend personally.`,
            technologies: [],
            links: {
                github: "https://github.com/lrminer/Budget-App",
                deployed: "https://limitless-dusk-98625.herokuapp.com/"
            }
        }, {
            title: 'Pokemon Node',
            description: 'Command line interface Pokemon game that utilizes PokeAPI to grab Pokemon stats. Game is directed through the npm prompt package, allowing users to make choices and navigate through an imaginary world. An adventure awaits!',
            technologies: [],
            links: {
                github: "https://github.com/lrminer/Pokemon-Node",
                deployed: "https://github.com/lrminer/Pokemon-Node/blob/master/README.md"
            }
        }, {
            title: 'Date.now',
            description: 'A friend finding application that matches users based on a survey and a color choice. Matching algorith calculates individual differentials and sums their absolute values. Algorithm is weighted by the color they chose to provide a pseudo second survey, scoring users on differentials in red, blue, and green values from a parsed hexadecimal.',
            technologies: [],
            links: {
                github: "https://github.com/lrminer/Friend-Finder",
                deployed: "https://hidden-garden-49848.herokuapp.com/"
            }
        }, {
            title: 'LIRI Bot',
            description: 'LIRI is a Language Interpretation and Recognition Interface that is accessed through the command line. Liri is powered by several node packages that access the OMDB and Spotify search APIs.',
            technologies: [],
            links: {
                github: "https://github.com/lrminer/LIRI-bot",
                deployed: "https://github.com/lrminer/LIRI-bot/blob/master/README.md"
            }
        }];
        res.json(data)
    })
}