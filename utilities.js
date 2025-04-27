document.addEventListener('alpine:init', () => {
    Alpine.data('randomNameGenerator', () => ({
      names: ['Jake', 'Katey', 'Andrew', 'Owen', 'Sommer', 'Jack', 'Aidan', 'Eric', 'Emma', 'Ellie'],
      randomName: '',
      generateName() {
        const newName = this.names[Math.floor(Math.random() * this.names.length)];
        alert(newName);
        this.randomName = newName;
      }
    }));
  });