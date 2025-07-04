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

            if (item.name == 'Aged Brie') {
                this.updateBrieQuality(item);
            } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.quality < 50) {
                    item.quality++;
                    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (item.sellIn < 11) {
                            if (item.quality < 50) {
                                item.quality = item.quality + 1
                            }
                        }
                        if (item.sellIn < 6) {
                            if (item.quality < 50) {
                                item.quality = item.quality + 1
                            }
                        }
                    }
                }
            } else {
                this.decreaseQuality(item);
            }

            item.sellIn = item.sellIn - 1;

            if (item.sellIn < 0) {
                if (item.name == 'Aged Brie') {
                    this.updateBrieQuality(item);
                    continue;
                }
                if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
                    this.decreaseQuality(item);
                } else {
                    item.quality = 0;
                }
            }
        }

        return this.items;
    }

    updateBrieQuality(item: Item) {
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
