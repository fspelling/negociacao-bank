abstract class View<T> {
    constructor(private _elemento: JQuery) { }

    update(model: T): void {
        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;
}