export default defineEventHandler(async(event) => {
    const requestBody = await readBody(event);
    const db = useDatabase("contacts");

    const contacts = await db.sql`SELECT * FROM contacts WHERE Name LIKE ${'%' + requestBody.term + '%'}`;
    if(contacts){
        return contacts.rows;
    } else {
        return false;
    }
    
  })