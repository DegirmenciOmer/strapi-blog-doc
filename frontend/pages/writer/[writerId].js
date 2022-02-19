// import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import NextImage from "../../components/image"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"

const Writer = ({writer, writers}) => {
  const imageUrl = getStrapiMedia(writer.attributes.image)

  const seo = {
    metaTitle: writer.attributes.title,
    metaDescription: writer.attributes.description,
    shareImage: writer.attributes.image,
    writer: true,
  }


  return (
    <Layout writers={writers.data}>
      <Seo seo={seo} />
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1>{writer.attributes.title}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          {/* <ReactMarkdown
            source={writer.attributes.content}
            escapeHtml={false}
          /> */}
<div>{writer.attributes.content}</div>

          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {writer.attributes.author.picture && (
                <NextImage image={writer.attributes.author.data.attributes.picture} />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {writer.attributes.author.data.attributes.name}
                
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">
                  {writer.attributes.published_at}
                </Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths(props) {
  const writersRes = await fetchAPI("/writers")

  console.log({props, data: writersRes.data});

  return {
    paths: writersRes.data.map((writer) => ({
      params: {
        writerId: writer.id,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  console.error(params)
  const writersRes = await fetchAPI(`/writers/${params.writerId}?populate=picture`
  , {
    // filters: {
    //   slug: params.slug,
      
    // },
    // populate: "*",
  }
  )

  return {
    props: { writer: writersRes.data[0], writers: writersRes },
    revalidate: 1,
  }
}







export default Writer
