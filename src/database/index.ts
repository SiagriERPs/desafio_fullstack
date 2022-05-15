import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
    console.log("database connected!")
    const newOptions = options as IOptions;
    newOptions.host = 'db_aliare'; 
    createConnection({
        ...options,
    });
});