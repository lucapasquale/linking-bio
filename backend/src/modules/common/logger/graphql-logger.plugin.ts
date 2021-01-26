import * as jwt from 'jsonwebtoken'
import { Plugin } from '@nestjs/graphql'
import { ApolloServerPlugin, GraphQLRequestListener } from 'apollo-server-plugin-base'

import { Logger } from '.'

@Plugin()
export class GraphqlLoggingPlugin implements ApolloServerPlugin {
  constructor(private logger: Logger) {
    this.logger.setContext('GraphQL')
  }

  requestDidStart(): GraphQLRequestListener {
    const logger = this.logger
    const getUserToken = this.getUserToken

    const now = Date.now()

    return {
      didResolveOperation({ context, request: { query, operationName } }) {
        if (operationName === 'IntrospectionQuery') {
          return
        }

        logger.log({
          msg: 'GraphQL Request',
          query: operationName || query,
          userId: getUserToken(context),
        })
      },

      willSendResponse({ context, response, request: { query, operationName } }) {
        if (operationName === 'IntrospectionQuery') {
          return
        }

        if (response.errors && response.errors.length) {
          logger.error({
            msg: 'GraphQL Error',
            query: operationName || query,
            errors: response.errors,
            executionTime: Date.now() - now,
            userId: getUserToken(context),
          })
          return
        }

        logger.log({
          msg: 'GraphQL Response',
          query: operationName || query,
          executionTime: Date.now() - now,
          userId: getUserToken(context),
        })
      },
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private getUserToken(context: Record<string, any>) {
    try {
      const authHeader: string = context?.req?.headers?.authorization
      if (!authHeader) {
        return null
      }

      const [, token] = authHeader.split('Bearer ')
      const payload = jwt.decode(token)

      return payload?.sub
    } catch {
      return null
    }
  }
}
