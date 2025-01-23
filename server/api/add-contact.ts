export default defineEventHandler(async(event) => {
  const requestBody = await readBody(event);

  const db = useDatabase("contacts");

  await db.sql`CREATE TABLE IF NOT EXISTS contacts ("ID" INTEGER PRIMARY KEY AUTOINCREMENT, "Name" TEXT, "Phone" TEXT, "Email" TEXT)`;
  const result  = await db.sql`INSERT INTO contacts (Name, Phone, Email) VALUES (${requestBody.name}, ${requestBody.phone}, ${requestBody.email})`;
})