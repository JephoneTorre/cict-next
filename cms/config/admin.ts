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

export default ({ env }) => {
  const clientUrl = env('CLIENT_URL') // Frontend application URL
  const previewSecret = env('PREVIEW_SECRET') // Secret key for preview authentication
  return {
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

    preview: {
      enabled: true,
      config: {
        allowedOrigins: env('CLIENT_URL'), // Frontend application URL (localhost:3000)
        async handler(uid, { documentId, locale, status }) {
          // Fetch the complete document from Strapi
          const document = await strapi.documents(uid).findOne({ documentId })

          // Generate the preview pathname based on content type and document
          const pathname = getPreviewPathname(uid, {
            locale,
            document,
          })

          // Disable preview if the pathname is not found
          if (!pathname) {
            return null
          }

          // Use Next.js draft mode passing it a secret key and the content-type status
          const urlSearchParams = new URLSearchParams({
            url: pathname,
            secret: previewSecret,
            status,
          })

          return `${clientUrl}/api/preview?${urlSearchParams}`
        },
      },
    },
  }
}
