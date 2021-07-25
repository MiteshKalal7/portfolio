import App from 'next/app'
import Header from './../components/Header'
import Footer from './../components/Footer'
import { getServicesMenu } from '../services'
class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      result: [],
    }
  }

  componentDidMount() {
    // alert('mounted')
    getServicesMenu()
      .then((res) => {
        // alert(JSON.stringify(res))
        this.setState({
          result: res.result,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const { Component, pageProps } = this.props
    // console.log(this.state.result)
    // console.log('this.props')
    // console.log(this.props.data)
    return (
      <>
        {/* <Header servicesProps={this.state.result} /> */}

        <Component {...pageProps} />
        <Footer />
      </>
    )
  }
}

// export async function getStaticProps(context) {
//   return {
//     props: {
//       context,
//       data: 'i am new prop',
//     },
//   }
// }

export default MyApp
