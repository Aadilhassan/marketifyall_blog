---
title: "API Documentation"
slug: "api"
description: "Complete guide to integrating with Marketifyall's powerful API."
category: "development"
order: 1
lastUpdated: "2024-01-15"
---

# API Documentation

The Marketifyall API allows developers to integrate social media automation capabilities into their own applications. Our RESTful API provides programmatic access to all core platform features.

## Getting Started

### Authentication
All API requests require authentication using API keys:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     https://api.marketifyall.com/v1/posts
```

### Base URL
```
https://api.marketifyall.com/v1/
```

### Rate Limiting
- **Free Plan**: 100 requests per hour
- **Pro Plan**: 1,000 requests per hour  
- **Enterprise Plan**: 10,000 requests per hour

Rate limit headers are included in all responses:
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1625097600
```

## Core Endpoints

### Posts

#### Create a Post
```http
POST /posts
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "content": "Your post content here",
  "platforms": ["instagram", "twitter", "linkedin"],
  "scheduled_at": "2024-02-01T10:00:00Z",
  "media": [
    {
      "type": "image",
      "url": "https://example.com/image.jpg"
    }
  ]
}
```

#### Get Posts
```http
GET /posts?limit=10&offset=0&status=published
Authorization: Bearer YOUR_API_KEY
```

#### Update a Post
```http
PUT /posts/{post_id}
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "content": "Updated content",
  "scheduled_at": "2024-02-01T11:00:00Z"
}
```

#### Delete a Post
```http
DELETE /posts/{post_id}
Authorization: Bearer YOUR_API_KEY
```

### Analytics

#### Get Post Analytics
```http
GET /analytics/posts/{post_id}
Authorization: Bearer YOUR_API_KEY
```

Response:
```json
{
  "post_id": "12345",
  "metrics": {
    "reach": 1500,
    "impressions": 2200,
    "engagement": 150,
    "engagement_rate": 0.068,
    "clicks": 45,
    "shares": 12,
    "comments": 8,
    "likes": 125
  },
  "platform_breakdown": {
    "instagram": {
      "reach": 800,
      "engagement": 85
    },
    "twitter": {
      "reach": 500,
      "engagement": 45
    },
    "linkedin": {
      "reach": 200,
      "engagement": 20
    }
  }
}
```

#### Get Account Analytics
```http
GET /analytics/accounts?start_date=2024-01-01&end_date=2024-01-31
Authorization: Bearer YOUR_API_KEY
```

### Accounts

#### Connect Social Account
```http
POST /accounts
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "platform": "instagram",
  "access_token": "platform_access_token",
  "account_id": "platform_account_id"
}
```

#### Get Connected Accounts
```http
GET /accounts
Authorization: Bearer YOUR_API_KEY
```

#### Disconnect Account
```http
DELETE /accounts/{account_id}
Authorization: Bearer YOUR_API_KEY
```

## Media Management

### Upload Media
```http
POST /media
Content-Type: multipart/form-data
Authorization: Bearer YOUR_API_KEY

{
  "file": (binary data),
  "alt_text": "Description of the image"
}
```

Response:
```json
{
  "id": "media_12345",
  "url": "https://cdn.marketifyall.com/media/12345.jpg",
  "type": "image",
  "size": 1024000,
  "dimensions": {
    "width": 1080,
    "height": 1080
  }
}
```

### Get Media Library
```http
GET /media?type=image&limit=20&offset=0
Authorization: Bearer YOUR_API_KEY
```

## Automation Rules

### Create Automation Rule
```http
POST /automation/rules
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "name": "Auto-thank new followers",
  "trigger": {
    "event": "new_follower",
    "platform": "instagram"
  },
  "action": {
    "type": "send_message",
    "template": "Thank you for following us! 🎉"
  },
  "active": true
}
```

### Get Automation Rules
```http
GET /automation/rules
Authorization: Bearer YOUR_API_KEY
```

### Update Automation Rule
```http
PUT /automation/rules/{rule_id}
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "active": false
}
```

## Webhooks

### Setting Up Webhooks
Register webhook endpoints to receive real-time notifications:

```http
POST /webhooks
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "url": "https://yourapp.com/webhooks/marketifyall",
  "events": ["post.published", "post.failed", "engagement.threshold"],
  "secret": "your_webhook_secret"
}
```

### Webhook Events
- `post.published` - Post successfully published
- `post.failed` - Post failed to publish
- `post.scheduled` - Post scheduled successfully
- `engagement.threshold` - Engagement threshold reached
- `new.follower` - New follower gained
- `mention.received` - Brand mention detected

### Webhook Payload Example
```json
{
  "event": "post.published",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "post_id": "12345",
    "platform": "instagram",
    "account_id": "account_789",
    "published_at": "2024-01-15T10:30:00Z"
  },
  "signature": "sha256=..."
}
```

## Error Handling

### HTTP Status Codes
- `200 OK` - Request successful
- `201 Created` - Resource created successfully
- `400 Bad Request` - Invalid request parameters
- `401 Unauthorized` - Invalid or missing API key
- `403 Forbidden` - Access denied
- `404 Not Found` - Resource not found
- `429 Too Many Requests` - Rate limit exceeded
- `500 Internal Server Error` - Server error

### Error Response Format
```json
{
  "error": {
    "code": "INVALID_PARAMETERS",
    "message": "The request parameters are invalid",
    "details": {
      "field": "scheduled_at",
      "issue": "Date must be in the future"
    }
  }
}
```

## SDKs and Libraries

### Official SDKs
- **Python**: `pip install marketifyall`
- **Node.js**: `npm install marketifyall`
- **PHP**: `composer require marketifyall/sdk`
- **Ruby**: `gem install marketifyall`

### Python Example
```python
from marketifyall import Client

client = Client(api_key='your_api_key')

# Create a post
post = client.posts.create(
    content="Hello from the API!",
    platforms=["instagram", "twitter"],
    scheduled_at="2024-02-01T10:00:00Z"
)

# Get analytics
analytics = client.analytics.posts.get(post.id)
print(f"Engagement rate: {analytics.engagement_rate}")
```

### Node.js Example
```javascript
const Marketifyall = require('marketifyall');

const client = new Marketifyall({
  apiKey: 'your_api_key'
});

// Create a post
const post = await client.posts.create({
  content: "Hello from the API!",
  platforms: ["instagram", "twitter"],
  scheduledAt: "2024-02-01T10:00:00Z"
});

// Get analytics
const analytics = await client.analytics.posts.get(post.id);
console.log(`Engagement rate: ${analytics.engagementRate}`);
```

## Advanced Features

### Batch Operations
Process multiple requests efficiently:

```http
POST /batch
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "requests": [
    {
      "method": "POST",
      "path": "/posts",
      "body": {
        "content": "Post 1",
        "platforms": ["instagram"]
      }
    },
    {
      "method": "POST", 
      "path": "/posts",
      "body": {
        "content": "Post 2",
        "platforms": ["twitter"]
      }
    }
  ]
}
```

### Pagination
Large datasets are paginated:

```http
GET /posts?limit=50&offset=100
Authorization: Bearer YOUR_API_KEY
```

Response includes pagination metadata:
```json
{
  "data": [...],
  "pagination": {
    "limit": 50,
    "offset": 100,
    "total": 1500,
    "has_more": true
  }
}
```

### Filtering and Sorting
```http
GET /posts?status=published&platform=instagram&sort=-created_at
Authorization: Bearer YOUR_API_KEY
```

Available filters:
- `status`: draft, scheduled, published, failed
- `platform`: instagram, twitter, linkedin, facebook
- `created_after`: ISO 8601 date
- `created_before`: ISO 8601 date

## Best Practices

### API Key Security
- Never expose API keys in client-side code
- Use environment variables for API keys
- Rotate API keys regularly
- Use different keys for different environments

### Rate Limit Management
- Implement exponential backoff for retries
- Cache responses when possible
- Use webhooks instead of polling
- Monitor rate limit headers

### Error Handling
- Always check HTTP status codes
- Implement proper error handling
- Log errors for debugging
- Provide meaningful error messages to users

### Performance Optimization
- Use batch operations for multiple requests
- Implement pagination for large datasets
- Cache frequently accessed data
- Use appropriate HTTP methods

## Testing

### Sandbox Environment
Test your integration in our sandbox:
```
https://api-sandbox.marketifyall.com/v1/
```

Sandbox features:
- Separate test environment
- Mock social media platforms
- Test data isolation
- No rate limiting

### API Testing Tools
- **Postman Collection**: Import our collection for easy testing
- **OpenAPI Spec**: Use our OpenAPI specification
- **Mock Server**: Test against our mock endpoints

## Support and Resources

### Documentation
- Interactive API explorer
- Code examples in multiple languages
- Video tutorials
- Best practices guides

### Community
- Developer forum
- GitHub repositories
- Stack Overflow tags
- Discord community

### Support Channels
- Email: api-support@marketifyall.com
- Live chat: Available 24/7
- Phone support: Enterprise customers only
- Emergency hotline: Critical issues only

Ready to start building? Check out our [Quick Start Guide](/docs/api-quickstart) or explore our [Code Examples](/docs/api-examples).
