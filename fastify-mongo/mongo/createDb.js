var conn = new Mongo();
var db = conn.getDB("addresses");
for (i = 0; i < 8000000; i++) {
  var id = 1000000000 + i;
  db.personAddress.insert({ _id: id, strasse: 'Strasse of '+i, plz: 'plz of '+i, ort: 'ort of '+i});
}
