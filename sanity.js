import { SanityClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const client = new SanityClient({
  projectId: "xah5n4so",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
  token:
    "skqnI6iJaKk4Yi1cR95Xe8K8LkTRDtaUXdeHRELgP1iPcpqQ9OMlyTmfFUNmEvdxgvIbBAGFPWV89NKMnowwq0TGch6xtmmZkDkFIia33YdeLNrshjvJNjfE1hGHI40bwviytx3chtOvLncs6puqd1KUvh9NdEk3l21vLPHJ9zS2vDxZxcNp",
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
export default client
