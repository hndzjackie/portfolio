import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../../../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({
  projectId,
  dataset,
  apiVersion,
  useCdn,
})

export const urlFor = (source) => {
  return builder.image(source)
}
