const alreadyAsked = [];
// Get the question element
const questionElement = document.getElementById('question');
// Get the start button element
const startButton = document.getElementById("startButton");
// Get the question section element
const questionSection = document.getElementById("questionSection");
// Get the game over element
const gameOverElement = document.getElementById("gameOver");
// Get the buttons for the answer
const buttons = document.getElementById("grid").children;
// Get the score element
const scoreElement = document.getElementById("score");
// Get the win element
const winElement = document.getElementById("win");
// Get the rule element
const ruleElement = document.getElementById("rule");

let n;

function setQuestion() {
    if (!startButton.classList.contains("d-none") && questionSection.classList.contains("d-none")) {
        if (!gameOverElement.classList.contains("d-none"))
            gameOverElement.classList.add("d-none");
        startButton.classList.add("d-none");
        ruleElement.classList.add("d-none");
        questionSection.classList.remove("d-none");
        scoreElement.classList.remove("d-none");
    }
    // Pick a random question that hasn't been asked yet
    do {
        n = Math.floor(Math.random() * questions.length);
    } while (alreadyAsked.includes(n));
    alreadyAsked.push(n);
    questionElement.textContent = questions[n].question;

    for (let i = 0; i < buttons.length; i++)
        buttons[i].textContent = questions[n].options[i];
}

function updateScore() {
    // Parse the current score as an integer
    let currentScore = parseInt(scoreElement.textContent.split(":")[1].trim());
    // Increment the score
    let newScore = currentScore + 1;
    // Update the score display
    scoreElement.textContent = 'Score: ' + newScore;

    return newScore;
}

// When the user chooses a wrong answer, all wrong answers turn red, also the end game message is displayed
function lose() {
    for (let i = 0; i < buttons.length; i++)
        if (questions[n].correct != buttons[i].id)
            buttons[i].classList.add("lose");

    gameOverElement.classList.remove("d-none");
}

function guess(id) {
    // Get the answer button id
    if (questions[n].correct == id) {

        if (updateScore() == questions.length) {
            // Show the winning message
            winElement.classList.remove("d-none");
            questionSection.classList.add("d-none");
        } else
            setQuestion();
    } else {
        lose();
    }
}
const questions = [
    {
        question: "What is the capital of Italy?",
        options: ["Venice", "Rome", "Florence", "Milan"],
        correct: 2
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
        correct: 3
    },
    {
        question: "Which element is represented by the symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Iron"],
        correct: 2
    },
    {
        question: "Who is known as the father of modern physics?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
        correct: 2
    },
    {
        question: "Which country is famous for the Great Wall?",
        options: ["India", "China", "Mexico", "Russia"],
        correct: 2
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
        correct: 4
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Charlotte Brontë", "Jane Austen", "Emily Dickinson", "Mark Twain"],
        correct: 2
    },
    {
        question: "What is the main language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "English", "French"],
        correct: 2
    },
    {
        question: "Which planet is known for its rings?",
        options: ["Jupiter", "Mars", "Saturn", "Neptune"],
        correct: 3
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Dollar"],
        correct: 3
    },
    {
        question: "Which artist is famous for the painting 'Starry Night'?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Leonardo da Vinci"],
        correct: 2
    },
    {
        question: "What is the largest land animal?",
        options: ["Elephant", "Giraffe", "Rhino", "Hippo"],
        correct: 1
    },
    {
        question: "In which year did World War II end?",
        options: ["1945", "1944", "1939", "1950"],
        correct: 1
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Pb"],
        correct: 1
    },
    {
        question: "Which ocean is the largest?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 4
    },
    {
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"],
        correct: 2
    },
    {
        question: "What is the main ingredient in hummus?",
        options: ["Chickpeas", "Lentils", "Beans", "Peas"],
        correct: 1
    },
    {
        question: "Which country is known for its pyramids?",
        options: ["Mexico", "Egypt", "Greece", "India"],
        correct: 2
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correct: 2
    },
    {
        question: "What is the freezing point of water?",
        options: ["0°C", "32°F", "100°C", "212°F"],
        correct: 1
    },
    {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"],
        correct: 1
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        correct: 2
    },
    {
        question: "Which fruit is known as the king of fruits?",
        options: ["Mango", "Durian", "Banana", "Pineapple"],
        correct: 2
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", " Diamond", "Quartz"],
        correct: 3
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Nikola Tesla"],
        correct: 2
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: 3
    },
    {
        question: "Which animal is known as the 'Ship of the Desert'?",
        options: ["Camel", "Horse", "Elephant", "Donkey"],
        correct: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 3
    },
    {
        question: "Who is the author of '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "F. Scott Fitzgerald"],
        correct: 1
    },
    {
        question: "What is the main ingredient in sushi?",
        options: ["Rice", "Fish", "Seaweed", "Vegetables"],
        correct: 1
    },
    {
        question: "Which country is known for the Eiffel Tower?",
        options: ["Italy", "France", "Germany", "Spain"],
        correct: 2
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        correct: 3
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 2
    },
    {
        question: "What is the capital of Egypt?",
        options: ["Cairo", "Alexandria", "Giza", "Luxor"],
        correct: 1
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        correct: 3
    },
    {
        question: "What is the primary language spoken in Argentina?",
        options: ["Spanish", "Portuguese", "English", "French"],
        correct: 1
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Raphael", "Michelangelo", "Donatello", "Leonardo da Vinci"],
        correct: 2
    },
    {
        question: "What is the capital of Russia?",
        options: ["Moscow", "St. Petersburg", "Kiev", "Warsaw"],
        correct: 1
    },
    {
        question: "Which element has the atomic number 6?",
        options: ["Carbon", "Oxygen", "Nitrogen", "Hydrogen"],
        correct: 1
    },
    {
        question: "What is the largest continent on Earth?",
        options: ["Africa", "Asia", "North America", "Europe"],
        correct: 2
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        options: ["Ernest Hemingway", "F. Scott Fitzgerald", "Mark Twain", "John Steinbeck"],
        correct: 2
    },
    {
        question: "What is the main ingredient in a traditional pizza?",
        options: ["Bread", "Cheese", "Tomato Sauce", "Olives"],
        correct: 1
    },
    {
        question: "Which country is known for the kangaroo?",
        options: ["New Zealand", "Australia", "South Africa", "Canada"],
        correct: 2
    },
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        correct: 2
    },
    {
        question: "Which famous structure is located in Agra, India?",
        options: ["Red Fort", "Taj Mahal", "Hawa Mahal", "Gateway of India"],
        correct: 2
    },
    {
        question: "What is the primary ingredient in chocolate?",
        options: ["Cocoa", "Sugar", "Milk", "Vanilla"],
        correct: 1
    },
    {
        question: "Which planet is known as the 'Giant Planet'?",
        options: ["Earth", "Jupiter", "Saturn", "Neptune"],
        correct: 2
    },
    {
        question: "What is the capital of Greece?",
        options: ["Athens", "Rome", "Berlin", "Madrid", "Lisbon"],
        correct: 1
    },
    {
        question: "Which famous scientist is known for his laws of motion?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        correct: 2
    },
    {
        question: "What is the primary ingredient in bread?",
        options: ["Flour", "Water", "Yeast", "Salt"],
        correct: 1
    },
    {
        question: "Which country is known for the Colosseum?",
        options: ["Greece", "Italy", "Spain", "Turkey"],
        correct: 2
    },
    {
        question: "What is the capital of South Africa?",
        options: ["Cape Town", "Pretoria", "Johannesburg", "Durban"],
        correct: 2
    },
    {
        question: "Which animal is known for its ability to change color?",
        options: ["Chameleon", "Octopus", "Cuttlefish", "All of the above"],
        correct: 4
    },
    {
        question: "What is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        correct: 1
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "F. Scott Fitzgerald", "Ernest Hemingway"],
        correct: 1
    },
    {
        question: "What is the capital of Spain?",
        options: ["Barcelona", "Madrid", "Seville", "Valencia"],
        correct: 2
    },
    {
        question: "Which gas do humans exhale?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correct: 2
    },
    {
        question: "What is the main ingredient in a Caesar salad?",
        options: ["Lettuce", "Croutons", "Caesar dressing", "Parmesan cheese"],
        correct: 1
    },
    {
        question: "Which country is known for the Great Barrier Reef?",
        options: ["Australia", "USA", "Mexico", "Brazil"],
        correct: 1
    },
    {
        question: "What is the capital of Turkey?",
        options: ["Istanbul", "Ankara", "Izmir", "Bursa"],
        correct: 2
    },
    {
        question: "Which planet is known as the 'Evening Star'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the primary ingredient in pesto?",
        options: ["Basil", "Parsley", "Cilantro", "Mint"],
        correct: 1
    },
    {
        question: "Who is known for the theory of evolution?",
        options: ["Charles Darwin", "Albert Einstein", "Isaac Newton", "Galileo Galilei"],
        correct: 1
    },
    {
        question: "What is the capital of Mexico?",
        options: ["Cancun", "Guadalajara", "Mexico City", "Monterrey"],
        correct: 3
    },
    {
        question: "Which element has the atomic number 8?",
        options: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"],
        correct: 1
    },
    {
        question: "What is the largest organ inside the human body?",
        options: ["Heart", "Liver", "Lungs", "Kidneys"],
        correct: 2
    },
    {
        question: "Which country is known for the kangaroo?",
        options: ["New Zealand", "Australia", "South Africa", "Canada"],
        correct: 2
    },
    {
        question: "What is the capital of Norway?",
        options: ["Oslo", "Stockholm", "Copenhagen", "Helsinki"],
        correct: 1
    },
    {
        question: "Which famous landmark is located in Paris?",
        options: ["Big Ben", "Eiffel Tower", "Colosseum", "Statue of Liberty"],
        correct: 2
    },
    {
        question: "What is the main ingredient in a traditional Greek salad?",
        options: ["Tomatoes", "Cucumbers", "Feta cheese", "Olives"],
        correct: 3
    },
    {
        question: "Which planet is known for its Great Red Spot?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 3
    },
    {
        question: "What is the capital of Sweden?",
        options: ["Oslo", "Copenhagen", "Helsinki", "Stockholm"],
        correct: 4
    },
    {
        question: "Which famous scientist is known for his work on electricity?",
        options: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Isaac Newton"],
        correct: 1
    },
    {
        question: "What is the primary ingredient in a traditional French ratatouille?",
        options: ["Eggplant", "Zucchini", "Tomato", "Bell pepper"],
        correct: 1
    },
    {
        question: "Which country is known for the Taj Mahal?",
        options: ["India", "Pakistan", "Bangladesh", "Nepal"],
        correct: 1
    },
    {
        question: "What is the capital of Argentina?",
        options: ["Buenos Aires", "Santiago", "Lima", "Bogotá"],
        correct: 1
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Tiger", "Lion", "Elephant", "Giraffe"],
        correct: 2
    },
    {
        question: "What is the main ingredient in a traditional shepherd's pie?",
        options: ["Beef", "Lamb", "Pork", "Chicken"],
        correct: 2
    },
    {
        question: "Which country is famous for its maple syrup?",
        options: ["USA", "Canada", "France", "Germany"],
        correct: 2
    },
    {
        question: "What is the capital of Italy?",
        options: ["Rome", "Venice", "Florence", "Milan"],
        correct: 1
    },
    {
        question: "Which planet is known as the 'Blue Planet'?",
        options: ["Earth", "Mars", "Neptune", "Uranus"],
        correct: 1
    },
    {
        question: "What is the primary ingredient in a traditional sushi roll?",
        options: ["Rice", "Fish", "Seaweed", "Vegetables"],
        correct: 1
    },
    {
        question: "Which country is known for the Leaning Tower of Pisa?",
        options: ["Italy", "France", "Spain", "Greece"],
        correct: 1
    },
    {
        question: "What is the capital of Portugal?",
        options: ["Lisbon", "Madrid", "Rome", "Paris"],
        correct: 1
    },
    {
        question: "Which gas is essential for human respiration?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correct: 1
    },
    {
        question: "What is the main ingredient in a traditional lasagna?",
        options: ["Pasta", "Cheese", "Meat", "Tomato sauce"],
        correct: 1
    },
    {
        question: "Which country is known for the Sagrada Familia?",
        options: ["Italy", "Spain", "France", "Portugal"],
        correct: 2
    },
    {
        question: "What is the capital of Finland?",
        options: ["Helsinki", "Oslo", "Stockholm", "Copenhagen"],
        correct: 1
    },
    {
        question: "Which famous artist is known for his sculptures and paintings?",
        options: ["Pablo Picasso", "Michelangelo", "Vincent van Gogh", "Claude Monet"],
        correct: 2
    },
    {
        question: "What is the primary ingredient in a traditional curry?",
        options: ["Spices", "Meat", "Vegetables", "Rice"],
        correct: 1
    },
    {
        question: "Which country is known for the Great Wall?",
        options: ["India", "China", "Japan", "Korea"],
        correct: 2
    },
    {
        question: "What is the capital of the Netherlands?",
        options: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"],
        correct: 1
    },
    {
        question: "Which animal is known for its ability to fly?",
        options: ["Eagle", "Penguin", "Ostrich", "Bat"],
        correct: 1
    },
    {
        question: "What is the main ingredient in a traditional paella?",
        options: ["Rice", "Seafood", "Chicken", "Vegetables"],
        correct: 1
    },
    {
        question: "Which country is known for the Colosseum?",
        options: ["Greece", "Italy", "Egypt", "Turkey"],
        correct: 2
    },
    {
        question: "What is the capital of Belgium?",
        options: ["Brussels", "Bruges", "Antwerp", "Ghent"],
        correct: 1
    },
    {
        question: "Which planet is known for its strong winds?",
        options: ["Earth", "Mars", "Neptune", "Jupiter"],
        correct: 3
    },
    {
        question: "What is the primary ingredient in a traditional moussaka?",
        options: ["Eggplant", "Potato", "Lamb", "Tomato"],
        correct: 1
    },
    {
        question: "Which country is famous for its fjords?",
        options: ["Sweden", "Norway", "Finland", "Denmark"],
        correct: 2
    },
    {
        question: "What is the capital of Switzerland?",
        options: ["Zurich", "Geneva", "Bern", "Basel"],
        correct: 3
    },
    {
        question: "Which famous landmark is located in New York City?",
        options: ["Eiffel Tower", "Statue of Liberty", "Big Ben", "Colosseum"],
        correct: 2
    },
    {
        question: "What is the main ingredient in a traditional risotto?",
        options: ["Rice", "Pasta", "Barley", "Quinoa"],
        correct: 1
    },
    {
        question: "Which country is known for the pyramids of Giza?",
        options: ["Egypt", "Mexico", "China", "India"],
        correct: 1
    },
    {
        question: "What is the capital of Denmark?",
        options: ["Copenhagen", "Oslo", "Stockholm", "Helsinki"],
        correct: 1
    },
    {
        question: "Which animal is known for its long neck?",
        options: ["Elephant", "Giraffe", "Horse", "Zebra"],
        correct: 2
    },
    {
        question: "What is the primary ingredient in a traditional kimchi?",
        options: ["Cabbage", "Carrot", "Radish", "Cucumber"],
        correct: 1
    },
    {
        question: "Which country is known for the Great Sphinx?",
        options: ["Egypt", "Greece", "Mexico", "India"],
        correct: 1
    },
    {
        question: "What is the capital of Iceland?",
        options: ["Reykjavik", "Oslo", "Helsinki", "Copenhagen"],
        correct: 1
    },
    {
        question: "Which famous artist is known for his abstract works?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
        correct: 1
    },
    {
        question: "What is the primary ingredient in a traditional chowder?",
        options: ["Clams", "Chicken", "Beef", "Vegetables"],
        correct: 1
    },
    {
        question: "Which country is known for the Acropolis?",
        options: ["Italy", "Greece", "Turkey", "Egypt"],
        correct: 2
    },
    {
        question: "What is the capital of Malaysia?",
        options: ["Kuala Lumpur", "Singapore", "Bangkok", "Jakarta"],
        correct: 1
    },
    {
        question: "Which animal is known for its intelligence and problem-solving skills?",
        options: ["Dolphin", "Elephant", "Octopus", "All of the above"],
        correct: 4
    },
    {
        question: "What is the main ingredient in a traditional borscht?",
        options: ["Beetroot", "Cabbage", "Potato", "Carrot"],
        correct: 1
    },
    {
        question: "Which country is known for the Eiffel Tower?",
        options: ["Italy", "France", "Germany", "Spain"],
        correct: 2
    },
    {
        question: "What is the capital of the Philippines?",
        options: ["Manila", "Quezon City", "Cebu", "Davao"],
        correct: 1
    },
    {
        question: "Which planet is known for its blue color due to methane in its atmosphere?",
        options: ["Earth", "Uranus", "Neptune", "Mars"],
        correct: 3
    },
    {
        question: "What is the primary ingredient in a traditional falafel?",
        options: ["Chickpeas", "Lentils", "Beans", "Peas"],
        correct: 1
    },
    {
        question: "What is the capital of Vietnam?",
        options: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Nha Trang"],
        correct: 1
    },
    {
        question: "Which famous structure is located in Sydney, Australia?",
        options: ["Eiffel Tower", "Sydney Opera House", "Big Ben", "Colosseum"],
        correct: 2
    },
    {
        question: "What is the main ingredient in a traditional tabbouleh?",
        options: ["Bulgur", "Rice", "Quinoa", "Pasta"],
        correct: 1
    },
    {
        question: "Which country is known for the Great Wall?",
        options: ["India", "China", "Japan", "Korea"],
        correct: 2
    },
    {
        question: "What is the capital of Hungary?",
        options: ["Budapest", "Prague", "Vienna", "Bratislava"],
        correct: 1
    },
    {
        question: "Which animal is known for its ability to mimic human speech?",
        options: ["Parrot", "Crow", "Dove", "Sparrow"],
        correct: 1
    },
    {
        question: "What is the primary ingredient in a traditional shepherd's pie?",
        options: ["Beef", "Lamb", "Pork", "Chicken"],
        correct: 2
    },
    {
        question: "Which country is famous for its chocolate?",
        options: ["Belgium", "Switzerland", "France", "Germany"],
        correct: 1
    },
    {
        question: "What is the capital of South Korea?",
        options: ["Seoul", "Busan", "Incheon", "Gwangju"],
        correct: 1
    },
    {
        question: "Which planet is known for its extreme temperatures?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        correct: 2
    },
    {
        question: "What is the main ingredient in a traditional risotto?",
        options: ["Rice", "Pasta", "Barley", "Quinoa"],
        correct: 1
    },
    {
        question: "Which country is known for the Acropolis?",
        options: ["Italy", "Greece", "Turkey", "Egypt"],
        correct: 2
    },
    {
        question: "What is the capital of Kenya?",
        options: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"],
        correct: 1
    },
    {
        question: "Which animal is known for its long neck?",
        options: ["Elephant", "Giraffe", "Horse", "Zebra"],
        correct: 2
    },
    {
        question: "What is the primary ingredient in a traditional kimchi?",
        options: ["Cabbage", "Carrot", "Radish", "Cucumber"],
        correct: 1
    },
    {
        question: "Which country is known for the Great Sphinx?",
        options: ["Egypt", "Greece", "Mexico", "India"],
        correct: 1
    },
    {
        question: "What is the capital of Iceland?",
        options: ["Reykjavik", "Oslo", "Helsinki", "Copenhagen"],
        correct: 1
    },
    {
        question: "Which famous artist is known for his abstract works?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
        correct: 1
    },
    {
        question: "What is the primary ingredient in a traditional chowder?",
        options: ["Clams", "Chicken", "Beef", "Vegetables"],
        correct: 1
    },
    {
        question: "Which country is known for the Eiffel Tower?",
        options: ["Italy", "France", "Germany", "Spain"],
        correct: 2
    },
    {
        question: "What is the capital of the Philippines?",
        options: ["Manila", "Quezon City", "Cebu", "Davao"],
        correct: 1
    },
    {
        question: "Which planet is known for its blue color due to methane in its atmosphere?",
        options: ["Earth", "Uranus", "Neptune", "Mars"],
        correct: 3
    },
    {
        question: "What is the primary ingredient in a traditional falafel?",
        options: ["Chickpeas", "Lentils", "Beans", "Peas"],
        correct: 1
    }
];