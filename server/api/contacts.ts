export default defineEventHandler(async(event) => {
    const db = useDatabase("contacts");
    await db.sql`CREATE TABLE IF NOT EXISTS contacts ("ID" INTEGER PRIMARY KEY AUTOINCREMENT, "Name" TEXT, "Phone" TEXT, "Email" TEXT)`;
    
    const contacts = await db.sql`SELECT * FROM contacts`;
    if(contacts){
      return contacts.rows
    }
  })