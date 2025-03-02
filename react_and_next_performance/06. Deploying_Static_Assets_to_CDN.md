# Deploying Static Assets to a CDN

## Step 1: Choose a CDN Provider
Select a CDN provider that suits your needs. Some popular CDN providers include:
- Amazon CloudFront
- Google Cloud CDN
- Azure CDN
- Cloudflare
- Fastly

## Step 2: Prepare Your Static Assets
Ensure your static assets (images, stylesheets, scripts, etc.) are organized in a directory, typically the `public` directory for a Next.js application.

### Example Directory Structure
```
my-next-app/
├── public/
│   ├── images/
│   │   └── logo.png
│   └── styles/
│       └── main.css
├── pages/
│   └── index.js
└── next.config.js
```

## Step 3: Upload Static Assets to the CDN
Most CDN providers offer various methods to upload your static assets, such as web interfaces, CLI tools, or APIs. Below are examples for a few popular CDN providers:

### Amazon CloudFront
1. **Create an S3 Bucket:** Create an Amazon S3 bucket to store your static assets.
2. **Upload Files:** Upload your files to the S3 bucket via the AWS Management Console, AWS CLI, or SDKs.
3. **Create a CloudFront Distribution:** Create a CloudFront distribution and configure it to use your S3 bucket as the origin.

### Google Cloud CDN
1. **Create a Cloud Storage Bucket:** Create a Google Cloud Storage bucket to store your static assets.
2. **Upload Files:** Upload your files to the Cloud Storage bucket using the Google Cloud Console, `gsutil`, or APIs.
3. **Create a Cloud CDN:** Enable Cloud CDN and configure it to use your Cloud Storage bucket as the origin.

### Azure CDN
1. **Create a Storage Account:** Create an Azure Storage account to store your static assets.
2. **Upload Files:** Upload your files to the Azure Storage account using the Azure Portal, Azure CLI, or SDKs.
3. **Create a CDN Endpoint:** Create an Azure CDN endpoint and configure it to use your Storage account as the origin.

### Cloudflare
1. **Create a Cloudflare Account:** Sign up for a Cloudflare account.
2. **Add a Site:** Add your site to Cloudflare and update your DNS settings.
3. **Upload Files:** Use Cloudflare Workers or Cloudflare Pages to deploy your static assets.

## Step 4: Configure Your Application to Use the CDN

### Next.js Configuration
Update your `next.config.js` file to set the asset prefix to the CDN URL.

```javascript name=next.config.js
module.exports = {
  assetPrefix: 'https://cdn.example.com',
};
```

### Environment Variables
Use environment variables to manage different asset prefixes for different environments (e.g., development, staging, production).

```javascript name=next.config.js
module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.example.com' : '',
};
```

## Step 5: Reference Static Assets in Your Application
Reference your static assets in your application as usual. Next.js will automatically use the CDN URL for these assets.

### Example Usage in a Component
```jsx name=pages/index.js
import Image from 'next/image';

const HomePage = () => (
  <div>
    <h1>Welcome to My Next.js App</h1>
    <Image src="/images/logo.png" alt="Logo" width={200} height={100} />
    <link rel="stylesheet" href="/styles/main.css" />
  </div>
);

export default HomePage;
```

## Step 6: Monitor and Optimize
Monitor the performance of your assets served from the CDN and make adjustments as needed. Ensure proper caching, security settings, and performance optimization to get the best results.

By following these steps, you can effectively deploy your static assets to a CDN, leading to improved load times and better performance for your Next.js application.