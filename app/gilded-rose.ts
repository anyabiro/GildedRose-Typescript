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

            switch (item.name) {
                case 'Aged Brie': {
                    this.updateBrie(item);
                    break;
                }
                case 'Backstage passes to a TAFKAL80ETC concert': {
                    this.updatePasses(item);
                    break;
                }
                case 'Conjured Mana Cake': {
                    this.updateManaCake(item);
                    break;
                }
                default: {
                    this.updateNormalItem(item);
                    break;
                }
            }
        }

        return this.items;
    }

    increaseQuality(item: Item) {
        if (item.quality < 50) {
            item.quality++;
        }
    }

    decreaseQualityByAmount(item: Item, amount: number) {
        if (item.quality >= amount) {
            item.quality -= amount;
        }
    }

    updateBrie(item: Item) {
        this.increaseQuality(item);
        if (item.sellIn < 0) {  // Sell date has passed
            this.increaseQuality(item);
        }
    }

    updatePasses(item: Item) {
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
    }

    updateManaCake(item: Item) {
        this.decreaseQualityByAmount(item, 2);
        if (item.sellIn < 0) {
            this.decreaseQualityByAmount(item, 2);
        }
    }

    updateNormalItem(item: Item) {
        this.decreaseQualityByAmount(item, 1);
        if (item.sellIn < 0) {  // Sell date has passed
            this.decreaseQualityByAmount(item, 1);
        }
    }
}
