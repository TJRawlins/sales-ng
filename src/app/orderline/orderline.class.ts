import { Item } from "../item/item.class";

export class Orderline {
    id: number = 0;
    quantity: number = 0;
    price: number = 0;
    orderId: number = 0;
    ItemId: number = 0;
    item: Item | null = null;
}