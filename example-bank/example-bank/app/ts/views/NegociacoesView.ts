class NegociacoesView {
    constructor(private _elemento: Element) { }

    template(): string {
        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
        </tbody>
        
        <tfoot>
        </tfoot>
    </table>
        `;
    }

    update(): void {
        this._elemento.innerHTML = this.template();
    }
}