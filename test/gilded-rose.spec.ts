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
        it('Brie Quality increases normally', function() {
            const gildedRose = new GildedRose([ new Item('Aged Brie', 1, 0) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(1);
            expect(items[0].sellIn).to.equal(0);
        });


    });

});
