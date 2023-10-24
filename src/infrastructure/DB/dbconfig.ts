import { Pool } from 'pg';

export default new Pool({
    max: 20,
    connectionString: 'postgres://user:root@db:5432/root',
    idleTimeoutMillis: 30000
});