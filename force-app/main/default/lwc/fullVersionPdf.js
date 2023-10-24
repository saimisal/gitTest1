import { LightningElement, api,track } from 'lwc';

export default class FullVersionPdf extends LightningElement {



    @api invoiceId;

    get pdfUrl() {
        // Use the invoiceId received from the Visualforce page to construct the URL
        return `https://estuate4-dev-ed.my.salesforce-sites.com/pay/Z_GenerateInvoicePDF?Id=${this.invoiceId}`;
    }








}