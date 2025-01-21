export default defineEventHandler(async(event) => {
    const requestBody = await readBody(event);
    const db = useDatabase("contacts");
    
    await db.sql`DELETE FROM contacts WHERE ID=${requestBody.id}`;
  })