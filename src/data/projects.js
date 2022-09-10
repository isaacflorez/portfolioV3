// simple list of objects containing all data needed to render a
// proper <Project /> component in ProjectList.js
const projects = [
    {
        title : 'To Do List',
        info : 'Demonstrates Reacts useContext and useState hooks while manipulating custom components in the DOM. ',
        tech: ['html', 'css', 'react'],
        image: './images/todolist.png',
        link: 'https://isaac-todolist.netlify.app/'
    },
    {
        title : 'Translator',
        info : 'Responsisve app using a translation API. After my first trip to Mexico I decided to build this in order to help with my spanish',
        tech: ['html', 'scss', 'js'],
        image: './images/translate.png',
        link: 'https://isaac-translationapp.netlify.app/'
    },
    {
        title : 'Tic Tac Toe',
        info : '2 Player tic tac toe built using validation checks. Demostrates game logic and DOM manipulation. AI player will be added soon to beat my fiance',
        tech: ['html', 'scss', 'js'],
        image: './images/tictactoe.png',
        link: 'https://isaac-tictactoe.netlify.app/'
    },
    {
        title : 'Calculator',
        info : 'Tested my math skills a simple js calculator. All arithmetic operations are implemented with logic functions',
        tech: ['html', 'css', 'js'],
        image: './images/calculator.png',
        link: 'https://isaac-calculatorv1.netlify.app'
    }
]

export default projects