import connectDB  from "./db/index.js";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('dotenv').config();


connectDB();