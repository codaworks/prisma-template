import prisma from 'server/prisma'

export default async function Home() {
    const result = await prisma.user.findFirst()
    return <pre>{JSON.stringify(result, undefined, 4)}</pre>
}
