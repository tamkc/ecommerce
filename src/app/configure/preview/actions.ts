'use server'

import { BASE_PRICE, PRODUCT_PRICES } from '@/config/products'
import { db } from '@/db'
import { Order } from '@prisma/client'

export const createCheckoutSession = async ({
  configId,
}: {
  configId: string
}) => {
  const configuration = await db.configuration.findUnique({
    where: { id: configId },
  })

  if (!configuration) {
    throw new Error('No such configuration found')
  }



  const { finish, material } = configuration

  let price = BASE_PRICE
  if (finish === 'textured') {
    price += PRODUCT_PRICES.finish.textured
  }
  if (material === 'polycarbonate') {
    price += PRODUCT_PRICES.material.polycarbonate
  }

  let order: Order | undefined = undefined

  const existingOrder = await db.order.findFirst({
    where: {
      configurationId: configuration.id,
    },
  })

  if (existingOrder) {
    order = existingOrder
  } else {

  }



  return
}
