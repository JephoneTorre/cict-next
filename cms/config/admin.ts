// Function to generate preview pathname based on content type and document
const getPreviewPathname = (uid, { locale, document }): string => {
  const { slug, documentId } = document

  // Handle different content types with their specific URL patterns
  switch (uid) {
    case 'api::post.post': {
      if (!documentId) {
        return '/' // Fallback to homepage if no documentId
      }
      return `/${documentId}` // Individual blog post page
    }
    default: {
      return null
    }
  }
}

export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
})
