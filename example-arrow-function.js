var name = ['Andrew', 'Julie', 'Jen'];

name.forEach(function(name) {
    console.log('forEach', name);
});

name.forEach((name) => console.log('forEach', name));