import { penjumlahan,pengurangan,pembagian,perkalian, ratarata, sisabagi, luaspersegi, luaslingkaran, luaskubus, volumekubus } from "@/utils/operations.js";


describe("Test Fungsionalitas dari Utils", () => {
    it("Penjumlahan bilangan positif", () => {
        expect(penjumlahan(2, 4)).toBe(6);
    });
    it("Penjumlahan bilangan negatif", () => {
        expect(penjumlahan(-6, -7)).toBe(-13);
    });
    it("Penjumlahan bilangan positif dan negatif", () => {
        expect(penjumlahan(2, -4)).toBe(-2);
    });

    it("Pengurangan bilangan positif", () => {
        expect(pengurangan(7, 2)).toBe(5);
    });
    it("Pengurangan bilangan positif dan negatif", () => {
        expect(pengurangan(4, -3)).toBe(7);
    });
    it("Pengurangan bilangan negatif", () => {
        expect(pengurangan(-3, -8)).toBe(5);
    });

    it("Pembagian bilangan positif", () => {
        expect(pembagian(8, 2)).toBe(4);
    });
    it("Pembagian bilangan negatif", () => {
        expect(pembagian(-9, -3)).toBe(3);
    });
    it("Pembagian bilangan positif dan negatif", () => {
        expect(pembagian(6, -2)).toBe(-3);
    });

    it("Perkalian bilangan positif", () => {
        expect(perkalian(9, 3)).toBe(27);
    });
    it("Perkalian bilangan negatif", () => {
        expect(perkalian(-3, -4)).toBe(12);
    });
    it("Perkalian bilangan positif dan negatif", () => {
        expect(perkalian(8, -5)).toBe(-40);
    });

    it("Rata-rata bilangan positif", () => {
        expect(ratarata(9,5,3,5,4)).toBe(5.5);
    });
    it("Rata-rata bilangan negatif", () => {
        expect(ratarata(-7,-5,-2,-4,4)).toBe(-4.5);
    });
    it("Rata-rata bilangan positif dan negatif", () => {
        expect(ratarata(-7,3,-2,9,4)).toBe(0.75);
    });

    it("Sisa bagi bilangan positif", () => {
        expect(sisabagi(15, 4)).toBe(3);
    });
    it("Sisa bagi bilangan positif", () => {
        expect(sisabagi(20, 3)).toBe(2);
    });
    it("Sisa bagi bilangan positif", () => {
        expect(sisabagi(15, 2)).toBe(1);
    });

    it("Luas Persegi 1", () => {
        expect(luaspersegi(4, 4)).toBe(16);
    });
    it("Luas Persegi 2", () => {
        expect(luaspersegi(5, 5)).toBe(25);
    });
    it("Luas Persegi 3", () => {
        expect(luaspersegi(7, 7)).toBe(49);
    });

    it("Luas Lingkaran 1", () => {
        expect(luaslingkaran(22/7, 7, 7)).toBe(154);
    });
    it("Luas Lingkaran 2", () => {
        expect(luaslingkaran(3.14, 10, 10)).toBe(314);
    });
    
    it("Luas Kubus 1", () => {
        expect(luaskubus(6, 10, 10)).toBe(600);
    });
    it("Luas Kubus 2", () => {
        expect(luaskubus(6, 5, 5)).toBe(150);
    });
    it("Luas Kubus 3", () => {
        expect(luaskubus(6, 7, 7)).toBe(294);
    });

    it("Volume Kubus 1", () => {
        expect(volumekubus(7, 7, 7)).toBe(343);
    });
    it("Volume Kubus 2", () => {
        expect(volumekubus(10, 10, 10)).toBe(1000);
    });
    it("Volume Kubus 3", () => {
        expect(volumekubus(5, 5, 5)).toBe(125);
    });
})