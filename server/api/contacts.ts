export default defineEventHandler(async(event) => {
    const db = useDatabase("contacts");
    const contacts = await db.sql`SELECT * FROM contacts`;
    return contacts.rows
  })