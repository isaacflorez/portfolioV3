// simple list of objects containing all data needed to render a
// proper <Project /> component in ProjectList.js
const projects = [
    {
        title : 'TicTacToe',
        info : 'Perfect tic tac toe AI built using the minimax game theory. Potential boards are scored to find best move.',
        tech: ['html', 'css', 'react'],
        image: './images/tictactoe.png',
        link: 'https://isaac-perfecttictactoe.netlify.app/'
    },
    {
        title : 'Calculator',
        info : 'Tested my math skills a simple js calculator. All arithmetic operations are implemented with logic functions',
        tech: ['html', 'css', 'js'],
        image: './images/calculator.png',
        link: 'https://isaac-calculatorv1.netlify.app'
    },
    {
        title : 'To Do List',
        info : 'Demonstrates Reacts useContext and useState hooks while manipulating custom components in the DOM. ',
        tech: ['html', 'css', 'react'],
        image: './images/todolist.png',
        link: 'https://isaac-todolist.netlify.app/'
    },
    {
        title : 'Crypto Watcher',
        info : 'NextJS website that consumes a crypto currency API and displays the data formted on the screen.',
        tech: ['html', 'css', 'react'],
        image: './images/crypto.png',
        link: 'https://isaac-nextjscrypto.netlify.app/'
    },
    {
        title : 'Translator',
        info : 'Responsisve app using a translation API. After my first trip to Mexico I decided to build this in order to help with my spanish',
        tech: ['html', 'scss', 'js'],
        image: './images/translate.png',
        link: 'https://isaac-translationapp.netlify.app/'
    }
]

export default projects