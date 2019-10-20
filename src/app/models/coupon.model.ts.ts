export class Coupon {
    price: number;
    url: string;
    dateStart: Date;
    dateEnd: Date;

    constructor(price?: number, url?: string,
        dateStart?: Date, dateEnd?: Date) {
        this.price = price;
        this.url = url;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
    }

}
