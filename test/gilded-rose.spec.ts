import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Unit tests', function () {
    describe('Aged Brie', function () {
        it('Brie Quality increases normally', function() {
            const gildedRose = new GildedRose([ new Item('Aged Brie', 10, 33) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(34);
            expect(items[0].sellIn).to.equal(9);
        });

        it('Brie Quality increases normally over several days', function() {
            const gildedRose = new GildedRose([ new Item('Aged Brie', 10, 33) ]);
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(39);
            expect(items[0].sellIn).to.equal(4);
        });

        it('Brie Quality increases by 2 because the sell date has passed', function() {
            const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 0) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(2);
            expect(items[0].sellIn).to.equal(-1);
        });

        it('Brie Quality increases by 2 over several days', function() {
            const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 0) ]);
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(6);
            expect(items[0].sellIn).to.equal(-3);
        });

        it('Brie Quality is at max and can\'t increase anymore', function() {
            const gildedRose = new GildedRose([ new Item('Aged Brie', 3, 50) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(50);
            expect(items[0].sellIn).to.equal(2);
        });

        it('Brie Quality is at max over several days', function() {
            const gildedRose = new GildedRose([ new Item('Aged Brie', 3, 50) ]);
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(50);
            expect(items[0].sellIn).to.equal(0);
        });
    });

    describe('Sulfuras, Hand of Ragnaros', function () {
        it('Sulfuras Quality and SellIn stay the same after one day', function() {
            const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(80);
            expect(items[0].sellIn).to.equal(0);
        });

        it('Sulfuras Quality and SellIn stay the same after three days', function() {
            const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(80);
            expect(items[0].sellIn).to.equal(0);
        });
    });

    describe('Backstage passes to a TAFKAL80ETC concert', function () {
        it('Backstage passes Quality increase normally after one day', function() {
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(11);
            expect(items[0].sellIn).to.equal(14);
        });

        it('Backstage passes Quality increase faster after one day', function() {
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(12);
            expect(items[0].sellIn).to.equal(9);
        });

        it('Backstage passes Quality increase the fastest after one day', function() {
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(13);
            expect(items[0].sellIn).to.equal(4);
        });

        it('Backstage passes Quality increase normally after three day', function() {
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10) ]);
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(13);
            expect(items[0].sellIn).to.equal(12);
        });

        it('Backstage passes Quality increase faster after three day', function() {
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10) ]);
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(16);
            expect(items[0].sellIn).to.equal(7);
        });

        it('Backstage passes Quality increase the fastest after three day', function() {
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10) ]);
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(19);
            expect(items[0].sellIn).to.equal(2);
        });

        it('Backstage passes Quality goes to 0 after sell date ', function() {
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
            expect(items[0].sellIn).to.equal(-1);
        });

        it('Backstage passes Quality normal increase doesn\'t go past max', function() {
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 50) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(50);
            expect(items[0].sellIn).to.equal(14);
        });

        it('Backstage passes Quality fast increase doesn\'t go past max', function() {
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(50);
            expect(items[0].sellIn).to.equal(9);
        });

        it('Backstage passes Quality fastest increase doesn\'t go past max', function() {
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(50);
            expect(items[0].sellIn).to.equal(4);
        });
    });

    describe('Conjured Mana Cake', function () {
        it('Conjured Cake Quality decreases twice as fast as normal items after one day', function() {
            const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 1, 10) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(8);
            expect(items[0].sellIn).to.equal(0);
        });

        it('Conjured Cake Quality decreases 4 times as fast as normal items after sell date', function() {
            const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 0, 10) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(6);
            expect(items[0].sellIn).to.equal(-1);
        });

        it('Conjured Cake Quality decreases after three days', function() {
            const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 3, 10) ]);
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(4);
            expect(items[0].sellIn).to.equal(0);
        });

        it('Conjured Cake Quality decreases 4 times as fast as normal items after three days after sell date', function() {
            const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 0, 20) ]);
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(8);
            expect(items[0].sellIn).to.equal(-3);
        });

        it('Conjured Cake Quality decrease stops at 0', function() {
            const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 0, 2) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
            expect(items[0].sellIn).to.equal(-1);
        });
    });
});
