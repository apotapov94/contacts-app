export default defineEventHandler(async(event) => {
    const requestBody = await readBody(event);
    const db = useDatabase("contacts");
    await db.sql`UPDATE contacts SET Name=${requestBody.data.name}, Phone=${requestBody.data.phone}, Email=${requestBody.data.email} WHERE ID=${requestBody.id}`;
  })