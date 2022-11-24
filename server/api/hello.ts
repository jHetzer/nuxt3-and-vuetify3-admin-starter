import data from '~/assests/data/hello.json'

export default defineEventHandler((event) => {
  // eslint-disable-next-line no-console
  console.log(event.node.req.url)
  return data
})
