export default function Home() {
  return <></>
}

export async function getServerSideProps({ req }) {
  const domain = req.headers.host;

  const res = await fetch(`http://${domain}/api/api`)
  const json = await res.json()
  
  console.log(json)
  return {
    redirect: {
      destination: `${process.env.REDIRECT_URL}${req.url}`,
      permanent: false,
    },
  }
}