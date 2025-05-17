## 🌐 API Documentation

The backend exposes a RESTful API using Express and MySQL. It allows access to customer records, water usage data, and billing details.

### 📄 GET /customers

**Description:** Get all customer records.

**Method:** `GET`

**Sample Response:**
```json
[
  {
    "id": 1,
    "name": "Juan Dela Cruz",
    "address": "Purok 1",
    "contact": "09123456789"
  }
]
````

---

### 📊 GET /usage

**Description:** Get water usage per customer.

**Method:** `GET`

**Sample Response:**

```json
[
  {
    "customer_id": 1,
    "month": "2025-04",
    "usage_cubic_m": 25.5
  }
]
```

---

### 💸 GET /billing

**Description:** Get billing data for all customers.

**Method:** `GET`

**Sample Response:**

```json
[
  {
    "customer_id": 1,
    "month": "2025-04",
    "amount_due": 350.00,
    "status": "Paid"
  }
]
```

---

### ➕ POST /customers

**Description:** Add a new customer.

**Method:** `POST`

**Request Body:**

```json
{
  "name": "Maria Clara",
  "address": "Purok 2",
  "contact": "09987654321"
}
```

**Sample Response:**

```json
{
  "message": "Customer added successfully"
}
```

---

### 🗑 DELETE /customers/\:id

**Description:** Delete a customer by ID.

**Method:** `DELETE`

**Sample Response:**

```json
{
  "message": "Customer deleted successfully"
}
```
