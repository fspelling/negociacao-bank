<<<<<<< HEAD
export abstract class View<T> {

    protected _elemento: JQuery;

    constructor(seletor: string) {

        this._elemento = $(seletor);
    }

    update(model: T) {

=======
abstract class View<T> {
    constructor(private _elemento: JQuery) { }

    update(model: T): void {
>>>>>>> 984d7b80845baeb562c342b7d9cf813ef90af538
        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;
<<<<<<< HEAD

}

=======
}
>>>>>>> 984d7b80845baeb562c342b7d9cf813ef90af538
