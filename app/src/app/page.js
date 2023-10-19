export default async function Home() {
    const result = await fetch(process.env.BACKEND_ROOT + '/user/8')
    return <pre>{JSON.stringify(await result.json(), undefined, 4)}</pre>
}
