'use strict';

const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health Check Endpoint - para monitoramento do Render
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    service: 'kubovibe-cloud-ai'
  });
});

// Status Endpoint
app.get('/status', (req, res) => {
  res.status(200).json({
    message: 'Kubo AI service is running',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Chat Agent Endpoint
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Placeholder para lógica futura do KuboChatAgent
  res.status(200).json({
    response: 'Chat endpoint ready',
    message: message,
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'Kubo Vibe Cloud AI',
    description: 'Cloud computing platform with integrated AI',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      status: '/status',
      chat: '/api/chat (POST)'
    }
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Kubo AI Server is running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`📈 Status: http://localhost:${PORT}/status`);
});

module.exports = app;
