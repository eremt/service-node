import swaggerJsDoc from 'swagger-jsdoc'

const title = process.env.npm_package_name!
const version = process.env.npm_package_version!

const swaggerSpec = swaggerJsDoc({
  definition: {
    openapi: '3.1.0',
    info: {
      title,
      version,
      description: `Documentation for ${title} API.`,
      contact: {
        name: 'Github',
        url: 'https://github.com/eremt/service-node',
      },
      license: {
        name: 'MIT',
        url: 'https://mit-license.org/',
      },
    },
    basePath: '/',
  },
  apis: ['./src/controllers/*.ts'],
})

export default swaggerSpec
