var conn = new Mongo();
var db = conn.getDB("addresses");
for (i = 0; i < 8000000; i += 100) {
    var id = 1000000000 + i;
    db.personAddress.insertMany([
        {_id: id, strasse: 'Strasse of ' + id, plz: 'plz of ' + id, ort: 'ort of ' + id},
        {_id: (id + 1), strasse: 'Strasse of ' + (id + 1), plz: 'plz of ' + (id + 1), ort: 'ort of ' + (id + 1)},
        {_id: (id + 2), strasse: 'Strasse of ' + (id + 2), plz: 'plz of ' + (id + 2), ort: 'ort of ' + (id + 2)},
        {_id: (id + 3), strasse: 'Strasse of ' + (id + 3), plz: 'plz of ' + (id + 3), ort: 'ort of ' + (id + 3)},
        {_id: (id + 4), strasse: 'Strasse of ' + (id + 4), plz: 'plz of ' + (id + 4), ort: 'ort of ' + (id + 4)},
        {_id: (id + 5), strasse: 'Strasse of ' + (id + 5), plz: 'plz of ' + (id + 5), ort: 'ort of ' + (id + 5)},
        {_id: (id + 6), strasse: 'Strasse of ' + (id + 6), plz: 'plz of ' + (id + 6), ort: 'ort of ' + (id + 6)},
        {_id: (id + 7), strasse: 'Strasse of ' + (id + 7), plz: 'plz of ' + (id + 7), ort: 'ort of ' + (id + 7)},
        {_id: (id + 8), strasse: 'Strasse of ' + (id + 8), plz: 'plz of ' + (id + 8), ort: 'ort of ' + (id + 8)},
        {_id: (id + 9), strasse: 'Strasse of ' + (id + 9), plz: 'plz of ' + (id + 9), ort: 'ort of ' + (id + 9)},
        {_id: (id + 10), strasse: 'Strasse of ' + (id + 10), plz: 'plz of ' + (id + 10), ort: 'ort of ' + (id + 10)},
        {_id: (id + 11), strasse: 'Strasse of ' + (id + 11), plz: 'plz of ' + (id + 11), ort: 'ort of ' + (id + 11)},
        {_id: (id + 12), strasse: 'Strasse of ' + (id + 12), plz: 'plz of ' + (id + 12), ort: 'ort of ' + (id + 12)},
        {_id: (id + 13), strasse: 'Strasse of ' + (id + 13), plz: 'plz of ' + (id + 13), ort: 'ort of ' + (id + 13)},
        {_id: (id + 14), strasse: 'Strasse of ' + (id + 14), plz: 'plz of ' + (id + 14), ort: 'ort of ' + (id + 14)},
        {_id: (id + 15), strasse: 'Strasse of ' + (id + 15), plz: 'plz of ' + (id + 15), ort: 'ort of ' + (id + 15)},
        {_id: (id + 16), strasse: 'Strasse of ' + (id + 16), plz: 'plz of ' + (id + 16), ort: 'ort of ' + (id + 16)},
        {_id: (id + 17), strasse: 'Strasse of ' + (id + 17), plz: 'plz of ' + (id + 17), ort: 'ort of ' + (id + 17)},
        {_id: (id + 18), strasse: 'Strasse of ' + (id + 18), plz: 'plz of ' + (id + 18), ort: 'ort of ' + (id + 18)},
        {_id: (id + 19), strasse: 'Strasse of ' + (id + 19), plz: 'plz of ' + (id + 19), ort: 'ort of ' + (id + 19)},
        {_id: (id + 20), strasse: 'Strasse of ' + (id + 20), plz: 'plz of ' + (id + 20), ort: 'ort of ' + (id + 20)},
        {_id: (id + 31), strasse: 'Strasse of ' + (id + 31), plz: 'plz of ' + (id + 31), ort: 'ort of ' + (id + 31)},
        {_id: (id + 32), strasse: 'Strasse of ' + (id + 32), plz: 'plz of ' + (id + 32), ort: 'ort of ' + (id + 32)},
        {_id: (id + 33), strasse: 'Strasse of ' + (id + 33), plz: 'plz of ' + (id + 33), ort: 'ort of ' + (id + 33)},
        {_id: (id + 34), strasse: 'Strasse of ' + (id + 34), plz: 'plz of ' + (id + 34), ort: 'ort of ' + (id + 34)},
        {_id: (id + 35), strasse: 'Strasse of ' + (id + 35), plz: 'plz of ' + (id + 35), ort: 'ort of ' + (id + 35)},
        {_id: (id + 36), strasse: 'Strasse of ' + (id + 36), plz: 'plz of ' + (id + 36), ort: 'ort of ' + (id + 36)},
        {_id: (id + 37), strasse: 'Strasse of ' + (id + 37), plz: 'plz of ' + (id + 37), ort: 'ort of ' + (id + 37)},
        {_id: (id + 38), strasse: 'Strasse of ' + (id + 38), plz: 'plz of ' + (id + 38), ort: 'ort of ' + (id + 38)},
        {_id: (id + 39), strasse: 'Strasse of ' + (id + 39), plz: 'plz of ' + (id + 39), ort: 'ort of ' + (id + 39)},
        {_id: (id + 40), strasse: 'Strasse of ' + (id + 40), plz: 'plz of ' + (id + 40), ort: 'ort of ' + (id + 40)},
        {_id: (id + 41), strasse: 'Strasse of ' + (id + 41), plz: 'plz of ' + (id + 41), ort: 'ort of ' + (id + 41)},
        {_id: (id + 42), strasse: 'Strasse of ' + (id + 42), plz: 'plz of ' + (id + 42), ort: 'ort of ' + (id + 42)},
        {_id: (id + 43), strasse: 'Strasse of ' + (id + 43), plz: 'plz of ' + (id + 43), ort: 'ort of ' + (id + 43)},
        {_id: (id + 44), strasse: 'Strasse of ' + (id + 44), plz: 'plz of ' + (id + 44), ort: 'ort of ' + (id + 44)},
        {_id: (id + 45), strasse: 'Strasse of ' + (id + 45), plz: 'plz of ' + (id + 45), ort: 'ort of ' + (id + 45)},
        {_id: (id + 46), strasse: 'Strasse of ' + (id + 46), plz: 'plz of ' + (id + 46), ort: 'ort of ' + (id + 46)},
        {_id: (id + 47), strasse: 'Strasse of ' + (id + 47), plz: 'plz of ' + (id + 47), ort: 'ort of ' + (id + 47)},
        {_id: (id + 48), strasse: 'Strasse of ' + (id + 48), plz: 'plz of ' + (id + 48), ort: 'ort of ' + (id + 48)},
        {_id: (id + 49), strasse: 'Strasse of ' + (id + 49), plz: 'plz of ' + (id + 49), ort: 'ort of ' + (id + 49)},
        {_id: (id + 40), strasse: 'Strasse of ' + (id + 40), plz: 'plz of ' + (id + 40), ort: 'ort of ' + (id + 50)},
        {_id: (id + 41), strasse: 'Strasse of ' + (id + 41), plz: 'plz of ' + (id + 41), ort: 'ort of ' + (id + 51)},
        {_id: (id + 42), strasse: 'Strasse of ' + (id + 42), plz: 'plz of ' + (id + 42), ort: 'ort of ' + (id + 52)},
        {_id: (id + 43), strasse: 'Strasse of ' + (id + 43), plz: 'plz of ' + (id + 43), ort: 'ort of ' + (id + 53)},
        {_id: (id + 44), strasse: 'Strasse of ' + (id + 44), plz: 'plz of ' + (id + 44), ort: 'ort of ' + (id + 54)},
        {_id: (id + 45), strasse: 'Strasse of ' + (id + 45), plz: 'plz of ' + (id + 45), ort: 'ort of ' + (id + 55)},
        {_id: (id + 46), strasse: 'Strasse of ' + (id + 46), plz: 'plz of ' + (id + 46), ort: 'ort of ' + (id + 56)},
        {_id: (id + 47), strasse: 'Strasse of ' + (id + 47), plz: 'plz of ' + (id + 47), ort: 'ort of ' + (id + 57)},
        {_id: (id + 48), strasse: 'Strasse of ' + (id + 48), plz: 'plz of ' + (id + 48), ort: 'ort of ' + (id + 58)},
        {_id: (id + 49), strasse: 'Strasse of ' + (id + 49), plz: 'plz of ' + (id + 49), ort: 'ort of ' + (id + 59)},
        {_id: (id + 40), strasse: 'Strasse of ' + (id + 40), plz: 'plz of ' + (id + 40), ort: 'ort of ' + (id + 60)},
        {_id: (id + 41), strasse: 'Strasse of ' + (id + 41), plz: 'plz of ' + (id + 41), ort: 'ort of ' + (id + 61)},
        {_id: (id + 42), strasse: 'Strasse of ' + (id + 42), plz: 'plz of ' + (id + 42), ort: 'ort of ' + (id + 62)},
        {_id: (id + 43), strasse: 'Strasse of ' + (id + 43), plz: 'plz of ' + (id + 43), ort: 'ort of ' + (id + 63)},
        {_id: (id + 44), strasse: 'Strasse of ' + (id + 44), plz: 'plz of ' + (id + 44), ort: 'ort of ' + (id + 64)},
        {_id: (id + 45), strasse: 'Strasse of ' + (id + 45), plz: 'plz of ' + (id + 45), ort: 'ort of ' + (id + 65)},
        {_id: (id + 46), strasse: 'Strasse of ' + (id + 46), plz: 'plz of ' + (id + 46), ort: 'ort of ' + (id + 66)},
        {_id: (id + 47), strasse: 'Strasse of ' + (id + 47), plz: 'plz of ' + (id + 47), ort: 'ort of ' + (id + 67)},
        {_id: (id + 48), strasse: 'Strasse of ' + (id + 48), plz: 'plz of ' + (id + 48), ort: 'ort of ' + (id + 68)},
        {_id: (id + 49), strasse: 'Strasse of ' + (id + 49), plz: 'plz of ' + (id + 49), ort: 'ort of ' + (id + 69)},
        {_id: (id + 40), strasse: 'Strasse of ' + (id + 40), plz: 'plz of ' + (id + 40), ort: 'ort of ' + (id + 60)},
        {_id: (id + 41), strasse: 'Strasse of ' + (id + 41), plz: 'plz of ' + (id + 41), ort: 'ort of ' + (id + 71)},
        {_id: (id + 42), strasse: 'Strasse of ' + (id + 42), plz: 'plz of ' + (id + 42), ort: 'ort of ' + (id + 72)},
        {_id: (id + 43), strasse: 'Strasse of ' + (id + 43), plz: 'plz of ' + (id + 43), ort: 'ort of ' + (id + 73)},
        {_id: (id + 44), strasse: 'Strasse of ' + (id + 44), plz: 'plz of ' + (id + 44), ort: 'ort of ' + (id + 74)},
        {_id: (id + 45), strasse: 'Strasse of ' + (id + 45), plz: 'plz of ' + (id + 45), ort: 'ort of ' + (id + 75)},
        {_id: (id + 46), strasse: 'Strasse of ' + (id + 46), plz: 'plz of ' + (id + 46), ort: 'ort of ' + (id + 76)},
        {_id: (id + 47), strasse: 'Strasse of ' + (id + 47), plz: 'plz of ' + (id + 47), ort: 'ort of ' + (id + 77)},
        {_id: (id + 48), strasse: 'Strasse of ' + (id + 48), plz: 'plz of ' + (id + 48), ort: 'ort of ' + (id + 78)},
        {_id: (id + 49), strasse: 'Strasse of ' + (id + 49), plz: 'plz of ' + (id + 49), ort: 'ort of ' + (id + 79)},
        {_id: (id + 40), strasse: 'Strasse of ' + (id + 40), plz: 'plz of ' + (id + 40), ort: 'ort of ' + (id + 80)},
        {_id: (id + 41), strasse: 'Strasse of ' + (id + 41), plz: 'plz of ' + (id + 41), ort: 'ort of ' + (id + 81)},
        {_id: (id + 42), strasse: 'Strasse of ' + (id + 42), plz: 'plz of ' + (id + 42), ort: 'ort of ' + (id + 82)},
        {_id: (id + 43), strasse: 'Strasse of ' + (id + 43), plz: 'plz of ' + (id + 43), ort: 'ort of ' + (id + 83)},
        {_id: (id + 44), strasse: 'Strasse of ' + (id + 44), plz: 'plz of ' + (id + 44), ort: 'ort of ' + (id + 84)},
        {_id: (id + 45), strasse: 'Strasse of ' + (id + 45), plz: 'plz of ' + (id + 45), ort: 'ort of ' + (id + 85)},
        {_id: (id + 46), strasse: 'Strasse of ' + (id + 46), plz: 'plz of ' + (id + 46), ort: 'ort of ' + (id + 86)},
        {_id: (id + 47), strasse: 'Strasse of ' + (id + 47), plz: 'plz of ' + (id + 47), ort: 'ort of ' + (id + 87)},
        {_id: (id + 48), strasse: 'Strasse of ' + (id + 48), plz: 'plz of ' + (id + 48), ort: 'ort of ' + (id + 88)},
        {_id: (id + 49), strasse: 'Strasse of ' + (id + 49), plz: 'plz of ' + (id + 49), ort: 'ort of ' + (id + 89)},
        {_id: (id + 40), strasse: 'Strasse of ' + (id + 40), plz: 'plz of ' + (id + 40), ort: 'ort of ' + (id + 90)},
        {_id: (id + 41), strasse: 'Strasse of ' + (id + 41), plz: 'plz of ' + (id + 41), ort: 'ort of ' + (id + 91)},
        {_id: (id + 42), strasse: 'Strasse of ' + (id + 42), plz: 'plz of ' + (id + 42), ort: 'ort of ' + (id + 92)},
        {_id: (id + 43), strasse: 'Strasse of ' + (id + 43), plz: 'plz of ' + (id + 43), ort: 'ort of ' + (id + 93)},
        {_id: (id + 44), strasse: 'Strasse of ' + (id + 44), plz: 'plz of ' + (id + 44), ort: 'ort of ' + (id + 94)},
        {_id: (id + 45), strasse: 'Strasse of ' + (id + 45), plz: 'plz of ' + (id + 45), ort: 'ort of ' + (id + 95)},
        {_id: (id + 46), strasse: 'Strasse of ' + (id + 46), plz: 'plz of ' + (id + 46), ort: 'ort of ' + (id + 96)},
        {_id: (id + 47), strasse: 'Strasse of ' + (id + 47), plz: 'plz of ' + (id + 47), ort: 'ort of ' + (id + 97)},
        {_id: (id + 48), strasse: 'Strasse of ' + (id + 48), plz: 'plz of ' + (id + 48), ort: 'ort of ' + (id + 98)},
        {_id: (id + 49), strasse: 'Strasse of ' + (id + 49), plz: 'plz of ' + (id + 49), ort: 'ort of ' + (id + 99)}
    ]);
}
