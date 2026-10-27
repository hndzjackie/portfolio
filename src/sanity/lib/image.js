import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../../../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source) => {
  if (
    !source ||
    !source.asset ||
    (typeof source.asset === 'object' && !source.asset._ref)
  ) {
    return {
      url: () => '',
    }
  }

  try {
    const img = builder.image(source)
    return {
      ...img,
      url: () => {
        try {
          return img.url() || ''
        } catch {
          return ''
        }
      },
    }
  } catch {
    return {
      url: () => '',
    }
  }
}
