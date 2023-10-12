import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const client = createClient({
  projectId: "xah5n4so",
  dataset: "production",
  apiVersion: "2023-10-11",
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
export default client
