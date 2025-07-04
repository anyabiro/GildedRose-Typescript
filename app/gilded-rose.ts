export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];

            if (item.name == 'Sulfuras, Hand of Ragnaros') {
                continue;
            }

            item.sellIn--;

            if (item.name == 'Aged Brie') {
                this.increaseQuality(item);
                if (item.sellIn < 0) {  // Sell date has passed
                    this.increaseQuality(item);
                }
                continue;
            }

            if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.quality < 50) {
                    item.quality++;

                    if (item.sellIn < 11) {
                        this.increaseQuality(item);
                    }
                    if (item.sellIn < 6) {
                        this.increaseQuality(item);
                    }
                }
                if (item.sellIn < 0) {  // Sell date has passed
                    item.quality = 0;
                }
                continue;
            }

            // Not special item
            this.decreaseQuality(item);
            if (item.sellIn < 0) {  // Sell date has passed
                this.decreaseQuality(item);
            }
        }

        return this.items;
    }

    increaseQuality(item: Item) {
        if (item.quality < 50) {
            item.quality++;
        }
    }

    decreaseQuality(item: Item) {
        if (item.quality > 0) {
            item.quality--;
        }
    }
}
