export class PaymentDetail {

    //In API Use PascalCasing Convention and on the UI Use CamelCasing
    //NOTE: THE SPELLING IS IMPORTANT HERE, IT SHOULD BE SAME SPELLING AS IN API
    //BECAUSE THE API IS CASE SENSITIVE, ONLY THE FIRST LETTER SHOULD START WITH LOWERCASE
    public paymentDetailId: number = 0
    public cardOwnerName: string = ''
    public cardNumber: string = ''
    public expirationDate: string = ''
    public securityCode: string = ''

}
