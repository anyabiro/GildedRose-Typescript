import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

// Add a master test here
// describe('Special items', function () {
//     let gildedRose: GildedRose;
//     let items: Item[];

describe('Random items after one day', function () {
    let gildedRose: GildedRose;
    let items: Item[];

    before(function () {
        gildedRose = new GildedRose([
            new Item('Papaya', 10, 30),
            new Item('Peanuts', 25, 50),
            new Item('Dragon fruit', 0, 10),
            new Item('Purple potato', 0, 0),
            new Item('Quality grapes', 5, 33)]
        );
        items = gildedRose.updateQuality();
    });

    it('Papaya\'s Quality decreases by one after one day', function() {
        expect(items[0].quality).to.equal(29);
    });

    it('Papaya\'s SellIn approaches by one day', function() {
        expect(items[0].sellIn).to.equal(9);
    });

    it('Peanuts\' Quality decreases by one after one day', function() {
        expect(items[1].quality).to.equal(49);
    });

    it('Peanuts\' SellIn approaches by one day', function() {
        expect(items[1].sellIn).to.equal(24);
    });

    it('Dragon fruit\' Quality decreases by two after sell date has passed', function() {
        expect(items[2].quality).to.equal(8);
    });

    it('Dragon fruit\' SellIn approaches by one day', function() {
        expect(items[2].sellIn).to.equal(-1);
    });

    it('Purple potato\' Quality doesn\'t decrese past 0', function() {
        expect(items[3].quality).to.equal(0);
    });

    it('Purple potato\' SellIn approaches by one day', function() {
        expect(items[3].sellIn).to.equal(-1);
    });

    it('Quality grapes\' Quality decreases by one after one day', function() {
        expect(items[4].quality).to.equal(32);
    });

    it('Quality grapes\' SellIn approaches by one day', function() {
        expect(items[4].sellIn).to.equal(4);
    });
});

describe('Random items after five days', function () {
    let gildedRose: GildedRose;
    let items: Item[];

    before(function () {
        gildedRose = new GildedRose([
            new Item('Papaya', 10, 30),
            new Item('Peanuts', 25, 50),
            new Item('Dragon fruit', 0, 10),
            new Item('Purple potato', 0, 0),
            new Item('Quality grapes', 5, 33)]
        );
        items = gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        items = gildedRose.updateQuality();
    });

    it('Papaya\'s Quality decreases by five after five days', function() {
        expect(items[0].quality).to.equal(25);
    });

    it('Papaya\'s SellIn approaches by five days', function() {
        expect(items[0].sellIn).to.equal(5);
    });

    it('Peanuts\' Quality decreases by five after five days', function() {
        expect(items[1].quality).to.equal(45);
    });

    it('Peanuts\' SellIn approaches by five days', function() {
        expect(items[1].sellIn).to.equal(20);
    });

    it('Dragon fruit\' Quality decreases by two after sell date has passed', function() {
        expect(items[2].quality).to.equal(0);
    });

    it('Dragon fruit\' SellIn approaches by five days', function() {
        expect(items[2].sellIn).to.equal(-5);
    });

    it('Purple potato\' Quality doesn\'t decrese past 0', function() {
        expect(items[3].quality).to.equal(0);
    });

    it('Purple potato\' SellIn approaches by five days', function() {
        expect(items[3].sellIn).to.equal(-5);
    });

    it('Quality grapes\' Quality decreases by five after five days', function() {
        expect(items[4].quality).to.equal(28);
    });

    it('Quality grapes\' SellIn approaches by five days', function() {
        expect(items[4].sellIn).to.equal(0);
    });
});

describe('Special items after one day', function () {
    let gildedRose: GildedRose;
    let items: Item[];

    before(function () {
        gildedRose = new GildedRose([
            new Item('Aged Brie', 10, 10),
            new Item('Aged Brie', 2, 50),
            new Item('Aged Brie', 66, 0),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10),
            new Item('Backstage passes to a TAFKAL80ETC concert', 9, 10),
            new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10),
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)
        ]);
        items = gildedRose.updateQuality();
    });

    it('Brie Quality increases by one after one day and SellIn decreases', function() {
        expect(items[0].quality).to.equal(11);
        expect(items[0].sellIn).to.equal(9);
        expect(items[1].quality).to.equal(50);
        expect(items[1].sellIn).to.equal(1);
        expect(items[2].quality).to.equal(1);
        expect(items[2].sellIn).to.equal(65);
    });

    it('Sulfuras Quality and SellIn do not decrese', function() {
        expect(items[3].quality).to.equal(80);
        expect(items[3].sellIn).to.equal(0);
    });

    it('Backstage passes increase in Quality as SellIn approaches', function() {
        expect(items[4].quality).to.equal(11);
        expect(items[4].sellIn).to.equal(14);
        expect(items[5].quality).to.equal(12);
        expect(items[5].sellIn).to.equal(8);
        expect(items[6].quality).to.equal(13);
        expect(items[6].sellIn).to.equal(2);
    });

    it('Backstage passes go to 0 Quality after sell by date has passed', function() {
        expect(items[7].quality).to.equal(0);
        expect(items[7].sellIn).to.equal(-1);
    });
});

describe('Special items after 3 days', function () {
    let gildedRose: GildedRose;
    let items: Item[];

    before(function () {
        gildedRose = new GildedRose([
            new Item('Aged Brie', 10, 10),
            new Item('Aged Brie', 2, 50),
            new Item('Aged Brie', 66, 0),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10),
            new Item('Backstage passes to a TAFKAL80ETC concert', 9, 10),
            new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10),
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)
        ]);
        items = gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        items = gildedRose.updateQuality();
    });

    it('Brie Quality increases by three after three day and SellIn decreases', function () {
        expect(items[0].quality).to.equal(13);
        expect(items[0].sellIn).to.equal(7);
        expect(items[1].quality).to.equal(50);
        expect(items[1].sellIn).to.equal(-1);
        expect(items[2].quality).to.equal(3);
        expect(items[2].sellIn).to.equal(63);
    });

    it('Sulfuras Quality and SellIn do not decrese', function () {
        expect(items[3].quality).to.equal(80);
        expect(items[3].sellIn).to.equal(0);
    });

    it('Backstage passes increase in Quality as SellIn approaches', function () {
        expect(items[4].quality).to.equal(13);
        expect(items[4].sellIn).to.equal(12);
        expect(items[5].quality).to.equal(16);
        expect(items[5].sellIn).to.equal(6);
        expect(items[6].quality).to.equal(19);
        expect(items[6].sellIn).to.equal(0);
    });

    it('Backstage passes go to 0 Quality after sell by date has passed', function () {
        expect(items[7].quality).to.equal(0);
        expect(items[7].sellIn).to.equal(-3);
    });
});