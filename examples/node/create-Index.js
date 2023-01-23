const { Client } = require('@elastic/elasticsearch')

const client = new Client({node: 'http://localhost:9200'});

client.info()
  .then(response => console.log(response))
  .catch(error => console.error(error))



  const mapping = {
    properties: {
      name: { type: 'text', required: true },
      age: { type: 'integer', required: true },
      email: { type: 'text', required: true }
    }
  };


async function createIndex(){
  try {
    const index = await client.indices.create({index: 'my_index',
  body: {
    mappings: mapping
  }});
  console.log(index);
  } catch (error) {
    console.log(error);
  }
  
}


createIndex().catch(console.log)



