# **PostReview.org-coming-soon**

A coming-soon page for PostReview. The app is build via
[Blitz.js](https://github.com/blitz-js/blitz).

## Development

1. Clone the repository
2. Setup the environment variables.

Ensure the `.env.local` file has the following environment variables:

```
DATABASE_URL=postgresql://<YOUR_DB_USERNAME>@localhost:5432/postreview-coming-soon
POSTMARK_TOKEN=XXXXXXXX
```

3. Run your app in the development mode.

```
blitz dev
```
