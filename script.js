var quotes =[
    'To be, or not to be, that is the question.” – William Shakespeare',
    'I think, therefore I am. – René Descartes',
    'The only thing we have to fear is fear itself. – Franklin D. Roosevelt',
    'That which does not kill us makes us stronger. – Friedrich Nietzsche',
    'In the middle of difficulty lies opportunity. – Albert Einstein',
    'Life is what happens when you re busy making other plans. – John Lennon',
    'You must be the change you wish to see in the world. – Mahatma Gandhi',
    'The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela',
    'If life were predictable it would cease to be life, and be without flavour. – Eleanor Roosevelt',
    'The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt'
]

function newQuote(){
    let random = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote-display').innerHTML = quotes[random];
}