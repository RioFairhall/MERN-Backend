# MERN Backend Boilerplate

### Getting Started
```bash
git clone https://github.com/RioFairhall/MERN-Backend.git
cd mern-backend
npm install
cp .env.example .env
# Fill in MONGO_URI and JWT_SECRET
npm run dev


###Routes
GET /api/health → API status

POST /api/auth/register → Register

POST /api/auth/login → Login

GET /api/items → Get all items

POST /api/items → Create item (Auth required)