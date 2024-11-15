document.addEventListener('DOMContentLoaded', () => {
    const shuffleBtn = document.getElementById('shuffleBtn');
    const container = document.querySelector('.container');
    const factCards = Array.from(document.querySelectorAll('.fact-card'));

    shuffleBtn.addEventListener('click', () => {
        // Remove existing cards
        factCards.forEach(card => card.remove());
        
        // Shuffle array
        for (let i = factCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [factCards[i], factCards[j]] = [factCards[j], factCards[i]];
        }
        
        // Insert shuffled cards before the button
        factCards.forEach(card => {
            container.insertBefore(card, shuffleBtn);
        });
    });
});
