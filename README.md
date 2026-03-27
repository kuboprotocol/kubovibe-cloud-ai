# Setup Instructions

To set up the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/kuboprotocol/kubovibe-cloud-ai.git
   cd kubovibe-cloud-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables by creating a `.env` file based on the `.env.example`.

4. Run the application:
   ```bash
   npm start
   ```

# Docker-Compose Configuration

To run the application using Docker, you can use the following docker-compose configuration:

```yaml
version: '3'
services:
  app:
    image: kubovibe-cloud-ai
    restart: always
    build:
      context: .
    ports:
      - '3000:3000'
    volumes:
      - .:/app
    environment:
      - NODE_ENV=production

  db:
    image: mongo
    restart: always
    ports:
      - '27017:27017'
```

# MVP/Game Creator Details

The MVP (Minimum Viable Product) includes a basic game creation interface where users can custom build their games. 
Users can set game parameters, create characters, and design levels within an intuitive UI.