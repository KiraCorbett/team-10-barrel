export class Event {
    id: number | undefined;
    name: string = '';
    location: string = '';
    date: Date | undefined;

    get isNew(): boolean {
      return this.id === undefined;
    }

    constructor(initializer?: any) {
        if (!initializer) return;
        this.date = new Date(); // initialize with current date and time
        if (initializer.id) this.id = initializer.id;
        if (initializer.name) this.name = initializer.name;
        if (initializer.location) this.location = initializer.description;
        if (initializer.date) this.date = new Date(initializer.date) // if date provided it is used
      }
}