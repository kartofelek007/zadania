let sum = 0;

users.forEach(user => {
    sum += user.payment;
})

console.log(`Zarobki wszystkich użytkowników: ${sum}`);