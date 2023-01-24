Mapping

Elasticsearch mapping refers to the process of defining how fields in documents should be indexed and stored in Elasticsearch. 

This includes:
- List item setting field data types, 
- Defining properties such as whether a field should be searchable or not
- Setting up index-time analyzers for full-text search. 
- Mapping also allows for nested fields and parent-child relationships to be defined within documents.



**Data for which we want to create mapping**
```
{
  "name": "jackpotjoy",
  "description": "PlayJackpot Service",
  "environment": [
    "production",
    "staging"
  ],
  "isActive": true,
  "date": "2022-10-12",
  "datetime": "2022-10-12 14:00",
  "gameInfo": {
    "name": "test"
  },
  "comments": [
    {
      "name": "test"
    }
  ]
}
```

**Curl to create mapping**
```
curl -XPUT 'http://localhost:9200/myindex' -H 'Content-Type: application/json' -d '{
    "mappings": {
        "properties": {
            "name": { "type": "keyword" },
            "description": { "type": "text" },
            "environment": {
                "type": "keyword"
            },
            "isActive": { "type": "boolean" },
            "date": { "type": "date" },
            "datetime": { "type": "date" },
            "gameInfo": {
                "type": "object",
                "properties": {
                  "name": { "type": "keyword" }
                }
            },
            "comments": {
              "type": "nested",
              "properties": {
                "name": { "type": "keyword" }
              }
            }
        }
    }
}'
```

**Javascript equivalent code** 

```
const mapping = {
                    name: "jackpotjoy",
                    description: "PlayJackpot Service",
                    environment: [
                      "production",
                      "staging"
                    ],
                    isActive: true,
                    date: "2022-10-12",
                    datetime: "2022-10-12 14:00",
                    gameInfo: {
                      name: "test"
                    },
                    comments: [
                      {
                        name: "test"
                      }
                    ]
            };


async function createIndex(){
  try {
    const index = await client.indices.create({index: 'myindex',
  body: {
    mappings: schema
  }});
  console.log(index);
  } catch (error) {
    console.log(error);
  }
  
}

```

